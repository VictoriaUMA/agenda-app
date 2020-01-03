import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaUpdateComponent } from './components/persona-update/persona-update.component';
import { PersonaAddComponent } from './components/persona-add/persona-add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personas-list' },
  { path: 'add-persona', component: PersonaAddComponent },
  { path: 'edit-persona/:id', component: PersonaUpdateComponent },
  { path: 'personas-list', component: PersonaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
