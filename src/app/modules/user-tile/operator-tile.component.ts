import { Component, OnInit  } from '@angular/core';
import { OperatorData  } from '../../models/OpData';
import { OperatorService } from '../../shared/services/operator-service';

@Component({
  selector: 'operator-tile',
  templateUrl: './operator-tile.component.html',
})

export class OperatorTileComponent implements OnInit {

  opData!: OperatorData;

  constructor(
    private dataService: OperatorService
  )
  { }

  ngOnInit(): void {}

}