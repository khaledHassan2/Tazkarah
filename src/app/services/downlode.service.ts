import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{saveAs} from 'file-saver'

@Injectable({
  providedIn: 'root'
})
export class DownlodeService {

  constructor(private readonly http:HttpClient) { }

  downlodFile(url:string){
    this.http.get(url,{
      responseType:"blob"
    }).subscribe((res)=>{
      saveAs(res,'myTicket.png')
    })
    
  }
  
}