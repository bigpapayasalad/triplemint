import { derived, Readable } from "svelte/store";
import type { PropertiesStatsI, PropertyI } from "../types";

export const propertiesStatsStoreFactory = (
  propertiesStore: Readable<PropertyI[]>
) => {
  return derived(
    propertiesStore,
    ($properties): PropertiesStatsI => {
      const prices = $properties.map((p) => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      const minPriceString = currencyFormatter
        .format(minPrice)
        .replace(".00", "");
      const maxPriceString = currencyFormatter
        .format(maxPrice)
        .replace(".00", "");

      const bedrooms = $properties.map((p) => p.unit.bedrooms);
      const minBedrooms = Math.min(...bedrooms);
      const maxBedrooms = Math.max(...bedrooms);

      return {
        minPrice,
        maxPrice,
        minPriceString,
        maxPriceString,
        minBedrooms,
        maxBedrooms,
      };
    }
  );
};
