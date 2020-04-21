import { HttpClient } from '@angular/common/http';
import { IGallery } from '../model/gallery.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  gallery: IGallery[] = [{
    "id": 1,
    "title": "Co-creation Lab",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604128/office.jpg"
  },
  {
    "id": 2,
    "title": "Co-creation Lab",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604128/office.jpg"
  },
  {
    "id": 3,
    "title": "Co-creation Lab",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604128/office.jpg"
  },
  {
    "id": 4,
    "title": "Co-creation Lab",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604128/office.jpg"
  },
  {
    "id": 5,
    "title": "Co-creation Lab",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604128/office.jpg"
  },
  {
    "id": 6,
    "title": "Co-creation Lab",
    "image": "https://res.cloudinary.com/silva/image/upload/v1581604128/office.jpg"
  },


  ]
  constructor(private http: HttpClient) { }


  getGallery(): Observable<IGallery[]> {
    return of<IGallery[]>(this.gallery);
  }
}
