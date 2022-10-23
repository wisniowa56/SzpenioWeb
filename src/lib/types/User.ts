export default interface User {
	id: number;
	username: string;
	name: {
		first: string;
		last: string;
	};

	email: string;

	isProvider: boolean;
}
