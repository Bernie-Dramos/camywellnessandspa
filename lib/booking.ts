import type { ServiceItem } from "@/lib/services-data"

/** The spa's booking WhatsApp number, digits only, in international format. */
export const WHATSAPP_NUMBER = "258841921846"

/** A plain WhatsApp chat link with no prefilled message. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

/**
 * Build a WhatsApp link that opens with the service and price already
 * written out, so staff receive the enquiry with context and the client
 * does not have to compose the message.
 *
 * The price is taken from the same item that renders the row, so the
 * message can never drift from what the visitor was shown.
 */
export function buildBookingUrl(item: ServiceItem, language: string): string {
  const isEn = language === "en"
  const name = isEn ? item.en : item.pt
  const price = isEn && item.priceEn ? item.priceEn : item.price
  const message = isEn
    ? `Hello, I would like to book: ${name} — ${price}`
    : `Olá, gostaria de marcar: ${name} — ${price}`

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}
