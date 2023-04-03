<script lang="ts">
	import { gameStore } from './store';
</script>

{#if $gameStore.stage === 'betting'}
	<button on:click={() => gameStore.bet(5)} class="btn btn-primary"> Bet 5 USD </button>
	<button
		on:click={gameStore.roll}
		class="btn btn-warning {$gameStore.bet === 0 ? 'btn-disabled' : ''}"
	>
		Roll
	</button>
{:else}
	<p>{$gameStore.hasWon ? 'You won!' : 'You lost!'}</p>
	<button on:click={gameStore.next} class="btn btn-primary"> Next round </button>
{/if}
