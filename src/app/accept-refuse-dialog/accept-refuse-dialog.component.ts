import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  hasAccepted = null;
  bringColleagues = false;
  constructor(
    private dialogRef: MatDialogRef<AcceptRefuseDialogComponent>,
    private invitationService: InvitationService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.maxLength(80)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl(''),
      whoIsComing: new FormControl(''),
      noOfColleagues: new FormControl(''),
    });
  }

  onClickYes() {}

  onClickNo() {}

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  onSelectionChanged(event) {
    this.hasAccepted = event === 'yes' ? true : false;
  }

  requiredAccountDetailsValidation() {}

  selectIfColleagues(event) {
    if (event.value === 1) {
      this.bringColleagues = true;
    } else {
      this.bringColleagues = false;
    }
  }

  onSubmit() {
    console.log(this.form.value);
    this.invitationService.sendInvitation(this.form.value).subscribe((res) => {
      console.log(res);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
