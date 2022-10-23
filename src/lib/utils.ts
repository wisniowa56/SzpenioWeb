import { ValidCategories } from "./constants";

export function capitalizeFirst(input: string): string {
	return input.charAt(0).toUpperCase() + input.slice(1);
}

export function validateCategory(category: string | null): string | null {
	if (category === null) {
		return ValidCategories[0].name;
	}
	const lowered = category.toLowerCase();
	if (ValidCategories.find((x) => x.name == lowered)) {
		return lowered;
	}
	return null;
}
