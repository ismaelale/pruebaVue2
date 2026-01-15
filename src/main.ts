import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

import { name, /*suma, NombrePersona, login*/ } from "./bases_ts/basic.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
    <h1>${name}</h1>

    <!--<div class="contenedor-suma">
      <input class="input-input" id="num1" type="number"/>
      <input class = "input-input" id="num2" type="number"/>
      <button class="boton-contenedor" id="btn">Sumar</button>


      <h2 id="resultado"></h2>
      </div>

      <div class="contenedor-nombre">
        <input class="input-nombre-apellido" id="nombre" type="text"/>
        <input class="input-nombre-apellido" id="apellido" type="text"/>
        
        <h4 id="verdadero-falso"></h4>

      </div> NOMBRE Y APELLIDO, SI ES VERDADERO O SI ES FALSO -->

      <!-- <div class="contenedor-login">

        <input class="contenedor-input" id="usuario" placeHolder="Ingrese Usuario"/>
        <input class="contenedor-input" id="contraseña" placeHolder="Ingrese Contraseña"/>

        <button class="button-entrada" id="btn-login" >Ingresar</button>

        <h5 id="acceso"></h5>


      </div> --> <!--LOGIN-->

      <div class="contenedor-ejercicio3">

        <div class="contenedor-label-input">
        <label class="label-label">Ingrese el Saldo</label>
        <input class="input-input" id="saldo" placeholder="Ingrese el saldo" type="number">
        </div>
        <div class="contenedor-label-input">
          <label class="label-label">Precio Producto</label>
          <input class="input-input" id="precio" placeholder="Ingrese el precio del Producto" type="number">
        </div>
        <div class="contenedor-label-input-3">
          <input class="radio-button" id="vip" type="radio">
          <label for="vip">VIP</label>
          <input class="radio-button" id="no-vip" type="radio">
          <label for="no-vip">NO VIP</label>
        </div>
      </div>

      <button class="button-login">INGRESAR</button>

      <h5 id="resultado-venta"></h5>

  </div>
`

// const btn = document.querySelector<HTMLButtonElement>("#btn")!
// const resultado = document.querySelector<HTMLHeadingElement>("#resultado")!
// const resultado_nombre = document.querySelector<HTMLHeadingElement>("#verdadero-falso")!

// btn.addEventListener("click", () =>{
//   const n1 = Number(document.querySelector<HTMLInputElement>("#num1")!.value)
//   const n2 = Number(document.querySelector<HTMLInputElement>("#num2")!.value)
//   const nombre_persona = String(document.querySelector<HTMLInputElement>("#nombre")!.value)
//   const apellido_persona = String(document.querySelector<HTMLInputElement>("#apellido")!.value)

//   resultado.textContent = suma(n1, n2).toString();

//   resultado_nombre.textContent = NombrePersona(nombre_persona, apellido_persona); 

// }) NOMBRE DE LA PERSONA - SUMA

// const btn = document.querySelector<HTMLButtonElement>("#btn-login")!
// const acceso = document.querySelector<HTMLHeadingElement>("#acceso")!

// btn.addEventListener("click", () =>{

//   const us = String(document.querySelector<HTMLInputElement>("#usuario")!.value)
//   const contra = String(document.querySelector<HTMLInputElement>("#contraseña")!.value)

//   acceso.textContent = login(us, contra)
// }) LOGIN - ACCESO DENEGADO O NO



