import { Component } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dado = 5;
  constructor() {}
  async sortear() {
    for(let i = 0; i < 10; i++){
    let NumeroSorteado = Math.random();
    this.dado = Math.floor(NumeroSorteado * 6 + 1);
    await new Promise(f => setTimeout(f, 100));
  }
  }
}
