import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OperatorData } from './OpData';
import { combineLatest, tap, Observable, BehaviorSubject, map } from 'rxjs';
import { scan, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class OperatorService {
  
  private dataUrl = 'api/OpData';

  constructor(private http:  HttpClient) {}

  opDataSet$ = this.http.get<OperatorData[]>(this.dataUrl)
    .pipe(
      tap( data => console.log('OperatorData', JSON.stringify(data))),
    )
}

