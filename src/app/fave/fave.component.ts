import { Component, OnInit , ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfigService } from '../services/config.service';
import { DataServiceService } from '../services/data-service.service';
@Component({
  selector: 'app-fave',
  templateUrl: './fave.component.html',
  styleUrls: ['./fave.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaveComponent implements OnInit {


  details: any;
  toggle = true;
  status = 'Enable';
  public celebrity
  public celebrityPresent
  public fanId

  @Output() child1EventEmitter= new EventEmitter<boolean>();
  constructor( public dialog: MatDialog,private services:ConfigService,private dataShare:DataServiceService) {}

  ngOnInit(): void {
    let celebrity = this.dataShare.getCelebrity()
    this.fanId=this.dataShare.getFanId()
    setTimeout(()=>{
      this.services.graphqlQueryForCelebrity(celebrity).subscribe(data =>{
        console.log(data)
        if(data){
          
        this.celebrity=data['celebrities']['edges']
        this.celebrityPresent=true
        console.log(this.celebrity)
        }
      })
    },1000);
    this.details = [{date: 'Saturday July 1', name: 'Greet & Meet', duration: '12 pm - 4 pm'},
    {date: 'Wednesday July 5', name: 'Q&A Fan Cast', duration: '2 PM - 3 PM'},
    {date: 'Saturday July 8', name: 'Meet & Greet', duration: '12 pm - 4 pm'}];
  }
  openDialog(): void {
    let obj={
      fanId : this.fanId,
      celebrityId : this.celebrity[0]['node']['id']
    }
    this.services.graphqlQueryForFollowCelerity(obj).subscribe(data =>{
      console.log(data)
      console.log("faved")

    })
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  back(){
    this.child1EventEmitter.emit(true)

  }



}

