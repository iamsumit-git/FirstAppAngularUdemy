import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  allowNewServer= false;
  serverId:number=10;
  serverCreationStatus:string="no server was created";
  serverName="TestServer";
  userName="";
  getServerId(){
    return this.serverId;
  
  }

  constructor() {    
    setTimeout(() => {
      this.allowNewServer= true;
      
    }, 2000);
  }

  ngOnInit(): void {
    }
    
    
    onCreateServer(){
      this.serverCreationStatus="server is created successfully!!! Name is "+ this.serverName;
  }

  onUpdateServerName(event : Event){
    //  console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
