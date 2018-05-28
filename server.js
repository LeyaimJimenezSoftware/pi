const app = require('./app'),
   server = app.listen(app.get('port'), () => console.log(`Iniciando API REST-MVC xpress con mysql desde el puertp ${app.get('port')}`));