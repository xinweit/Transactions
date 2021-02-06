import { Component, OnInit } from '@angular/core';
import { data } from './data';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Transactions';

  constructor(private rs: RestService) { }

  // headers for table
  columns = ["ID", "Sender", "Receiver", "Total Amount", "Total Paid Amount"];

  // fields of transaction objects
  index = ["id", "sender", "receiver", "totalAmount", "totalPaidAmount"]

  data: data[] = [];

  // currentPage in html file
  p: Number = 1;
  // itemsPerPage in html file
  count: Number = 1;




  ngOnInit(): void {
    this.rs.getData().subscribe
      (
        (response) => {
          this.data = response;
        },

        (error) => {
          console.log("Error occured : " + error);
        }
      )
  }
}


