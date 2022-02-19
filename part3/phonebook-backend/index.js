const { response } = require('express');
const express = require('express');
const app = express();


app.use(express.json());

let data = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/api/persons', (req, res) => {
  res.json(data);
})

app.get('/info', (req, res) => {
  const dateTime = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  res.send(`
  <div>
    Phonebook has info for ${data.length} ${data.length === 1 ? 'person' : 'people'}
  </div>
  <br></br>
  <div> 
    ${timeZone} ${dateTime} 
  </div>
  `);
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = data.find(person => person.id === id);
  if (person) {
    res.json(person);
  } 

  res.status(404).end();

})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  data = data.filter(person => person.id !== id);

  res.status(204).end();
})

const generateId = () => {
  const maxId = data.length > 0 
    ? Math.max(...data.map((p) => p.id)) 
    : 0;
  return maxId + 1;
}

app.post('/api/persons', (req, res) => {
  const body = req.body;
  console.log('body content ', body.content)

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const person = {
    content: body.content,
    id: generateId()
  }

  data = data.concat(person);
  console.log(person);
  res.json(person);
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})