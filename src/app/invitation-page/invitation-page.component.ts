import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AcceptRefuseDialogComponent } from '../accept-refuse-dialog/accept-refuse-dialog.component';

@Component({
  selector: 'app-invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrls: ['./invitation-page.component.css'],
})
export class InvitationPageComponent implements OnInit {
  title = 'Come to celebrate the new year with us';
  companyTitle = 'IT COMPANY';
  companyInfo = 'Implementing your IT solutions';
  inviteText =
    'We will be more than happy to have you with us for this very special moment!';
  day = 'Wednesday';
  month = 'December';
  time = '19h to 23h';

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onClick() {
    const dialogRef = this.dialog.open(AcceptRefuseDialogComponent, {
      width: '650px',
    });
  }
}
