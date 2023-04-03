<script lang="ts">
	import { gameStore } from './store';
</script>

{#if $gameStore.stage === 'result'}
	<!-- display dices values from $gameStore.dice1 and $gameStore.dice2 -->
	<div class="flex gap-3">
		<img src="/img/dices/die_{$gameStore.dice1}.jpg" alt="dice1" />
		<img src="/img/dices/die_{$gameStore.dice2}.jpg" alt="dice2" />
	</div>
{/if}
