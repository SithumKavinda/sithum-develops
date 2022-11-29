import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'coming-soon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css'],
})
export class ComingsoonComponent {
  AnimationOptions = {
    path: 'assets/lotties/UnderConstructionLottie.json',
  };

  constructor() {}

  ngOnInit(): void {}

  // This is the component function that binds to the animationCreated event from the package
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
