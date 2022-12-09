import { Component, OnInit } from '@angular/core';
import { RemoteLockService } from '../services/remote-lock.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

  constructor(private remoteLockService: RemoteLockService) {
  }

  public clients = [];

  public lockClient(id: string) {
    console.log(id);
  }

  ngOnInit() {
    console.log('loaded');
    let clients =  this.remoteLockService.getClients().subscribe({
    next: (res) => {
      this.clients = res;
    },
    error: (err) => {
        console.error('Error getting clients', err);
    }});
    console.log('clients', clients)
  }



}
