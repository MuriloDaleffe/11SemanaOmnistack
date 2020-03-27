const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/**
 * Rota / Recurso
 */

/**
* Metodos HTPP:
* GET: buscar/listar uma informacao do backend
* POST: criar uma informacao no backend
* PUT: alterar uma informacao no backend
* DELETE: deletar uma informacao no backend
*/

/**
 * Tipos de Parametros
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" para filtros, paginacao, ect...
 * Route Params: Parametros utilizados para indentificar recursos
 * Request Body: Corpo da requsicao, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333);