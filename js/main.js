const habilidades=[
    {
    nombre:"Bi",
    icono: "../imagen/bb.svg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
      {
    nombre:"Csharp",
    icono: "../imagen/csharp.svg" ,    // 
    nivel: "junior",                 // Propiedad (Number)
  
    },
      {
    nombre:"Git",
    icono: "../imagen/git.svg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
      {
    nombre:"JS",
    icono: "../imagen/js.svg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
      {
    nombre:"Pyton",
    icono: "../imagen/py.svg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },
      {
    nombre:"Tailwindcss",
    icono: "./imagen/talw.svg",          // Propiedad (String)
    nivel: "junior",                 // Propiedad (Number)
  
    },

]


const contenedor=document.querySelector("#misHabilidades")

function mostrarHabilidades(habilidades){
contenedor.innerHTML=""

for (let index = 0; index < habilidades.length; index++) {
    contenedor.innerHTML+=`
     <div class="flex flex-col justify-center items-center">
        <img class="hover:bg-blue-800 hover:border rounded-2xl p-1 bg-gray-500" src="${habilidades[index].icono}" alt="${habilidades[index].nombre}  ">
        <h3 class="text-white font-bold text-xl text-center">${habilidades[index].nombre} </h3>
        <p class="text-white text-xs text-center">${habilidades[index].nivel}</p>
    </div>
     `

}
console.log("cargadaa")
 }


// console.log(habilidades[0].nombre)
// console.log(habilidades[4].nombre)
mostrarHabilidades(habilidades)

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Por favor completa todos los campos.");
    return;
  }

  alert("Formulario validado ✔\nAhora configurá el envío al correo.");
});
 
    

    const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
