export default interface User {
	id: number;
	username: string;
	name: {
		first: string;
		last: string;
	};
	avatarUrl: string | null;
	email: string;
	isProvider: boolean;
}
