import { interfaces } from "inversify-express-utils";
import Principal from "./principal";

export function principalFactory(userDetails?: any): interfaces.Principal {
    return new Principal(
        userDetails ? userDetails : null,
        this
    );
}
