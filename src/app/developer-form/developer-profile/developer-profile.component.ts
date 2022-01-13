import { Component, Input } from '@angular/core';
import { DeveloperProfile } from 'src/app/developer-profile';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html',
  styleUrls: ['./developer-profile.component.scss'],
})
export class DeveloperProfileComponent {
  @Input() profile!: DeveloperProfile;
}
