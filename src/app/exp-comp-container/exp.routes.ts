import { Route } from "@angular/router";
import { PrivateApiComponent } from "./private-api/private-api.component";
import { ExpOneComponent } from "./public-api/exp-one.component";


export const express_routes : Route[] = [
    {path: 'public_api', component: ExpOneComponent},
    {path: 'private_api', component: PrivateApiComponent}
]