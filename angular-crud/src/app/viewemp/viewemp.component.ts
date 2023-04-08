import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.scss']
})
export class ViewempComponent implements OnInit {

  displayedColumns: string[] = ['empname', 'empcode', 'age', 'klang', 'pcomp', 'actions'];
  dataSource!: MatTableDataSource<any>;

  constructor(private getempdata: EmpService) { }

  empdata: any;
  ngOnInit(): void {

    this.getempdata.getemp().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);

    });



    // console.log('Hello' + this.empdata);

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmp(id: number) {
    console.log(id);
    this.getempdata.del(id).subscribe({
      next: (res) => {
        alert("EMP Deleted");
        window.location.reload();
      },
      error: (res) => {
        alert("Error in Deleting");
      }
    });
  }



}
