export default interface Service {
	id: string;
	category: string;
	avatarUrl: string;
	personName: string;
	personPosition: string;
	companyName: string | null;
	companyAddress: string | null;
	description: string;
	rating: number;
}
