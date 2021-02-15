<script>
  import { ActivityConfigs } from '../../constants/activity.js';
  import Icon from '../icons/BaseIcon.svelte';

  function getActivityConfig(type) {
    return ActivityConfigs[Math.max(0, Math.min(ActivityConfigs.length - 1, type))];
  }

  $: style = getActivityConfig(item.type);

  export let item = {
    type: -1,
    subject: '',
    value: 0,
    op: '',
  };
</script>

<div style="background-color: {style.fill};">
  <Icon size={16} color={style.color} d={style.icon} />
</div>

<style>
  div {
    padding: 0.5rem;
    border-radius: 8px;
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
</style>
