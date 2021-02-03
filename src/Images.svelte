<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";

  import { IMG_ROOT } from "./config";
  import type { ImageSize } from "./types";

  const defaultImage = `${IMG_ROOT}/empty-image.svg`;

  const minSizes: Record<ImageSize, number> = {
    small: 0,
    medium: 300,
    large: 500,
  };

  export let images: string[] = [];

  let size: ImageSize = "small";
  let imageWrapper: HTMLElement;
  let currentIndex = 0;

  const checkWidth = () => {
    if (imageWrapper.clientWidth < minSizes.medium) {
      size = "small";
    } else if (imageWrapper.clientWidth < minSizes.large) {
      size = "medium";
    } else {
      size = "large";
    }
  };

  onMount(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
  });

  afterUpdate(() => {
    checkWidth();
  });

  onDestroy(() => {
    window.removeEventListener("resize", checkWidth);
  });
</script>

<div
  bind:this={imageWrapper}
  class="images-wrapper {size}"
  style="background-image: url('{images.length
    ? images[currentIndex]
    : defaultImage}')"
>
  <div class="controls">
    <div class="previous" />
    <div class="next" />
  </div>
</div>

<style>
  .images-wrapper {
    height: 10rem;
    background-position: 50% 50%;
    background-size: cover;
  }

  .medium {
    height: 15rem;
  }

  .large {
    height: 20rem;
  }
</style>
