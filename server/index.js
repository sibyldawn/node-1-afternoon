const express = require('express');
const bodyParser = require('body-parser');
const mC = require(__dirname + '/controller/messages_controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', mC.read);
app.post('/api/messages', mC.create);
app.put('/api/messages/:id', mC.update);
app.delete('/api/messages/:id',mC.delete);

const port= 3000;
app.listen(port, () => {console.log(`Server listening on port ${port}.`)});