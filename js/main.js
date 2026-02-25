const habilidades=[
    {
    nombre:"Bi",
    icono: "/img/bb.svg",        
    nivel: "junior",                
  
    },
      {

    nombre:"Csharp",
    icono: "/img/csharp.svg" ,   
    nivel: "junior",                
  
    },
      {
    nombre:"Git",
    icono: "/img/git.svg",          
    nivel: "junior",                 
  
    },
      {
    nombre:"JS",
    icono: "/img/js.svg",          
    nivel: "junior",                
  
    },
      {
    nombre:"Pyton",
    icono: "/img/py.svg",        
    nivel: "junior",                 
  
    },
      {
    nombre:"Tailwindcss",
    icono: "/img/talw.svg",          
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

    

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
 menu.classList.toggle("hidden");
});



const inputNombre = document.querySelector ("#nombre")
const inputEmail = document.querySelector ("#email")
const inputTextArea = document.querySelector ("#mensaje")



chat.addEventListener ("click", function (){
    let nombre= inputNombre.value.trim();
    let email= inputEmail.value.trim();
    let mensaje= inputTextArea.value.trim();

    if (nombre==="" || email==="" || mensaje==="" ){
        alert("Debe ingresar todos los campos:")
        
    }else{
        let miEmail= "coreo@gmail.com"
        const asunto = encodeURIComponent(`Mensaje de ${nombre}`);
        const cuerpo = encodeURIComponent(`Email: ${email}\n\nMensaje: ${mensaje}`);
        window.location.href = `mailto:${miEmail}?subject=${asunto}&body=${cuerpo}`;

        
    }

})