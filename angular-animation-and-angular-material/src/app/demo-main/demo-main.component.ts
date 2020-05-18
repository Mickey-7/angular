import { Component, OnInit } from "@angular/core";
// import all the animations from angular-animations
import {
  bounceInUpOnEnterAnimation,
  // attention seeker
  bounceAnimation,
  flashAnimation,
  pulseAnimation,
  rubberBandAnimation,
  shakeAnimation,
  swingAnimation,
  tadaAnimation,
  wobbleAnimation,
  jelloAnimation,
  // bouncing entrances
  bounceInAnimation,
  bounceInDownAnimation,
  bounceInLeftAnimation,
  bounceInRightAnimation,
  bounceInUpAnimation,
  // bouncing exits
  bounceOutAnimation,
  bounceOutDownAnimation,
  bounceOutLeftAnimation,
  bounceOutRightAnimation,
  bounceOutUpAnimation,
  // fading entrances
  fadeInAnimation,
  fadeInDownAnimation,
  fadeInDownBigAnimation,
  fadeInLeftAnimation,
  fadeInLeftBigAnimation,
  fadeInRightAnimation,
  fadeInRightBigAnimation,
  fadeInUpAnimation,
  fadeInUpBigAnimation,
  // fading exits
  fadeOutAnimation,
  fadeOutDownAnimation,
  fadeOutDownBigAnimation,
  fadeOutLeftAnimation,
  fadeOutLeftBigAnimation,
  fadeOutRightAnimation,
  fadeOutRightBigAnimation,
  fadeOutUpAnimation,
  fadeOutUpBigAnimation,
  // flippers
  flipAnimation,
  flipInXAnimation,
  flipInYAnimation,
  flipOutXAnimation,
  flipOutYAnimation,
  // light speed
  lightSpeedInAnimation,
  lightSpeedOutAnimation,
  // rotating entrances
  rotateInAnimation,
  rotateInDownLeftAnimation,
  rotateInDownRightAnimation,
  rotateInUpLeftAnimation,
  rotateInUpRightAnimation,
  // rotating exits
  rotateOutAnimation,
  rotateOutDownLeftAnimation,
  rotateOutDownRightAnimation,
  rotateOutUpLeftAnimation,
  rotateOutUpRightAnimation,
  // sliding entrances
  slideInDownAnimation,
  slideInLeftAnimation,
  slideInRightAnimation,
  slideInUpAnimation,
  // sliding exits
  slideOutDownAnimation,
  slideOutLeftAnimation,
  slideOutRightAnimation,
  slideOutUpAnimation,
  // zooming entrances
  zoomInAnimation,
  zoomInDownAnimation,
  zoomInLeftAnimation,
  zoomInRightAnimation,
  zoomInUpAnimation,
  // zooming exits
  zoomOutAnimation,
  zoomOutDownAnimation,
  zoomOutLeftAnimation,
  zoomOutRightAnimation,
  zoomOutUpAnimation,
  // specials
  hingeAnimation,
  jackInTheBoxAnimation,
  rollInAnimation,
  rollOutAnimation,
  // other
  collapseAnimation,
  rotateAnimation,
  hueRotateAnimation
} from "angular-animations";

