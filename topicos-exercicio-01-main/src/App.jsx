import "./App.css";
import React, {useState} from 'react';



function ListaCompras({ listaItems }) {

  // alert(item)

  return (

      <div className="lista-compras-container">
        <ul className="lista-items">
        {listaItems.map(cadaItem => 
          <li>{cadaItem.item}</li>)}
        </ul>
      </div>    
  );

}

function FormCompra({ listaItems, setlistaItems}) {
  
  const [item, setItem] = useState('');

  function onCickAddItem(e) {
    e.preventDefault();

    setlistaItems([...listaItems, {item}])
  }

  return (
    <form className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" onChange={event => setItem(event.target.value)} className="form-control" id="item" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onCickAddItem}>
            Adicionar
          </button>
        </fieldset>
      </form>
  );
}

function App() {
  //seta estado no app, nao consegue passar props de um filho pra um pai
  const [listaItems, setlistaItems] = useState([]);

  return (
    <div className="App">

      <header>
        <h2>Lista de Compras:</h2>
      </header>

      {/* componente ListaCompras recebe a propriedade listaItems pra poder mapear e setar no body */}
      <ListaCompras listaItems={listaItems}/>
 
      {/* componente FormCompra recebe lista e setLista, pra setar cada item que foi passado no clique pra funcao na lista */}
      <FormCompra listaItems={listaItems} setlistaItems={setlistaItems} />
      
    </div>
  );
}

export default App;
