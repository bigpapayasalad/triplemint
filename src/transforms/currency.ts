const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatPriceAsCurrency = (price: number) => {
  return currencyFormatter.format(price).replace(".00", "");
};
