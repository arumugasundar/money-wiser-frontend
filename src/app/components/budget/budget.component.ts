import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import {MatTableDataSource} from '@angular/material/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  public transactionDataSource = new MatTableDataSource<any>([]);
  public transactionColumns = ['Date', 'Transaction', 'Withdraw', 'Deposit', 'Balance'];

  constructor(
    public appService: AppService,
    private _snackBar: MatSnackBar,
    private _router : Router,
    public datePipe: DatePipe
  ) {  }
  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(){
    this.appService.getTransactions().subscribe((response) => {
      if(response){
        this.transactionDataSource = new MatTableDataSource<any>(response);
      }
    }, (error) => {
      console.log(error);
    });
  }

}
