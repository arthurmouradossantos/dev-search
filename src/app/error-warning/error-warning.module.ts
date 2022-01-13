import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorWarningComponent } from './error-warning.component';

@NgModule({
  declarations: [ErrorWarningComponent],
  imports: [CommonModule, MatDialogModule],
})
export class ErrorWarningModule {}
