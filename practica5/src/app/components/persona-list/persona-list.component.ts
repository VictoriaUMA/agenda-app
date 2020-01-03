import { Component, OnInit } from "@angular/core";
import { Persona } from "src/app/classes/persona";
import { MatTableDataSource } from "@angular/material";
import { PersonaService } from "src/app/services/persona.service";

@Component({
  selector: "app-persona-list",
  templateUrl: "./persona-list.component.html",
  styleUrls: ["./persona-list.component.css"]
})
export class PersonaListComponent implements OnInit {
  dataSource = new MatTableDataSource<Persona>([]);
  displayedColumns: string[] = [
    "nombre",
    "apellidos",
    "edad",
    "dni",
    "color",
    "cumple",
    "sexo",
    "action"
  ];
  //Si quisieramos añadir el campo nota a la vista
  //  displayedColumns: string[] = ['nombre','apellidos','edad','dni','color','cumple','sexo','nota','action'];

  constructor(private personaService: PersonaService) {}

  cargarPersonas(){
    this.personaService.GetPersonas().subscribe( personas => {
      this.dataSource.data = personas;
    });
  }
  ngOnInit() {
    this.cargarPersonas();
  }

  deletePersona(id: string) {
    if (window.confirm('¿Estás seguro?')) {
      this.personaService.DeletePersona(id).subscribe(res =>{
        this.cargarPersonas();
      });
    }
  }
}
