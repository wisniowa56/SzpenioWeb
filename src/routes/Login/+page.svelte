<script lang="ts">
	import { goto } from "$app/navigation";
	import { isAuthenticated, user } from "$lib/store";
	import { DefaultUsers } from "$lib/constants";

	if ($isAuthenticated) {
		goto("/");
	}

	let email = DefaultUsers.normal.email;

	function SubmitLogin() {
		if (email === DefaultUsers.normal.email) {
			$isAuthenticated = true;
			$user = DefaultUsers.normal;
			goto("/profile");
		} else if (email === DefaultUsers.provider.email) {
			$isAuthenticated = true;
			$user = DefaultUsers.provider;
			goto("/providers/@me");
		} else {
			modalStatus = true;
		}
	}

	const hideModal = () => (modalStatus = false);

	$: modalStatus = false;
</script>

<div class="flex flex-col bg-base-200 h-screen justify-center items-center overflow-hidden">
	<div
		class="flex flex-col grid-cols-1 gap-5 bg-white/50 w-full md:w-auto backdrop-blur drop-shadow-2xl md:p-16 p-10 rounded-2xl justify-start items-center"
	>
		<a
			href="/"
			class="normal-case md:text-5xl text-3xl font-bold md:mb-5"
			style="font-family: 'Montserrat Subrayada', sans-serif;"
		>
			HANDYMANS.PL
		</a>
		<div class="div-control w-full max-w-xs place-self-center">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				placeholder="ty@gdzies.pl"
				class="input input-bordered w-full"
				bind:value={email}
			/>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label" />
		</div>
		<div class="div-control w-full max-w-xs">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Hasło</span>
			</label>
			<input type="password" placeholder="Hasło123!" class="input input-bordered w-full max-w-xs" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<button class="btn w-full max-w-xs" type="submit" on:click={SubmitLogin}>Zaloguj</button>
		<p>Nie masz jeszcze konta?</p>
		<div class="tooltip" data-tip="Przepraszamy, ale obecnie nie ma możliwości rejestracji">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="link link-primary link-hover" disabled>Zarejestruj się</a>
		</div>
	</div>

	<div class="modal modal-bottom sm:modal-middle bg-black/40 {modalStatus ? 'modal-open' : ''}">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Niepoprawny login lub hasło</h3>
			<p class="py-4">
				Na razie prosimy o zalogowanie jako zwykły użytkownik pod emailem: <br />
			</p>
			<b>{DefaultUsers.normal.email}</b>
			<br />
			Lub jako usługodawca pod emailem:
			<br />
			<b>{DefaultUsers.provider.email}</b>
			<hr />
			<u>Wpisane hasło nie ma znaczenia</u>
			<div class="modal-action">
				<button class="btn" on:click={hideModal}>Ok</button>
			</div>
		</div>
	</div>
</div>
