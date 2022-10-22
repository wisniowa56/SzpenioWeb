import type { HandleServerError } from "@sveltejs/kit";

export const handleError: HandleServerError = ({ error, event }) => {
    return {
        message: "Yikes",
        code: (error as any).code ?? "UNKNOWN"
    }
}