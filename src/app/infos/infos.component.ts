import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  id;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // V1
    // this.activatedRoute.params.subscribe({
    //   next: (p: Params) => {
    //     console.log(p['id']);
    //   },
    // });

    //V2 avec snapchot
    //let id = this.activatedRoute.snapshot.params['id'];
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id);

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.id = p.get('id');
        console.log(p.get('id'));
      },
    });
  }
}
