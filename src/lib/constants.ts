import type { Category, User } from "$lib/types";
import type { Provider } from "./types";

export const ValidCategories: Category[] = [
	{
		name: "budowlanka",
		catchphrase: "Potrzebujesz pomocy przy budowie?",
		thumbnailUrl: "/img/categoryThumbnails/Budowlanka.png"
	},
	{
		name: "copywriting",
		catchphrase: "Potrzebujesz pomocy przy pisaniu?",
		thumbnailUrl: "/img/categoryThumbnails/Copywriting.jpg"
	},
	{
		name: "dekarz",
		catchphrase: "Potrzebujesz pomocy przy naprawie dachu?",
		thumbnailUrl: "/img/categoryThumbnails/Dekarz.jpg"
	},
	{
		name: "elektryk",
		catchphrase: "Potrzebujesz pomocy przy elektryce? Jak wiadomo, elektryka prąd nie tyka.",
		thumbnailUrl: "/img/categoryThumbnails/Elektryk.jpg"
	},
	{
		name: "fotograf",
		catchphrase: "Potrzebujesz fotografa? Znajdziesz go w mgnieniu oka.",
		thumbnailUrl: "/img/categoryThumbnails/Fotograf.jpg"
	},
	{
		name: "fryzjer",
		catchphrase: "Potrzebujesz pomocy z fryzurą?",
		thumbnailUrl: "/img/categoryThumbnails/Fryzjer.jpg"
	},
	{
		name: "grafik",
		catchphrase: "Potrzebujesz pomocy przy grafice?",
		thumbnailUrl: "/img/categoryThumbnails/Grafik.jpg"
	},
	{
		name: "groomer",
		catchphrase: "Potrzebujesz pomocy przy ukochanym zwierzątku?",
		thumbnailUrl: "/img/categoryThumbnails/Groomer.png"
	},
	{
		name: "hydraulik",
		catchphrase: "Potrzebujesz pomocy przy hydraulice?",
		thumbnailUrl: "/img/categoryThumbnails/Hydraulik.jpg"
	},
	{
		name: "kierowca",
		catchphrase: "Potrzebujesz kogoś lub coś przewieźć?",
		thumbnailUrl: "/img/categoryThumbnails/Kierowca.jpg"
	},
	{
		name: "kosmetyczka",
		catchphrase: "Potrzebujesz pomocy przy makijażu?",
		thumbnailUrl: "/img/categoryThumbnails/Kosmetyczka.jpg"
	},
	{
		name: "księgowość",
		catchphrase: "Potrzebujesz pomocy przy rachunkach?",
		thumbnailUrl: "/img/categoryThumbnails/Księgowa.jpg"
	},
	{
		name: "mechanik",
		catchphrase: "Potrzebujesz pomocy przy samochodzie?",
		thumbnailUrl: "/img/categoryThumbnails/Mechanik.jpg"
	},
	{
		name: "nauczyciel",
		catchphrase: "Potrzebujesz pomocy w nauce?",
		thumbnailUrl: "/img/categoryThumbnails/Nauczyciel.jpg"
	},
	{
		name: "konserwator",
		catchphrase: "Potrzebujesz pomocy przy sprzątaniu?",
		thumbnailUrl: "/img/categoryThumbnails/Sprzątaczka.jpg"
	}
];

export const DefaultUsers: { normal: User; provider: User } = {
	normal: {
		id: 0,
		username: "JohnnySilverhand2077",
		name: {
			first: "Jan",
			last: "Kowalski"
		},
		email: "uzytkownik@handymans.pl",
		providerId: null,
		avatarUrl: "https://placeimg.com/640/480/people"
	},
	provider: {
		id: 1,
		username: "Daleqi1",
		name: {
			first: "Adam",
			last: "Daleki"
		},
		email: "uslugodawca@handymans.pl",
		providerId: 0,
		avatarUrl: "https://placeimg.com/640/480/people"
	}
};

export const DefaultProvider: Provider = {
	id: 0,
	managementIds: [DefaultUsers.provider.id],
	employees: [
		{
			id: DefaultUsers.provider.id,
			position: "Dyrektor"
		}
	],
	name: "Janushex",
	contact: {
		email: "janushex@janushex.pl",
		phoneNumber: "+48123456789",
		location: {
			address: {
				city: "Warszawa",
				firstLine: "ul. Wiśniowa 56",
				region: "Mazowieckie",
				secondLine: null,
				postalCode: "02-520"
			},
			coordinates: {
				latitude: 52.21024,
				longitude: 21.014
			}
		}
	}
};
