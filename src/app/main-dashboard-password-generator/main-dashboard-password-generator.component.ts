import { Component } from '@angular/core';

@Component({
  selector: 'app-main-dashboard-password-generator',
  templateUrl: './main-dashboard-password-generator.component.html',
  styleUrls: ['./main-dashboard-password-generator.component.css']
})
export class MainDashboardPasswordGeneratorComponent {
  include_letter:boolean=false;
  include_symbol:boolean=false;
  include_number:boolean=false;
  password:string='';
  lenght:number=0;

  selectedNumbers():void{
    this.include_number=true;

  }
  selectedSymbols():void{

    this.include_symbol=true;
  }

  selectedLetters():void{
    this.include_letter=true;
  }

  change_lenght(value:Event):void{
    const string_number:string=(value.target as HTMLInputElement).value;
    this.lenght=Number.parseInt(string_number);


  }
  constructor() {}

  get_password():void{
    const numbers:string='1234567890';
    const letters:string='qwertyuioplkjhgfdsazxcvbnm';
    const special_characters:string='()!@*&#$_'
    let valid_password:string='';
    let final_generated_password:string='';

    if(this.include_letter){
      valid_password+=letters;

    }if(this.include_symbol){
      valid_password+=special_characters;

    }
    if(this.include_number){

      valid_password+=numbers;
    }

    for(let i:number=0;i<this.lenght;i++){

    let index=  Math.floor(Math.random()*valid_password.length)
    final_generated_password+=valid_password[index]

    }

    this.password=final_generated_password;
    console.log(this.password)
  }


}
