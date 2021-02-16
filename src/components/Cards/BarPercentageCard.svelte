<script>
  import Chart from 'chart.js';
  import { onMount, afterUpdate } from 'svelte';

  let canvas;
  let chart;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    const datasets = data.map((item) => ({
      label: item.label,
      backgroundColor: item.color,
      data: [item.percentage],
    }));

    chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        datasets,
      },
      options: {
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              display: false,
              stacked: true,
            },
          ],
          xAxes: [
            {
              display: false,
              stacked: true,
            },
          ],
        },
      },
    });
  });

  afterUpdate(() => {
    const datasets = data.map((item) => ({
      label: item.label,
      backgroundColor: item.color,
      data: [item.percentage],
    }));

    chart.data.datasets = datasets;
    chart.update();
  });

  export let label = '';
  export let data = [];
</script>

<div class="card">
  <header>
    <h5>{label}</h5>
  </header>
  <main>
    <div class="graph">
      <canvas bind:this={canvas} />
    </div>
    <ul>
      {#each data as item}
        <li>
          <div>
            <i style="background-color: {item.color}" />
            <span>{item.label}</span>
          </div>
          <span>{item.percentage}%</span>
        </li>
      {/each}
    </ul>
  </main>
</div>

<style>
  div.card {
    padding: 1rem;
    background-color: rgba(0, 12, 28, 0.8);
    border-radius: var(--lg-radius);
  }
  div.graph {
    height: 0.3rem;
    margin-bottom: 1.2rem;
  }
  header {
    margin-bottom: 1.7rem;
  }
  header > h5 {
    margin: 0;
    color: #ffffff;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul > li {
    color: #354256;
    margin: 0.7rem 0;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ul > li > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ul > li > div > i {
    display: inline-block;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    margin-right: 0.5rem;
    vertical-align: baseline;
  }
</style>
