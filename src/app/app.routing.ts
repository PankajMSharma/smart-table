import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: 'employees', component: AppComponent,
        children: [
            { path: 'add', component: FormComponent},
            { path: ':id/edit', component: FormComponent}
        ]
    },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {
}
