import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Loja from './componentes/lojas';
import Rodape from './componentes/rodape';

function App() {

  const Lojas = [
    {
      nome: 'Americanas',
      corPrimaria: '#f80032',
      corSecundaria: '#fff'
  },
    {
      nome: 'Magazine Luiza',
      corPrimaria: '#0e89ff',
      corSecundaria: '#fff'
  },
  {
      nome: 'Amazon',
      corPrimaria: '#0d0d0d',
      corSecundaria: '#ffffff'
  },
  {
      nome: 'Fast Shop',
      corPrimaria: '#e7333f',
      corSecundaria: '#fff'
  },
  {
      nome: 'Casas Bahia',
      corPrimaria: '#0033cc',
      corSecundaria: '#fff'
  },

  ]

  const [itens, setItens] = useState([])

  const aoNovoItemAdicionado = (item) => {
    console.log(item)
    setItens([...itens, item])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario Lojas={Lojas.map(loja => loja.nome)} aoItemAdicionado={item => aoNovoItemAdicionado(item) }/>

      {Lojas.map(loja =>  
                    <Loja 
                      key={loja.nome} 
                      nome={loja.nome} 
                      corPrimaria={loja.corPrimaria} 
                      corSecundaria={loja.corSecundaria}
                      itens={itens.filter(item => item.loja === loja.nome)}
      />)}
      <Rodape />

     
    </div>
  );
}

export default App;
