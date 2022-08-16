
var tags = 'ass';

function cambiarTags(){

    var tagsselect = document.getElementById('tagsselect');
    tags = tagsselect.options[tagsselect.selectedIndex].value;
    cargarwaifus();
}


const cargarwaifus = async() => {
    const respuesta = await fetch(`https://api.waifu.im/random/?selected_tags=${tags}`);
    
    console.log(respuesta);
    
    if(respuesta.status === 200){
        const datos = await respuesta.json();

        console.log(datos.images);

        let imagenes = '';

        datos.images.forEach(imagen => {
            imagenes += `
            <div class="contenedorimg">
            <img class="waifuimg" src="${imagen.url}"  alt="">
            <button class="siguiente" onclick="cargarwaifus()">></button>
            <a href="${imagen.url}" class="adescargar" download="${imagen.url}">
            <button class="descargar" >DESCARGAR</button>
            </a>
            </div>`;
        } );
        document.getElementById('contenedor').innerHTML = imagenes;
    }
}



cargarwaifus();
