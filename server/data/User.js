const faker = require('faker');

const User = [
  {
    id : faker.random.number(),
    firstname : faker.name.findName(),
    lastname : faker.name.findName() ,
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {
    id : faker.random.number(),
    firstname : faker.name.findName(),
    lastname : faker.name.findName() ,
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {
    id : faker.random.number(),
    firstname : faker.name.findName(),
    lastname : faker.name.findName() ,
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {
    id : faker.random.number(),
    firstname : faker.name.findName(),
    lastname : faker.name.findName() ,
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {
    id : faker.random.number(),
    firstname : faker.name.findName(),
    lastname : faker.name.findName() ,
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {
    id : faker.random.number(),
    firstname : faker.name.findName(),
    lastname : faker.name.findName() ,
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {
    id : faker.random.number(),
    firstname : faker.name.findName(),
    lastname : faker.name.findName() ,
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
]