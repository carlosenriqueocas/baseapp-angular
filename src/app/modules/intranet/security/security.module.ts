import { NgModule } from '@angular/core';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityUsersComponent } from './views/users/index/users.component';

@NgModule({
    imports: [
        SecurityRoutingModule
    ],
    declarations: [SecurityUsersComponent],
    providers: [],
})
export class SecurityModule { }
