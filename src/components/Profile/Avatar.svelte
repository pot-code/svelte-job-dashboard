<script>
  function onImageLoadingError() {
    this.src = 'assets/image/profile.png';
  }

  export let src = 'assets/image/profile.png';
  export let size = 16;
</script>

<img {src} alt="profile" height={size} width={size} on:error={onImageLoadingError} />

<style>
  img {
    object-fit: cover;
    border-radius: 50%;
  }
</style>
