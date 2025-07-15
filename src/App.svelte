<script lang="ts">
  import Coin from './lib/Coin.svelte'
</script>

<main>
  <h1>Coin Toss</h1>
  <Coin />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 2rem;
  }

  h1 {
    font-size: 3rem;
    color: #333;
    margin: 0;
  }
</style>