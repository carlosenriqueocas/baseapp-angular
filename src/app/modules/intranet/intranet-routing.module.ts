import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeAdminComponent,
            },
            {
                path: '',
                redirectTo: '/admin/home',
                pathMatch: 'full',
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IntranetRoutingModule { }