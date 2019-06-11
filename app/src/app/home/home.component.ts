import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  searchVal: string;
  constructor(private http: HttpClient) { }

  displayedColumns: string[] = ['id', 'Email', 'Username', 'Password', 'Action'];
  dataSource;
  errorDisp: boolean = false;

  applyFilter() {
    this.dataSource.filter = this.searchVal.trim().toLowerCase();
  }

  clearData() {
    this.searchVal = '';
    this.dataSource.filter = '';
  }

  deleteRecord(id) {
    let url = "http://localhost:1234/user";
    this.http.post(url, { uid: id }).subscribe((data) => {
      console.log(data);
    }, (err) => { console.log(err) });
    this.getData();
  }

  getData() {
    this.http.get("http://localhost:1234/data").subscribe((data) => {
      this.users = data;
      if (this.users.length == 0) {
        this.errorDisp = true;
      } else {
        this.errorDisp = false;
      }
      this.dataSource = new MatTableDataSource(this.users);
    })
  }

  ngOnInit() {
    this.getData();
  }

}
