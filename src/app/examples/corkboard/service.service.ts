import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CollectionService {
    apiUrl:string;

    constructor(private http:HttpClient) {
      let collection = "post";
      this.http = http;
      this.apiUrl = '/api/v0/'+collection;
    }
    getCollection() {
      return this.http.get(this.apiUrl)
         .map(res => res["data"]);
    }
    getRecord(id:string) {
      return this.http.get(this.apiUrl+'/'+id)
         .map(res => res["data"]);
    }
    deleteRecord(id:string) {
      return this.http.delete(this.apiUrl+'/'+id)
    }
    saveRecord(id:string, saveObj) {
      return this.http.put(this.apiUrl+'/'+id, JSON.stringify(saveObj))
    }
    patchRecord(id:string, saveFragment) {
      return this.http.patch(this.apiUrl+'/'+id, JSON.stringify(saveFragment))
    }
    createRecord(saveObj) {
      return this.http.post(this.apiUrl, JSON.stringify(saveObj))
    }
}
