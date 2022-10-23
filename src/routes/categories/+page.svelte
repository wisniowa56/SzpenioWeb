<script lang="ts">
	import { ValidCategories } from "$lib/constants";
	import { capitalizeFirst } from "$lib/utils";
</script>

<svelte:head>
	<title>Kategorie</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200 w-full pt-20 overflow-hidden">
	<div
		class="hero-content mt-5 text-center self-center grid gap-4 md:grid-cols-2 lg:grid-cols-3  grid-rows-3 bg-base-200"
	>
		{#each ValidCategories as category}
			<div class="card w-96 bg-base-100 shadow-xl inline-block">
				<figure>
					<img src={category.thumbnailUrl} alt={category.name} class="max-h-[216px] w-full" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{capitalizeFirst(category.name)}</h2>
					{#if category.catchphrase}
						<p>{category.catchphrase}</p>
					{/if}
					<div class="card-actions justify-end">
						<a href="/services?category={category.name}"
							><button class="btn btn-primary">Przeglądaj oferty</button></a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
