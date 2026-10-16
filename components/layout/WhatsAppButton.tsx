import { COMPANY } from "@/lib/content/company";

const PREFILLED_MESSAGE = "Hi, I'd like to enquire about uniforms.";

export function WhatsAppButton() {
  const href = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UniformEdge on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(15,42,77,0.08)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-500"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.24.615 4.34 1.688 6.137L4 29l8.06-1.653A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.365l-.357-.212-4.783.981.99-4.65-.233-.373A9.78 9.78 0 0 1 5.182 15c0-5.968 4.855-10.818 10.822-10.818S26.818 9.032 26.818 15 21.97 24.818 16.004 24.818Zm5.6-8.07c-.307-.154-1.816-.897-2.098-.999-.281-.103-.486-.154-.69.153-.204.308-.792.999-.97 1.204-.179.205-.358.23-.665.077-.307-.154-1.296-.478-2.469-1.524-.913-.814-1.529-1.82-1.708-2.127-.179-.307-.019-.473.135-.626.138-.138.307-.358.46-.538.154-.18.205-.307.307-.512.103-.205.051-.384-.026-.538-.077-.153-.69-1.663-.945-2.278-.249-.598-.502-.517-.69-.527l-.588-.01c-.205 0-.538.077-.82.384-.281.307-1.074 1.05-1.074 2.56s1.1 2.968 1.253 3.173c.154.205 2.164 3.305 5.243 4.634.732.316 1.303.505 1.748.646.734.233 1.403.2 1.932.121.589-.088 1.816-.743 2.072-1.46.256-.717.256-1.332.18-1.46-.078-.129-.283-.205-.59-.359Z" />
      </svg>
    </a>
  );
}
