<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { FilterI, PropertiesStatsI, PropertyI } from "./types";

  export let visibleProperties: PropertyI[] = [];
  export let allPropertiesStats: PropertiesStatsI = {
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

  const updateFilter = (filter: FilterI) => {
    dispatch("filterChange", {
      filter,
    });
  };

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

  const toggleSort = () => {
    const sort = filter.sort === "asc" ? "desc" : "asc";
    updateFilter({
      ...filter,
      sort,
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
        value={filter.minPrice || allPropertiesStats.minPrice}
        on:change={onFilterChange.bind(this, "minPrice")}
        min={allPropertiesStats.minPrice}
        max={allPropertiesStats.maxPrice}
      />
    </div>
    <div class="filter">
      <label for="maxPrice">Max price</label>
      <input
        type="number"
        name="maxPrice"
        value={filter.maxPrice || allPropertiesStats.maxPrice}
        on:change={onFilterChange.bind(this, "maxPrice")}
        min={allPropertiesStats.minPrice}
        max={allPropertiesStats.maxPrice}
      />
    </div>
  </div>
  <div class="filter-group">
    <div class="filter">
      <label for="minBedrooms">Min bedrooms</label>
      <input
        type="number"
        name="minBedrooms"
        value={filter.minBedrooms || allPropertiesStats.minBedrooms}
        on:change={onFilterChange.bind(this, "minBedrooms")}
        min={allPropertiesStats.minBedrooms}
        max={allPropertiesStats.maxBedrooms}
      />
    </div>
    <div class="filter">
      <label for="maxBedrooms">Max bedrooms</label>
      <input
        type="number"
        name="maxBedrooms"
        value={filter.maxBedrooms || allPropertiesStats.maxBedrooms}
        on:change={onFilterChange.bind(this, "maxBedrooms")}
        min={allPropertiesStats.minBedrooms}
        max={allPropertiesStats.maxBedrooms}
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
  <small on:click={toggleSort}
    >Price, {filter.sort === "asc"
      ? "low to high \u2193"
      : "high to low \u2191"}</small
  >
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

  .sort small {
    cursor: pointer;
  }

  .filter-group {
    display: flex;
    margin-right: 3em;
    flex-wrap: wrap;
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
