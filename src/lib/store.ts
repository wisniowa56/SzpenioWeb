import type { User } from "$lib/types";
import { writable } from "svelte-local-storage-store";

export const isAuthenticated = writable<boolean>("isAuthenticated", false);
export const user = writable<User | null>("user", null);
export const popupOpen = writable<boolean>("popupOpen", false);

// export const error = svelteWritable();
// export const tasks = svelteWritable([]);

// export const user_tasks = svelteDerived([tasks, user], ([$tasks, $user]) => {
//   let logged_in_user_tasks = [];

//   if ($user && $user.email) {
//     logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email);
//   }

//   return logged_in_user_tasks;
// });
