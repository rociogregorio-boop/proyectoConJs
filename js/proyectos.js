


const proyectos=[
    {
    nombre:"diseñoQr",
    icono: "../imagen/diseño movil qr.jpg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
   
      {
    nombre:"rating",
    icono: "../imagen/diseño-mobil-rating.jpg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
      {
    nombre:"calculadora",
    icono: "../imagen/diseño-movil-calcu.jpg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
      {
    nombre:"perfil social",
    icono: "../imagen/diseñomobil-perfilsocial.jpg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
   
       {
    nombre:"diseño tarjeta",
    icono: "../imagen/diseño-mobil-card.jpg" ,    // 
    nivel: "junior",                 // Propiedad (Number)
  
    },
       {
    nombre:"menu",
    icono: "../imagen/diseño-movil-menu.jpg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
    
]


const contenedor=document.querySelector("#enlaceProyectos")
console.log(contenedor)
function mostrarProyectos(proyectos){
contenedor.innerHTML=""

for (let index = 0; index < proyectos.length; index++) {
    contenedor.innerHTML+=`
     <div class="w-full object-cover h-96 flex flex-col justify-between items-center max-w max-w-sm space-y-2.5">
        <img class="hover:bg-blue-800 hover:border rounded-2xl p-1 bg-gray-500" src=${proyectos[index].icono} alt="${proyectos[index].nombre}  ">
        <h3 class="text-white mt-4 font-bold text-xl text-center">${proyectos[index].nombre} </h3>
        <p class="text-white text-xs text-center">${proyectos[index].nivel}</p>
    </div>
     `

};
console.log("cargada")
 }


mostrarProyectos(proyectos)


