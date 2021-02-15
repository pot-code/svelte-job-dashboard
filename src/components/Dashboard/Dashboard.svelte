<script>
  import { onMount } from 'svelte';

  import PercentageCard from '../Cards/CirclePercentageCard.svelte';
  import BarPercentageCard from '../Cards/BarPercentageCard.svelte';
  import JobChart from './JobChart.svelte';

  import api from './dashboard.api';

  let chartData = [];
  let categoryData = new Array(4).fill({
    label: 'sample',
    value: 0,
    color: '#03CAD8',
    percentage: 0,
  });
  onMount(async () => {
    let rawCategoryData = [];
    [rawCategoryData, chartData] = await Promise.all([api.getAcquisitions(), api.getActive()]);

    const sum = rawCategoryData.reduce((acc, v) => acc + v.value, 0);
    categoryData = rawCategoryData.map((v) => ({
      percentage: Math.round((v.value / sum) * 100),
      ...v,
    }));
  });
</script>

<main>
  <h1>Applications Dashboard</h1>
  <div class="flows">
    {#each categoryData.slice(0, 3) as item}
      <PercentageCard
        label={item.label.toUpperCase()}
        value={item.value}
        fill={item.color}
        percentage={item.percentage}
      />
    {/each}
  </div>
  <div class="statistics">
    <section style="grid-column: 1 / 3">
      <JobChart data={chartData} />
    </section>
    <section style="grid-column: 3 / 4; overflow: hidden">
      <BarPercentageCard label="Acquisitions" data={categoryData} />
    </section>
  </div>
</main>

<style>
  main {
    padding: 1rem;
    box-sizing: border-box;
  }
  div.flows {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
  }
  div.statistics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  h1 {
    margin: 0;
    font-size: 1.2em;
    margin-bottom: 1rem;
    color: #ffffff;
  }
</style>
