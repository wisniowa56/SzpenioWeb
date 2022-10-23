export default interface Provider {
	id: number;
	name: string;
	managementIds: number[];
	employees: {
		id: number;
		position: string;
	}[];
	contact: {
		phoneNumber: string | null;
		email: string | null;
		location: {
			address: {
				firstLine: string;
				secondLine: string | null;
				city: string;
				region: string;
				postalCode: string;
			};
			coordinates: {
				latitude: number;
				longitude: number;
			} | null;
		};
	};
}
