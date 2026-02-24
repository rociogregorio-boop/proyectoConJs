import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
export default defineConfig({
   plugins: [
    tailwindcss(),
  ],
   build:{
    rollupOptions:{
      input:{
        index: resolve(__dirname,'index.html'),
        proyects: resolve(__dirname,'pages/proyectos.html')
         
        }

        
      }
    }
  })


 
 