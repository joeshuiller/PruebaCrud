import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = environment.api
  constructor( 
    private http: HttpClient) { }

    POST = async (sub, obj) => this.http.post(this.api + sub , obj)
    GET = async (sub) => this.http.get(this.api + sub)
    PUT = async (sub,obj) => this.http.put(this.api + sub, obj)
    DELETE = async (sub) => this.http.delete(this.api + sub)
}
