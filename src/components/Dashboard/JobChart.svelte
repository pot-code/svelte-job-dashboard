<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');

    const backgroundGradient = ctx.createLinearGradient(0, 0, 0, height >> 1);
    backgroundGradient.addColorStop(0, 'RGBA(2,200,214,0.5)');
    backgroundGradient.addColorStop(1, 'RGBA(2,200,214,0.2)');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            data,
            label: 'jobs',
            borderColor: 'transparent',
            pointBackgroundColor: '#03CAD8',
            backgroundColor: backgroundGradient,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: '#354256',
              },
              gridLines: {
                color: '#162131',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#354256',
              },
            },
          ],
        },
      },
    });
  });

  export let height = 480;
  export let data = [];
</script>

<div>
  <header>
    <h5>Top Active Jobs</h5>
  </header>
  <main style="height: {height}px">
    <canvas bind:this={canvas} />
  </main>
</div>

<style>
  div {
    background-color: rgba(0, 12, 28, 0.8);
    padding: 1rem;
    border-radius: 12px;
  }
  header {
    margin-bottom: 2rem;
  }
  header > h5 {
    margin: 0;
    color: #ffffff;
  }
</style>
