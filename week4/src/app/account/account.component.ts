import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email = ""
  paramsub

  constructor(private route:ActivatedRoute) { }
      
  ngOnInit() {
    this.paramsub = this.route.paramMap.subscribe(params=>{
      this.email=params.get('email')
    })

  }

}
