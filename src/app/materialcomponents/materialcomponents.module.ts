import {NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog'




const MaterialComponents=[
  MatButtonModule,MatIconModule,MatButtonToggleModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule,
  MatToolbarModule,MatSidenavModule,MatMenuModule,MatListModule,MatDividerModule,MatGridListModule,MatExpansionModule,
  MatCardModule,MatTabsModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatAutocompleteModule,
  MatCheckboxModule,MatRadioModule,MatDatepickerModule,MatTooltipModule,MatSnackBarModule,ScrollingModule,MatDatepickerModule,
  MatDialogModule
]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialcomponentsModule { }
