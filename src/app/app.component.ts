import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { OperatorData } from './OpData';
import { OperatorService } from './operator-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  selectedOpData: OperatorData;
  
  OperatorData$: Observable<OperatorData[]> = this.opService.opDataSet$;

  constructor( private opService: OperatorService) {}

}
