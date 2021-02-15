<script>
  export let color = 'none';
  export let size = 24;
  export let d = '';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
  ><path fill="none" d="M0 0h24v24H0z" /><path {d} fill={color} /></svg
>

<style>
  svg {
    display: block;
  }
</style>
