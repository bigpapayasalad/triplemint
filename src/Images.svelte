<script lang="ts">
  import { IMG_ROOT } from "./config";
  import type { ImageSize } from "./types";

  const defaultImage = `${IMG_ROOT}/empty-image.svg`;

  export let images: string[] = [];
  export let size: ImageSize = "medium";
  let currentIndex = 0;

  const previous = () => {
    currentIndex = Math.max(currentIndex - 1, 0);
  };

  const next = () => {
    currentIndex = Math.min(currentIndex + 1, images.length - 1);
  };
</script>

<div
  class="images-wrapper {size}"
  style="background-image: url('{images.length
    ? images[currentIndex]
    : defaultImage}')"
>
  <div class="controls">
    <div class="previous" on:click={previous}>&lsaquo;</div>
    <div class="next" on:click={next}>&rsaquo;</div>
  </div>
</div>

<style>
  .images-wrapper {
    height: 10rem;
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    align-items: center;
    font-size: 2em;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    flex: 1 1 100%;
    padding: 0.25em;
    color: white;
  }

  .controls > * {
    opacity: 0.7;
    cursor: pointer;
  }

  .controls > *:hover {
    opacity: 1;
  }

  .medium {
    height: 15rem;
    font-size: 3em;
  }

  .large {
    height: 20rem;
    font-size: 4em;
  }
</style>
