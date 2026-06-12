import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';

export const routes: Routes = [
{
    //ruta principal
    path: '',
    component: Home
},
{
    path: 'productos',
    loadChildren: () => import('./modules/productos/productos-module').then(
        (modules) => modules.ProductosModule)

},
{
    path: 'usuarios',
    loadChildren: () => import('./modules/usuarios/usuarios-module').then(
        (modules) => modules.UsuariosModule)
},
{
    path:'**',
    redirectTo:''
}
];
