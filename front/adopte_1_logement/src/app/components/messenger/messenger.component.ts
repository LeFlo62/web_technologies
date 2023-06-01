import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'app/data/user';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  lastUsers : User[] = [];

  userId? : string;

  constructor(private route : ActivatedRoute, private router : Router, private tokenStorage : TokenStorageService){
    if(!this.tokenStorage.isLoggedIn()){
      this.router.navigate(['/login']);
      return;
    }    
    
    this.route.params.subscribe((params : Params) => {
      this.userId = params["id"];
    });
  }
  ngOnInit(): void {
    
  }

}
