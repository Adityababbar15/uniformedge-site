"use client";

import { useId, useState } from "react";
import { useCart } from "./CartProvider";
import { formatRupees, type ShopItem } from "@/lib/content/shop-demo";

export function ProductCard({ item }: { item: ShopItem }) {
  const fieldId = useId();
  const { add } = useCart();
  const [size, setSize] = useState(item.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add({ sku: item.sku, name: item.name, size, price: item.price }, qty);
    setAdded(true);
    setQty(1);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg leading-snug text-navy-900">
            {item.name}
          </h3>
          <p className="mt-1 font-mono text-[11px] text-ink-500">{item.sku}</p>
        </div>
        <p className="font-display shrink-0 text-lg text-navy-900">
          {formatRupees(item.price)}
        </p>
      </div>

      {item.note && (
        <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.note}</p>
      )}

      <div className="mt-5 flex flex-1 items-end gap-3">
        <div className="flex-1">
          <label
            htmlFor={`${fieldId}-size`}
            className="mb-1.5 block text-xs font-medium text-ink-700"
          >
            Size
          </label>
          <select
            id={`${fieldId}-size`}
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full rounded-lg border border-navy-900/15 bg-white px-3 py-2 text-sm text-ink-900 focus:border-crimson-500 focus:outline-none focus:ring-2 focus:ring-crimson-500/30"
          >
            {item.sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="w-20">
          <label
            htmlFor={`${fieldId}-qty`}
            className="mb-1.5 block text-xs font-medium text-ink-700"
          >
            Qty
          </label>
          <input
            id={`${fieldId}-qty`}
            type="number"
            min={1}
            max={20}
            value={qty}
            onChange={(e) =>
              setQty(Math.min(20, Math.max(1, Number(e.target.value) || 1)))
            }
            className="w-full rounded-lg border border-navy-900/15 bg-white px-3 py-2 text-sm text-ink-900 focus:border-crimson-500 focus:outline-none focus:ring-2 focus:ring-crimson-500/30"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-4 w-full rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-ivory-50 transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500"
      >
        {added ? "Added ✓" : "Add to order"}
      </button>
      <p aria-live="polite" className="sr-only">
        {added ? `${item.name}, size ${size}, added to your order` : ""}
      </p>
    </div>
  );
}
