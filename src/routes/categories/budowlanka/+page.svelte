<script>
	// @ts-nocheck

	import Navbar from "$lib/component/navbar.svelte";
</script>

<Navbar />
<div class="flex md:pt-24 pt-20 bg-base-200 content-center justify-center">
	<div class="md:flex bg-base-200 w-10/12 justify-start items-center">
		<div class="mr-2"><p>Kategoria:</p></div>
		<div>
			<div class="dropdown mr-5">
				<label tabindex="0" class="btn m-1"
					>Budowlanka <svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					></label
				>
				<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
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
					<label for="my-modal-5" class="btn btn-primary modal-button">Umów się</label>
				</th>
				<input type="checkbox" id="my-modal-5" class="modal-toggle" />
				<div class="modal bg-black/40">
					<div class="modal-box w-11/12 max-w-5xl bg-white/70 backdrop-blur">
						<div class="avatar max-h-16">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
							<div class="flex flex-col">
								<div class="font-bold ml-5">Hart Hagerty</div>
								<div class="rating ml-5">
									<input
										type="radio"
										name="rating-12"
										class="mask mask-star-2 bg-orange-400"
										disabled
										checked
									/>
									<input
										type="radio"
										name="rating-12"
										class="mask mask-star-2 bg-orange-400"
										disabled
									/>
									<input
										type="radio"
										name="rating-12"
										class="mask mask-star-2 bg-orange-400"
										disabled
									/>
									<input
										type="radio"
										name="rating-12"
										class="mask mask-star-2 bg-orange-400"
										disabled
									/>
									<input
										type="radio"
										name="rating-12"
										class="mask mask-star-2 bg-orange-400"
										disabled
									/>
								</div>
							</div>
						</div>
						<p class="mb-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et
							sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis
							sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien
							egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at.
							Mauris fringilla mauris dolor, id consequat metus gravida eget.
						</p>
						<div class="carousel w-full my-10 rounded-lg scroll-mt-10">
							<div id="slide1" class="carousel-item relative w-full">
								<img src="https://pliki.wnp.pl/d/39/93/64/399364_r2_940.jpg" alt="image" class="w-full" />
								<div
									class="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2"
								>
									<a href="#slide2" class="btn btn-circle">❯</a>
								</div>
							</div>
							<div id="slide2" class="carousel-item relative w-full">
								<img src="https://www.analizy.pl/media/images/dom_budowa.jpg" alt="image" class="w-full" />
								<div
									class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
								>
									<a href="#slide1" class="btn btn-circle">❮</a>
								</div>
							</div>
						</div>
						<iframe
							class="rounded-lg w-full max-h-72 sm:max-h-max"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.832380511147!2d21.00908893513443!3d52.21009350215986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccdc8873cc4d%3A0xe5a891bbaff71b66!2sWi%C5%9Bniowa%2056%2C%2002-520%20Warszawa!5e0!3m2!1spl!2spl!4v1666453508748!5m2!1spl!2spl"
							width="600"
							height="450"
							style="border:0;"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
						<div class="flex flex-row mt-10 justify-center">
							<p>Oceń usługodawcę:</p>
							<div class="rating ml-5">
								<input type="radio" name="rating-20" class="rating-hidden" checked/>
								<input type="radio" name="rating-20" class="mask mask-star-2 bg-orange-400" />
								<input
									type="radio"
									name="rating-20"
									class="mask mask-star-2 bg-orange-400"
								/>
								<input type="radio" name="rating-20" class="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-20" class="mask mask-star-2 bg-orange-400" />
								<input type="radio" name="rating-20" class="mask mask-star-2 bg-orange-400" />
							</div>
						</div>

						<div class="modal-action">
							<label for="my-modal-5" class="btn">Ok</label>
						</div>
					</div>
				</div></tr
			>
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
