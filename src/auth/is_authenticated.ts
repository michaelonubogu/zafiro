import { interfaces } from "inversify-express-utils";

export function isAuthenticated(userDetails: any): Promise<boolean> {
    if (userDetails !== null && userDetails !== undefined) {
        return Promise.resolve(true);
    } else {
        return Promise.resolve(false);
    }
}
