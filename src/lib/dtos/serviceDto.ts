export default interface ServiceDto {
    id: number;
	category: string;
	person: {
        id: number;
        fullName: string;
        avatarUrl: string | null;
        position: string | null;
    };
	provider: {
        id: number;
        name: string;
        address: string | null;
    };
	description: string;
	rating: number;
}