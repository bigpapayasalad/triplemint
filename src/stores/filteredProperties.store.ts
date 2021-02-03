import { derived, Readable } from "svelte/store";
import type { FilterI, PropertyI } from "../types";

export const filteredPropertiesStoreFactory = (
  propertiesStore: Readable<PropertyI[]>,
  filterStore: Readable<FilterI>
) => {
  return derived(
    [propertiesStore, filterStore],
    ([$properties, $filter]): PropertyI[] => {
      console.log($properties, $filter);
      return $properties
        ?.filter((p) => {
          if ($filter.minPrice !== undefined && p.price < $filter.minPrice) {
            return false;
          }

          if ($filter.maxPrice !== undefined && p.price > $filter.maxPrice) {
            return false;
          }

          if (
            $filter.minBedrooms !== undefined &&
            p.unit.bedrooms < $filter.minBedrooms
          ) {
            return false;
          }

          if (
            $filter.maxBedrooms !== undefined &&
            p.unit.bedrooms > $filter.maxBedrooms
          ) {
            return false;
          }

          return true;
        })
        .sort((a, b) => {
          const direction = $filter.sort === "asc" ? 1 : -1;
          if (a.price < b.price) {
            return -1 * direction;
          } else {
            return 1 * direction;
          }
        });
    }
  );
};
