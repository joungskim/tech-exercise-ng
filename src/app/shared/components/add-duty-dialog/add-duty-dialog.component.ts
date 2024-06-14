import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../core/services/api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-duty-dialog',
  templateUrl: './add-duty-dialog.component.html',
  styleUrls: ['./add-duty-dialog.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatDialogClose, MatDialogModule, MatInputModule, ReactiveFormsModule, AddDutyDialogComponent]
})
export class AddDutyDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddDutyDialogComponent>
  ) { }

  async addDuty(name: string, rank: string, dutyTitle: string, dutyStartDate: string) {
    try {
      const response = await this.apiService.createAstronautDuty({
        name: name,
        rank: rank,
        dutyTitle: dutyTitle,
        dutyStartDate: this.parseDate(dutyStartDate)
      });

      console.log('New duty added successfully:', response);
      await this.waitForSeconds(20);
      // this.dialogRef.close();
    } catch (error) {
      console.error('Error adding new duty:', error);
    }
  }
  parseDate(dateString: string): Date | null {
    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate.getTime())) {
      console.error('Invalid date:', dateString);
      return null;
    }
    return parsedDate;
  }
  waitForSeconds(seconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000); // Convert seconds to milliseconds
    });
  }
}