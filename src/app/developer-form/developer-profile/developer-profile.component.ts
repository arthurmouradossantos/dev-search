import { Component, Input, OnInit } from '@angular/core';
import { DeveloperProfile } from 'src/app/interfaces/developer-profile';

@Component({
  selector: 'app-developer-profile',
  templateUrl: './developer-profile.component.html',
  styleUrls: ['./developer-profile.component.scss'],
})
export class DeveloperProfileComponent implements OnInit {
  @Input() profile!: DeveloperProfile;

  constructor() {}

  ngOnInit(): void {}
}
