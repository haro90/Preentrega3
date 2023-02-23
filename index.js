/* TODOS LOS CONSOLE LOGS NADAMAS SON PARA CEHCAR QUE TODO ESTE BIEN TODO EL PROCESO SE PUEDE HACER DIRECTO EN LA PAGINA */

/* Variables y arrays para que funcionen los calculos */

class Plantas {
  constructor(nombre, factor1, factor2, factor3) {
    this.nombre = nombre;
    this.factor1 = factor1;
    this.factor2 = factor2;
    this.factor3 = factor3;
  }
}

const Planta1 = new Plantas("Chile", 2.5, 3.3, 3.7);

const Planta2 = new Plantas("Maiz", 1.5, 2.3, 4.7);

const Planta3 = new Plantas("Tomate", 0.5, 1.3, 3.7);

ArrayClima = [
  { Nombre: "Tropical", Valor: 0.3 },
  { Nombre: "Seco", Valor: 0.5 },
  { Nombre: "Templado", Valor: 0.7 },
  { Nombre: "Continental", Valor: 0.9 },
  { Nombre: "Polar", Valor: 0.09 },
];
/* Seria la respuesta del nombre */
const nombreUsiario = document.getElementById("1");
nombreUsiario.addEventListener("change", funcion1);

function funcion1() {
  console.log(nombreUsiario.value);
}

/* Seria la respuesta del valor de m2 */
const m2 = document.getElementById("2");
m2.addEventListener("change", funcion2);

function funcion2() {
  console.log(m2.value);
}

/* Seria el calculo del chile */
const PlantaC = document.getElementById("1a");
PlantaC.addEventListener("click", CalculoPlanta1);

function CalculoPlanta1() {
  if ((PlantaC.value = (plantasf = Planta1.nombre) && m2.value <= 50)) {
    console.log(Math.round((Resultado = m2.value * Planta1.factor1)));
  } else if ((PlantaC.value = (plantasf = Planta1.nombre) && m2.value <= 100)) {
    console.log(Math.round((Resultado = m2.value * Planta1.factor2)));
  } else if ((PlantaC.value = (plantasf = Planta1.nombre) && m2.value <= 200)) {
    console.log(Math.round((Resultado = m2.value * Planta1.factor3)));
  } else {
    alert("No es un numero, actuliza la pagina");
  }
}

/* Seria el calculo del Maiz */
const PlantaM = document.getElementById("1b");
PlantaM.addEventListener("click", CalculoPlanta2);

function CalculoPlanta2() {
  if ((PlantaM.value = (plantasf = Planta2.nombre) && m2.value <= 50)) {
    console.log(Math.round((Resultado = m2.value * Planta2.factor1)));
  } else if ((PlantaM.value = (plantasf = Planta2.nombre) && m2.value <= 100)) {
    console.log(Math.round((Resultado = m2.value * Planta2.factor2)));
  } else if ((PlantaM.value = (plantasf = Planta2.nombre) && m2.value <= 200)) {
    console.log(Math.round((Resultado = m2.value * Planta2.factor3)));
  } else {
    alert("No es un numero, actuliza la pagina");
  }
}

/* Seria el calculo del Tomate */
const PlantaT = document.getElementById("1c");
PlantaT.addEventListener("click", CalculoPlanta3);

function CalculoPlanta3() {
  if ((PlantaT.value = (plantasf = Planta3.nombre) && m2.value <= 50)) {
    console.log(Math.round((Resultado = m2.value * Planta3.factor1)));
  } else if ((PlantaT.value = (plantasf = Planta3.nombre) && m2.value <= 100)) {
    console.log(Math.round((Resultado = m2.value * Planta3.factor2)));
  } else if ((PlantaT.value = (plantasf = Planta3.nombre) && m2.value <= 200)) {
    console.log(Math.round((Resultado = m2.value * Planta3.factor3)));
  } else {
    alert("No es un numero, actuliza la pagina");
  }
}

/* Seria el calculo final ( ya con clima) */
const Clima1 = document.getElementById("3a");
Clima1.addEventListener("change", CalculoClima1);

function CalculoClima1() {
  if ((climaf = Clima1.value = ArrayClima[0].Nombre)) {
    console.log((ResultadoFinal = Math.round(Resultado / ArrayClima[0].Valor)));
  }
}

const Clima2 = document.getElementById("3b");
Clima2.addEventListener("change", CalculoClima2);

