import { isAuthenticated } from "$lib/store";
import { get } from "svelte/store";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	if (!get(isAuthenticated)) throw redirect(307, "/login?returnUrl=/profile");
};
