const faker = require('faker');
const gravatar = require('gravatar');

module.exports = () => {
  return {
    profile: {
      name: 'pot-code',
      occupation: 'Front-End Developer',
      profileURL:
        'https://avatars.githubusercontent.com/u/17687881?s=460&u=128ff080cc7df0d206bd378e986495c39ece509f&v=4',
    },
    activities: new Array(2 + Math.round(Math.random() * 10)).fill(null).map(() => ({
      type: faker.random.number({ min: 1, max: 4 }),
      subject: faker.name.jobTitle(),
      value: faker.random.number({ min: 1, max: 100 }),
      op: faker.name.findName(),
    })),
    messages: new Array(2 + Math.round(Math.random() * 10)).fill(null).map(() => ({
      profileURL: gravatar.url('example@hotmail.com'),
      name: faker.name.findName(),
      content: faker.lorem.sentences(2),
    })),
    acquisitions: [
      {
        label: 'Applications',
        value: faker.random.number(),
        color: '#F970BD',
      },
      {
        label: 'Shortlisted',
        value: faker.random.number(),
        color: '#03CAD8',
      },
      {
        label: 'On-hold',
        value: faker.random.number(),
        color: '#DA7F29',
      },
      {
        label: 'Rejected',
        value: faker.random.number(),
        color: '#FF4F55',
      },
    ],
    active: new Array(12).fill(0).map(() => faker.random.number({ min: 1, max: 100 })),
  };
};
