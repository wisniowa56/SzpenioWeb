import { getProviders } from "$lib/db";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url }) => {
	const providers = getProviders();

	const limit = Number.parseInt(url.searchParams.get("limit") ?? "20");
	if (limit < 0 || limit > 100) {
		throw error(400, {
			message: "Limit must be in range [1,100)"
		});
	}

	const offset = Number.parseInt(url.searchParams.get("offset") ?? "0");
	if (offset < 0) {
		throw error(400, {
			message: "Offset must be a positive number"
		});
	}

	const requested = providers.slice(offset, offset + limit);

	return json(requested);
};
