import { Component, OnInit } from "@angular/core";
import { formatDistance, addDays } from "date-fns";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styles: [],
})
export class CommentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // for Basic comment
  // create first the needed varialble storages
  // for like, dislike & time
  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());
  // if like is clicked
  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }
  // if dislike is clicked
  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  // for usage with list
  listData = [
    {
      author: "Anonymous01",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, vero hicnobis sint at ad fugit accusamus? Vero in cumque repellendus, commoditotam atque doloremque impedit ipsam odio obcaecati neque, eum, facilisblanditiis magni sapiente voluptatum iusto.",
      datetime: formatDistance(new Date(), addDays(new Date(), 1)),
    },
    {
      author: "Anonymous12",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, vero hicnobis sint at ad fugit accusamus? Vero in cumque repellendus, commoditotam atque doloremque impedit ipsam odio obcaecati neque, eum, facilisblanditiis magni sapiente voluptatum iusto.",
      datetime: formatDistance(new Date(), addDays(new Date(), 1)),
    },
  ];

  // for nested comments
  // create dummy data object
  nestedData = {
    author: "Han Solo",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium sequi consequuntur quod aspernatur, illo, illum labore maiores temporibus fugit explicabo blanditiis ea in deserunt, nemo veniam! Neque culpa ipsam nulla. Quis cum repudiandae aliquam nulla quia.",
    children: [
      {
        author: "Han Solo",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium sequi consequuntur quod aspernatur, illo, illum labore maiores temporibus fugit explicabo blanditiis ea in deserunt, nemo veniam! Neque culpa ipsam nulla. Quis cum repudiandae aliquam nulla quia.",
        children: [
          {
            author: "Han Solo",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium sequi consequuntur quod aspernatur, illo, illum labore maiores temporibus fugit explicabo blanditiis ea in deserunt, nemo veniam! Neque culpa ipsam nulla. Quis cum repudiandae aliquam nulla quia.",
          },
          {
            author: "Han Solo",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laudantium sequi consequuntur quod aspernatur, illo, illum labore maiores temporibus fugit explicabo blanditiis ea in deserunt, nemo veniam! Neque culpa ipsam nulla. Quis cum repudiandae aliquam nulla quia.",
          },
        ],
      },
    ],
  };

  // for Reply Editor
  // storage of messages
  data: any[] = [];
  // default user info
  user = {
    author: "Han Solo",
  };
  // string storage of input
  inputValue = "";
  // boolean submitting to trigger loading
  submitting = false;
  handleSubmit(): void {
    // set submitting to true
    this.submitting = true;
    // set content to inputValue
    const content = this.inputValue;
    // clear inputValue content
    this.inputValue = "";
    // delay to add the content and user
    setTimeout(() => {
      // remove loading after 8000
      this.submitting = false;
      this.data = [
        ...this.data,
        {
          ...this.user,
          content,
          datetime: new Date(),
          displayTime: formatDistance(new Date(), new Date()),
        },
      ].map((e) => {
        return {
          ...e,
          displayTime: formatDistance(new Date(), new Date()),
        };
      });
    }, 8000);
  }
}
