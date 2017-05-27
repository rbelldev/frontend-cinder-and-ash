import {Injectable} from "@angular/core";
import {ReportMeta} from "../../models/warcraft-logs/report-meta";

@Injectable()
export class RaidLogSorter {

  sortByDate(meta1:ReportMeta, meta2:ReportMeta){
    if (meta1.start > meta2.start) {
      return -1;
    }

    if (meta1.start < meta2.start) {
      return 1;
    }

    return 0;
  };

}
