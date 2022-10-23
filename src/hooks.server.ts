import type { HandleServerError } from "@sveltejs/kit";

export const handleError: HandleServerError = ({ error }) => {
	return {
		message: "Yikes",
		code: ((error as any).code as string | null) ?? "UNKNOWN"
	};
};
