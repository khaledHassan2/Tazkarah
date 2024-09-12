import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ChartsComponent } from "./components/charts/charts.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicketsComponent, QRCodeModule, FileSaverModule, HttpClientModule, TooltipModule, TicketsComponent, ChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public myAngularxQrCode: string = 'hello';
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'www.tazkty.com/473847';
  }

textToCopy: string = 'www.tazkty.com/473847';

copyText() {
  navigator.clipboard.writeText(this.textToCopy).then(() => {
    console.log('Text copied successfully!');
    // You can add a confirmation message here
  }).catch(err => {
    console.error('Failed to copy text:', err);
  });
}

}
