<script lang="ts">
	import type { Data } from "./data";
	import { ValidCategories } from "$lib/constants"
	import { capitalizeFirst } from "$lib/utils";

	export let data: Data;

	let chosenCategory: string = data.category;

	const handle = (c: string) => {
		chosenCategory = c;
	}
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
						<li on:click={() => handle(category.name)}><a href="/services?category={category.name}">{capitalizeFirst(category.name)}</a></li>
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
			<tr>
				<th>Imię</th>
				<th>Firma</th>
				<th>Opis</th>
				<th>Ocena</th>
				<th />
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			<tr class="min-h-xl">
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Hart Hagerty</div>
							<div class="text-sm opacity-50">Warszawa ul.Wisniowa</div>
						</div>
					</div>
				</td>
				<td>
					Zemlak, Daniel and Leannon
					<br />
					<span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input
							type="radio"
							name="rating-1"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
						<input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" disabled />
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
			<br />
			<!-- row 2 -->
			<tr>
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Brice Swyre</div>
							<div class="text-sm opacity-50">Warszawa ul.Choża</div>
						</div>
					</div>
				</td>
				<td>
					Carroll Group
					<br />
					<span class="badge badge-ghost badge-sm">Tax Accountant</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
						<input
							type="radio"
							name="rating-2"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" disabled />
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
			<br />
			<!-- row 3 -->
			<tr>
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Marjy Ferencz</div>
							<div class="text-sm opacity-50">Warszawa ul.Fabryczna</div>
						</div>
					</div>
				</td>
				<td>
					Rowe-Schoen
					<br />
					<span class="badge badge-ghost badge-sm">Office Assistant I</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" disabled />
						<input
							type="radio"
							name="rating-3"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
						<input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" disabled />
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
			<br />
			<!-- row 4 -->
			<tr>
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Yancy Tear</div>
							<div class="text-sm opacity-50">Warszawa ul.Marszałkowska</div>
						</div>
					</div>
				</td>
				<td>
					Wyman-Ledner
					<br />
					<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-4" class="mask mask-star-2 bg-orange-400" disabled />
						<input
							type="radio"
							name="rating-4"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
			<br />
			<tr>
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Yancy Tear</div>
							<div class="text-sm opacity-50">Warszawa ul.Marszałkowska</div>
						</div>
					</div>
				</td>
				<td>
					Wyman-Ledner
					<br />
					<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" disabled />
						<input
							type="radio"
							name="rating-5"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
			<br />
			<tr>
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Yancy Tear</div>
							<div class="text-sm opacity-50">Warszawa ul.Marszałkowska</div>
						</div>
					</div>
				</td>
				<td>
					Wyman-Ledner
					<br />
					<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" disabled />
						<input
							type="radio"
							name="rating-6"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
						<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" disabled />
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
			<br />
			<tr>
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Yancy Tear</div>
							<div class="text-sm opacity-50">Warszawa ul.Marszałkowska</div>
						</div>
					</div>
				</td>
				<td>
					Wyman-Ledner
					<br />
					<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
						<input
							type="radio"
							name="rating-7"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
						<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" disabled />
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
			<br />
			<tr>
				<td class="rounded-l-lg">
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
						</div>
						<div>
							<div class="font-bold">Yancy Tear</div>
							<div class="text-sm opacity-50">Warszawa ul.Marszałkowska</div>
						</div>
					</div>
				</td>
				<td>
					Wyman-Ledner
					<br />
					<span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
				</td>
				<td class="text-justify truncate max-w-md break-normal"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
					egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
					Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt.
					Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris
					dolor, id consequat metus gravida eget.</td
				>
				<td>
					<div class="rating">
						<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" disabled />
						<input
							type="radio"
							name="rating-8"
							class="mask mask-star-2 bg-orange-400"
							disabled
							checked
						/>
						<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" disabled />
						<input type="radio" name="rating-8" class="mask mask-star-2 bg-orange-400" disabled />
					</div></td
				>
				<th class="rounded-r-lg">
					<button class="btn btn-primary">Umów się</button>
				</th>
			</tr>
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th>Imię</th>
				<th>Firma</th>
				<th>Opis</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
