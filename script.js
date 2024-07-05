function redirectToDetails(product) {
    // Simular carga de detalles del producto
    const details = getDetails(product);
  
    // Almacenar detalles en el almacenamiento local
    localStorage.setItem('productDetails', JSON.stringify(details));
  
    // Redirigir a la página de detalles
    window.location.href = 'details.html';
}

function getDetails(product) {
    // Simular obtener detalles del producto desde una fuente de datos
    let mensaje;
    switch (product) {
        case 'producto1':
            mensaje = "Mensaje específico para Producto 1.";
            return {
                name: 'Producto 1',
                price: '$50',
                image: 'imagenes/lampara.png',
                description: 'Hermosa lámpara casera hecha de un suva marlo y bla bla bla mondongo sexy XDDDD.',
                mensaje: mensaje
            };
        case 'producto2':
            mensaje = "Mensaje específico para Producto 2.";
            return {
                name: 'Producto 2',
                price: '$60',
                image: 'product2.jpg',
                description: 'Descripción detallada del Producto 2.',
                mensaje: mensaje
            };
        case 'producto3':
            mensaje = "Mensaje específico para Producto 3.";
            return {
                name: 'Producto 3',
                price: '$70',
                image: 'product3.jpg',
                description: 'Descripción detallada del Producto 3.',
                mensaje: mensaje
            };
        case 'producto4':
            mensaje = "Mensaje específico para Producto 4.";
            return {
                name: 'Producto 4',
                price: '$120',
                image: 'product3.jpg',
                description: 'XD la vida es muy XDDDD.',
                mensaje: mensaje
            };
        case 'producto5':
            mensaje = "Mensaje específico para Producto 5.";
            return {
                name: 'Producto 5',
                price: '$10',
                image: 'product3.jpg',
                description: 'XD la vida es muy XDDDD mondongo.',
                mensaje: mensaje
            };
        default:
            return {};
    }
}

// En la página de detalles
document.addEventListener('DOMContentLoaded', function () 
{
    const storedDetails = localStorage.getItem('productDetails');
    if (storedDetails) 
    {
        const details = JSON.parse(storedDetails);
        displayDetails(details);
    }
});

function displayDetails(details) {
    document.getElementById('product-name').innerText = details.name;
    document.getElementById('product-price').innerText = `Precio: ${details.price}`;
    document.getElementById('product-image').src = details.image;
    document.getElementById('product-description').innerText = details.description;
}

document.getElementById('whatsappButton').addEventListener('click', function() 
{
    // Obtener detalles almacenados
    const storedDetails = localStorage.getItem('productDetails');

    if (storedDetails) 
    {
        const details = JSON.parse(storedDetails);
        // Obtener el mensaje específico del producto
        const mensaje = details.mensaje || "Mensaje predeterminado si no se proporciona un mensaje específico.";
        
        // Incluir enlace a la imagen en el mensaje
        const imagePath = window.location.origin + '/' + details.image;
        const mensajeConImagen = mensaje + "\n\nImagen: " + imagePath;
        
        // Número de teléfono
        const numeroTelefono = '50246829963';

        // Detectar si el usuario está en un dispositivo móvil
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // Generar el enlace de WhatsApp adecuado
        const enlaceWhatsApp = isMobile
            ? 'whatsapp://send?phone=' + numeroTelefono + '&text=' + encodeURIComponent(mensajeConImagen)
            : 'https://web.whatsapp.com/send?phone=' + numeroTelefono + '&text=' + encodeURIComponent(mensajeConImagen);

        // Abrir enlace en una nueva ventana o pestaña
        window.open(enlaceWhatsApp, '_blank');
    }
});
