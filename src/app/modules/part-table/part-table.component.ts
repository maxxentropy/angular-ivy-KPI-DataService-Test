import { Component, OnInit  } from '@angular/core';
import { PartsProduction  } from '../../models/OpData';
import { OperatorService } from '../../shared/services/operator-service';

@Component({
  selector: 'part-table',
  templateUrl: './part-table.component.html',
})

export class PartTableComponent implements OnInit {

  tableData!: PartsProduction[];

  constructor(
    private dataService: OperatorService
  )
  { }

  ngOnInit(): void {}

}