import PercentageCard from './BarPercentageCard.svelte';

export default {
  title: 'BarPercentageCard',
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: PercentageCard,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  data: [
    {
      label: 'Applications',
      value: 0.72,
      color: '#F970BD',
    },
    {
      label: 'Shortlisted',
      value: 0.11,
      color: '#DA7F29',
    },
    {
      label: 'Whatever',
      value: 0.17,
      color: '#03CAD8',
    },
  ],
};
