<!-- TODO backend -->

<div class="flex overflow-x-auto w-full justify-center pt-20">
	<table class="table max-w-[90%]">
		<!-- head -->
		<thead>
			<tr>
				<th>Imię</th>
				<th>Adres</th>
				<th>Opis zlecenia</th>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label for="my-modal-5" class="btn btn-primary modal-button">Zobacz</label>
				</th>
				<input type="checkbox" id="my-modal-5" class="modal-toggle" />
				<div class="modal bg-black/40">
					<div class="modal-box w-11/12 max-w-5xl bg-white/70 backdrop-blur">
						<div class="avatar max-h-16">
							<div class="mask mask-squircle w-12 h-12">
								<img src="https://placeimg.com/400/225/arch" alt="UserImage" />
							</div>
							<div>
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
						<iframe
							class="rounded-lg w-full max-h-72 sm:max-h-max"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.832380511147!2d21.00908893513443!3d52.21009350215986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccdc8873cc4d%3A0xe5a891bbaff71b66!2sWi%C5%9Bniowa%2056%2C%2002-520%20Warszawa!5e0!3m2!1spl!2spl!4v1666453508748!5m2!1spl!2spl"
							width="600"
							height="450"
							style="border:0;"
							allowfullscreen={false}
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
						<div class="modal-action">
							<label for="my-modal-5" class="btn">Ok</label>
						</div>
					</div>
				</div>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label class="btn btn-primary">Zobacz</label>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label class="btn btn-primary">Zobacz</label>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label class="btn btn-primary">Zobacz</label>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label class="btn btn-primary">Zobacz</label>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label class="btn btn-primary">Zobacz</label>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label class="btn btn-primary">Zobacz</label>
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
						</div>
					</div>
				</td>
				<td>
					Warszawa ul.Wiśniowa 56
					<br />
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
					<label class="btn btn-primary">Zobacz</label>
				</th>
			</tr>
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th>Imię</th>
				<th>Adres</th>
				<th>Opis zlecenia</th>
				<th>Ocena</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
