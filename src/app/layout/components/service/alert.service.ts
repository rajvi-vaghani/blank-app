import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this.openSnackBarWithAction(message, 'Close');
  }

  openSnackBarWithAction(message: string, action: string) {
    console.log('actions',action)
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
