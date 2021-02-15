import Sidebar from './Sidebar.svelte';

import { AppIcon, BriefcaseIcon, LayoutIcon } from '../icons';

export default {
  title: 'Sidebar',
};

const Template = ({ onArchiveTask, onPinTask, ...args }) => ({
  Component: Sidebar,
  props: args,
});

export const One = Template.bind({});
One.args = {
  routes: [
    {
      title: 'Dashboard',
      icon: LayoutIcon,
      path: '',
    },
  ],
};

export const Two = Template.bind({});
Two.args = {
  routes: [
    {
      title: 'Dashboard',
      icon: LayoutIcon,
      path: '',
    },
    {
      title: 'Jobs',
      icon: BriefcaseIcon,
      path: '',
    },
  ],
};

export const Three = Template.bind({});
Three.args = {
  routes: [
    {
      title: 'Dashboard',
      icon: LayoutIcon,
      path: '',
    },
    {
      title: 'Jobs',
      icon: BriefcaseIcon,
      path: '',
    },
    {
      title: 'Applications',
      icon: AppIcon,
      path: '',
    },
  ],
};
