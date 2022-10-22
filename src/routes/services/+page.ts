import type { Data } from "./data";
import { ValidCategories } from "$lib/constants";

export const load = ({ url }: { url: URL }): Data => {
    const category = url.searchParams.get("category");

    return {
        category: validateCategory(category)
    };
}

const validateCategory = (category: string | null): string => {
    if (category === null) {
        return ValidCategories[0].name;
    }
    const lowered = category.toLowerCase();
    if (ValidCategories.find(x => x.name == lowered)) {
        return lowered;
    }
    return ValidCategories[0].name;
}