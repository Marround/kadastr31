import {DelimitationplanComponent} from './delimitationplan/delimitationplan.component';
import {TechnicalplanComponent} from './technicalplan/technicalplan.component';
import {ActofinspectionComponent} from './actofinspection/actofinspection.component';
import {ShareallocationComponent} from './shareallocation/shareallocation.component';
import {LocationsurveyComponent} from './locationsurvey/locationsurvey.component';
import {BuildingmeasureComponent} from './buildingmeasure/buildingmeasure.component';
import {ZonesComponent} from './zones/zones.component';

export const staticPagesRouts = [
  {path: 'delimitationplan', component: DelimitationplanComponent},
  {path: 'technicalplan', component: TechnicalplanComponent},
  {path: 'actofinspection', component: ActofinspectionComponent},
  {path: 'shareallocation', component: ShareallocationComponent},
  {path: 'locationsurvey', component: LocationsurveyComponent},
  {path: 'buildingmeasure', component: BuildingmeasureComponent},
  {path: 'zones', component: ZonesComponent},
]
