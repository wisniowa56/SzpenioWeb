import { DefaultProvider } from "$lib/constants";
import type { Provider } from "$lib/types";

const providers: Provider[] = [DefaultProvider];

export function getProviders(): Provider[] {
	return providers;
}
