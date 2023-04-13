import { HateoasResource, Resource } from "@lagoshny/ngx-hateoas-client";
import { User } from "../login-basic/user";

@HateoasResource('donations')
export class Donation extends Resource{
    id: number;
    amount: number;
    weight: number;
    location: string;
    date: string;
    by: Donor;
    takenBy: Take;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }

}

export class Donor extends User{
    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }
}

export interface Take {

}