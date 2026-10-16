import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { CartProvider } from "@/components/shop/CartProvider";
import { ProductCard } from "@/components/shop/ProductCard";
import { CartSummary } from "@/components/shop/CartSummary";
import { SITE_URL } from "@/lib/content/company";
import {
  DEMO_CATALOGUE,
  DEMO_SCHOOL,
  SHOP_CATEGORIES,
  SHOP_IS_DEMO,
} from "@/lib/content/shop-demo";

export const metadata: Metadata = {
  title: "Shop (Prototype)",
  description:
    "Prototype uniform ordering — browse by school, choose sizes, and send the order on WhatsApp.",
  // Never index the prototype, even after the rest of the site becomes
  // indexable. Sample prices in search results would be worse than no listing.
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/shop/` },
};

export default function ShopPage() {
  return (
    <CartProvider>
      <PageHero
        eyebrow="Prototype"
        title={`${DEMO_SCHOOL} uniform`}
        description="Choose sizes and quantities, then send the order to us on WhatsApp. Nothing is charged on this page."
      />

      {SHOP_IS_DEMO && (
        <Container>
          <div
            role="note"
            className="mt-8 rounded-xl border-2 border-dashed border-crimson-500 bg-crimson-100/60 p-6"
          >
            <p className="font-display text-lg text-navy-900">
              Prototype — these are not {DEMO_SCHOOL}&apos;s prices
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-800">
              Every price on this page is a placeholder used to demonstrate how
              parent ordering would work. They are not {DEMO_SCHOOL}&apos;s
              actual prices, no stock is being tracked, and the page is not
              connected to a payment gateway. Real prices and confirmed stock
              must replace these before this page is shared with any parent.
            </p>
          </div>
        </Container>
      )}

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div>
              {SHOP_CATEGORIES.map((category) => {
                const items = DEMO_CATALOGUE.filter(
                  (i) => i.category === category,
                );
                if (items.length === 0) return null;
                return (
                  <div key={category} className="mb-12 last:mb-0">
                    <h2 className="font-display text-2xl text-navy-900">
                      {category}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {items.map((item) => (
                        <ProductCard key={item.sku} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <CartSummary />
            </aside>
          </div>
        </Container>
      </section>
    </CartProvider>
  );
}
