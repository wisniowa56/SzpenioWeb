import { DefaultUsers } from "$lib/constants";
import type { User } from "$lib/types";

const users: User[] = [DefaultUsers.normal, DefaultUsers.provider];

export function getUsers(): User[] {
	return users;
}
