import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  hide = true;
  public Dataform: FormGroup = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.email]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    }
  )
  submitData() {
    console.log("person");
    this.http.post("http://localhost:1234/upload", this.Dataform.value).subscribe(
      (res) => { console.log("done"); },
      (err) => console.log(err)
    );
    this.snack.open("Data Stored Successfully", "Close", {
      duration: 2000
    })

  }
  constructor(public http: HttpClient, public snack: MatSnackBar) { }

  ngOnInit() {
  }

}
