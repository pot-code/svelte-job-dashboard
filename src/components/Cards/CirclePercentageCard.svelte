<script>
  import numeral from 'numeral';
  import { Circle } from 'progressbar.js';
  import { onMount, afterUpdate } from 'svelte';
  import Color from 'color';

  let container;
  let progress;

  onMount(() => {
    const trailColor = Color(fill).darken(0.3).desaturate(0.6);
    progress = new Circle(container, {
      trailColor: trailColor.hex(),
      trailWidth: 4,
      text: {
        style: {
          color: '#FFFFFF',
          fontWeight: 'bold',
          position: 'absolute',
          left: '50%',
          top: '50%',
          padding: 0,
          margin: 0,
          transform: {
            prefix: true,
            value: 'translate(-50%, -50%)',
          },
        },
      },
      duration: 1000,
      easing: 'easeOut',
      color: fill,
      strokeWidth: 6,
      step: function (_, circle) {
        circle.setText(`${Math.round(circle.value() * 100)}%`);
      },
    });

    progress.animate(percentage / 100);
  });

  afterUpdate(() => {
    const trailColor = Color(fill).darken(0.3).desaturate(0.6);
    progress.set(0);
    progress.path.setAttribute('stroke', fill);
    progress.trail.setAttribute('stroke', trailColor);
    progress.animate(percentage / 100);
  });

  export let label = 'Sample';
  export let value = 0;
  export let percentage = 0;
  export let fill = '#FFF';
</script>

<div class="card">
  <section>
    <h4>{label}</h4>
    <span>{numeral(value).format('0.0a')}</span>
  </section>
  <section>
    <div class="container" bind:this={container} height="64" width="64" />
  </section>
</div>

<style>
  div.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 12px;
    background-color: rgba(0, 12, 28, 0.8);
  }
  div.container {
    position: relative;
    height: 64px;
    width: 64px;
  }
  h4 {
    color: #354256;
    font-size: 0.5em;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  span {
    color: #f6f6f7;
    font-size: 1.5em;
    font-weight: bold;
  }
</style>
