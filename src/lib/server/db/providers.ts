import { DefaultProvider } from "$lib/constants";
import type { Provider } from "../models";

let providers: Provider[] = [DefaultProvider];

export function getProviders(): Provider[] {
	return providers;
}
