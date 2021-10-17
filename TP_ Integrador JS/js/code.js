
// Nav Bar Boton

const menuBtn=document.querySelector('.menu-btn');
const links=document.querySelector('.links');

let menuOpen=false;
let openClose = ()=>{
  if (!menuOpen){
    menuBtn.classList.add('open');
    menuOpen=true;
    links.classList.remove('show')
  } else {
    menuBtn.classList.remove('open');
    menuOpen=false;
    links.classList.add('show')
  }
};

menuBtn.addEventListener('click',openClose);

// Elementos declarados

let $btn=document.getElementById('comprarTickets');
let $link=document.querySelector('.verde');

// Valor carteles

let $estudiante=document.querySelector('.estudiante');
let $estudianteValor=Number($estudiante.getElementsByClassName('estudianteValor')[0].getAttribute('value'));

let $trainee=document.querySelector('.trainee');
let $traineeValor=Number($trainee.getElementsByClassName('traineeValor')[0].getAttribute('value'));

let $junior=document.querySelector('.junior');
let $juniorValor=Number($junior.getElementsByClassName('juniorValor')[0].getAttribute('value'));


function setEstudiante()
{
document.getElementById('categoriasLista').value='';
document.getElementById('categoriasLista').value='Estudiante';
}
function setTrainee()
{
document.getElementById('categoriasLista').value='';
document.getElementById('categoriasLista').value='Trainee';
}
function setJunior()
{
    document.getElementById('categoriasLista').value='';
    document.getElementById('categoriasLista').value='Junior';
}
function clearAll()
{
    document.querySelector('.nameNombre').value='';
    document.querySelector('.nameLast').value='';
    document.querySelector('.nameCorreo').value='';
    document.getElementById('nombre').value='';
    document.getElementById('categoriasLista').value='';
    document.getElementById('totalPagar').innerText='';

    let $nombre=document.querySelector('.nameNombre');
    let $apellido=document.querySelector('.nameLast');
    let $correo=document.querySelector('.nameCorreo');
    let $cantidad=document.getElementById('nombre');
    let $categoria=document.getElementById('categoriasLista');
    let dataField=[$nombre,$apellido,$correo,$cantidad,$categoria];
  
  dataField.forEach((item) =>
  {
  if (item.value==='')
    {
    item.style.border='1px solid lightgrey';
    };
  });

  document.getElementById('totalPagar').classList.add('hidden')

}

function selectorDescuento() 
{
  let $seleccionado=document.getElementById('categoriasLista').value
  let $selectorDescuento='';

  switch ($seleccionado) 
  {
      case 'Estudiante':
          return $estudianteValor;
          break;

      case 'Trainee':
          return $traineeValor;
          break;

      case 'Junior':
          return $juniorValor;
          break;
  };

};

function valorFinal(percDesc)
{

// TICKETS- Valor ticket Gral

  let $valorTicket=Number(document.querySelector('.valorTicket').getAttribute('value'));

// Cantidad 
  let cantidadTickets=Number(document.querySelector('.nameCant').value);

// Final con descuento

  let valor= (Number($valorTicket)-(percDesc/100) * Number($valorTicket))*cantidadTickets;

  valor=valor.toFixed(2);

// Inserto Valor Final 

  let $total=document.getElementById('totalPagar');
  $total.innerText= `Total a Pagar: $${valor}`;

}

function verificarInputs()
{
  let $nombre=document.querySelector('.nameNombre');
  let $apellido=document.querySelector('.nameLast');
  let $correo=document.querySelector('.nameCorreo');
  let $cantidad=document.getElementById('nombre');
  let $categoria=document.getElementById('categoriasLista');
  let toggle=false;
  let dataField=[$nombre,$apellido,$correo,$cantidad,$categoria];

  dataField.forEach((item) => {
  if (item.value==='')
    {
      item.style.border='1px solid red';
    } else 
      {
      return toggle=true;
      }
  });
    return toggle;
}

function displayValor()
{
  let toggle=verificarInputs();
  if(!toggle==false){
    let $descuento=selectorDescuento();
    let total=valorFinal($descuento);
    document.getElementById('totalPagar').classList.remove('hidden');
  };
  return false;

}

// Eventos

$btn.addEventListener('click',esconder);
$link.addEventListener('click',esconder);
$estudiante.addEventListener('click',setEstudiante);
$trainee.addEventListener('click',setTrainee);
$junior.addEventListener('click',setJunior);

let $borrar=document.querySelector('.borrar');
$borrar.addEventListener('click',clearAll);

let $resumen=document.querySelector('.resumen');
$resumen.addEventListener('click',displayValor);

//Funciones Sector nuevo

let btnToggle=false;
function esconder()
{
// Partes a esconder 
    let $conferencia=document.getElementById('conferencia');
    let $moderador=document.getElementById('box-moderador');
    let $images=document.getElementById('images-Octubre');
    let $orador=document.getElementById('convertir-orador');

    var arraySections=[$conferencia,$moderador,$images,$orador];
    let $ventaTicket=document.getElementById('displayTicket');

  if (!btnToggle) 
  {
    arraySections.forEach((e) => {
    e.classList.add('hidden')});
    btnToggle=true;
    $ventaTicket.classList.remove('hidden');
    clearAll();
  } 
  else {
      arraySections.forEach((e) => {
      e.classList.remove('hidden')});
      btnToggle=false;
      $ventaTicket.classList.add('hidden');
      clearAll();
    };
}