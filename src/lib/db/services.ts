import type { Service } from "$lib/types";
import { DefaultProvider, DefaultUsers, ValidCategories } from "$lib/constants";

let services: Service[] = [];

export function getServices(): Service[] {
	if (services.length === 0) {
		generate(100);
	}

	return services;
}

const generate = (num: number) => {
	for (let i = 0; i < num; i++) {
		const elem: Service = {
			id: i,
			personId: DefaultUsers.provider.id,
			providerId: DefaultProvider.id,
			category: ValidCategories[(Math.random() * ValidCategories.length) | 0].name,
			description: "Lorem ipsum etc.",
			rating: Math.random() * 4 + 1
		};

		services = [...services, elem];
	}
};
