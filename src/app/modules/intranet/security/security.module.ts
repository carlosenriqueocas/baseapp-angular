import { NgModule } from '@angular/core';
// Routing
import { SecurityRoutingModule } from './security-routing.module';

//Components
import { SecurityUsersComponent } from './views/users/index/users.component';

//Services
import { UsersService } from './services/users.service';

// Shared
import { CoreModule } from '../../../shared/core/core.module';

@NgModule({
    imports: [
        SecurityRoutingModule,
        CoreModule
    ],
    declarations: [SecurityUsersComponent],
    providers: [UsersService]
})
export class SecurityModule { }
