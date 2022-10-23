import { getServices } from "$lib/server/db";
import { validateCategory } from "$lib/utils";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ params, url }) => {
	if (!params.category || validateCategory(params.category) === null) {
		throw error(400, {
			message: "Invalid category"
		});
	}

	const normalizedCategory = params.category.toLowerCase();

	const services = getServices();

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

	const requested = services
		.filter((x) => x.category == normalizedCategory)
		.slice(offset, offset + limit);

	return new Response(String(JSON.stringify(requested)));
};
