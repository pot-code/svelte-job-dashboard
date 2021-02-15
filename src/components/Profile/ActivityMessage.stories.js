import ActivityMessage from './ActivityMessage.svelte';

export default {
  title: 'ActivityMessage',
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: ActivityMessage,
  props: args,
});

export const Unknown = Template.bind({});

export const Expires = Template.bind({});
Expires.args = {
  type: 1,
  value: 2,
};

export const Applications = Template.bind({});
Applications.args = {
  type: 2,
  value: 5,
  subject: 'UI Designer',
};

export const Closed = Template.bind({});
Closed.args = {
  type: 3,
  op: 'Tom Clancy',
  subject: 'DevOp',
};

export const Drafted = Template.bind({});
Drafted.args = {
  type: 4,
  subject: 'HR Leader',
};
