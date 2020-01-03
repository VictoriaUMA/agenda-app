

export class Persona {
  _id: string;
  private _nombre: string;
  private _apellidos: string; //dos apellidos
  private _edad: number;
  private _dni: string;
  private _birthday: Date;
  private _sexo: string;
  private _color: string;
  private _notas: string;


  constructor(persona: any) {
    this._id = (persona && persona._id) || null;
    this._nombre = (persona && persona.nombre) || null;
    this._apellidos = (persona && persona.apellidos) || [null,null];
    this._dni = (persona && persona.dni) || null;
    this._birthday = (persona && persona.birthday) || "01/01/2001";
    this._edad = (persona && persona.edad) || 0;
    this._sexo = (persona && persona.sexo) || null;
    this._color = (persona && persona.color) || null;
    this._notas = (persona && persona.notas) || null;
  }
 
  ////////////////////////////////////////////////////GETTERS
  public get id(): string {
    return this._id;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public get apellidos(): string {
    return this._apellidos;
  }
  public get edad(): number {
    return this._edad;
  }
  public get dni(): string {
    return this._dni;
  }
  public get birthday(): Date {
    return this._birthday;
  }
  public get sexo(): string {
    return this._sexo;
  }
  public get color(): string {
    return this._color;
  }

  public get notas(): string {
    return this._notas;
  }

  /////////////////////////////////////////////////////SETTERS
  public set id(value: string) {
    this._id = value;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public set apellidos(value: string) {
    this._apellidos = value;
  }
  public set edad(value: number) {
    this._edad = value;
  }
  public set dni(value: string) {
    this._dni = value;
  }
  public set birthday(value: Date) {
    this._birthday = value;
  }
  public set sexo(value: string) {
    this._sexo = value;
  }
  public set color(value: string) {
    this._color = value;
  }

  public set notas(value: string) {
    this._notas = value;
  }

  public mostrar(): string {
    return (
      "NOMBRE: " +
      this._nombre +
      "; \n" +
      "APELLIDOS: " +
      this._apellidos +
      ";\n" +
      "DNI: " +
      this._dni +
      ";\n" +
      "EDAD: " +
      this._edad +
      ";\n" +
      "CUMPLEAÑOS: " +
      this._birthday +
      ";\n" +
      "SEXO: " +
      this._sexo +
      ";\n" +
      "COLOR FAVORITO: " +
      this._color +
      ";\n" +
      "NOTAS: " +
      this._notas
    );
  }
}