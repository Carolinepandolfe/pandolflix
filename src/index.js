import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './pages/Home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video/CadastroVideo';
import CadastroCategoria from './pages/cadastro/Categoria/Categoria'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/cadastro/video' component={CadastroVideo}/> 
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={() => (<div>Error 404</div>)}/> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
