import faker from "faker";

const User = [
  {

    id : 1,
    firstname : faker.name.firstName(),
    lastname : faker.name.lastName(),
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {

    id : 2,
    firstname : faker.name.firstName(),
    lastname : faker.name.lastName(),
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {

    id : 3,
    firstname : faker.name.firstName(),
    lastname : faker.name.lastName(),
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {

    id : 4,
    firstname : faker.name.firstName(),
    lastname : faker.name.lastName(),
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {

    id : 5,
    firstname : faker.name.firstName(),
    lastname : faker.name.lastName(),
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {

    id : 6,
    firstname : faker.name.firstName(),
    lastname : faker.name.lastName(),
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
  {

    id : 7,
    firstname : faker.name.firstName(),
    lastname : faker.name.lastName(),
    othernames : faker.name.findName() ,
    email : faker.internet.email() ,
    phoneNumber : faker.phone.number(),
    username : faker.random.name(),
    registered : faker.date.past(),
    isAdmin : faker.random.boolean()
  },
]

export default User;