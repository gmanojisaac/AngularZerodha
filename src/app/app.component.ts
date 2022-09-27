import { Component } from '@angular/core';
import { KiteTicker } from 'kiteconnect-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ticker: KiteTicker = new KiteTicker({
    apiKey: '909lcbtyglf6ks4o',
    accessToken: 'QMzRubq2K85tdur6z2s2aEpXcF6tcsrn',
  });

  mydata=[];
  constructor(){
    this.ticker.on('ticks', (ticks: any[]) => {

      console.log('Ticks', ticks[0].lastPrice);
    });
    
    this.ticker.on('connect', () => {
      const items = [18647042];
      this.ticker.subscribe(items);
    });
    
    this.ticker.connect();
  
  }
  
  
}
