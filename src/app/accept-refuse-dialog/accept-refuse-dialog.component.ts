import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InvitationService } from '../invitation.service';

@Component({
  selector: 'app-accept-refuse-dialog',
  templateUrl: './accept-refuse-dialog.component.html',
  styleUrls: ['./accept-refuse-dialog.component.css'],
})
export class AcceptRefuseDialogComponent implements OnInit {
  numberOptions = [
    { display: 'Just myself', value: 0 },
    { display: "I'm taking some colleagues", value: 1 },
  ];
  public form: FormGroup;
  submitClicked = false;
  bringColleagues = false;
  constructor(
    private dialogRef: MatDialogRef<AcceptRefuseDialogComponent>,
    private invitationService: InvitationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    if (this.data) {
      this.invitationService.getInvitation(this.data).subscribe((res) => {
        // populate for
      });
    }
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', []),
      email: new FormControl(''),
      gender: new FormControl(''),
      whoIsComing: new FormControl(''),
      noOfColleagues: new FormControl(''),
      isComing: new FormControl('', [Validators.required]),
    });
  }

  onClickYes() {}

  onClickNo() {}

  public hasError = (controlName: string, errorName: string) => {
    if (!this.submitClicked) {
      return false;
    }
    return this.form.controls[controlName].hasError(errorName);
  };

  onSelectionChanged(event) {
    const phone = this.form.get('phone');
    const email = this.form.get('email');
    const gender = this.form.get('gender');
    const whoIsComing = this.form.get('whoIsComing');

    if (event === 'yes') {
      phone.setValidators([Validators.required]);
      email.setValidators([Validators.required]);
      gender.setValidators([Validators.required]);
      whoIsComing.setValidators([Validators.required]);
    } else {
      phone.setValidators(null);
      email.setValidators(null);
      gender.setValidators(null);
      whoIsComing.setValidators(null);
    }
    phone.updateValueAndValidity();
    email.updateValueAndValidity();
    gender.updateValueAndValidity();
    whoIsComing.updateValueAndValidity();
  }

  selectIfColleagues(event) {
    if (event.value === 1) {
      this.bringColleagues = true;
    } else {
      this.bringColleagues = false;
    }
  }

  onSubmit() {
    this.submitClicked = true;
    if (!this.form.valid) {
      return;
    }
    this.invitationService
      .sendInvitation(this.form.value)
      .subscribe((res) => {});
  }

  close() {
    this.dialogRef.close();
  }
}
