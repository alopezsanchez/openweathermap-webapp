import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    ToolbarComponent,
    MatCardModule
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class MaterialModule { }
