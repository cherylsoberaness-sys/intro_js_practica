//Un cliente tiene un array de desarrolladores y nos pide extraer información específica 
//usando métodos de arrays. Quiere obtener los programadores que tengan como habilidad 
//JavaScript y un listado de los proyectos en los que están trabajando.

/*TAREAS: 
1. Filtrar desarrolladores que tengan "JavaScript" como habilidad. 
2. Extraer un array con TODOS los nombres de proyectos (sin duplicados).  */


const data = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            {id: 1, nombre: 'Proyecto 1'},
            {id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            {id: 3, nombre: 'Proyecto 3' },
            {id: 4, nombre: 'Proyecto 4'},
        ]
    },
    {
        id: 3,
        nombre: 'Miriam',
        habilidades: ['UX', 'Figma', 'HTML', 'JavaScript'],
        proyectos: [
            {id: 5, nombre: 'Proyecto 1'},
            {id: 6, nombre: 'Proyecto 4' }
        ]
    }
];
//1. Filtrar desarrolladores que tengan "JavaScript" como habilidad. 

const javaScriptDevelopers = data.filter(dev => dev.habilidades.includes("JavaScript"));
console.log("JavaScript Developes: ", javaScriptDevelopers);

//funcion que filtra por habilidades y normaliza texto (para practicar funciones y normalizacion):

const filterBySkills = (data, field, datum) => {
    const devsList = data.filter(dev => {
        if(!dev[field]){
            return false
        } 
        return dev[field].map(skill => skill.toLowerCase()).includes(datum.toLowerCase());
    })
    return devsList
}

console.log("JavaScript Developers 2: ", filterBySkills(data, "habilidades", "javascript"));



//2. Extraer un array con TODOS los nombres de proyectos (sin duplicados).

//for explicito:

const copyOfProjects = []
for(const dev of data) {
    for(const proyecto of dev.proyectos){
        if(!copyOfProjects.includes(proyecto.nombre)){
            copyOfProjects.push(proyecto.nombre);
        }
    }

}

console.log("Developers Projects", copyOfProjects);
    

//funcion que filtra datos especificos para practicar funciones flecha y acceso dinamico
const filterSpecific = (data, field, key) => {
    const copyOfProjects = [];
    for(const dev of data){
        for(const proyecto of dev[field]){
            if(!copyOfProjects.includes(proyecto[key])){
                copyOfProjects.push(proyecto[key]);
            }
         }
    } 
    return copyOfProjects;
}
console.log(filterSpecific(data, "proyectos", "nombre"));


//con map y new Set para eliminar duplicados

const projectNames = data.flatMap((dev) => dev.proyectos.map(proyecto => proyecto.nombre));
const uniqueProjects = [...new Set(projectNames)];
console.log(uniqueProjects);


