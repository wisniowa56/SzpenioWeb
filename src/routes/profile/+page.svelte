<script>
	// @ts-nocheck

	import Navbar from "$lib/component/navbar.svelte";
</script>

<Navbar />
<div class="flex flex-col bg-base-200 min-h-screen justify-center items-center overflow-hidden z-0">
	<div
		class="flex flex-col w-screen md:w-fit grid-cols-1 gap-5 bg-white/50 backdrop-blur drop-shadow-2xl md:p-12 p-2 rounded-2xl justify-center mt-20"
	>
		<div class="flex flex-col md:flex-row w-fill justify-center">
			<div class="avatar placeholder justify-center mb-2 md:mb-0">
				<div class="bg-neutral-focus text-neutral-content rounded-full w-16 mx-5 self-start">
					<span class="text-xl">LU</span>
				</div>
			</div>
			<div class="flex flex-col md:w-96 gap-y-3">
				<div class="flex flex-row items-center justify-between">
					<p class="mr-5 text-md md:text-lg">Imię:</p>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-[280px]"
						value="Logged"
					/>
				</div>
				<div class="flex flex-row items-center justify-between">
					<p class="mr-5 text-md md:text-lg">Nazwisko:</p>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-[280px]"
						value="User"
					/>
				</div>
				<div class="flex flex-row items-center justify-between">
					<p class="mr-5 text-md md:text-lg">Email:</p>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-[280px]"
						value="uzytkownik.zwykly@email.pl"
					/>
				</div>
				<div class="flex flex-row items-center justify-between">
					<p class="mr-5 text-md md:text-lg">Adres:</p>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-[280px]"
						value="Warszawa ul. Wiśniowa 56"
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-row items-center justify-between">
			<p class="mr-5 text-md md:text-lg">Opis:</p>
			<textarea
				type="text"
				placeholder="Type here"
				class="textarea textarea-bordered w-full h-40"
				value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget."
			/>
		</div>
		<div class="flex w-full justify-center overflow-x-auto md:overflow-x-hidden overflow-y-hidden z-1">
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
					<!-- row 1 -->
					<tr class="h-fit max-h-xl">
						<td class="rounded-l-lg">
							<div class="flex items-center space-x-3">
								<div>
									<div class="dropdown mr-5">
										<label tabindex="0" class="btn m-1"
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
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
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
								</div>
							</div>
						</td>
						<td class="text-justify truncate max-w-md break-normal"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
							sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
							sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
							egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
							Mauris fringilla mauris dolor, id consequat metus gravida eget.</td
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
					<tr class="h-fit max-h-xl">
						<td class="rounded-l-lg">
							<div class="flex items-center space-x-3">
								<div>
									<div class="dropdown mr-5">
										<label tabindex="0" class="btn m-1"
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
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
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
								</div>
							</div>
						</td>
						<td class="text-justify truncate max-w-md break-normal"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
							sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
							sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
							egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
							Mauris fringilla mauris dolor, id consequat metus gravida eget.</td
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
					<tr class="h-fit max-h-xl">
						<td class="rounded-l-lg">
							<div class="flex items-center space-x-3">
								<div>
									<div class="dropdown mr-5">
										<label tabindex="0" class="btn m-1"
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
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
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
								</div>
							</div>
						</td>
						<td class="text-justify truncate max-w-md break-normal"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
							sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
							sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
							egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
							Mauris fringilla mauris dolor, id consequat metus gravida eget.</td
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
					<tr class="h-fit max-h-xl">
						<td class="rounded-l-lg">
							<div class="flex items-center space-x-3">
								<div>
									<div class="dropdown mr-5">
										<label tabindex="0" class="btn m-1"
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
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
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
								</div>
							</div>
						</td>
						<td class="text-justify truncate max-w-md break-normal"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
							sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
							sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
							egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
							Mauris fringilla mauris dolor, id consequat metus gravida eget.</td
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
					<tr class="h-fit max-h-xl">
						<td class="rounded-l-lg">
							<div class="flex items-center space-x-3">
								<div>
									<div class="dropdown mr-5">
										<label tabindex="0" class="btn m-1"
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
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
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
								</div>
							</div>
						</td>
						<td class="text-justify truncate max-w-md break-normal"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
							sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
							sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
							egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
							Mauris fringilla mauris dolor, id consequat metus gravida eget.</td
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
					<tr class="h-fit max-h-xl">
						<td class="rounded-l-lg">
							<div class="flex items-center space-x-3">
								<div>
									<div class="dropdown mr-5">
										<label tabindex="0" class="btn m-1"
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
										<ul
											tabindex="0"
											class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
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
								</div>
							</div>
						</td>
						<td class="text-justify truncate max-w-md break-normal"
							>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
							sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
							sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
							egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
							Mauris fringilla mauris dolor, id consequat metus gravida eget.</td
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
		<div class="flex justify-end">
			<button class="btn btn-primary w-full md:max-w-fit">Zapisz</button>
		</div>
	</div>
</div>
