<div
	class="navbar 3xl:max-w-[1920px] lg:mx-2 sm:mx-0 fixed md:top-2 z-50 lg:max-w-[99%] md:max-w-full bg-white/60 backdrop-blur md:rounded-lg drop-shadow-md self-center"
>
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-circle ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a href="/categories/budowlanka">Budowlanka</a></li>
				<li><a>Copywriter</a></li>
				<li><a>Dekarz</a></li>
				<li><a>Elektryk</a></li>
				<li><a>Fotograf</a></li>
				<li><a>Fryzjer</a></li>
				<li><a>Grafik</a></li>
				<li><a>Groomer</a></li>
				<li><a>Hydraulik</a></li>
				<li><a>Kierowca</a></li>
				<li><a>Kosmetyczka</a></li>
				<li><a>Księgowa</a></li>
				<li><a>Mechanik</a></li>
				<li><a>Nauczyciel</a></li>
			</ul>
		</div>
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
			class="btn btn-ghost normal-case md:text-3xl text-xs font-bold mr-8 md:mr-0"
			style="font-family: 'Montserrat Subrayada', sans-serif;">HANDYMANS.PL</a
		>
	</div>
	<div class="navbar-end">
		<a href="/Register"><button class="btn btn-ghost">Zarejestruj</button></a>
		<a href="/login"><button class="btn btn-ghost">Zaloguj </button></a>
	</div>
</div>
