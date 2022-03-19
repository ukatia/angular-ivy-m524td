import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { AcceptRefuseDialogComponent } from './accept-refuse-dialog/accept-refuse-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InvitationService } from './invitation.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule,
    RouterTestingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InvitationPageComponent,
    AcceptRefuseDialogComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AcceptRefuseDialogComponent],
  providers: [InvitationService],
})
export class AppModule {}
