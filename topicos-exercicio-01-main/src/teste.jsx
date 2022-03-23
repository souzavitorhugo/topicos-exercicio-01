import React,{ useEffect, useState } from 'react';
import './App.css';


function App() {

  const [item, setItem] = useState('');
  const [produtos, setProdutos] = useState([])

  const addProduto = e=>{
    e.preventDefault();
    setProdutos([...produtos, {item}])

    
  }
  return (
    <div className="App">
      <header>
      <h2>Lista de Compras do Mateus:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          <li>Queijo</li>
          <li>Leite</li>
          <li>Pão</li>
          {produtos.map(produto=>
          <li>{produto.item}</li>
          )}
        </ul>
      </div>
      <form className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista de Compras:</label>
            <br></br><input type="text" placeholder="item" value={item} name="item" onChange = {e => setItem(e.target.value)} />
          </div>
          <button type="submit"  className="btn btn-success" onClick={addProduto}>
            Adicionar
          </button>
          </fieldset>
      </form>
    </div>
  );
}

export default App;