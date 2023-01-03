import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackbarNotificationComponent} from './components/ui/snackbar-notification/snackbar-notification.component';
import {MessageDialogComponent} from './components/ui/message-dialog/message-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    SnackbarNotificationComponent,
    MessageDialogComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    SnackbarNotificationComponent,
    MessageDialogComponent,
    FooterComponent
  ],
  providers: []
})
export class SharedModule {
}
