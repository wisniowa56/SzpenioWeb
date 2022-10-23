<script lang="ts">
	import { getProviders } from "$lib/db";
	import { user } from "$lib/store";
	import type { Provider } from "$lib/types";
	import { error } from "@sveltejs/kit";

	let userObj = $user;
	let provider: Provider | null;
	if (userObj.providerId !== null) {
		provider = getProviders().find((x) => x.id === userObj.providerId) ?? null;
		if (!provider) {
			throw error(500, {
				message: "Unknown provider with that ID"
			});
		}
	}

	const saveChanges = () => {
		$user = userObj;
	};
</script>

<svelte:head>
	<title>Profil</title>
</svelte:head>

<div class="flex flex-col bg-base-200 min-h-screen justify-center items-center overflow-hidden z-0">
	<div
		class="flex flex-col w-screen md:w-fit grid-cols-1 gap-5 bg-white/50 backdrop-blur drop-shadow-2xl md:p-12 p-2 rounded-2xl justify-center mt-20"
	>
		<div class="flex flex-col md:flex-row w-fill justify-center">
			<div class="avatar placeholder justify-center mb-2 md:mb-0">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-16 mx-5 self-start">
					<span class="text-xl">{userObj.name.first.charAt(0)}{userObj.name.last.charAt(0)}</span>
				</div>
			</div>
			<div class="flex flex-col md:w-96 gap-y-3">
				<div class="flex flex-row items-center justify-between">
					<p class="mr-5 text-md md:text-lg">Imię:</p>
					<input
						type="text"
						placeholder="Jan"
						class="input input-bordered w-full max-w-[280px]"
						bind:value={userObj.name.first}
					/>
				</div>
				<div class="flex flex-row items-center justify-between">
					<p class="mr-5 text-md md:text-lg">Nazwisko:</p>
					<input
						type="text"
						placeholder="Kowalski"
						class="input input-bordered w-full max-w-[280px]"
						bind:value={userObj.name.last}
					/>
				</div>
				<div class="flex flex-row items-center justify-between">
					<p class="mr-5 text-md md:text-lg">Email:</p>
					<input
						type="text"
						placeholder="ty@gdzies.pl"
						class="input input-bordered w-full max-w-[280px]"
						bind:value={userObj.email}
						disabled
					/>
				</div>
				{#if provider}
					<div class="flex flex-row items-center justify-between">
						<strong class="mr-5 text-md md:text-lg">Usługodawca</strong>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Nazwa:</p>
						<input
							type="text"
							placeholder="Janushex"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.name}
						/>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Email:</p>
						<input
							type="text"
							placeholder="janushex@janushex.pl"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.contact.email}
						/>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Numer telefonu:</p>
						<input
							type="text"
							placeholder="Janushex"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.contact.phoneNumber}
						/>
					</div>
					<div class="flex flex-row items-center justify-between">
						<u class="mr-5 text-md md:text-lg">Adres</u>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Pierwsza linia:</p>
						<input
							type="text"
							placeholder="Pierwsza linia"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.contact.location.address.firstLine}
						/>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Druga linia:</p>
						<input
							type="text"
							placeholder="Druga linia"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.contact.location.address.secondLine}
						/>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Miejscowość:</p>
						<input
							type="text"
							placeholder="Miasto"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.contact.location.address.city}
						/>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Województwo:</p>
						<input
							type="text"
							placeholder="Województwo"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.contact.location.address.region}
						/>
					</div>
					<div class="flex flex-row items-center justify-between">
						<p class="mr-5 text-md md:text-lg">Koc pocztowy:</p>
						<input
							type="text"
							placeholder="Kod pocztowy"
							class="input input-bordered w-full max-w-[280px]"
							bind:value={provider.contact.location.address.postalCode}
						/>
					</div>
				{/if}
			</div>
		</div>
		<!-- <div class="flex flex-row items-center justify-between">
			<p class="mr-5 text-md md:text-lg">Opis:</p>
			<textarea
				type="text"
				placeholder="Type here"
				class="textarea textarea-bordered w-full h-40"
				value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget."
			/>
		</div> -->
		{#if provider}
			<div
				class="flex w-full justify-center overflow-x-auto md:overflow-x-hidden overflow-y-hidden z-1"
			>
				<table class="table max-w-[90%] h-fit">
					<!-- head -->
					<thead>
						<tr>
							<th>Rodzaj</th>
							<th>Opis</th>
							<th>Godziny działania</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{#each [0, 1, 2, 3, 4, 5] as x}
							<tr class="h-fit max-h-xl">
								<td class="rounded-l-lg">
									<div class="flex items-center space-x-3">
										<div>
											<div class="dropdown mr-5">
												<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
												<!-- svelte-ignore a11y-label-has-associated-control -->
												<label tabindex={2 * x} class="btn m-1"
													>Budowlanka <svg
														class="fill-current"
														xmlns="http://www.w3.org/2000/svg"
														width="20"
														height="20"
														viewBox="0 0 24 24"
														><path
															d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
														/></svg
													></label
												>
												<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
												<!-- svelte-ignore a11y-label-has-associated-control -->
												<ul
													tabindex={2 * x + 1}
													class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
												>
													<li>Budowlanka</li>
													<li>Copywriter</li>
													<li>Dekarz</li>
													<li>Elektryk</li>
													<li>Fotograf</li>
													<li>Fryzjer</li>
													<li>Grafik</li>
													<li>Groomer</li>
													<li>Hydraulik</li>
													<li>Kierowca</li>
													<li>Kosmetyczka</li>
													<li>Księgowa</li>
													<li>Mechanik</li>
													<li>Nauczyciel</li>
												</ul>
											</div>
										</div>
									</div>
								</td>
								<td class="text-justify truncate max-w-md break-normal"
									>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum
									et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
									sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
									sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
									sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.</td
								>
								<td>
									<p>10:00-20:00</p>
								</td>

								<th class="rounded-r-lg">
									<div class="tooltip z-10" data-tip="Obecnie brak funkcji">
										<button class="btn btn-neutral">Edytuj</button>
									</div>
								</th>
							</tr>
							<br />
						{/each}
					</tbody>
					<!-- foot -->
					<tfoot>
						<tr>
							<th>Rodzaj</th>
							<th>Opis</th>
							<th>Godziny działania</th>
							<th />
						</tr>
					</tfoot>
				</table>
			</div>
		{/if}
		<div class="flex justify-end">
			<button class="btn btn-primary w-full md:max-w-fit" on:click={saveChanges}>Zapisz</button>
		</div>
	</div>
</div>
