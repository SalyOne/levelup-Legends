import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  Url = "../../../assets/data/data.json"
  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(this.Url + url)
  }
}
