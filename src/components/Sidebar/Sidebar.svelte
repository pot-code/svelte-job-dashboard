<script>
  import Icon from '../icons/BaseIcon.svelte';
  import { BarChartIcon } from '../icons';

  let select = 0;

  function selectMenuItem(e) {
    select = parseInt(this.dataset['index'], 10);
    onChange(select);
  }

  export let onChange = (idx) => {};
  export let routes = [];
</script>

<div>
  <h1 class="logo">
    <Icon color="#005CC0" size="24" d={BarChartIcon} /><span style="font-size: 0.5em; margin-left: 1rem">Recruiter</span
    >
  </h1>
  <ul class="menu">
    {#each routes as route, idx}
      <li class:active={select === idx} data-index={idx} on:click={selectMenuItem}>
        <Icon d={route.icon} color="#005CC0" /><span>{route.title}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  div {
    font-family: 'Comfortaa';
    user-select: none;
  }
  .logo {
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: 0;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  .menu {
    margin: 0;
    padding-left: 1rem;
    list-style: none;
  }
  .menu > li {
    margin: 0;
    display: flex;
    color: #354256;
    align-items: center;
    padding: 0.5rem 0;
    font-size: 12px;
    border-right: 2px solid none;
    cursor: pointer;
    transition: color 300ms ease;
  }
  .menu > li:hover {
    color: #ffffff;
  }
  .menu > li.active {
    color: #ffffff;
    border-right: 2px solid #0069de;
  }
  .menu li > span {
    margin-left: 0.5rem;
  }
</style>