function CalculoClima2() {
  if ((climaf = Clima2.value = ArrayClima[1].Nombre)) {
    console.log((ResultadoFinal = Math.round(Resultado / ArrayClima[1].Valor)));
  }
}

const Clima3 = document.getElementById("3c");
Clima3.addEventListener("change", CalculoClima3);

function CalculoClima3() {
  if ((climaf = Clima3.value = ArrayClima[2].Nombre)) {
    console.log((ResultadoFinal = Math.round(Resultado / ArrayClima[2].Valor)));
  }
}

const Clima4 = document.getElementById("3d");
Clima4.addEventListener("change", CalculoClima4);

function CalculoClima4() {
  if ((climaf = Clima4.value = ArrayClima[3].Nombre)) {
    console.log((ResultadoFinal = Math.round(Resultado / ArrayClima[3].Valor)));
  }
}

const Clima5 = document.getElementById("3e");
Clima5.addEventListener("change", CalculoClima5);

function CalculoClima5() {
  if ((climaf = Clima5.value = ArrayClima[4].Nombre)) {
    console.log((ResultadoFinal = Math.round(Resultado / ArrayClima[4].Valor)));
  }
}
/* primero boto de calculo */
const Respuesta2 = document.getElementById("calcularboton2");
Respuesta2.addEventListener("click", Calculofinal2);

function Calculofinal2() {
  let parrafofinal2 = document.createElement("p");
  parrafofinal2.classList.add("parrafofinal2");
  parrafofinal2.innerHTML =
    "<p> Hola " +
    nombreUsiario.value +
    " para el plantio de " +
    plantasf + " de "+ m2.value+ "m2"+
    " se necesitarian " +
    Math.round(Resultado) +
    " ml de nuestro producto; ESTO SIN CONSIDERAR TU CLIMA.!</p>";
  Const = Contenido = document.querySelector("#respuestas1");
  Contenido.append(parrafofinal2);
  /* storage y json */
  localStorage.setItem("PrimerCalculo", JSON.stringify(parrafofinal2.innerHTML));
  
}

/* boton para mostrar calculo final CON TODO Y EL CLIMA */
const Respuesta = document.getElementById("calcularboton");
Respuesta.addEventListener("click", Calculofinal);

function Calculofinal() {
  if ((Calculofinal = 0)) {
    alert("error");
  } else {
    let parrafofinal = document.createElement("p");
    parrafofinal.classList.add("parrafofinal");
    parrafofinal.innerHTML =
      "<p> Considerando el clima " +
      climaf +
      " " +
      nombreUsiario.value +
      " para el plantio de " +
      plantasf + " de "+ m2.value+ "m2 "+ 
      " se necesitarian " +
      ResultadoFinal +
      " ml de nuestro producto.!</p>";
    Const = Contenido = document.querySelector("#respuestas");
    Contenido.append(parrafofinal);
    /* storage y json */
    localStorage.setItem("SegundoCalculo", JSON.stringify(parrafofinal.innerHTML));
  }
}
/* BOTON QUE MUESTRA */
const Mostrar = document.getElementById("Mostrar");
Mostrar.addEventListener("click", ver);

function ver() {
  let ver1 = localStorage.getItem("PrimerCalculo");
  let objver1 = JSON.parse(ver1);
  let ver2 = localStorage.getItem("SegundoCalculo");
  let objver2 = JSON.parse(ver2);
  let Header = document.createElement("h");
  
  /* HEADER DE LOS CALCULOS GUARDADOS */
  Header.classList.add("header");
    Header.innerHTML = "Calculos Guardados"
    Const = Contenido = document.querySelector("#parrafoguardado");
    Contenido.append(Header);

  let parrafoguardado = document.createElement("li");
  parrafoguardado.classList.add("parrafoguardado");
    parrafoguardado.innerHTML = objver1
    Const = Contenido = document.querySelector("#parrafoguardado");
    Contenido.append(parrafoguardado);

    /*  */
    let parrafoguardado2 = document.createElement("li");
    parrafoguardado2.classList.add("parrafoguardado2");
    parrafoguardado2.innerHTML = objver2
    Const = Contenido = document.querySelector("#parrafoguardado");
    Contenido.append(parrafoguardado2);
 
}

/* BOTON DE BORRAR DATOS DEL STORAGE */
const Borrar1 = document.getElementById("Borrar");
Borrar1.addEventListener("click", clear);

function clear() {
  localStorage.clear();
}

/* Boton limpiar */
const Refrescar = document.getElementById("Resetboton");
Borrar1.addEventListener("click", refrescar);

function refrescar() {
  window.location.reload()
}