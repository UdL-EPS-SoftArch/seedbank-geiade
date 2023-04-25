import { HateoasResource, Resource } from "@lagoshny/ngx-hateoas-client";
import { User } from "../login-basic/user";
import { Collection } from "cypress/types/lodash";

@HateoasResource('propagators')
export class Propagator extends Resource{
    uri: string;
    id: string;
    email: string;
    password: string;
    passwordReset: boolean;
    role: string;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }

}