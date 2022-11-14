export interface OperatorData {
  operatorName:      string;
  operatorId:        number;
  efficiency:        Efficiency;
  partsProduction:   PartsProduction[];
  efficiencyByMonth: EfficiencyByMonth[];
}

export interface Efficiency {
  targetEfficiency:       number;
  averageEfficiency:      number;
  scrapThreshold:         number;
  averageScrapPercentage: number;
}

export interface EfficiencyByMonth {
  month:                  number;
  totalPieces:            number;
  totalScrap:             number;
  targetEfficiency:       number;
  averageEfficiency:      number;
  scrapThreshold:         number;
  averageScrapPercentage: number;
}

export interface PartsProduction {
  operatorName:   string;
  operatorId:     number;
  productionArea: string;
  startDate:      string;
  endDate:        string;
  partNumber:     string;
  totalPieces:    number;
  totalScrap:     number;
}
