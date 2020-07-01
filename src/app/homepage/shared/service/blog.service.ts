import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getAllPost(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/api/post/`)
    }

}