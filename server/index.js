const express = require('express');
const app = express();
const IC = require('./controllers/itemsController');

app.use(express.json());

// item routes
app.get('/api/items', IC.getItems);
app.post('/api/items', IC.addItems);
app.put('/api/items/:id', IC.editQTY);
app.delete('/api/items/:id', IC.deleteItems);

const PORT = 5151;
app.listen(PORT, () => console.log(`Server running on ${PORT}`))