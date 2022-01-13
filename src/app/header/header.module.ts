import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatSlideToggleModule, FlexLayoutModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
