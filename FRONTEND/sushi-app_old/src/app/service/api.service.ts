import { Injectable } from '@angular/core';
import { Box } from '../model/Box';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
getBox():Observable<any>{
  return this.http.get('http://localhost:8080/api/boxes')
}

}
