import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { OperatorData } from './OpData';

@Injectable({
  providedIn: 'root'
})

export class OperatorDataService implements InMemoryDbService {
  constructor() { }
createDb(): { OpData: OperatorData[] } {
      const OpData = 
      [
        {
          "operatorName": "Fuentes, Abner",
          "operatorId": 1,
          "efficiency": {
            "targetEfficiency": 100,
            "averageEfficiency": 71.528421,
            "scrapThreshold": 3,
            "averageScrapPercentage": 0.773684
          },
          "partsProduction": [
            {
              "operatorName": "Fuentes, Abner",
              "operatorId": 1,
              "productionArea": "pins",
              "startDate": "2022-11-07T00:00:00-05:00",
              "endDate": "2022-11-11T00:00:00-05:00",
              "partNumber": "VB160R",
              "totalPieces": 4118,
              "totalScrap": 0
            },
            {
              "operatorName": "Fuentes, Abner",
              "operatorId": 1,
              "productionArea": "pins",
              "startDate": "2022-11-07T00:00:00-05:00",
              "endDate": "2022-11-11T00:00:00-05:00",
              "partNumber": "VB160RH",
              "totalPieces": 1096,
              "totalScrap": 0
            }
          ],
          "efficiencyByMonth": [
            {
              "month": 6,
              "totalPieces": 87956,
              "totalScrap": 0,
              "targetEfficiency": 100,
              "averageEfficiency": 36.594444,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0
            },
            {
              "month": 7,
              "totalPieces": 79163,
              "totalScrap": 129,
              "targetEfficiency": 100,
              "averageEfficiency": 32.886111,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.116666
            },
            {
              "month": 8,
              "totalPieces": 96366,
              "totalScrap": 535,
              "targetEfficiency": 100,
              "averageEfficiency": 36.751282,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.41282
            },
            {
              "month": 9,
              "totalPieces": 99751,
              "totalScrap": 937,
              "targetEfficiency": 100,
              "averageEfficiency": 40.216216,
              "scrapThreshold": 3,
              "averageScrapPercentage": 1.072972
            },
            {
              "month": 10,
              "totalPieces": 67944,
              "totalScrap": 140,
              "targetEfficiency": 100,
              "averageEfficiency": 34.955172,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.465517
            },
            {
              "month": 11,
              "totalPieces": 24076,
              "totalScrap": 0,
              "targetEfficiency": 100,
              "averageEfficiency": 35.89,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0
            }
          ]
        },
        {
          "operatorName": "Soum, Seoum",
          "operatorId": 28,
          "efficiency": {
            "targetEfficiency": 100,
            "averageEfficiency": 88.191489,
            "scrapThreshold": 3,
            "averageScrapPercentage": 1.731914
          },
          "partsProduction": [
            {
              "operatorName": "Soum, Seoum",
              "operatorId": 28,
              "productionArea": "pins",
              "startDate": "2022-11-07T00:00:00-05:00",
              "endDate": "2022-11-11T00:00:00-05:00",
              "partNumber": "VB160L",
              "totalPieces": 1553,
              "totalScrap": 0
            },
            {
              "operatorName": "Soum, Seoum",
              "operatorId": 28,
              "productionArea": "pins",
              "startDate": "2022-11-07T00:00:00-05:00",
              "endDate": "2022-11-11T00:00:00-05:00",
              "partNumber": "VB160R",
              "totalPieces": 3031,
              "totalScrap": 0
            },
            {
              "operatorName": "Soum, Seoum",
              "operatorId": 28,
              "productionArea": "pins",
              "startDate": "2022-11-07T00:00:00-05:00",
              "endDate": "2022-11-11T00:00:00-05:00",
              "partNumber": "VB160RH2",
              "totalPieces": 772,
              "totalScrap": 0
            }
          ],
          "efficiencyByMonth": [
            {
              "month": 6,
              "totalPieces": 137347,
              "totalScrap": 207,
              "targetEfficiency": 100,
              "averageEfficiency": 34.314814,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.24074
            },
            {
              "month": 7,
              "totalPieces": 106952,
              "totalScrap": 704,
              "targetEfficiency": 100,
              "averageEfficiency": 30.291666,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.55
            },
            {
              "month": 8,
              "totalPieces": 137247,
              "totalScrap": 1905,
              "targetEfficiency": 100,
              "averageEfficiency": 27.910447,
              "scrapThreshold": 3,
              "averageScrapPercentage": 1.283582
            },
            {
              "month": 9,
              "totalPieces": 86357,
              "totalScrap": 276,
              "targetEfficiency": 100,
              "averageEfficiency": 30.205128,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.207692
            },
            {
              "month": 10,
              "totalPieces": 112997,
              "totalScrap": 654,
              "targetEfficiency": 100,
              "averageEfficiency": 25.7,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.433333
            },
            {
              "month": 11,
              "totalPieces": 29003,
              "totalScrap": 103,
              "targetEfficiency": 100,
              "averageEfficiency": 24.5625,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0.20625
            }
          ]
        },
        {
          "operatorName": "Beilmyr, Danny",
          "operatorId": 52,
          "efficiency": {
            "targetEfficiency": 100,
            "averageEfficiency": 26.465116,
            "scrapThreshold": 3,
            "averageScrapPercentage": -20.027906
          },
          "partsProduction": [],
          "efficiencyByMonth": [
            {
              "month": 6,
              "totalPieces": 7828,
              "totalScrap": 0,
              "targetEfficiency": 100,
              "averageEfficiency": 13.14,
              "scrapThreshold": 3,
              "averageScrapPercentage": 0
            },
            {
              "month": 7,
              "totalPieces": 25284,
              "totalScrap": 1612,
              "targetEfficiency": 100,
              "averageEfficiency": 15.332142,
              "scrapThreshold": 3,
              "averageScrapPercentage": -32.260714
            },
            {
              "month": 8,
              "totalPieces": 33874,
              "totalScrap": 160,
              "targetEfficiency": 100,
              "averageEfficiency": 16.494285,
              "scrapThreshold": 3,
              "averageScrapPercentage": 1.202857
            }
          ]
        }
      ]
      
      return { OpData };
    }
}
