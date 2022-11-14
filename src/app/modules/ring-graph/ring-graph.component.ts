import { Component, OnInit  } from '@angular/core';
import { Efficiency  } from '../../models/OpData';
import { OperatorService } from '../../shared/services/operator-service';

@Component({
  selector: 'ring-graph',
  templateUrl: './ring-graph.component.html',
})

export class RingGraphComponent implements OnInit {

  graphData!: Efficiency;

  constructor(
    private dataService: OperatorService
  )
  { }

  ngOnInit(): void {}

}