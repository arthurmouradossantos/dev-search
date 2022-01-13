import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { GithubService } from '../service/github.service';
import { DeveloperProfile, ResponseGithub } from '../developer-profile';
import { ErrorWarningComponent } from '../error-warning/error-warning.component';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.scss'],
})
export class DeveloperFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  profile!: DeveloperProfile;
  subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private githubService: GithubService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({ username: ['arthurmouradossantos'] });

    this.searchProfile();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchProfile() {
    this.subscription = this.githubService
      .getDeveloperProfile(this.form.value.username)
      .subscribe({
        next: (reponseGithub: ResponseGithub) => {
          this.profile = DeveloperProfile.from(reponseGithub);
        },
        error: () => {
          this.dialog.open(ErrorWarningComponent);
        },
      });
  }
}
