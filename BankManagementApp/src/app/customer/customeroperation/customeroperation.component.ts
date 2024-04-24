import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customeroperation',
  templateUrl: './customeroperation.component.html',
  styleUrl: './customeroperation.component.scss'
})
export class CustomeroperationComponent implements OnInit{

  customerIdToGet!: string;

  constructor(private route: ActivatedRoute){}

  ngOnInit():void{
    this.route.params.subscribe(params=>{
      this.customerIdToGet = params['id'];
      console.log(this.customerIdToGet);
    })
  }
}
