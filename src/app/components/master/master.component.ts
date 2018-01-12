import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private route:Router,private router:ActivatedRoute) { }

  ngOnInit() {
  }
  openComponent(navUrl: string) {
      this.route.navigateByUrl(navUrl);
  }

}
