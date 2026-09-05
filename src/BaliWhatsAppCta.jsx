import "./BaliWhatsAppCta.css";

const WHATSAPP_NUMBER = "201010001133";
const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Tereza, I would like more information about The RESET Bali retreat, September 23-29, 2026.";

export default function BaliWhatsAppCta({
  message = DEFAULT_WHATSAPP_MESSAGE,
  ariaLabel = "Message us about The RESET Bali retreat on WhatsApp",
}) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section
      className="bali-whatsapp-cta"
      aria-labelledby="bali-whatsapp-cta-title"
    >
      <h2 id="bali-whatsapp-cta-title" className="bali-whatsapp-cta__title">
        Your Bali Journey starts here.
      </h2>
      <p className="bali-whatsapp-cta__copy">
        Message us directly for retreat details, room availability, bookings, or
        any questions you may have.
      </p>
      <a
        className="bali-whatsapp-cta__link"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        Let’s Go!
        <svg
          className="bali-whatsapp-cta__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 2a9.84 9.84 0 0 0-8.47 14.83L2 22l5.3-1.39A9.95 9.95 0 1 0 12 2Zm0 17.95a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.15.83.84-3.07-.2-.32A8.1 8.1 0 1 1 12 19.95Zm4.44-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.95-1.21a7.27 7.27 0 0 1-1.35-1.68c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.31-.75-1.79-.2-.48-.4-.41-.55-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.83-.84 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28Z"
          />
        </svg>
      </a>
    </section>
  );
}
