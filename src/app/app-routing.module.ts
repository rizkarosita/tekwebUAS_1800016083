import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AplikasiComponent } from './aplikasi/aplikasi.component';

const routes: Routes = [
{
	path:'login',
	component:LoginComponent
},
{
	path:'',
	redirectTo:'login',
	pathMatch: 'full'
},
{
	path:'aplikasi',
	component:AplikasiComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
