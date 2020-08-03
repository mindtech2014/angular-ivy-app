import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../../models/dialog-data";
import { Post } from "../../models/post.model";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;
  post: Post;
  constructor(
    public dialogRef: MatDialogRef<PostCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private postService: PostService
  ) {
    this.post = { userId: this.data.userId, id: 0, title: "", body: "" };
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.post.title = this.postForm.get("title").value;
    this.post.body = this.postForm.get("body").value;
    this.postService.createPost(this.post).subscribe(data=>{
      console.log(data);
      this.dialogRef.close();
    })
  }
}
