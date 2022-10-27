/** Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Shared module */
import { SharedModule } from '../../shared/shared.module';

/** Feature components */
import { UsersComponent } from './users.component';

/** Components */
import { UserInfoComponent } from './user-info/user-info.component';

/** Routes */
const routes: Routes = [
    {
        path: ':id',
        component: UserInfoComponent,
        data: {
            userName: 'user1',
            email: "user1@gmail.com",
            fullName: "John Doe",
            role: "admin"
        }
    }
]

@NgModule({
    declarations: [
        UsersComponent,
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class UsersModule { }
