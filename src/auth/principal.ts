import { interfaces as expressInterfaces } from "inversify-express-utils";
import { Repository } from "typeorm";
import * as interfaces from "../interfaces";
import { isAuthenticated } from "./is_authenticated";

export default class Principal implements expressInterfaces.Principal {

    public details: any;
    private readonly _accountRepository: interfaces.AccountRepository;

    public constructor(
        details: any,
        accountRepository: interfaces.AccountRepository
    ) {
        this.details = details;
        this._accountRepository = accountRepository;
    }

    // We check it the user is authenticated
    public async isAuthenticated() {
        return await isAuthenticated(this.details);
    }

    // We check if the current user is the owner
    // of a given resource, in our application
    // there is only one kind of resource: Tweets
    public async isResourceOwner(resourceId: any) {
        return await this._accountRepository.isResourceOwner(this.details, resourceId);
    }

    // If user is authenticated we check if has a given role
    public async isInRole(roleName: string): Promise<boolean> {
        return await this._accountRepository.isInRole(this.details, roleName);
    }

}
