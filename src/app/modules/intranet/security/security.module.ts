import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { SecurityRoutingModule } from './security-routing.module';

//Components
import { SecurityUsersComponent } from './views/users/index/users.component';

//Services
import { UsersService } from './services/users.service';

// Shared
import { CoreModule } from '../../../shared/core/core.module';
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
    imports: [
        SecurityRoutingModule,
        CommonModule,
        CoreModule,
        ComponentsModule
    ],
    declarations: [SecurityUsersComponent],
    providers: [UsersService]
})
export class SecurityModule { }
