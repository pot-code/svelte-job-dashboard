<script>
  import { onMount } from 'svelte';

  import Avatar from './Avatar.svelte';
  import Message from './Message.svelte';
  import Activity from './Activity.svelte';
  import api from './api';

  let name = 'user';
  let occupation = 'undefined';
  let profileURL = 'assets/image/profile.png';
  let messages = [];
  let activities = [];

  onMount(async () => {
    let profile = null;
    [activities, messages, profile] = await Promise.all([api.getActivities(), api.getMessages(), api.getProfile()]);
    [name, occupation, profileURL] = [profile.name, profile.occupation, profile.profileURL];
  });
</script>

<div>
  <header>
    <div class="avatar">
      <Avatar size={64} src={profileURL} />
    </div>
    <p class="name">{name}</p>
    <p class="occupation">{occupation}</p>
  </header>
  <Message data={messages} />
  <Activity data={activities} />
</div>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 1rem;
  }
  header > div.avatar {
    margin-bottom: 1rem;
  }
  header > p {
    margin: 0;
    line-height: 1.5;
    color: #354256;
    font-size: 12px;
  }
</style>
