import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'happyfeet',
    loadChildren: () => import('./filmes/happyfeet/happyfeet.module').then( m => m.HappyfeetPageModule)
  },

  {
    path: 'spacejam',
    loadChildren: () => import('./filmes/spacejam/spacejam.module').then( m => m.SpacejamPageModule)
  },

  {
    path: 'vingadoresult',
    loadChildren: () => import('./filmes/vingadoresult/vingadoresult.module').then( m => m.VingadoresultPageModule)
  },

  {
    path: 'johnwick3',
    loadChildren: () => import('./filmes/johnwick3/johnwick3.module').then( m => m.Johnwick3PageModule)
  },

  {
    path: 'yourname',
    loadChildren: () => import('./filmes/yourname/yourname.module').then( m => m.YournamePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
