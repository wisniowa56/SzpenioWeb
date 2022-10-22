<script lang="ts">
	import { ValidCategories } from "$lib/constants";
	import type Service from "$lib/server/models/service";
	import { capitalizeFirst } from "$lib/utils";
	import type { PageData } from "./$types";

	export let data: PageData;

	let chosenCategory: string = data.category;

	const handle = (c: string) => {
		chosenCategory = c;
	};

	const getData = async (category: string): Promise<Service[]> => {
		const response = await fetch(`/api/services/${category}`);
		const result = await response.json();
		return result;
	};

	const getRatingColor = (rating: number, star: number) => {
		if (rating >= star) return "bg-orange-400";
		return "bg-gray-200";
	};
</script>

<svelte:head>
	<title>Usługi</title>
</svelte:head>

<div class="flex md:pt-24 pt-20 bg-base-200 content-center justify-center">
	<div class="md:flex bg-base-200 w-10/12 justify-start items-center">
		<div class="mr-2"><p>Kategoria:</p></div>
		<div>
			<div class="dropdown mr-5">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn m-1">
					{capitalizeFirst(chosenCategory)}
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</label>
				<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
					{#each ValidCategories as category}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li on:click={() => handle(category.name)}>
							<a href="/services?category={category.name}">{capitalizeFirst(category.name)}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="mr-2"><p>Lokalizacja:</p></div>
		<input
			type="text"
			placeholder="Warszawa"
			class="input input-bordered input-primary w-full max-w-xs"
		/>
	</div>
</div>
<div class="flex overflow-x-auto w-full justify-center">
	<table class="table max-w-[90%]">
		<!-- head -->
		<thead>
			<tr class="text-center">
				<th>Osoba</th>
				<th>Firma</th>
				<th>Opis</th>
				<th>Ocena</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#await getData(chosenCategory)}
				<h2>Loading...</h2>
			{:then data}
				{#each data as service}
					<br />
					<tr class="min-h-xl">
						<td class="rounded-l-lg">
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src={service.avatarUrl} alt="UserImage" />
									</div>
								</div>
								<div>
									<div class="font-bold">{service.personName}</div>
									<span class="badge badge-ghost badge-sm">{service.personPosition}</span>
								</div>
							</div>
						</td>
						<td>
							{#if service.companyName}
								{service.companyName}
								{#if service.companyAddress}
									<br />
									<div class="text-sm opacity-50">{service.companyAddress}</div>
								{/if}
							{:else}
								<p>Osoba fizyczna</p>
							{/if}
						</td>
						<td class="text-justify truncate max-w-md break-normal">{service.description}</td>
						<td>
							<div class="rating">
								<input
									type="radio"
									class="mask mask-star-2 {getRatingColor(service.rating, 1)}"
									disabled
								/>
								<input
									type="radio"
									class="mask mask-star-2 {getRatingColor(service.rating, 2)}"
									disabled
								/>
								<input
									type="radio"
									class="mask mask-star-2 {getRatingColor(service.rating, 3)}"
									disabled
								/>
								<input
									type="radio"
									class="mask mask-star-2 {getRatingColor(service.rating, 4)}"
									disabled
								/>
								<input
									type="radio"
									class="mask mask-star-2 {getRatingColor(service.rating, 5)}"
									disabled
								/>
							</div>
						</td>
						<th class="rounded-r-lg">
							<a href="/services/{service.id}" class="btn btn-primary">Skontaktuj się</a>
						</th>
					</tr>
				{/each}
			{:catch err}
				<p>Error: {err}</p>
			{/await}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr class="text-center">
				<th>Imię</th>
				<th>Firma</th>
				<th>Opis</th>
				<th>Ocena</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
