import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;
  constructor() { }

  ngOnInit() {
     this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required ]),
      body: new FormControl(
        null,
        [Validators.email, Validators.required]
      ),
     });
  }

}