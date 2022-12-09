import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteLockService {

  constructor(private httpClient: HttpClient) { }
  public getClients(): Observable<any> {
    return this.httpClient.get(environment.api_server + environment.api_endpoints.getClients);
  }
}
