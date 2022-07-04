import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: NavigationComponent,
    canActivateChild: [],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./feature/home/home.module').then((m) => m.HomeModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
