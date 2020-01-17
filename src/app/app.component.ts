import {Component} from '@angular/core';
import {MatTableDataSource,MatDialog} from '@angular/material';
import { PollsService } from './polls.service';
import { DialogueComponent } from './dialogue/dialogue.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'test-demo';
  
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  dataSource: any
  timer : any

  constructor(public pollsService: PollsService,public dialog: MatDialog){ 
  }

  ngOnInit() {
    // get polls data
    this.getData();
    this.setPollsInterval();
  }

  ngOnDestroy() {
    // destroy interval
    clearInterval(this.timer);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setPollsInterval(){
    this.timer = setInterval(() => { this.getData(); }, 10000);
  }

  getData(){
    this.pollsService.get().subscribe((data: {})=>{
      this.dataSource = new MatTableDataSource(data['hits']);
    });
   
  }

  openDialog(row) {
    const dialogRef = this.dialog.open(DialogueComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
