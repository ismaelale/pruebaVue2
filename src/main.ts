import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

import { name } from "./bases_ts/basic.ts";
import { f } from "./bases_ts/basic.ts"
import { suma } from "./bases_ts/basic.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
    <h1>${name}</h1>
    <h2>${f()}</h2>

    <div class="contenedor-suma">
      <input class="input-input" id="num1" type="number"/>
      <input class = "input-input" id="num2" type="number"/>
      <button class="boton-contenedor" id="btn">Sumar</button>


      <h2 id="resultado"></h2>
      <h2 id="holamundo"></h2>
    
    </div>
  </div>
`

const btn = document.querySelector<HTMLButtonElement>("#btn")!
const resultado = document.querySelector<HTMLButtonElement>("#resultado")!
const hola = document.querySelector<HTMLLabelElement>("#holamundo")!

btn.addEventListener("click", () =>{
  const n1 = Number(document.querySelector<HTMLInputElement>("#num1")!.value)
  const n2 = Number(document.querySelector<HTMLInputElement>("#num2")!.value)
  const n3 = String(document.querySelector<HTMLLabelElement>("#holamundo")!)

  resultado.textContent = suma(n1, n2).toString();
  hola.textContent = n3;


})

