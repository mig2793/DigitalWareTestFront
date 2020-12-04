import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit {
  showLoading:boolean;
  constructor(private loaderService: LoaderService) {
    this.loaderService.show$.subscribe((data) => {
      this.showLoading = data;
      let element = document.getElementById("loader-page");
      if(this.showLoading){
        element.style.display = "block";
      }else{
        element.style.display = "none";
      }

    });
  }

  ngOnInit() {
  }
}
