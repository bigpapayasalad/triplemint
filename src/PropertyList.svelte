<script lang="ts">
  import Property from "./Property.svelte";
  import type { PropertyI } from "./types/Property";

  export let properties: PropertyI[] = [];
</script>

<p>PropertyList component</p>
{#each properties as property}
  <Property {property} />
{/each}
