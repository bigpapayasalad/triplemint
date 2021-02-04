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
    {#if currentIndex > 0}
      <div class="previous" on:click={previous}>&lsaquo;</div>
    {/if}
    {#if currentIndex < images.length - 1}
      <div class="next" on:click={next}>&rsaquo;</div>
    {/if}
  </div>
  {#if images.length > 1}
    <div class="counter">
      {images.length} photos
    </div>
  {/if}
</div>

<style>
  .images-wrapper {
    height: 10rem;
    position: relative;
    display: flex;
    align-items: center;
    background-position: 50% 50%;
    background-size: cover;
    font-size: 2em;
  }

  .counter {
    position: absolute;
    color: white;
    bottom: 0.25em;
    right: 0.25em;
    font-size: 0.8rem;
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  }

  .controls {
    display: flex;
    justify-content: space-between;
    flex: 1 1 100%;
    padding: 0.25em;
    color: white;
    font-size: 2em;
  }

  .controls > * {
    opacity: 0.7;
    cursor: pointer;
    user-select: none;
  }

  .controls > *:hover {
    opacity: 1;
  }

  .next {
    margin-left: auto;
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
