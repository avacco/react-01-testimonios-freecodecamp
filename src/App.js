import logo from './logo.svg';
import './App.css';
// Importacion de un componente
// ./ = busca desde la carpeta actual, ../ = Regresa 1 nivel y busca desde ahi
// Al importar, si no se da una extension, se asumira que es un archivo .js
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Carl'
          pais='EEUU'
          imagen='carl'
          cargo='Ingeniero de Software'
          empresa='Microsoft'
          testimonio={<>'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, <strong>pero el curso de freeCodeCamp fue el que se quedó</strong>. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Microsoft.'</>}
        />

        <Testimonio 
          nombre='Carey '
          pais='Reino Unido'
          imagen='carey'
          cargo='Desarrolladora de Software'
          empresa='Meta'
          testimonio={<>'<strong>freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software</strong>. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'</>}
        />
        <Testimonio 
          nombre='Brian'
          pais='Francia'
          imagen='brian'
          cargo='Desarrollador de Software'
          empresa='Amazon'
          testimonio={<>'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp cambió mi vida.</strong>'</>}
        />
      </div>
    </div>
  );
}

export default App;
