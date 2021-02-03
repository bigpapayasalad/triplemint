<script lang="ts">
  import { writable } from "svelte/store";

  import Filters from "./Filters.svelte";
  import PropertyList from "./PropertyList.svelte";

  import propertiesData from "./data/properties.json";
  import type { FilterI, PropertyI } from "./types";
  import { propertiesStatsStoreFactory } from "./stores/propertiesStats.store";
  import { filteredPropertiesStoreFactory } from "./stores/filteredProperties.store";

  const filterStore = writable<FilterI>({
    sort: "desc",
  });

  const handleFilterChange = (e: CustomEvent<{ filter: FilterI }>) =>
    filterStore.set(e.detail.filter);

  const allPropertiesStore = writable<PropertyI[]>(
    propertiesData as PropertyI[]
  );
  const propertiesStatsStore = propertiesStatsStoreFactory(allPropertiesStore);

  const visiblePropertiesStore = filteredPropertiesStoreFactory(
    allPropertiesStore,
    filterStore
  );
  const visiblePropertiesStatsStore = propertiesStatsStoreFactory(
    visiblePropertiesStore
  );
</script>

<Filters
  visibleProperties={$visiblePropertiesStore}
  propertiesStats={$propertiesStatsStore}
  visiblePropertiesStats={$visiblePropertiesStatsStore}
  filter={$filterStore}
  on:filterChange={handleFilterChange}
/>
<PropertyList properties={$visiblePropertiesStore} />
