import Profile from './Profile.svelte';

export default {
  title: 'Profile',
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: Profile,
  props: args,
});

export const Primary = Template.bind({});
