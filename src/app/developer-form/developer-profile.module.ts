import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DeveloperFormComponent } from './developer-form.component';
import { DeveloperProfileComponent } from './developer-profile/developer-profile.component';
import { ErrorWarningModule } from '../error-warning/error-warning.module';

@NgModule({
  declarations: [DeveloperFormComponent, DeveloperProfileComponent],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    ErrorWarningModule,
  ],
  exports: [DeveloperFormComponent],
})
export class DeveloperProfileModule {}
