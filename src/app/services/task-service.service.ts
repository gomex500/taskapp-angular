import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private baseUrl = "http://localhost:8080/api/task"

  constructor(private http: HttpClient) { }

  getAllTask(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

}
