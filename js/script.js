// Función para mostrar/ocultar el menú
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show"); // Alterna entre mostrar y ocultar el menú
}


// Función para cerrar el menú cuando se hace clic fuera
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menuButton");

    // Verificar si el clic fue fuera del sidebar y del botón del menú
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target) && sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
    }
});

// Evitar que los clics dentro del sidebar cierren el menú
document.getElementById("sidebar").addEventListener('click', function (event) {
    // Solo detenemos la propagación si el clic no fue en un enlace
    if (!event.target.closest('a')) {
        event.stopPropagation();
    }
});



// Función para cambiar el contenido en la sección principal
function showContent(section) {
    const contentContainer = document.getElementById("content-container");
    let content = "";

    switch (section) {
        case "Métodos de operación":
            content = `
                <div class="content">
                    <h2>Métodos de operación</h2>
                    <p>Bienvenido al panel principal. Aquí puedes ver las métricas clave.</p>
                </div>
            `;
            break;
        case "Calibración":
            content = `
                <div class="content">
                    <h2>Calibración</h2>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                    <p>Aquí puedes ajustar los parámetros del sistema según tus necesidades.</p>
                </div>
            `;
            break;
        case "Datos":
            content = `
                <div class="content">
                    <h2>Datos</h2>
                    <p>A continuación se muestran los datos de temperatura y presión:</p>
                    <div class="chart-container">
                        <canvas id="temperatureChart"></canvas>
                    </div>
                </div>
            `;
            contentContainer.innerHTML = content;

            // Llamamos a la función que dibuja la gráfica después de que se haya cargado el contenido
            setTimeout(function () {
                drawChart(); // Llamamos a la función de la gráfica
            }, 100); // El retraso de 100ms asegura que el contenido ya esté en el DOM antes de dibujar la gráfica
            break;
        case "Configuración":
            content = `
                <div class="content">
                    <h2>Configuración</h2>
                    <p>Has cerrado sesión correctamente. Hasta pronto.</p>
                </div>
            `;
            break;
        case "Inspecciones":
            content = `
                <div class="content">
                    <h2>Inspecciones</h2>
                    <p>Bienvenido al panel principal. Aquí puedes ver las métricas clave.</p>
                </div>
            `;
            break;
        case "salir":
            content = `
                <div class="content">
                    <h2>Salir</h2>
                    <p>Has cerrado sesión correctamente. Hasta pronto.</p>
                </div>
            `;
            break;
        default:
            content = `
                <div class="content">
                    <h2>Bienvenido</h2>
                    <p>Selecciona una opción del menú para ver más detalles.</p>
                </div>
            `;
    }

    contentContainer.innerHTML = content;

    // Ocultar el menú en dispositivos móviles al seleccionar una opción
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("show");
}

// Función que dibuja la gráfica
function drawChart() {
    const canvas = document.getElementById('temperatureChart');
    const ctx = canvas.getContext('2d');

    // Ajusta el tamaño del canvas para que sea cuadrado y siempre ocupe el mismo espacio
    const size = Math.min(canvas.parentElement.offsetWidth, canvas.parentElement.offsetHeight);
    canvas.width = size;
    canvas.height = size;

    // Datos ficticios
    const data = [
        { tiempo: 0, temperatura: 22, presion: "1010 hPa" },
        { tiempo: 1, temperatura: 23, presion: "1012 hPa" },
        { tiempo: 2, temperatura: 21, presion: "1013 hPa" },
        { tiempo: 3, temperatura: 24, presion: "1015 hPa" },
        { tiempo: 4, temperatura: 25, presion: "1017 hPa" },
        { tiempo: 5, temperatura: 26, presion: "1011 hPa" },
        { tiempo: 6, temperatura: 27, presion: "1010 hPa" },
        { tiempo: 7, temperatura: 28, presion: "1014 hPa" },
        { tiempo: 8, temperatura: 26, presion: "1012 hPa" },
        { tiempo: 9, temperatura: 29, presion: "1016 hPa" }
    ];

    // Configuración de la escala
    const xOffset = 50;
    const yOffset = canvas.height - 50;
    const xScale = (canvas.width - 100) / (data.length - 1);
    const maxTemperature = 30;
    const minTemperature = 20;
    const yScale = (canvas.height - 100) / (maxTemperature - minTemperature);

    function convertTempToY(temp) {
        return yOffset - (temp - minTemperature) * yScale;
    }

    // Dibujar los ejes X e Y
    ctx.strokeStyle = "#333062"; // Usamos un tono oscuro para los ejes
    ctx.lineWidth = 1.5;

    // Eje Y (Temperatura)
    ctx.beginPath();
    ctx.moveTo(xOffset, 50);
    ctx.lineTo(xOffset, yOffset);
    ctx.stroke();

    // Eje X (Tiempo)
    ctx.beginPath();
    ctx.moveTo(xOffset, yOffset);
    ctx.lineTo(canvas.width - 50, yOffset);
    ctx.stroke();

    // Líneas de guía y etiquetas en el eje Y (temperatura)
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 0.5;
    ctx.font = "12px Arial";
    ctx.fillStyle = "#3b3b82"; // Color para las etiquetas

    for (let temp = minTemperature; temp <= maxTemperature; temp += 2) {
        const yPos = convertTempToY(temp);
        ctx.beginPath();
        ctx.moveTo(xOffset, yPos);
        ctx.lineTo(canvas.width - 50, yPos);
        ctx.stroke();
        ctx.fillText(`${temp}°C`, xOffset - 30, yPos + 4);
    }

    // Líneas de guía y etiquetas en el eje X (tiempo)
    for (let i = 0; i < data.length; i++) {
        const xPos = xOffset + i * xScale;
        ctx.beginPath();
        ctx.moveTo(xPos, yOffset);
        ctx.lineTo(xPos, 50);
        ctx.stroke();
        ctx.fillText(`${data[i].tiempo}h`, xPos - 10, yOffset + 20);
    }

    // Dibujar línea suavizada de la temperatura
    ctx.strokeStyle = "#06acf1"; // Color de la línea de temperatura
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xOffset, convertTempToY(data[0].temperatura));

    for (let i = 1; i < data.length; i++) {
        const x = xOffset + data[i].tiempo * xScale;
        const y = convertTempToY(data[i].temperatura);
        const prevX = xOffset + data[i - 1].tiempo * xScale;
        const prevY = convertTempToY(data[i - 1].temperatura);
        ctx.quadraticCurveTo(prevX + 25, prevY, x, y);
    }
    ctx.stroke();

    // Dibujar puntos y etiquetas de presión
    ctx.fillStyle = "#3e3b8c"; // Color de los puntos
    data.forEach(point => {
        const x = xOffset + point.tiempo * xScale;
        const y = convertTempToY(point.temperatura);

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = "#444482"; // Color para las etiquetas de presión
        ctx.font = "10px Arial";
        ctx.fillText(point.presion, x + 10, y - 10);
        ctx.fillStyle = "#3e3b8c"; // Volver al color de los puntos
    });
}

// Función para recalcular el tamaño del gráfico cuando cambie el tamaño de la ventana
window.addEventListener("resize", function () {
    const canvas = document.getElementById('temperatureChart');
    if (canvas) {
        // Volver a llamar a la función para redibujar el gráfico con las nuevas dimensiones
        drawChart();
    }
});


