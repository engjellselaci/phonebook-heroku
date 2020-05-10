const mongoose = require('mongoose')

if (process.argv.length<3){
  console.log('give password as argument')
  process.exit(1)
}

// eslint-disable-next-line no-unused-vars
const password = process.argv[2]
const name = process.argv[3]
const number= process.argv[4]

const url = 
'mongodb+srv://engjell:{password}@cluster0-yodiq.mongodb.net/persons?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

if (name === undefined) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
} else {
  const person = new Person ({
    name: name,
    number: number,
  })
  person.save().then(() => {
    console.log(`Name ${name} and number ${number} were successfully saved to MongoDB database`)
    mongoose.connection.close()
  })
}