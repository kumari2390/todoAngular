import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
 path: '',
 redirectTo: '/login',
 pathMatch: 'full'
  },

  {
    path: 'todoList',
    component: TodoListComponent
  },

{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
