<script lang="ts">
  import Filters from "./Filters.svelte";
  import PropertyList from "./PropertyList.svelte";

  import type { FilterI, PropertyI } from "./types";

  import propertiesData from "./data/properties.json";

  import { filterProperties, getPropertyStats } from "./transforms";

  const handleFilterChange = (e: CustomEvent<{ filter: FilterI }>) => {
    filter = e.detail.filter;
  };

  let allProperties = propertiesData as PropertyI[];
  $: allPropertiesStats = getPropertyStats(allProperties);

  let filter: FilterI = { sort: "desc" };

  $: visibleProperties = filterProperties(allProperties, filter);
  $: visiblePropertiesStats = getPropertyStats(visibleProperties);
</script>

<Filters
  {visibleProperties}
  {allPropertiesStats}
  {visiblePropertiesStats}
  {filter}
  on:filterChange={handleFilterChange}
/>
<PropertyList properties={visibleProperties} />
