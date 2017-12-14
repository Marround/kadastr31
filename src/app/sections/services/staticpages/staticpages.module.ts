import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule,
  MatTabsModule, MatInputModule, MatFormFieldModule, MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DelimitationplanComponent } from './delimitationplan/delimitationplan.component';
import { TechnicalplanComponent } from './technicalplan/technicalplan.component';
import { ActofinspectionComponent } from './actofinspection/actofinspection.component';
import { ShareallocationComponent } from './shareallocation/shareallocation.component';
import { LocationsurveyComponent } from './locationsurvey/locationsurvey.component';
import { BuildingmeasureComponent } from './buildingmeasure/buildingmeasure.component';
import { ZonesComponent } from './zones/zones.component';


@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatCardModule, MatTabsModule, MatListModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  declarations: [DelimitationplanComponent, TechnicalplanComponent, ActofinspectionComponent, ShareallocationComponent, LocationsurveyComponent, BuildingmeasureComponent, ZonesComponent],
  exports: [DelimitationplanComponent, TechnicalplanComponent, ActofinspectionComponent, ShareallocationComponent, LocationsurveyComponent, BuildingmeasureComponent, ZonesComponent]
})

export class StaticPagesModule {

}
