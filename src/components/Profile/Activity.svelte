<script>
  import ActivityMessage from './ActivityMessage.svelte';
  import ActivityIcon from './ActivityIcon.svelte';

  import Icon from '../icons/BaseIcon.svelte';
  import { BellIcon, CupIcon } from '../icons';

  export let data = [];
</script>

<div class="message">
  <header>
    <h4>Activity</h4>
    <Icon d={BellIcon} color="#354256" size={16} />
  </header>
  {#if data.length > 0}
    <ul>
      {#each data as item}
        <li>
          <ActivityIcon {item} />
          <ActivityMessage {...item} />
        </li>
      {/each}
    </ul>
  {:else}
    <div class="empty">
      <div><Icon d={CupIcon} color="#242d3a" size={24} /></div>
      <h4>No Activities</h4>
    </div>
  {/if}
</div>

<style>
  div.message {
    padding: 1rem;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #354256;
    margin-bottom: 1rem;
  }
  header > h4 {
    margin: 0;
    font-size: 0.9em;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul > li {
    padding: 0;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    align-items: flex-start;
  }
  div.empty {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: #242d3a;
    align-items: center;
  }
  div.empty > div {
    margin-right: 0.8rem;
  }
  div.empty > h4 {
    margin: 0;
  }
</style>
