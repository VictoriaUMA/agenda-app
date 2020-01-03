import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/classes/persona';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-update',
  templateUrl: './persona-update.component.html',
  styleUrls: ['./persona-update.component.css']
})
export class PersonaUpdateComponent implements OnInit {
  id:string;
  persona: Persona;
  nombre: string=null;
 apellidos=null;
  edad: number=null;
  dni: string;
  birthday: Date=new Date();
  sexo:string=null;
  color: string=null;
  notas: string=null;

  sexos = [
    { value: "Hombre", viewValue: "Hombre" },
    { value: "Mujer", viewValue: "Mujer" },
    { value: "Otro", viewValue: "Otro" },
    { value: "No especificado", viewValue: "No especificado" }
  ];
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private personaApi: PersonaService
  ) { }

  ngOnInit() {
    this.persona = new Persona(null);
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.personaApi.GetPersona(this.id).subscribe( persona => {
      this.persona = persona[0] as Persona;
    });
  }

  submitPersonaForm() {   
    var er=document.getElementById("error");
    if (this.persona.edad < 0 || this.persona.edad > 125) {
      console.log("edad no valida"); //Por si la edad no es válida
      er.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; Rango de edad no válido";
    } else {
      er.innerHTML="";
      this.personaApi.UpdatePersona(this.id, this.persona).subscribe(res =>{
         this.router.navigateByUrl('/personas-list');
      });
    }
  }

}
