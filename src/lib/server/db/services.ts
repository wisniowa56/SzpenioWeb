import type Service from "$lib/server/models/service";
import { v4 as uuid } from "uuid";
import { ValidCategories } from "$lib/constants";

let services: Service[] = [];

export function getServices(): Service[] {
    if (services.length === 0) {
        generate();
    }

    return services;
}

const generate = () => {
    for (let i = 0; i < 1000; i++) {
        const isFreelance = Math.random() > 0.75;
        var elem: Service = {
            id: uuid(),
            category: ValidCategories[Math.random() * ValidCategories.length | 0].name,
            avatarUrl: "https://placeimg.com/400/225/arch",
            personName: "Jan Kowalski",
            personPosition: "Chief Executive Officer",
            companyName: isFreelance ? null : "Big Company Ltd.",
            companyAddress: isFreelance ? null : "Wiśniowa 56, Warszawa",
            description: "Lorem ipsum etc.",
            rating: (Math.random() * 4) + 1
        };

        services = [...services, elem];
    }
}
