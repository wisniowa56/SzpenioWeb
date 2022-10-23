import { getProviders } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ params }) => {
	if (!params.id) {
		throw error(400, {
			message: "Invalid id"
		});
	}

	const numId = Number.parseInt(params.id, 10);
	if (numId < 0) {
		throw error(400, {
			message: "Invalid id"
		});
	}

	const providers = getProviders();

	const provider = providers.find((x) => x.id === numId);

	if (!provider) {
		throw error(404, {
			message: "Not found"
		});
	}

	return json(provider);
};
