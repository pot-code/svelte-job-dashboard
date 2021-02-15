<script>
  import Sidebar from './components/Sidebar/Sidebar.svelte';
  import Dashboard from './components/Dashboard/Dashboard.svelte';
  import Profile from './components/Profile/Profile.svelte';

  import { AppIcon, BriefcaseIcon, GroupIcon, LayoutIcon, LineChartIcon } from './components/icons';

  const routes = [
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
    {
      title: 'Team',
      icon: GroupIcon,
      path: '',
    },
    {
      title: 'Reports',
      icon: LineChartIcon,
      path: '',
    },
  ];

  function changeRoute(idx) {
    console.log('selected route', routes[idx]);
  }
</script>

<main>
  <section class="sidebar">
    <Sidebar {routes} onChange={changeRoute} />
  </section>
  <section class="content">
    <Dashboard />
  </section>
  <section class="profile">
    <Profile />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
  }
  section.sidebar {
    width: 13%;
    flex-grow: 0;
    flex-shrink: 0;
    max-height: 100vh;
    overflow: auto;
  }
  section.content {
    flex-grow: 1;
    background: linear-gradient(to bottom, #00122f, #001231);
    max-height: 100vh;
    overflow: auto;
  }
  section.profile {
    width: 20%;
    flex-grow: 0;
    max-height: 100vh;
    overflow: auto;
  }
</style>
