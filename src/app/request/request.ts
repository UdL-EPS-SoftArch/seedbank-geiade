import { HateoasResource, Resource } from "@lagoshny/ngx-hateoas-client";
import { User } from "../login-basic/user";

@HateoasResource('requests')
export class Request extends Resource{
    uri: string;
    id: number;
    amount: number;
    weight: number;
    location: string;
    date: string;
    by: Propagator;
    fullfilledBy: Take;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }

}

export class Propagator extends User{
    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }
}

export interface Take {

}