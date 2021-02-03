<script lang="ts">
  import Property from "./Property.svelte";
  import type { PropertyI } from "./types/Property";

  export let properties: PropertyI[] = [];
</script>

<div class="property-list">
  {#each properties as property}
    <div class="grid-property">
      <Property {property} />
    </div>
  {/each}
</div>

<style>
  .property-list {
    display: flex;
    flex-flow: row wrap;
    flex-wrap: wrap;
    padding: 0.25rem;
  }

  .grid-property {
    flex: 0 0 100%;

    min-height: 12rem;
    padding: 0.25rem;
  }

  @media (min-width: 768px) {
    .grid-property {
      flex-basis: 50%;
    }
  }

  @media (min-width: 1024px) {
    .grid-property {
      flex-basis: 33%;
    }
  }

  @media (min-width: 1440px) {
    .grid-property {
      flex-basis: 25%;
    }
  }

  @media (min-width: 1920px) {
    .grid-property {
      flex-basis: 20%;
    }
  }
</style>
