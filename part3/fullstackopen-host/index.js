require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { response } = require('express');
const Phonebook = require('./models/phonebook');

const errorHandler = (error, req, res, next) => {
  console.log(error.message);

  if (error.name === 'CastError') {
    return res.status(400).send({error: 'malformatted id'})
  }

  next(error);
}

app.use(express.json());
app.use(cors());
app.use(express.static('build'));
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
      JSON.stringify(req.body),
    ].join(' ');
  })
);
app.use(errorHandler);
/*
const data = new Phonebook([
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
]);
*/
app.get('/api/persons', (req, res) => {
  Phonebook.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get('/info', (req, res) => {
  const dateTime = new Date();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  res.send(`
  <div>
    Phonebook has info for ${data.length} ${
    data.length === 1 ? 'person' : 'people'
  }
  </div>
  <br></br>
  <div> 
    ${timeZone} ${dateTime} 
  </div>
  `);
});

app.get('/api/persons/:id', (req, res) => {
  Phonebook.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.delete('/api/persons/:id', (req, res) => {
  Phonebook.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(error => next(error));
});

const generateId = () => {
  const maxId = data.length > 0 ? Math.max(...data.map((p) => p.id)) : 0;
  return maxId + 1;
};

app.post('/api/persons', (req, res) => {
  if (!body.name) {
    return res.status(400).json({
      error: 'name is missing',
    });
  } else if (!body.number) {
    return res.status(400).json({
      error: 'number is missing',
    });
  }

  const person = {
    content: body.content,
    id: generateId(),
    name: body.name,
    number: body.number,
  };
  person.save().then((savedNote) => {
    response.json(savedNote);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
