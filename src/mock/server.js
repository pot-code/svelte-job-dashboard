import { createServer } from 'miragejs';
import faker from 'faker';

export function serve() {
  const server = createServer({
    routes() {
      this.namespace = 'api';

      this.get('/profile/activities', (schema) => {
        return schema.db.activities;
      });
      this.get('/profile/messages', (schema) => {
        return schema.db.messages;
      });
      this.get('/profile', (schema) => {
        return schema.db.profile[0];
      });
      this.get('/job/acquisitions', (schema) => {
        return schema.db.acquisitions;
      });
      this.get('/job/active', (schema) => {
        return new Array(12).fill(0).map(() => faker.random.number({ min: 1, max: 100 }));
      });
    },
  });

  server.db.loadData({
    profile: [
      {
        name: 'pot-code',
        occupation: 'Front-End Developer',
        profileURL:
          'https://avatars.githubusercontent.com/u/17687881?s=460&u=128ff080cc7df0d206bd378e986495c39ece509f&v=4',
      },
    ],
    activities: new Array(2 + Math.round(Math.random() * 10)).fill(null).map(() => ({
      type: faker.random.number({ min: 1, max: 4 }),
      subject: faker.name.jobTitle(),
      value: faker.random.number({ min: 1, max: 100 }),
      op: faker.name.findName(),
    })),
    messages: new Array(2 + Math.round(Math.random() * 10)).fill(null).map(() => ({
      profileURL: faker.image.people(),
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
  });
}
