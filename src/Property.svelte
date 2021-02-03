<script lang="ts">
  import Images from "./Images.svelte";
  import type { PropertyI } from "./types/Property";

  export let property: PropertyI;

  let images = property.unit.dyn_images?.map(
    (i) =>
      `https://dyn-images.triplemint.com/production/images/unit/${property.unit.id}/x486/${i.key}.${i.extension}`
  );
</script>

<Images {images} />

<p>address: {property.address}</p>
<p>price: {property.price}</p>
<p>bedroom: {property.unit.bedrooms}</p>
