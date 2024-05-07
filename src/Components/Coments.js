import React, { useState } from 'react';

const Coments = () => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el comentario
    console.log('Comentario enviado:', comment);
    // Limpia el campo después de enviar
    setComment('');
  };

  return (
    <div className='container'>
      <h1>Componente para los comentarios</h1>
      <div className='row'>
        <div className='col-lg-12'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='comment'>Comentario:</label>
              <textarea
                className='form-control'
                id='comment'
                rows='3'
                value={comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary m-3'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coments;
