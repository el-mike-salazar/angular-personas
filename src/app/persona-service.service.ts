import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://randomapi.com/api/84108eefd0ec6ef99c1771ec6a8dc82d';

  getAllPerson() {
    return this.http.get(this.url).toPromise();
  }

}
