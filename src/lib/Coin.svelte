<script lang="ts">
  type CoinState = 'idle' | 'flipping' | 'heads' | 'tails';

  let coinState = $state<CoinState>('idle');
  let rotation = $state(0);

  function flipCoin() {
    if (coinState === 'flipping') return;
    
    coinState = 'flipping';
    
    // Random number of full rotations plus final position
    const spins = 4 + Math.floor(Math.random() * 3); // 4-6 full spins
    const isHeads = Math.random() < 0.5;
    const finalRotation = spins * 360 + (isHeads ? 0 : 180);
    
    rotation = finalRotation;
    
    setTimeout(() => {
      coinState = isHeads ? 'heads' : 'tails';
    }, 1000);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
      flipCoin();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="coin-container">
  <div 
    class="coin" 
    class:flipping={coinState === 'flipping'}
    style="transform: rotateY({rotation}deg)"
    onclick={flipCoin}
    onkeydown={(e) => e.key === 'Enter' && flipCoin()}
    role="button"
    tabindex="0"
  >
    <div class="coin-side heads">
      <span>HEADS</span>
    </div>
    <div class="coin-side tails">
      <span>TAILS</span>
    </div>
  </div>
  
  <p class="result">
    {coinState === 'idle' ? 'Click the coin or press spacebar to flip!' : 
     coinState === 'flipping' ? 'Flipping...' : 
     coinState.toUpperCase()}
  </p>
</div>

<style>
  .coin-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    perspective: 1000px;
  }

  .coin {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    cursor: pointer;
    transition: transform 1s ease-out;
  }

  .coin:hover {
    filter: brightness(1.1);
  }

  .coin-side {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    backface-visibility: hidden;
    border: 3px solid #b8860b;
    box-shadow: 
      0 0 20px rgba(184, 134, 11, 0.3),
      inset 0 0 20px rgba(255, 255, 255, 0.2);
  }

  .heads {
    background: radial-gradient(circle at 30% 30%, #ffd700, #b8860b);
    color: #8b4513;
  }

  .tails {
    background: radial-gradient(circle at 30% 30%, #c0c0c0, #808080);
    color: #2f2f2f;
    transform: rotateY(180deg);
  }

  .coin-side span {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
  }

  .result {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin: 0;
    min-height: 2rem;
  }

  .flipping {
    pointer-events: none;
  }
</style>