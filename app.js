/**
 * Created by maengsuhyeon on 2016. 12. 29..
 */


// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);


var routes = require('./routes/index');
var users = require('./routes/users');

app.user('/', routes);
app.user('/', users);
