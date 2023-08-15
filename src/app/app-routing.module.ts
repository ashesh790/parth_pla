import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import {ProductDetailsComponent} from './product-details/product-details.component'
import { PpTapeFibrillatedExtrusionPlantComponent } from './pp-tape-fibrillated-extrusion-plant/pp-tape-fibrillated-extrusion-plant.component';
import { MonoDanlineExtrusionPlantComponent } from './mono-danline-extrusion-plant/mono-danline-extrusion-plant.component';
import { PpHdpeMonofilamentExtrusionYarnPlantComponent } from './pp-hdpe-monofilament-extrusion-yarn-plant/pp-hdpe-monofilament-extrusion-yarn-plant.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'add_products', component: ProductDetailsComponent },
  { path : "app-pp-tape-fibrillated-extrusion-plant", component:PpTapeFibrillatedExtrusionPlantComponent},
  { path : "app-mono-danline-extrusion-plant", component:MonoDanlineExtrusionPlantComponent},
  { path : "app-pp-hdpe-monofilament-extrusion-yarn-plant", component:PpHdpeMonofilamentExtrusionYarnPlantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
