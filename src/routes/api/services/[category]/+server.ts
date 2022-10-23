import type { ServiceDto } from "$lib/dtos";
import { getProviders, getServices, getUsers } from "$lib/server/db";
import type { Service } from "$lib/server/models";
import { validateCategory } from "$lib/utils";
import { error, json } from "@sveltejs/kit";
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
		.slice(offset, offset + limit)
		.map(mapFn);

	return json(requested);
};

const mapFn = (x: Service): ServiceDto => {
	const user = getUsers().find((u) => u.id === x.personId);
	if (!user) {
		throw error(500, {
			message: "User with specified ID not found"
		});
	}

	const provider = getProviders().find((p) => p.id === x.providerId);
	if (!provider) {
		throw error(500, {
			message: "Provider with specified ID not found"
		});
	}

	return {
		id: x.id,
		category: x.category,
		description: x.description,
		rating: x.rating,
		person: {
			id: x.personId,
			avatarUrl: user.avatarUrl,
			fullName: `${user.name.first} ${user.name.last}`,
			position: provider.employees.find((e) => e.id === user.id)?.position ?? null
		},
		provider: {
			id: x.providerId,
			address: addressToString(provider.contact.location.address),
			name: provider.name
		}
	};
};

const addressToString = (
	address: {
		firstLine: string;
		city: string;
	} | null
): string | null => {
	if (!address) {
		return null;
	}

	return `${address.city}, ${address.firstLine}`;
};
