const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://test:${password}@cluster0.avnb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
  id: Number,
  name: String,
  number: String,
});

const Phonebook = mongoose.model('Phonebook', phonebookSchema);

const phonebook = new Phonebook({
  id: 1,
  name: 'Arto Hellas',
  number: '040-123456',
});

phonebook.save().then((result) => {
  console.log('phonebook saved!');
  mongoose.connection.close();
});
