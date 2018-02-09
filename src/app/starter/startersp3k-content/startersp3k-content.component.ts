import { Component, OnInit } from '@angular/core';
import {DataTableResource} from '../../data-table'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-startersp3k-content',
  templateUrl: './startersp3k-content.component.html',
  styleUrls: ['./startersp3k-content.component.css']
})
export class StarterSp3kContentComponent implements OnInit {

persons: Array<any>= [ 
  { "customerId": "Aaron Moore", "kodeCabang": "123213213123", "job  itle": "Regional Configuration Producer", "active": true, "phoneNumber": "611-898-6201", "date": "2015-11-06T07:21:25.510Z" },
  { "customerId": "Yvonne Conroy Mrs.", "kodeCabang": "123213213123", "jobTitle": "Global Mobility Orchestrator", "active": false, "phoneNumber": "115-850-0969", "date": "2014-12-20T00:48:40.276Z" },
  { "customerId": "Laron Padberg", "kodeCabang": "123213213123", "jobTitle": "Senior Directives Supervisor", "active": false, "phoneNumber": "632-654-3034", "date": "2015-09-29T04:33:38.544Z" },
  { "customerId": "Dr. Maryam Spinka", "kodeCabang": "123213213123", "jobTitle": "Dynamic Mobility Associate", "active": true, "phoneNumber": "547-345-0067", "date": "2015-09-23T01:13:39.320Z" },
  { "customerId": "Kiley Baumbach", "kodeCabang": "123213213123", "jobTitle": "Principal Metrics Orchestrator", "active": true, "phoneNumber": "958-524-5164", "date": "2014-12-05T23:39:27.340Z" },
  { "customerId": "Hollis MacGyver", "kodeCabang": "123213213123", "jobTitle": "Direct Markets Assistant", "active": true, "phoneNumber": "603-607-3241", "date": "2015-02-12T10:40:52.977Z" },
  { "customerId": "Axel McLaughlin", "kodeCabang": "123213213123", "jobTitle": "Forward Mobility Architect", "active": false, "phoneNumber": "983-639-0705", "date": "2015-03-01T02:28:26.030Z" },
  { "customerId": "Ricardo Botsford", "kodeCabang": "123213213123", "jobTitle": "Direct Quality Consultant", "active": true, "phoneNumber": "408-082-9480", "date": "2015-01-31T03:41:54.611Z" },
  { "customerId": "Corbin Funk Mrs.", "kodeCabang": "123213213123", "jobTitle": "Human Configuration Manager", "active": true, "phoneNumber": "386-937-8683", "date": "2014-12-05T15:07:36.843Z" },
  { "customerId": "Rosalind Paucek", "kodeCabang": "123213213123", "jobTitle": "Future Creative Supervisor", "active": true, "phoneNumber": "977-661-7403", "date": "2015-06-10T17:42:38.644Z" },
  { "customerId": "Henderson Moore", "kodeCabang": "123213213123", "jobTitle": "Internal Accountability Director", "active": true, "phoneNumber": "078-101-6377", "date": "2015-09-26T05:14:34.913Z" },
  { "customerId": "Kelli Schoen", "kodeCabang": "123213213123", "jobTitle": "National Accountability Architect", "active": false, "phoneNumber": "654-591-6561", "date": "2015-05-04T06:50:37.482Z" },
  { "customerId": "Kenna Fritsch", "kodeCabang": "123213213123", "jobTitle": "Legacy Response Administrator", "active": true, "phoneNumber": "790-480-2859", "date": "2015-10-10T23:37:05.867Z" },
  { "customerId": "Judge Marquardt", "kodeCabang": "123213213123", "jobTitle": "Human Program Specialist", "active": true, "phoneNumber": "100-494-1787", "date": "2015-04-04T23:29:48.588Z" },
  { "customerId": "Kurtis Hane", "kodeCabang": "123213213123", "jobTitle": "International Optimization Director", "active": false, "phoneNumber": "008-800-2959", "date": "2014-12-04T21:09:50.722Z" },
  { "customerId": "Nicolette Lind", "kodeCabang": "123213213123", "jobTitle": "Legacy Marketing Facilitator", "active": true, "phoneNumber": "007-908-2460", "date": "2015-06-22T08:11:57.381Z" },
  { "customerId": "Idella Green", "kodeCabang": "123213213123", "jobTitle": "Dynamic Division Orchestrator", "active": false, "phoneNumber": "147-865-1578", "date": "2015-02-12T23:00:31.283Z" },
  { "customerId": "Mackenzie Bartell", "kodeCabang": "123213213123", "jobTitle": "National Directives Associate", "active": false, "phoneNumber": "235-649-0980", "date": "2015-06-24T20:21:51.356Z" },
  { "customerId": "Mose Kohler", "kodeCabang": "123213213123", "jobTitle": "Lead Implementation Executive", "active": true, "phoneNumber": "614-886-4868", "date": "2015-03-04T13:05:23.698Z" },
  { "customerId": "Cielo Kuphal", "kodeCabang": "123213213123", "jobTitle": "Dynamic Division Analyst", "active": false, "phoneNumber": "590-976-7492", "date": "2015-06-02T20:52:32.664Z" },
  { "customerId": "Haleigh Stokes", "kodeCabang": "123213213123", "jobTitle": "Global Intranet Executive", "active": false, "phoneNumber": "418-255-9365", "date": "2015-04-10T00:32:10.283Z" },
  { "customerId": "Tyrese Walter", "kodeCabang": "123213213123", "jobTitle": "Senior Web Liason", "active": false, "phoneNumber": "041-555-9831", "date": "2015-08-18T20:05:08.839Z" },
  { "customerId": "Barney Shields", "kodeCabang": "123213213123", "jobTitle": "District Web Administrator", "active": true, "phoneNumber": "379-438-0217", "date": "2015-06-01T09:28:46.778Z" },
  { "customerId": "Favian Abbott Miss", "kodeCabang": "123213213123", "jobTitle": "Lead Implementation Facilitator", "active": false, "phoneNumber": "642-808-5400", "date": "2015-08-09T07:38:06.588Z" },
  { "customerId": "Carissa Kunze", "kodeCabang": "123213213123", "jobTitle": "Regional Division Technician", "active": true, "phoneNumber": "949-983-0342", "date": "2015-11-05T08:09:09.463Z" }
]



  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

  itemResource: any;
  items = [];
  itemCount = 0;

  constructor() {
    this.itemResource= new DataTableResource(this.persons);
      this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
      this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
      console.log('Clicked: ' + rowEvent.row.item.customerId);
  }

  rowDoubleClick(rowEvent) {
      alert('Double clicked: ' + rowEvent.row.item.customerId);
  }
  

  rowTooltip(item) { return item.jobTitle; }


}
