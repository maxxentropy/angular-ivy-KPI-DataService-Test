import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { OperatorData } from './OpData';
import { OperatorService } from './operator-service';

@Component({
  //selector: 'hello',
  //template: `<h1>Hello {{name}}!</h1>`,
  //styles: [`h1 { font-family: Lato; }`],
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  selectedOpData$: Observable<OperatorData[]> | undefined;

  constructor(private opService: OperatorService) {}

  ngOnInit(): void {
    this.selectedOpData$ = this.opService.opDataSet$;
  }
  
}
