import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCardSushiBoxesComponent } from './component/container-card-sushi-boxes/container-card-sushi-boxes.component';
import { CardSushiBoxComponent } from './component/panier/panier.component';

const routes: Routes = [
  { path:"", component: ContainerCardSushiBoxesComponent },
  {path:"/panier",component: CardSushiBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
