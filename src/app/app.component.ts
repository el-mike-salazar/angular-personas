import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaServiceService } from './persona-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'personas';

  constructor( private _persona: PersonaServiceService ) {}
  
  arrayUsuario: any[];
  nombre: 'John Doe';

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(){
    this._persona.getAllPerson().then( (data: any) => {
      if(localStorage.getItem('personas-data')){
        this.arrayUsuario = JSON.parse(localStorage.getItem('personas-data'));
        this.arrayUsuario.push(...data.results[0].personas);
      }else{
        this.arrayUsuario = data.results[0].personas;
      }
    });
  }

  registrar(forma: NgForm) {
    if(!forma.value.nombre || !forma.value.sexo || !forma.value.edad) { 
      alert('Faltan campor por llenar');
      return false;
    }
    var personas = [];
    if(localStorage.getItem('personas-data')){
      personas = JSON.parse(localStorage.getItem('personas-data'));
    }
    personas.push(forma.value);
    localStorage.setItem('personas-data', JSON.stringify(personas));
    forma.reset();
    this.obtenerUsuarios();
  }
  
}
