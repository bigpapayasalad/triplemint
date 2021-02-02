<script lang="ts">
	import Search from './Search.svelte';
	
	export let imgRoot;
</script>

<header>
	<a href="/" class="logo">
		<img src={`${imgRoot}/logo.svg`} alt="Triplemint logo"> 
	</a>
</header>
<section>
	<Search/>
</section>

<style>
	header {
		height: 4rem;
		padding: .5rem 1rem;
		
		display: flex;
		align-items: center;
		background-color: whitesmoke;
	}

	.logo {
		flex: 0 1 8rem;
		margin-right: auto;
		transform: translateY(10%);
	}
</style>
