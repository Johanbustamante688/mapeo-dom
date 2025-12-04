// // let titulo = document.querySelectorAll("h1")
// let titulo= document.getElementsByTagName("h1")
// console.log(titulo[0].textContent)
// console.log(titulo.textContent)
// titulo[0].textContent="Esto es un titulo desde Java Script"
// if(false){
// titulo.textContent= "Es Verdadero"
// }else{
//     titulo[1].textContent="Es Falso"
//     titulo[1].classList.add("title")
// }

import { clientes } from "../model/clientes.js";
let listarClientes = document.getElementById("listarClientes");
console.log(listarClientes);
listarClientes.addEventListener("click", function () {
  clientes.map(function (index) {
    console.log(index);
    let cardCliente = document.createElement("div");
    cardCliente.classList.add("cliente-card");
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    let avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = index.nombre.split(" ").map((i) => i[0]).join(" ");
    let badge = document.createElement("span");
    badge.classList.add("badge", "badge-activo");
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    let clienteNombre = document.createElement("h3");
    clienteNombre.classList.add("cliente-nombre");
    let clienteEmpresa = document.createElement("p");
    clienteEmpresa.classList.add("cliente-empresa");
    let clienteInfo = document.createElement("div");
    clienteInfo.classList.add("cliente-info");
    let infoItem = document.createElement("div");
    infoItem.classList.add("info-item");
    let infoIcon = document.createElement("span");
    infoIcon.classList.add("info-icon");
    let infoText = document.createElement("span");
    infoText.classList.add("info-text");
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    let btnDetalles = document.createElement("button");
    btnDetalles.classList.add("btn", "btn-primary");
    let btnContacto = document.createElement("button");
    btnContacto.classList.add("btn", "btn-secondary");

    cardFooter.append(btnDetalles, btnContacto);
    infoItem.append(infoIcon, infoText);
    clienteInfo.append(infoItem);
    cardBody.append(clienteNombre, clienteEmpresa, clienteInfo);
    cardHeader.append(avatar, badge);
    cardCliente.append(cardHeader, cardBody, cardFooter);

    document.getElementById("clientes-grid").append(cardCliente);
  });
});
