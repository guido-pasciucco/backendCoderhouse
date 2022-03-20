const personas = []
const libros = []
const mascotas = []


class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,     //String
        this.apellido = apellido, //String
        this.libros = libros,     // objetc
        this.mascotas = mascotas // objetc
    }


    // getBookNames(){ String, devuelve solo el título de todos los libros, no el autor }
};

const persona1 = new Usuario("Guido", "Pasciucco",[{titulo: "El Quijote", autor: "Cervantes"},{titulo: "La guerra y la paz", autor: "Tolstoi"}],[{nombre: "Pishi", animal:"Gato"},{nombre: "Rocco", animal:"Perro"}]);
const persona2 = new Usuario("Juan", "Perez",[{titulo: "1984", autor: "Orwell"},{titulo: "Un mundo feliz", autor: "Huxley"},{titulo: "El Aleph", autor: "Borges"}],[{nombre: "Pelusa", animal:"Gato"}]);
const persona3 = new Usuario("Matias", "Lopez",[{titulo: "Cien años de Soledad", autor: "García Márquez"}],[{nombre: "Lola", animal:"Perro"}]);
const persona4 = new Usuario("Julia", "Fernández",[{titulo: "El jugador", autor: "Dostoievksi"},{titulo: "El proceso", autor: "Kafka"}],[{nombre: "Blanquito", animal:"Gato"},{nombre: "Chucho", animal:"Perro"},{nombre: "Coca", animal:"Perro"}]);
const persona5 = new Usuario("Lucía", "Martínez",[{titulo: "Odisea", autor: "Homero"},{titulo: "Meditaciones", autor: "Marco Aurelio"}],[{nombre: "Negrito", animal:"Gato"},{nombre: "Pirata", animal:"Perro"}]);
const persona6 = new Usuario("Satoshi", "Nakamoto",[{titulo: "Fedón", autor: "Platón"},{titulo: "Divina comedia", autor: "Dante"}],[{nombre: "A", animal:"A"},{nombre: "F", animal:"F"},{nombre: "A", animal:"A"},{nombre: "F", animal:"F"},{nombre: "A", animal:"A"},{nombre: "F", animal:"F"},{nombre: "A", animal:"A"}]);

personas.push(persona1); personas.push(persona2); personas.push(persona3);
personas.push(persona4); personas.push(persona5); personas.push(persona6);

libros.push(...persona1.libros); libros.push(...persona2.libros);
libros.push(...persona3.libros); libros.push(...persona4.libros);
libros.push(...persona5.libros); libros.push(...persona6.libros);

mascotas.push(...persona1.mascotas); mascotas.push(...persona2.mascotas);
mascotas.push(...persona3.mascotas); mascotas.push(...persona4.mascotas);
mascotas.push(...persona5.mascotas); mascotas.push(...persona6.mascotas);

console.log(personas)

// getFullName ------------------------------------------------------------------------------------

function getFullName(nombre, apellido){
    console.log(`El nombre completo es ${nombre} ${apellido}`);
}
for (let user of personas){
    getFullName(user.nombre, user.apellido)
}

// countMascotas ----------------------------------------------------------------------------------

function countMascotas(nombre, mascotas){
    if(mascotas.length === 1){
        console.log(`${nombre} tiene ${mascotas.length} mascota`)
    }else{
        console.log(`${nombre} tiene ${mascotas.length} mascotas`)
    }
}
for (let user of personas){
    countMascotas(user.nombre, user.mascotas)
}

// addMascota -------------------------------------------------------------------------------------

function addMascota(){    
    const nombreDueno = prompt("Como se llama su dueño?") ;
    const chequeoUsuario = personas.find(e => e.nombre === nombreDueno);
    if (chequeoUsuario === undefined){
        alert("ERROR: Esa persona no está en la base de datos.")
    }else{
        let nuevoNombre = prompt("Como se llama la mascota")
        let nuevoAnimal = prompt("Es perro o gato?")
        if(nuevoAnimal === "Perro" || nuevoAnimal === "Gato"){
            const nuevaMascota = {nombre: nuevoNombre, animal: nuevoAnimal}
            mascotas.push(nuevaMascota)
            alert(`Nueva mascota! se llama ${nuevoNombre}, es un ${nuevoAnimal} y es de ${nombreDueno} `)
            console.log(mascotas)
        }else{
            alert(`ERROR: Escriba "Perro" o "Gato"`)
        }    
    }
}

// addBook ----------------------------------------------------------------------------------------

function addBook(){    
    const nombreLector = prompt("Como se llama su dueño?") ;
    const chequeoUsuario = personas.find(e => e.nombre === nombreLector);
    if (chequeoUsuario === undefined){
        alert("ERROR: Esa persona no está en la base de datos.")
    }else{
        let tituloNuevoLibro = prompt("Título del libro?")
        let autorNuevoLibro = prompt("Autor del Libro?")
        const nuevoLibro = {titulo: tituloNuevoLibro, autor: autorNuevoLibro}
        libros.push(nuevoLibro)
        alert(`Nuevo libro! ahora ${nombreLector} está leyendo "${tituloNuevoLibro}" de ${autorNuevoLibro}`)
        console.log(libros)
    }
}

// getBookNames -----------------------------------------------------------------------------------

console.log(libros)

function getBookNames(){
    for (let items of libros){
        console.log(items.titulo)
    }
}
