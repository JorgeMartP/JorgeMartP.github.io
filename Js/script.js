const setExperiencia = document.getElementById('imgExp');
const setHabilidad = document.querySelectorAll('.skill-card');
const setProyectos = document.querySelectorAll('.card-proyect');
const cargarExp = (entradas, observador)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible')
        }
    });
};

const observador = new IntersectionObserver(cargarExp, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});


observador.observe(setExperiencia);
setHabilidad.forEach(habilidad => {
    observador.observe(habilidad);
});

setProyectos.forEach(proyecto =>{
    observador.observe(proyecto);
});

// Obtener todas las referencias a los elementos por su clase
var todosLosElementos = document.querySelectorAll('#responsive');
var elementoPrincipal = document.getElementById('icon');

// Función para manejar el clic en el elemento principal
function handlePrincipalClick() {
    // Toggle (agregar o quitar) la clase 'active' en todos los elementos
    todosLosElementos.forEach(function(elemento) {
        elemento.classList.toggle('active');
    });
}
// Agregar evento de clic al elemento principal
elementoPrincipal.addEventListener('click', function() {
    handlePrincipalClick();
});

