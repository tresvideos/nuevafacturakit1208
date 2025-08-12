export const uid = () => Math.random().toString(36).slice(2);
export const currency = (n: number) => new Intl.NumberFormat("es-ES", { style:"currency", currency:"EUR" }).format(Number(n||0));

export const calcTotals = (items: any[], discount = { mode: "percent", value: 0 }, taxRate = 21) => {
  const subtotal = items.reduce((s, it) => s + Number(it.qty || 0) * Number(it.price || 0), 0);
  const discountValue = discount.mode === "percent" ? (subtotal * (discount.value || 0)) / 100 : (discount.value || 0);
  const base = Math.max(0, subtotal - discountValue);
  const taxes = (base * Number(taxRate || 0)) / 100;
  return { subtotal, discount: discountValue, base, taxes, total: base + taxes };
};
