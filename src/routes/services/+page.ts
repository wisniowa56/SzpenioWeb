import type { Data } from "./data";
import type { PageLoad } from "./$types";
import { validateCategory } from "$lib/utils";
import { ValidCategories } from "$lib/constants";

export const load: PageLoad<Data> = ({ url }) => {
    const category = url.searchParams.get("category");

    return {
        category: validateCategory(category) ?? ValidCategories[0].name
    };
}