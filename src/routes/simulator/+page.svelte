<script lang="ts">
	import Balance from './balance.svelte';
	import Dices from './dices.svelte';
	import Game from './game.svelte';
</script>

<div class="min-h-screen p-12">
	<h1 class="mb-5">[Interactive page example] Simulator</h1>

	<div class="flex gap-5">
		<aside>
			<Balance />
		</aside>
		<main>
			<Dices />
			<Game />
		</main>
	</div>
</div>
