<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { FilterI, PropertiesStatsI, PropertyI } from "./types";

  export let visibleProperties: PropertyI[] = [];
  export let propertiesStats: PropertiesStatsI = {
    minPrice: 0,
    maxPrice: 0,
    minPriceString: "$0",
    maxPriceString: "$0",
    minBedrooms: 0,
    maxBedrooms: 0,
  };
  export let visiblePropertiesStats: PropertiesStatsI = {
    minPrice: 0,
    maxPrice: 0,
    minPriceString: "$0",
    maxPriceString: "$0",
    minBedrooms: 0,
    maxBedrooms: 0,
  };
  export let filter: FilterI = {
    sort: "desc",
  };

  const dispatch = createEventDispatcher();

  function updateFilter(filter: FilterI) {
    dispatch("filterChange", {
      filter,
    });
  }

  const onFilterChange = (
    field: keyof FilterI,
    event: Event & { currentTarget: HTMLInputElement }
  ) => {
    console.log(filter);
    updateFilter({
      ...filter,
      [field]: event.currentTarget.value,
    });
  };
</script>

<div class="filters">
  <div class="filter-group">
    <div class="filter">
      <label for="minPrice">Min price</label>
      <input
        type="number"
        name="minPrice"
        value={filter.minPrice || propertiesStats.minPrice}
        on:change={onFilterChange.bind(this, "minPrice")}
        min={propertiesStats.minPrice}
        max={propertiesStats.maxPrice}
      />
    </div>
    <div class="filter">
      <label for="maxPrice">Max price</label>
      <input
        type="number"
        name="maxPrice"
        value={filter.maxPrice || propertiesStats.maxPrice}
        on:change={onFilterChange.bind(this, "maxPrice")}
        min={propertiesStats.minPrice}
        max={propertiesStats.maxPrice}
      />
    </div>
  </div>
  <div class="filter-group">
    <div class="filter">
      <label for="minBedrooms">Min bedrooms</label>
      <input
        type="number"
        name="minBedrooms"
        value={filter.minBedrooms || propertiesStats.minBedrooms}
        on:change={onFilterChange.bind(this, "minBedrooms")}
        min={propertiesStats.minBedrooms}
        max={propertiesStats.maxBedrooms}
      />
    </div>
    <div class="filter">
      <label for="maxBedrooms">Max bedrooms</label>
      <input
        type="number"
        name="maxBedrooms"
        value={filter.maxBedrooms || propertiesStats.maxBedrooms}
        on:change={onFilterChange.bind(this, "maxBedrooms")}
        min={propertiesStats.minBedrooms}
        max={propertiesStats.maxBedrooms}
      />
    </div>
  </div>
  <div class="results">
    <div class="count">
      <strong>{visibleProperties.length} results</strong>
    </div>
    <div class="details">
      <small
        >{visiblePropertiesStats.minPriceString} to {visiblePropertiesStats.maxPriceString}</small
      >
    </div>
  </div>
</div>
<div class="sort">
  <small>Price, desc</small>
</div>

<style>
  .filters,
  .sort {
    padding: 0.5rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .filters {
    min-height: 4rem;
    padding: 0.5rem 1rem;

    background-color: whitesmoke;
  }

  .sort {
    min-height: 2rem;
    background-color: #00d7a0;
    color: white;
  }

  .filter-group {
    display: flex;
    margin-right: 3em;
    flex-wrap: wrap;
  }

  .filter {
    /* display: flex; */
  }

  .filter:not(:last-child) {
    margin-right: 1.5em;
  }

  .filter label {
    font-size: 75%;
  }

  input[type="number"] {
    margin-bottom: 0;
    width: 6em;
  }

  .results {
    margin-left: auto;
  }

  .count {
    text-align: right;
  }
</style>
