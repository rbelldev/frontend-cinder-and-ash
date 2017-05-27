// /* tslint:disable:no-unused-variable */
// import {TestBed, inject} from "@angular/core/testing";
// import {WarcraftLogsService} from "./warcraft-logs.service";
// import {Http} from "@angular/http";
// import {RaidLogSorter} from "./raid-log-sorter";
// import {Observable} from "rxjs";
// var td = require('testdouble');
//
// fdescribe('WarcraftLogsService', () => {
//
//   const baseURL = 'https://www.warcraftlogs.com:443/v1/reports/guild';
//   const guildName = 'cinder%20and%20ash';
//   const serverName = `malganis`;
//   const serverRegion = 'us';
//   const publicKey = '574bfcada6ed1ad1460bfe16ebd1de78';
//
//   let mockHTTP;
//   let mockResponseObservable;
//
//   beforeEach(() => {
//
//     mockHTTP = td.object({
//       get: td.function()
//     });
//
//     mockResponseObservable = td.object({
//       map: td.function()
//     });
//
//     // td.when(mockHTTP.get(td.matchers.anything())).thenReturn(mockResponseObservable);
//     // td.when(mockResponseObservable.map(td.matchers.anything())).thenResolve();
//
//     TestBed.configureTestingModule({
//       providers: [
//         WarcraftLogsService,
//         {provide: Http, useValue: mockHTTP},
//         RaidLogSorter
//       ]
//     });
//
//   });
//
//   describe('GetGuildLogList', () => {
//
//     const apiUrl = `${baseURL}/${guildName}/${serverName}/${serverRegion}?api_key=${publicKey}`;
//
//     it('should use the correct URL', inject([WarcraftLogsService], (service: WarcraftLogsService) => {
//       const expectedLogList = '{}';
//
//       td.when(mockHTTP.get(apiUrl)).thenReturn(mockResponseObservable);
//       td.when(mockResponseObservable.map(td.matchers.anything())).thenResolve(Observable.of(expectedLogList));
//
//       service.getGuildLogList().subscribe((logs) => {
//           expect(logs).toEqual([]);
//       });
//
//     }));
//   });
//
//
// });
