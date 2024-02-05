import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age : number = 30;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescriptions():string {
   return `Tu nombre es:
    ${this.name} y tienes ${this.age} años`
  }
  changeHero():void {
    this.name = 'Spiderman';

  }
  changeAge():void {
    this.age = 40;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 30;
  }
}

