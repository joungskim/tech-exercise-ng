import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { firstValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddDutyDialogComponent } from '../add-duty-dialog/add-duty-dialog.component';

@Component({
  selector: 'app-people-cards',
  templateUrl: './people-cards.component.html',
  styleUrls: ['./people-cards.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class PeopleCardsComponent implements OnInit {
  people: any = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  async loadPeople() {
    try {
      const response = await firstValueFrom(this.apiService.getPeople());
      this.people = response.people ?? [];
    } catch (error) {
      console.error('Error loading people:', error);
    }
  }

  openAddDutyDialog(name: string): void {
    const dialogRef = this.dialog.open(AddDutyDialogComponent, {
      width: '300px',
      data: { name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadPeople();
    });
  }
}