import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DownlodeService } from '../../services/downlode.service';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TooltipModule,TableModule ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  private readonly downlod=inject(DownlodeService)
  onDownlod(){
    const url='./assets/imges/ticket.png';
    this.downlod.downlodFile(url);
  }
  tickets = [
    {
      userName: 'محمد غريب',
      number: '01140069427',
      userAvatar: './assets/imges/Image-30.png',
      ticketNumber: 'C-101',
      price: '$14',
      seats: 'مرة واحدة',
      people: 1,
      movieDetails: 'تذكرة رقم 45.pdf ',
      cinema:"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ..."
    },
    {
      userName: 'محمد غريب',
      number: '01140069427',
      userAvatar: './assets/imges/Image-31.png',
      ticketNumber: 'C-102',
      price: '$30',
      seats: 'مرة واحدة',
      people: 1,
      movieDetails: 'تذكرة رقم 45.pdf ',
      cinema:"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ..."
    },
    {
      userName: 'محمد غريب',
      number: '01140069427',
      userAvatar: './assets/imges/Text-41.svg',
      ticketNumber: 'C-103',
      price: '$45',
      seats: 'مرة واحدة',
      people: 1,
      movieDetails: 'تذكرة رقم 45.pdf ',
      cinema:"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ..."
    },
    {
      userName: 'محمد غريب',
      number: '01140069427',
      userAvatar: './assets/imges/Text-42.svg',
      ticketNumber: 'C-104',
      price: '$54',
      seats: 'مرة واحدة',
      people: 1,
      movieDetails: 'تذكرة رقم 45.pdf ',
      cinema:"سينما مصر , مول العرب , برج الأطنان , سرايا القبة ..."
    },
    // Add more data as per your requirement
  ];

}
