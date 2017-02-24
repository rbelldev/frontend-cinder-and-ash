/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WarcraftLogsService } from './warcraft-logs.service';

describe('WarcraftLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarcraftLogsService]
    });
  });

  it('should ...', inject([WarcraftLogsService], (service: WarcraftLogsService) => {
    expect(service).toBeTruthy();
  }));
});
