import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class privateAPi {
    constructor(private http: HttpClient) {}

    privateAPi(data:any){
        return this.http.post('/api/login',{data})
    }

    callingPrivateApi(){
        let headers = new HttpHeaders()
            .set('authorization', `bearer ${localStorage.getItem('token')}`)
        let userInfo = localStorage.getItem('username')
        return this.http.post("/api/callingPrivateApi",{userInfo},{headers})
    }
}