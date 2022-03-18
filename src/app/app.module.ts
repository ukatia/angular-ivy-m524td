import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { AcceptRefuseDialogComponent } from './accept-refuse-dialog/accept-refuse-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [BrowserModule, FormsModule, MatDialogModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InvitationPageComponent,
    AcceptRefuseDialogComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AcceptRefuseDialogComponent],
})
export class AppModule {}
