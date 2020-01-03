import { Persona } from "../classes/persona";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PersonaService {
  endpoint: string = "api/personas/";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  // Add persona
  AddPersona(id, nombre, apellidos, edad, dni, birthday, sexo, color, notas) {
    console.log("cumple:"+birthday);
    let persona = new Persona({
      _id: id,
      nombre,
      apellidos,
      edad,
      dni,
      birthday,
      sexo,
      color,
      notas
    });
    console.log(persona);
    return this.http.post(this.endpoint, persona);
  }
   // Get persona
   GetPersonas(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  // Get persona
  GetPersona(id): Observable<any> {
    console.log("id:" +id);
    return this.http.get(this.endpoint + id);
  }

  // Update persona
  UpdatePersona(id, persona: Persona) {
    console.log("id:" +id);
    return this.http.put(this.endpoint + id, persona, { headers: this.headers })
  }

  // Delete persona
  DeletePersona(id) {
    console.log("id:" +id);
    return this.http.delete(this.endpoint + id);
  }
  
}
