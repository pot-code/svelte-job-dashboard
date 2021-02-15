import PercentageCard from './CirclePercentageCard.svelte';

export default {
  title: 'CirclePercentageCard',
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: PercentageCard,
  props: args,
});

export const Pink = Template.bind({});
Pink.args = {
  label: 'APPLICATIONS',
  value: 2000,
  percentage: 30,
  fill: '#FD70C0',
};

export const Cyan = Template.bind({});
Cyan.args = {
  label: 'Employees',
  value: 158151215,
  percentage: 60,
  fill: '#04C7D5',
};
