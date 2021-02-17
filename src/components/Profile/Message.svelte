<script>
  import { fly } from 'svelte/transition';

  import Icon from '../icons/BaseIcon.svelte';
  import { MessageIcon, NoChatIcon } from '../icons';
  import Avatar from './Avatar.svelte';

  export let data = [];
</script>

<div class="message">
  <header>
    <h4>Messages</h4>
    <Icon d={MessageIcon} color="#354256" size={16} />
  </header>
  {#if data.length > 0}
    <ul>
      {#each data as item, idx}
        <li transition:fly={{ y: 12, delay: idx * 80 }}>
          <div class="avatar">
            <Avatar size="24" src={item.profileURL} />
          </div>
          <div class="profile">
            <h5>{item.name}</h5>
            <p>
              {item.content}
            </p>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="empty">
      <div><Icon d={NoChatIcon} color="#242d3a" size={24} /></div>
      <h4>No Message</h4>
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
    font-size: 12px;
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
    align-items: center;
  }
  ul > li > div.avatar {
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
  ul > li > div.profile {
    min-width: 0;
  }
  ul > li > div.profile > h5 {
    color: #ffffff;
    margin: 0;
  }
  ul > li > div.profile > p {
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    color: #354256;
    text-overflow: ellipsis;
    margin: 0;
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
