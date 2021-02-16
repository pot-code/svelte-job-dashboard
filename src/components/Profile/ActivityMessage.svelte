<script>
  export let type = 0;
  export let value = 0;
  export let subject = '';
  export let op = '';
</script>

{#if type == 1}
  <p>Your plan is expires in <strong>{value} days</strong></p>
{:else if type == 2}
  <p>There are <strong>{value} new applications</strong> for <strong>{subject}</strong></p>
{:else if type == 3}
  <p>Your teammate, <strong>{op}</strong> has closed the job post of <strong>{subject}</strong></p>
{:else if type == 4}
  <p>You have drafted a job post for <strong>{subject}</strong></p>
{:else}
  <p>unknonw type <strong>{type}</strong></p>
{/if}

<style>
  p {
    color: #354256;
    font-size: 12px;
    line-height: 1.3;
    margin: 0;
  }
  p > strong {
    color: #5d646e;
  }
</style>
