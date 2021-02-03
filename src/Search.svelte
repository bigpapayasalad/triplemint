<script lang="ts">
  import { derived, writable } from "svelte/store";

  import Filters from "./Filters.svelte";
  import PropertyList from "./PropertyList.svelte";

  import type { FilterI } from "./types/Filter";
  import type { PropertyI } from "./types/Property";

  import propertiesData from "./data/properties.json";

  const defaultFilter: FilterI = {
    sort: "desc",
  };

  const allPropertiesStore = writable<PropertyI[]>(
    propertiesData as PropertyI[]
  );
  const filterStore = derived(
    allPropertiesStore,
    ($allProperties): FilterI => {
      const prices = $allProperties.map((p) => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      return {
        ...defaultFilter,
        minPrice,
        maxPrice,
      };
    }
  );
  const visiblePropertiesStore = derived(
    [allPropertiesStore, filterStore],
    ([$properties, $filter]): PropertyI[] => {
      return $properties
        ?.filter((p) => {
          if ($filter.minPrice !== undefined && p.price < $filter.minPrice) {
            return false;
          }

          if ($filter.maxPrice !== undefined && p.price > $filter.maxPrice) {
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
</script>

<Filters />
<PropertyList properties={$visiblePropertiesStore} />
