<script lang="ts">
  import type { PropertyI } from "./types/Property";

  export let property: PropertyI;
</script>

<p>address: {property.address}</p>
<p>price: {property.price}</p>
<p>bedroom: {property.unit.bedrooms}</p>
