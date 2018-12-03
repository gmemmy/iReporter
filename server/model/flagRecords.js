import faker from "faker";

const Incidents = [
  {
    id: 1,
    createdOn: faker.date.past(),
    createdBy: 53,
    type: "intervention",
    location: `${faker.address.longitude()}, ${faker.address.latitude()}`,
    status: "draft",
    images:[],
    videos: [],
    comment: faker.lorem.sentences(),
  }
]

export default Incidents;