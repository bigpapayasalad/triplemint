<script lang="ts">
  import Images from "./Images.svelte";
  import { buildDetailsString, formatPriceAsCurrency } from "./transforms";
  import type { PropertyI } from "./types/Property";

  export let property: PropertyI;

  $: priceString = formatPriceAsCurrency(property.price);
  $: details = buildDetailsString(property);
  $: images =
    property.unit.dyn_images?.map(
      (i) =>
        `https://dyn-images.triplemint.com/production/images/unit/${property.unit.id}/x486/${i.key}.${i.extension}`
    ) || [];
</script>

<div class="property">
  <Images {images} />
  <div class="property-info">
    <div class="address">
      {property.display_address}
    </div>
    <div class="neighborhood">
      {property.unit.building.neighborhood_address}
    </div>
    <div class="price">
      {priceString}
    </div>
    <div class="details">
      {details}
    </div>
  </div>
</div>

<style>
  .property {
    border: 1px solid #dddddd;
  }

  .property-info {
    padding: 0.5em;
  }

  .address {
    font-weight: 600;
    font-size: 115%;
  }

  .neighborhood,
  .details {
    color: #666666;
    font-size: 85%;
  }

  .price {
    font-weight: 600;
  }

  .details,
  .price {
    margin-top: 0.5em;
  }
</style>
