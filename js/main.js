const habilidades=[
    {
    nombre:"Bi",
    icono: "../images/bb.svg",        
    nivel: "junior",                
  
    },
      {

    nombre:"Csharp",
    icono: "../images/csharp.svg" ,   
    nivel: "junior",                
  
    },
      {
    nombre:"Git",
    icono: "../images/git.svg",          
    nivel: "junior",                 
  
    },
      {
    nombre:"JS",
    icono: "../images/js.svg",          
    nivel: "junior",                
  
    },
      {
    nombre:"Pyton",
    icono: "../images/py.svg",        
    nivel: "junior",                 
  
    },
      {
    nombre:"Tailwindcss",
    icono: "../images/talw.svg",          
    nivel: "junior",                 
  
    },

]


const contenedor=document.querySelector("#misHabilidades")

function mostrarHabilidades(habilidades){
contenedor.innerHTML=""

for (let index = 0; index < habilidades.length; index++) {
    contenedor.innerHTML+=`
     <div class="flex flex-col justify-center items-center">
        <img class="hover:bg-blue-800 hover:border rounded-2xl p-1 bg-gray-500" src=${habilidades[index].icono} alt="${habilidades[index].nombre}  ">
        <h3 class="text-white font-bold text-xl text-center">${habilidades[index].nombre} </h3>
        <p class="text-white text-xs text-center">${habilidades[index].nivel}</p>
    </div>
     `

}
console.log("cargadaa")
 }



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
