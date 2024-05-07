import React, { useState } from 'react';

const Calification = () => {
  const [rating, setRating] = useState(0); // Estado para almacenar la calificación del usuario

  // Función para manejar el cambio de calificación
  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className='container mt-5'>
      <h1>Calificación con Estrellas</h1>
      <div className='row'>
        <div className='col-lg-12'>
          <p>Califica este producto:</p>
          <div className='rating'>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type='radio'
                    name='rating'
                    value={ratingValue}
                    onClick={() => handleRatingChange(ratingValue)}
                  />
                  <span className='star'></span>
                </label>
              );
            })}
          </div>
          <p>Tu calificación: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Calification;
