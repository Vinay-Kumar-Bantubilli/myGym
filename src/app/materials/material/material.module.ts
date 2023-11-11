import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


const materialModules:any = [
  MatButtonModule,MatSidenavModule,MatToolbarModule,MatTableModule,
  MatInputModule,MatSelectModule,MatCheckboxModule, MatSelectModule,MatIconModule,MatMenuModule
]


@NgModule({
  imports:materialModules,
  exports:materialModules
})
export class MaterialModule { }
