import { Component, OnInit  } from '@angular/core';
import { EfficiencyByMonth  } from '../../models/OpData';
import { OperatorService } from '../../shared/services/operator-service';

@Component({
  selector: 'bar-graph',
  templateUrl: './bar-graph.component.html',
})

export class BarGraphComponent implements OnInit {

  graphData!: EfficiencyByMonth[];

  constructor(
    private dataService: OperatorService
  )
  { }

  ngOnInit(): void {}

}