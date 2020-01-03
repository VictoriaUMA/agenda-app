import { Component, OnInit } from "@angular/core";
import { PersonaService } from "src/app/services/persona.service";
import { Router } from "@angular/router";
import { formatDate } from '@angular/common';

@Component({
  selector: "app-persona-add",
  templateUrl: "./persona-add.component.html",
  styleUrls: ["./persona-add.component.css"]
})
export class PersonaAddComponent implements OnInit {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  birthday: Date;
  sexo: string;
  color: string;
  notas: string;
  sexos = [
    { value: "Hombre", viewValue: "Hombre" },
    { value: "Mujer", viewValue: "Mujer" },
    { value: "Otro", viewValue: "Otro" },
    { value: "No especificado", viewValue: "No especificado" }
  ];

  constructor(private router: Router, private personaApi: PersonaService) {}

  ngOnInit() {
    this.nombre = null;
    this.apellidos = null;
    this.edad = null;
    this.dni = null;
    this.birthday = null;
    this.sexo = "No especificado";
    this.color = null;
    this.notas = null;
  }

  submitPersonaForm() {
     console.log(this.nombre+""+this.apellidos+""+this.edad+""+this.birthday.toLocaleDateString());
    var er = document.getElementById("error");
    if (this.edad < 0 || this.edad > 125) {
      er.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; Rango de edad no válido";
    } else {
      er.innerHTML = "";
      console.log(this.nombre+""+this.apellidos+""+this.edad+""+this.birthday.toLocaleDateString());
      this.personaApi.AddPersona(null,
          this.nombre,
          this.apellidos,
          this.edad,
          this.dni,
          formatDate(this.birthday,'yyyy-MM-dd','en-US'),
          this.sexo,
          this.color,
          this.notas
        )
        .subscribe(response => {
          this.router.navigateByUrl("");
        });
    }
  }
}
