import { isAuthenticated, user } from "$lib/store";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	isAuthenticated.set(false);
	user.set(null);

	throw redirect(307, "/");
};
