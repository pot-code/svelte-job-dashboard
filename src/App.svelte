<script>
  import { onMount, afterUpdate } from 'svelte';
  import PerfectScrollbar from 'perfect-scrollbar';

  import Sidebar from './components/Sidebar/Sidebar.svelte';
  import Profile from './components/Profile/Profile.svelte';
  import Dashboard from './pages/Dashboard/Dashboard.svelte';

  import { routes } from './routes.js';

  function changeRoute(idx) {
    console.log('selected route', routes[idx]);
  }

  let profile;
  let scrollbars = [];
  onMount(() => {
    scrollbars.push(
      new PerfectScrollbar(profile, {
        wheelSpeed: 0.5,
      })
    );
  });
  afterUpdate(() => {
    scrollbars.forEach((bar) => {
      bar.update();
    });
  });
</script>

<main>
  <section class="sidebar">
    <Sidebar {routes} onChange={changeRoute} />
  </section>
  <section class="content">
    <Dashboard />
  </section>
  <section class="profile" bind:this={profile}>
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
    height: 100vh;
    background-color: #000c1c;
  }
  section.content {
    flex-grow: 1;
    background: linear-gradient(to bottom, #00122f, #001231);
    height: 100vh;
  }
  section.profile {
    position: relative;
    width: 20%;
    flex-grow: 0;
    height: 100vh;
    background-color: #000c1c;
  }

  @media screen and (min-width: 1440px) {
    section.sidebar {
      width: 13%;
    }
    section.profile {
      width: 20%;
    }
  }

  @media screen and (min-width: 1024px) {
    section.sidebar {
      width: 15%;
    }
    section.profile {
      width: 24%;
    }
  }

  @media screen and (max-width: 768px) {
    section.sidebar {
      display: none;
    }
    section.profile {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    section.content {
      height: auto;
    }
  }
</style>
