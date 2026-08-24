"use client";

import { useCart } from "./CartProvider";
import { formatRupees, SHOP_IS_DEMO } from "@/lib/content/shop-demo";
import { COMPANY } from "@/lib/content/company";

export function CartSummary() {
  const { lines, itemCount, total, setQty, remove, clear, whatsappHref } =
    useCart();

  if (lines.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-navy-900/20 bg-white p-8 text-center">
        <p className="font-display text-lg text-navy-900">Your order is empty</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          Add the items you need above. Nothing is charged here — the order is
          sent to us on WhatsApp to confirm stock, sizing and payment.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-xl text-navy-900">Your order</h2>
        <p className="text-sm text-ink-500">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>
      </div>

      <ul className="mt-6 divide-y divide-navy-900/10">
        {lines.map((line) => (
          <li key={line.id} className="flex flex-wrap items-center gap-4 py-4">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-navy-900">{line.name}</p>
              <p className="mt-0.5 text-xs text-ink-500">
                Size {line.size} · {formatRupees(line.price)} each
              </p>
            </div>

            <label className="flex items-center gap-2">
              <span className="sr-only">
                Quantity for {line.name}, size {line.size}
              </span>
              <input
                type="number"
                min={0}
                max={20}
                value={line.qty}
                onChange={(e) =>
                  setQty(line.id, Math.min(20, Math.max(0, Number(e.target.value) || 0)))
                }
                className="w-16 rounded-lg border border-navy-900/15 px-2 py-1.5 text-sm text-ink-900 focus:border-crimson-500 focus:outline-none"
              />
            </label>

            <p className="w-20 text-right text-sm font-medium text-navy-900">
              {formatRupees(line.price * line.qty)}
            </p>

            <button
              type="button"
              onClick={() => remove(line.id)}
              aria-label={`Remove ${line.name}, size ${line.size}`}
              className="rounded-full px-2 py-1 text-sm text-ink-500 transition-colors hover:text-crimson-600"
            >
              ×
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-baseline justify-between border-t border-navy-900/10 pt-5">
        <p className="font-display text-lg text-navy-900">
          Total{SHOP_IS_DEMO ? " (indicative)" : ""}
        </p>
        <p className="font-display text-2xl text-navy-900">
          {formatRupees(total)}
        </p>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-ink-500">
        Delivery is {COMPANY.delivery.charge}, added at confirmation. We&apos;ll confirm stock, final price and
        delivery when you send the order.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-crimson-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crimson-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500"
        >
          Send order on WhatsApp
        </a>
        <button
          type="button"
          onClick={clear}
          className="rounded-full border border-navy-900/20 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-navy-900/50"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
