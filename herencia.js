const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

class Persona{
	constructor(fname, lastname, age){
		this.fname = fname;
		this.lastname = lastname;
		this.age = age;
	}

	getInfoP(){
		return ("Nombre: " + this.fname + " Apellido: " + this.lastname + " Edad:" + this.age);
	}
}

class Estudiante extends Persona{
	constructor(fname, lastname, age, matricula, grupo){
		super(fname, lastname, age);
		this.matricula = matricula;
		this.grupo = grupo;
	}

	getInfo(){
		return this.getInfoP() + " Matricula: " + this.matricula + " Grupo:" + this.grupo;
	}
}

let Joshua = new Estudiante("Joshua", "Ayala", 19,"MRID0123", "07IDSA");
let Andres = new Estudiante("Andres", "Gomez", 21,"MRID0233", "07IDMA");

let Estudiantes = [Joshua, Andres];
console.log(Estudiantes);

app.get('/api/estudiantes', (req, res) =>{
    res.send(200, Estudiantes)
})

app.get('/api/estudiantes/:MRID0123', (req, res) =>{
    res.send(200, Estudiantes[0])
})

app.post('/api/estudiantes', (req, res) =>{
    let Omar = new Estudiante("Omar", "Andrade", 39,"MRID8123", "09IDSA");
    Estudiantes.push(Omar)
    res.send(200, Omar)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})