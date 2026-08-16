"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { COMPANY } from "@/lib/content/company";
import { DEMO_SCHOOL, formatRupees } from "@/lib/content/shop-demo";

// Cart lives entirely client-side and persists to localStorage. That is a
// deliberate constraint of Phase 1: no backend, no session, no payment. Checkout
// composes a WhatsApp message instead of charging a card, which is how orders
// actually reach the business today.

export type CartLine = {
  /** sku + size, so the same garment in two sizes is two lines. */
  id: string;
  sku: string;
  name: string;
  size: string;
  price: number;
  qty: number;
};

type State = { lines: CartLine[] };

type Action =
  | { type: "add"; line: Omit<CartLine, "id" | "qty">; qty: number }
  | { type: "setQty"; id: string; qty: number }
  | { type: "remove"; id: string }
  | { type: "clear" }
  | { type: "hydrate"; lines: CartLine[] };

const STORAGE_KEY = "ue-cart-v1";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "hydrate":
      return { lines: action.lines };
    case "add": {
      const id = `${action.line.sku}__${action.line.size}`;
      const existing = state.lines.find((l) => l.id === id);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.id === id ? { ...l, qty: l.qty + action.qty } : l,
          ),
        };
      }
      return {
        lines: [...state.lines, { ...action.line, id, qty: action.qty }],
      };
    }
    case "setQty":
      return {
        lines: state.lines
          .map((l) => (l.id === action.id ? { ...l, qty: action.qty } : l))
          .filter((l) => l.qty > 0),
      };
    case "remove":
      return { lines: state.lines.filter((l) => l.id !== action.id) };
    case "clear":
      return { lines: [] };
  }
}

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  total: number;
  add: (line: Omit<CartLine, "id" | "qty">, qty: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  whatsappHref: string;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { lines: [] });

  // Restore on mount. Guarded so a corrupt or outdated payload cannot crash the
  // page — an unusable cart is recoverable, a white screen is not.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) dispatch({ type: "hydrate", lines: parsed });
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
    } catch {
      // Private browsing or a full quota — the cart still works for this session.
    }
  }, [state.lines]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.lines.reduce((n, l) => n + l.qty, 0);
    const total = state.lines.reduce((n, l) => n + l.qty * l.price, 0);

    const summary = state.lines
      .map((l) => `• ${l.name} — size ${l.size} × ${l.qty} (${formatRupees(l.price * l.qty)})`)
      .join("\n");

    const message = state.lines.length
      ? `Hi, I'd like to order the following for ${DEMO_SCHOOL}:\n\n${summary}\n\nTotal (indicative): ${formatRupees(total)}\n\nStudent name:\nClass:\nDelivery or collection:`
      : `Hi, I'd like to order the uniform for ${DEMO_SCHOOL}.`;

    return {
      lines: state.lines,
      itemCount,
      total,
      add: (line, qty) => dispatch({ type: "add", line, qty }),
      setQty: (id, qty) => dispatch({ type: "setQty", id, qty }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
      whatsappHref: `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`,
    };
  }, [state.lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
