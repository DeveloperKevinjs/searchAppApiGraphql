import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiGraphqlService } from './services/apiGraphql/api-graphql.service';
import { Countries } from './interfaces/countrie.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

public responseOfCountries:Countries[] = [];
public dataFilter:Countries[] = [];
public isVisible:boolean = false;

constructor(private api:ApiGraphqlService){}

  ngOnInit(): void {
    this.api.getAllCountries().subscribe({
      next:(res)=>{
        this.responseOfCountries = res;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  getSearchValue(name:string){

    if(name === "") return;
    this.filterSearch(name);
  }

  public filterSearch(name: string) {
    this.dataFilter = this.responseOfCountries.filter((country)=> country.name.toLowerCase().includes(name.toLowerCase()))
    if(this.dataFilter.length){
      this.isVisible = true;
    }
  }
  
}


