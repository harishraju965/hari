import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  pid: any = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('id');
  }

}
