<script lang="ts">
	import { goto } from "$app/navigation";
	import { isAuthenticated, user } from "$lib/store";

	let emailAddress = "uzytkownik.zwykly@email.pl";
	let password = "haslo123";

	function SubmitLogin() {
		if (emailAddress == "uzytkownik.zwykly@email.pl" && password == "haslo123") {
			isAuthenticated.set(true);
			user.set({
				id: 0,
				name: {
					first: "Jan",
					last: "Kowalski"
				},
				username: "JohnnySilverhand2077",
				email: emailAddress,
				isProvider: false
			});
			goto("/"); // TODO go to profile overview
		} else if (emailAddress == "uzytkownik.uslugodawca@email.pl" && password == "haslo123") {
			isAuthenticated.set(true);
			user.set({
				id: 1,
				name: {
					first: "Adam",
					last: "Daleki"
				},
				username: "Daleqi1",
				email: emailAddress,
				isProvider: true
			});
			goto("/"); // TODO go to provider overview
		}
	}
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
				placeholder="email@email.pl"
				class="input input-bordered w-full"
				bind:value={emailAddress}
			/>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label" />
		</div>
		<div class="div-control w-full max-w-xs">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<span class="label-text">Hasło</span>
			</label>
			<input
				type="password"
				placeholder="haslo123"
				class="input input-bordered w-full max-w-xs"
				bind:value={password}
			/>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label" />
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label
			for="my-modal-6"
			class="btn modal-button w-full max-w-xs"
			type="submit"
			on:click={SubmitLogin}>Zaloguj</label
		>
		<p>Nie masz jeszcze konta?</p>
		<div class="tooltip" data-tip="Przepraszamy, ale obecnie nie ma możliwości rejestracji">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="link link-primary link-hover" disabled>Zarejestruj się</a>
		</div>
	</div>

	<input type="checkbox" id="my-modal-6" class="modal-toggle" />
	<div class="modal modal-bottom sm:modal-middle bg-black/40">
		<div class="modal-box">
			<h3 class="font-bold text-lg">Niepoprawny login lub hasło</h3>
			<p class="py-4">
				Na razie prosimy o zalogowanie jako zwykły użytkownik pod emailem: <br />
			</p>
			<b>uzytkownik.zwykly@email.pl, hasło: haslo123</b>
			<br />Lub jako usługodawca pod emailem:<br />
			<b>uzytkownik.uslugodawca@email.pl, hasło: haslo123</b>
			<div class="modal-action">
				<label for="my-modal-6" class="btn">Ok</label>
			</div>
		</div>
	</div>
</div>
