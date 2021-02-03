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
    flex-wrap: wrap;
    padding: 0.25rem;
  }

  .grid-property {
    flex: 0 0 20rem;
    min-height: 12rem;
    margin: 0.25rem;
  }
</style>
