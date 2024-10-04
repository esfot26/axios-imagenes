import React from 'react';


const Formulario = ({ setImagenes }) => {
  const ObtenerImagen = async (e) => {
    e.preventDefault();
    const URL = 'https://api.pexels.com/v1/curated?per_page=15';
    try {
      const response = await fetch(URL, {
        headers: {
          Authorization: '9j1rCCj74t09GeEMdVfqIQT4XJTtEBV87zxIFg5xGxRSU8ryzAEHHzGE',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const randomImage = data.photos[Math.floor(Math.random() * data.photos.length)].src.large;
        setImagenes([randomImage]);
        console.log(data);
      } else {
        console.error('Error al obtener las imágenes');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <>
      <button onClick={ObtenerImagen} className='boton-persanlizado'>Generate Image</button>
    </>
  );
};

export default Formulario;
