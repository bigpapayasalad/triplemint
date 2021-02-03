<script lang="ts">
  import Property from "./Property.svelte";
  import type { PropertyI } from "./types/Property";

  export let properties: PropertyI[] = [];
</script>

<div class="property-list">
  {#each properties as property}
    <div class="property">
      <Property {property} />
    </div>
  {/each}
</div>

<style>
  .property-list {
    display: flex;
    flex-wrap: wrap;
  }

  .property {
    flex: 1 0 25%;
    height: 12rem;
  }
</style>
