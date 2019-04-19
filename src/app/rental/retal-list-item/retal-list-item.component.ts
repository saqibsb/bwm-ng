import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'bwm-retal-list-item',
  templateUrl: './retal-list-item.component.html',
  styleUrls: ['./retal-list-item.component.scss']
})
export class RetalListItemComponent implements OnInit {
@Input() rental:any;
  constructor() { }

  ngOnInit() {
  }

}
