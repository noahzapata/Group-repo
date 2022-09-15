import './App.scss';
import { CandidatosProvider } from './Context';
import ListaCandidatos from './components/ListaCandidatos';
import TotalVotos from './components/TotalVotos';
import Filtro from './components/Filtro';
import VotosIndividuales from './components/VotosIndividuales';


function App() {
  return (
    <>
      <div className='title'>
        <h1>Ejerce tu derecho al voto</h1>
      </div>
      <CandidatosProvider >
        <div className="App">
          <ListaCandidatos />
          <div className='main'>
            <Filtro />
            <div className="second-main">
              <TotalVotos />
              <VotosIndividuales />
            </div>

          </div>
        </div>
      </CandidatosProvider>
    </>
  );
}

export default App;
