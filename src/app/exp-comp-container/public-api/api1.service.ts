import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ExpApiOne {
    constructor(private http: HttpClient) {}

    expApiOne(){
        return this.http.get('/api/expApiOne')
    }
}