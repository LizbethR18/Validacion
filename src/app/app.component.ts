import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Validacion';
  show:boolean=false;
  buttonName:any='Mostrar componente';

  mostrar(){
    this.show = !this.show;
    if(this.show){  
      this.buttonName = "Ocultar componente";
    }else{
      this.buttonName = "Mostrar componente";
    }
  }
}
