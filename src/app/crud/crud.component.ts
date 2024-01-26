import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  isSaved = false;
  userDetailsForm: FormGroup;
  constructor() {
    this.userDetailsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }
  canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are   you sure?');
      return of(result);
    }
    return of(true);
  }


  onSubmit() {
    this.isSaved = true;
  }
}
