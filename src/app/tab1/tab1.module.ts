import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

//Importacion de nuestro pipes personalizados
import { PipesModule } from '../pipes/pipes.module';

//Importacion de nuestros componentes personalizados
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PipesModule, //modulo de pipes personalizados
    ComponentsModule //modulo de componentes personalizados
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
