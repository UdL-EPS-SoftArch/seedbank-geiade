import { HateoasResource, Resource } from "@lagoshny/ngx-hateoas-client";
import { User } from "../login-basic/user";
import { Propagator } from "../propagator/propagator";
import { Take } from "../take/take";

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
