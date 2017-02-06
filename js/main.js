// LOGICA 


// VISUAL

function onMensajeKey(evt)
{
   if(evt.keyCode==13)
    {
 var elinputMensajes= document.getElementById("mensajes");    crearMensaje(elinputMensajes.value);
    crearChat();
        elinputMensajes.value="";
    }
}


function crearMensaje(_mensaje)
{
var htmlMensajeIn ='<div class="w-message w-message-in">'+'	<div class="w-message-text">'+'h5 class="green-1">Maria Paula Rivarola</h5>'+'<p>Nunca!!! Juan Diego es único</p>'+'<div class="time">11:31</div>'+'</div>'+'</div>';

vard = new Date();
var htmlMensajeOut='<div class="w-message w-message-out">'+'<div class="w-message-text">'+'<p>'+_mensaje+'</p>'+'<div class="time">  "sd.getHours()"":"d.getMinutes()"</div>'+' </div>'+'</div>';
    
var elConversacion= document.getElementById("conversacion");
    elConversacion.innerHTML += htmlMensajeOut;
    
}

function crearChat()
{
 var elListachats=document.getElementById("lista-chats");
 var lilistItem=document.createElement("LI");
    
 var htmlChatItem ='<div class="avatar">'+'<img src="image/logocodeacademy.png" alt="" class="wh-44">'+'<h4 class="w-contact-name">Laboratoria Perú</h4>'+'<p class="w-last-message" id="mensaje">No se pique!!</p>'+'</div>'+'<div class="time" id="hora">14:27</div>'
 lilistItem.innerHTML= htmlChatItem;

    elListachats.insertBefore(lilistItem, elListachats.childNodes[0]);

}

function actualizarCabeceraChat()
{}










































