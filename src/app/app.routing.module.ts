import { RouterModule, Routes } from '@angular/router';
import { HelloworldComponent } from 'app/helloworld/helloworld.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { BootstrapLayoutComponent } from 'app/layouts/bootstrap-layout.component';
import { ElementPageComponent } from 'app/element-page/element-page.component';
import { ApiService } from 'app/services/api.service';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: BootstrapLayoutComponent,
        children: [
            { path: 'hello-world', component: HelloworldComponent },
            { path: 'home', component: HomePageComponent },
            { path: 'element-page', component: ElementPageComponent }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [
        ApiService
    ]
})
export class AppRoutingModule {


}