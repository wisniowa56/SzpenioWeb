<script>
	// @ts-nocheck

	import Navbar from "$lib/component/navbar.svelte";
</script>

<Navbar />
<div class="flex md:pt-24 pt-20 bg-base-200 content-center justify-center">
    <div class="md:flex bg-base-200 w-10/12 justify-start items-center">
        <div class="mr-2"><p>Kategoria: </p></div>
        <div><div class="dropdown mr-5">
            <label tabindex="0" class="btn m-1">Budowlanka <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></label>
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
        <div class="mr-2"><p>Lokalizacja: </p></div>
        <input type="text" placeholder="Warszawa" class="input input-bordered input-primary w-full max-w-xs" />
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <td class="rounded-tl-lg">
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
            <br>
            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td class="whitespace-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.</td>
          <th class="rounded-tr-lg">
            <button class="btn btn-secondary">Umów się</button>
          </th>
        </tr>
        <!-- row 2 -->
        <tr>
          <td>
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
            <br>
            <span class="badge badge-ghost badge-sm">Tax Accountant</span>
          </td>
          <td class="whitespace-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.</td>
          <th>
            <button class="btn btn-secondary">Umów się</button>
          </th>
        </tr>
        <!-- row 3 -->
        <tr>
          <td>
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
            <br>
            <span class="badge badge-ghost badge-sm">Office Assistant I</span>
          </td>
          <td class="whitespace-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.</td>
          <th>
            <button class="btn btn-secondary">Umów się</button>
          </th>
        </tr>
        <!-- row 4 -->
        <tr>
          <td class="rounded-bl-lg">
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
            <br>
            <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
          </td>
          <td class="whitespace-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.</td>
          <th class="rounded-br-lg">
            <button class="btn btn-secondary">Umów się</button>
          </th>
        </tr>
        <tr>
            <td class="rounded-bl-lg">
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
              <br>
              <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
            </td>
            <td class="whitespace-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.</td>
            <th class="rounded-br-lg">
              <button class="btn btn-secondary">Umów się</button>
            </th>
          </tr>
          <tr>
            <td class="rounded-bl-lg">
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
              <br>
              <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
            </td>
            <td class="whitespace-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit ipsum et sapien egestas tincidunt. Curabitur ullamcorper felis quam, a semper felis sollicitudin at. Mauris fringilla mauris dolor, id consequat metus gravida eget.</td>
            <th class="rounded-br-lg">
              <button class="btn btn-secondary">Umów się</button>
            </th>
          </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th>Imię</th>
          <th>Firma</th>
          <th>Opis</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>