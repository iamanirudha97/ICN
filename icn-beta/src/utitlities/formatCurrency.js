const CURRENCTY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "INR", style: "currency"})

export default function formatCurrency(number) {
  return CURRENCTY_FORMATTER.format(number)
}