@Component({
  selector: "app-demo-main",
  templateUrl: "./demo-main.component.html",
  styleUrls: ["./demo-main.component.css"],
  // including the imported animations
  animations: [
    bounceInUpOnEnterAnimation({ anchor: "enter1" }),
    bounceInUpOnEnterAnimation({ anchor: "enter2", delay: 1000 }),
    bounceInUpOnEnterAnimation({ anchor: "enter3", delay: 2000 }),
    bounceInUpOnEnterAnimation({ anchor: "enter4", delay: 3000 }),
    // attention seeker
    bounceAnimation(),
    flashAnimation(),
    pulseAnimation({ anchor: "pulse" }),
    rubberBandAnimation(),
    shakeAnimation(),
    swingAnimation(),
    tadaAnimation(),
    wobbleAnimation(),
    jelloAnimation(),
    // bouncing entrances
    bounceInAnimation(),
    bounceInDownAnimation(),
    bounceInLeftAnimation(),
    bounceInRightAnimation(),
    bounceInUpAnimation(),
    // bouncing exits
    bounceOutAnimation(),
    bounceOutDownAnimation(),
    bounceOutLeftAnimation(),
    bounceOutRightAnimation(),
    bounceOutUpAnimation(),
    // fading entraances
    fadeInAnimation(),
    fadeInDownAnimation(),
    fadeInDownBigAnimation(),
    fadeInLeftAnimation(),
    fadeInLeftBigAnimation(),
    fadeInRightAnimation(),
    fadeInRightBigAnimation(),
    fadeInUpAnimation(),
    fadeInUpBigAnimation(),
    // fading exits
    fadeOutAnimation(),
    fadeOutDownAnimation(),
    fadeOutDownBigAnimation(),
    fadeOutLeftAnimation(),
    fadeOutLeftBigAnimation(),
    fadeOutRightAnimation(),
    fadeOutRightBigAnimation(),
    fadeOutUpAnimation(),
    fadeOutUpBigAnimation(),
    // flippers
    flipAnimation(),
    flipInXAnimation(),
    flipInYAnimation(),
    flipOutXAnimation(),
    flipOutYAnimation(),
    // light speeds
    lightSpeedInAnimation(),
    lightSpeedOutAnimation(),
    // rotating entrances
    rotateInAnimation(),
    rotateInDownLeftAnimation(),
    rotateInDownRightAnimation(),
    rotateInUpLeftAnimation(),
    rotateInUpRightAnimation(),
    // rotating exits
    rotateOutAnimation(),
    rotateOutDownLeftAnimation(),
    rotateOutDownRightAnimation(),
    rotateOutUpLeftAnimation(),
    rotateOutUpRightAnimation(),
    // sliding entrances
    slideInDownAnimation(),
    slideInLeftAnimation(),
    slideInRightAnimation(),
    slideInUpAnimation(),
    // sliding exits
    slideOutDownAnimation(),
    slideOutLeftAnimation(),
    slideOutRightAnimation(),
    slideOutUpAnimation(),
    // zooming entrances
    zoomInAnimation(),
    zoomInDownAnimation(),
    zoomInLeftAnimation(),
    zoomInRightAnimation(),
    zoomInUpAnimation(),
    // zooming exits
    zoomOutAnimation(),
    zoomOutDownAnimation(),
    zoomOutLeftAnimation(),
    zoomOutRightAnimation(),
    zoomOutUpAnimation(),
    // specials
    hingeAnimation(),
    jackInTheBoxAnimation(),
    rollInAnimation(),
    rollOutAnimation(),
      // other
    collapseAnimation(),
    rotateAnimation(),
    rotateAnimation({anchor : "rotate90", degrees : 90}),
    rotateAnimation({anchor : "rotate0", degrees : 720}),
    hueRotateAnimation(),
  ],
})
export class DemoMainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // create storage var for animation state
  // and will also serve as link between html & ts file
  animationState = false;
  // storage var for animation type
  // connected to mat-option & ngSwitch
  animation = "rubberBand"; //default set value

  // create animate method
  animate() {
    console.log("entering animation");
    this.animationState = false;
    // snippet : sett
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  //create array of options for animations
  options = [
    {
      label: "Attention Seekers",
      animations: [
        "bounce",
        "flash",
        "pulse",
        "rubberBand",
        "shake",
        "swing",
        "tada",
        "wobble",
        "jello",
      ],
    },
    {
      label: "Bouncing Entrances",
      animations: [
        "bounceIn",
        "bounceInDown",
        "bounceInLeft",
        "bounceInRight",
        "bounceInUp",
      ],
    },
    {
      label: "Bouncing Exits",
      animations: [
        "bounceOut",
        "bounceOutDown",
        "bounceOutLeft",
        "bounceOutRight",
        "bounceOutUp",
      ],
    },
    {
      label: "Fading Exits",
      animations: [
        "fadeOut",
        "fadeOutDown",
        "fadeOutDownBig",
        "fadeOutLeft",
        "fadeOutLeftBig",
        "fadeOutRight",
        "fadeOutRightBig",
        "fadeOutUp",
        "fadeOutUpBig",
      ],
    },
    {
      label: "Flippers",
      animations: ["flip", "flipInX", "flipInY", "flipOutX", "flipOutY"],
    },
    {
      label: "Lightspeed",
      animations: ["lightSpeedIn", "lightSpeedOut"],
    },
    {
      label: "Rotating Entrances",
      animations: [
        "rotateIn",
        "rotateInDownLeft",
        "rotateInDownRight",
        "rotateInUpLeft",
        "rotateInUpRight",
      ],
    },
    {
      label: "Rotating Exits",
      animations: [
        "rotateOut",
        "rotateOutDownLeft",
        "rotateOutDownRight",
        "rotateOutUpLeft",
        "rotateOutUpRight",
      ],
    },
    {
      label: "Sliding Entrances",
      animations: ["slideInUp", "slideInDown", "slideInLeft", "slideInRight"],
    },
    {
      label: "Sliding Exits",
      animations: [
        "slideOutUp",
        "slideOutDown",
        "slideOutLeft",
        "slideOutRight",
      ],
    },
    {
      label: "Zoom Entrances",
      animations: [
        "zoomIn",
        "zoomInDown",
        "zoomInLeft",
        "zoomInRight",
        "zoomInUp",
      ],
    },
    {
      label: "Zoom Exits",
      animations: [
        "zoomOut",
        "zoomOutDown",
        "zoomOutLeft",
        "zoomOutRight",
        "zoomOutUp",
      ],
    },
    {
      label: "Specials",
      animations: ["hinge", "jackInTheBox", "rollIn", "rollOut"],
    },
    {
      label: "Other",
      animations: ["collapse", "rotate", "rotate90", "rotate720", "hueRotate"],
    },
  ];
}
