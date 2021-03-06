import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ferie } from '../domain/feries';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable()
export class FeriesService {

  feries: Ferie[] = []
  ferieSubject: BehaviorSubject<Ferie[]> = new BehaviorSubject([])
  
  constructor(private http: HttpClient) { }

  listerFeries():Observable<Ferie[]>{
    this.http.get<Ferie[]>(`${environment.apiUrl}/feries`, httpOptions)
    .subscribe(data => {
      this.feries = data.map(uneData => {
        const f = new Ferie(uneData.date, uneData.type, uneData.commentaire)
        f.id = uneData.id
      return f
      })
      this.ferieSubject.next(this.feries)
    } )

    return this.ferieSubject;
  }

  ferieDelete( jf: Ferie): Observable<Ferie[]> {
    
    this.http.delete<Ferie>(`${environment.apiUrl}/feries/${jf.id}`, httpOptions).subscribe()
    this.feries = this.feries.filter(fer => fer != jf);
    this.ferieSubject.next(this.feries)
    
    return this.ferieSubject

  }

  create(ferie : Ferie ):Observable<Ferie[]>{
    return this.http.post<Ferie[]>(`${environment.apiUrl}/feries`, ferie, httpOptions)
    
  }

  update(ferie : Ferie ):Observable<Ferie[]>{
    
    return this.http.post<Ferie[]>(`${environment.apiUrl}/feries/${ferie.id}`, ferie, httpOptions)
    
  }

  refreshList(){
    this.http.get<Ferie[]>(`${environment.apiUrl}/feries`, httpOptions)
    .subscribe(data => this.ferieSubject.next(data))
  }
    
      
  }
