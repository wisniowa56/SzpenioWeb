<script lang="ts">
	import { goto } from "$app/navigation";
	import { isAuthenticated, user } from "$lib/store";

	$: loggedIn = $isAuthenticated;
	$: userObj = $user;
</script>

<div
	class="navbar 3xl:max-w-[1920px] lg:mx-2 sm:mx-0 fixed md:left-0 md:top-2 z-50 lg:max-w-[-webkit-fill-available] md:max-w-full bg-white/60 backdrop-blur md:rounded-lg drop-shadow-md self-center"
>
	<div class="navbar-start">
		<a class="btn" href="/services">Przeglądaj</a>
		<div class="form-control ml-2 hidden md:flex">
			<div class="input-group">
				<input type="text" placeholder="Szukaj…" class="input input-bordered" />
				<button class="btn btn-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
	<div class="navbar-center">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			href="/"
			class="btn btn-ghost normal-case md:text-3xl text-lg font-bold mr-8 md:mr-0"
			style="font-family: 'Montserrat Subrayada', sans-serif;">HANDYMANS.PL</a
		>
	</div>
	{#if !loggedIn}
		<div class="navbar-end">
			<a href="/login"
				><button class="btn btn-ghost text-lg" on:click={() => goto("/login")}>Zaloguj</button></a
			>
		</div>
	{:else}
		<div class="navbar-end">
			<div class="dropdown dropdown-end">
				{#if userObj}
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label
						tabindex="0"
						class="btn btn-circle bg-neutral-focus text-neutral-content rounded-full w-12"
					>
						<span>{userObj.name.first.charAt(0)}{userObj.name.last.charAt(0)}</span>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li>
							<a href="/orders">Moje zlecenia</a>
						</li>
						<li><a href="/profile">Mój profil</a></li>
						<li><a href="/settings">Ustawienia</a></li>
						<li>
							<button class="btn btn-neutral" on:click={() => goto("/logout")}>Wyloguj</button>
						</li>
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>
