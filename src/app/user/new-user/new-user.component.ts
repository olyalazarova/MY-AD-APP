import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { NavigationEnd, Router } from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private router: Router, ) 
  { 
    
  }

  ngOnInit(): void {
    
  }

  

}
