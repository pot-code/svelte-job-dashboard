<script>
  import PercentageCard from '../Cards/CirclePercentageCard.svelte';
  import BarPercentageCard from '../Cards/BarPercentageCard.svelte';
  import JobChart from './JobChart.svelte';
</script>

<main>
  <h1>Applications Dashboard</h1>
  <div class="flows">
    <PercentageCard label="APPLICATIONS" value="20500" fill="#F970BD" percentage={30} />
    <PercentageCard label="SHORTLISTED" value="5500" fill="#03CAD8" percentage={60} />
    <PercentageCard label="ON-HOLD" value="10500" fill="#DA7F29" percentage={90} />
  </div>
  <div class="statistics">
    <section style="grid-column: 1 / 3">
      <JobChart data={[60, 45, 80, 30, 35, 55, 25, 80, 40, 50, 80, 50]} />
    </section>
    <section style="grid-column: 3 / 4; overflow: hidden">
      <BarPercentageCard
        label="Acquisitions"
        data={[
          {
            label: 'Applications',
            value: 0.64,
            color: '#F970BD',
          },
          {
            label: 'Shortlisted',
            value: 0.18,
            color: '#03CAD8',
          },
          {
            label: 'On-hold',
            value: 0.1,
            color: '#DA7F29',
          },
          {
            label: 'Rejected',
            value: 0.08,
            color: '#FF4F55',
          },
        ]}
      />
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
