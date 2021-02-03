<script lang="ts">
  import Search from "./Search.svelte";
  export let imgRoot: string;
</script>

<header>
  <a href="/" class="logo">
    <img src={`${imgRoot}/logo.svg`} alt="Triplemint logo" />
  </a>
</header>
<main>
  <Search />
</main>

<style>
  header {
    height: 4rem;
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
  }

  .logo {
    flex: 0 1 8rem;
    margin-right: auto;
    transform: translateY(10%);
  }
</style>
