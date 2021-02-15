import Activity from './Activity.svelte';

export default {
  title: 'Activity',
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: Activity,
  props: args,
});

export const Empty = Template.bind({});
Empty.args = {
  data: [],
};

export const Unknown = Template.bind({});
Unknown.args = {
  data: [
    {
      type: -1,
      subject: '',
      value: 4,
      op: '',
    },
  ],
};

export const Expires = Template.bind({});
Expires.args = {
  data: [
    {
      type: 1,
      subject: '',
      value: 4,
      op: '',
    },
  ],
};

export const Applications = Template.bind({});
Applications.args = {
  data: [
    {
      type: 2,
      subject: 'UI developer',
      value: 3,
      op: 'Tom',
    },
  ],
};

export const Closed = Template.bind({});
Closed.args = {
  data: [
    {
      type: 3,
      subject: 'Back-End Developer',
      value: 0,
      op: 'Wade Wilson',
    },
  ],
};

export const Drafted = Template.bind({});
Drafted.args = {
  data: [
    {
      type: 4,
      subject: 'HR Specialist',
      value: 0,
      op: '',
    },
  ],
};
