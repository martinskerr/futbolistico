import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

function Lista({ jugadores, eliminarJugador, editarJugador }) {

  const handleEliminar = (id) => {
    const confirmar = window.confirm('Estas seguro de eliminar el jugador?');
    if (confirmar) {
      eliminarJugador(id);
    }
  };

  const calcularEdadPromedio = () => {
    if (jugadores.length === 0) return 0;
    const totalAños = jugadores.reduce((total, jugador) => total + jugador.experiencia, 0);
    return (totalAños / jugadores.length).toFixed(2);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-4 text-white">Lista de Jugadores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {jugadores.map((jugador) => (
          <div key={jugador.id} className="bg-green-500 p-4 rounded-lg shadow-md relative">
            <div className="text-white">
              <h5 className="text-xl font-bold mb-2">{jugador.nombre}</h5>
              <p className="text-gray-100 mb-2">Equipo: {jugador.equipo}</p>
              <p className="text-gray-100 mb-2">Posición: {jugador.posicion}</p>
              <p className="text-gray-100 mb-2">Numero: {jugador.numero}</p>
              <p className="text-gray-100 mb-2">Nacionalidad: {jugador.nacionalidad}</p>
              <p className="text-gray-100 mb-4">Experiencia: {jugador.experiencia} años</p>
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded" onClick={() => editarJugador(jugador)}>
                  <FaEdit />
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded" onClick={() => handleEliminar(jugador.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl text-white">Edad Promedio de los Jugadores: {calcularEdadPromedio()} años</h3>
      </div>
    </div>
  );
}

export default Lista;