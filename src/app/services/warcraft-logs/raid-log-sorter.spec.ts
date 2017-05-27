import {TestBed, inject} from "@angular/core/testing";
import {RaidLogSorter} from "./raid-log-sorter";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";

describe('Raid Log Sorter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaidLogSorter]
    });
  });

  it('should sort by date -- returns -1 if first log is newer then second log', inject([RaidLogSorter], (sorter: RaidLogSorter) => {
    let firstRaidLog = buildReportMetaAndSetStart(1420681374134);
    let secondRaidLog = buildReportMetaAndSetStart(1417830493139);

    expect(sorter.sortByDate(firstRaidLog, secondRaidLog)).toBe(-1)
  }));

  it('should sort by date -- returns 1 if first log is older then second log', inject([RaidLogSorter], (sorter: RaidLogSorter) => {
    let firstRaidLog = buildReportMetaAndSetStart(1417830493139);
    let secondRaidLog = buildReportMetaAndSetStart(1421284300835);

    expect(sorter.sortByDate(firstRaidLog, secondRaidLog)).toBe(1)
  }));

  function buildReportMetaAndSetStart(start: number): ReportMeta {
    let reportMeta = new ReportMeta('{}');
    reportMeta.start = start;
    return reportMeta
  }

});
