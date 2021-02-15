<script>
  import Avatar from './Avatar.svelte';
  import Message from './Message.svelte';
  import Activity from './Activity.svelte';

  let name = 'pot-code';
  let occupation = 'Front-End Developer';
  let profileURL =
    'https://avatars.githubusercontent.com/u/17687881?s=460&u=128ff080cc7df0d206bd378e986495c39ece509f&v=4';
</script>

<div class="profile">
  <header>
    <div class="avatar">
      <Avatar size={64} src={profileURL} />
    </div>
    <p class="name">{name}</p>
    <p class="occupation">{occupation}</p>
  </header>
  <Message
    data={[
      {
        profileURL: 'https://randomuser.me/api/portraits/men/79.jpg',
        name: 'Jose Armstrong',
        content:
          'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way.',
      },
      {
        profileURL: 'https://randomuser.me/api/portraits/men/35.jpg',
        name: '	Cecil Barrett',
        content: 'Companions shy had solicitude favourable own. Which could saw guest man now heard but.',
      },
      {
        profileURL: 'https://randomuser.me/api/portraits/women/9.jpg',
        name: '	Scarlett Clarke',
        content:
          'Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw.',
      },
    ]}
  />
  <Activity
    data={[
      {
        type: 2,
        subject: 'UI developer',
        value: 3,
        op: 'Tom',
      },
      {
        type: 1,
        subject: '',
        value: 4,
        op: '',
      },
      {
        type: 3,
        subject: 'Back-End Developer',
        value: 0,
        op: 'Wade Wilson',
      },
      {
        type: 4,
        subject: 'HR Specialist',
        value: 0,
        op: '',
      },
    ]}
  />
</div>

<style>
  div.profile {
    background-color: #000c1c;
    min-height: 100vh;
  }
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
    font-size: 0.6em;
  }
</style>
