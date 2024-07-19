import React, { useState, useEffect } from 'react';
import Formulario from './components/Form';
import Lista from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [jugadorEditado, setJugadorEditado] = useState(null);

  useEffect(() => {
    const datosGuardados = localStorage.getItem('jugadores');
    if (datosGuardados) {
      setJugadores(JSON.parse(datosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jugadores', JSON.stringify(jugadores));
  }, [jugadores]);

  const agregarJugador = (jugador) => {
    if (jugadorEditado) {
      setJugadores(jugadores.map((j) => (j.id === jugador.id ? jugador : j)));
      setJugadorEditado(null);
    } else {
      setJugadores([...jugadores, jugador]);
    }
  };

  const eliminarJugador = (id) => {
    setJugadores(jugadores.filter((jugador) => jugador.id !== id));
  };

  const editarJugador = (jugador) => {
    setJugadorEditado(jugador);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-600">
      <Header />
      <main className="flex-grow container mx-auto my-4 p-4">
        <Formulario agregarJugador={agregarJugador} jugadorEditado={jugadorEditado} />
        <Lista jugadores={jugadores} eliminarJugador={eliminarJugador} editarJugador={editarJugador} />
      </main>
      <Footer />
    </div>
  );
}

export default App;