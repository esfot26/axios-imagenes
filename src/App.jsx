import { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  const [imagenes, setImagenes] = useState([]);

  return (
    <>
      <h1>Random Image</h1>
      <div className="contenedor-imagen">
        {imagenes.length > 0 && (
          <img src={imagenes[0]} alt="imagen generada" className="imagen-estilo" />
        )}
        <Formulario setImagenes={setImagenes} />
      </div>
    </>
  );
}

export default App;
