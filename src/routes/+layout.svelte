<script>
	import '../app.css';
</script>

<div class="flex flex-col h-screen">
	<header class="shrink-0 h-16 flex py-5 px-8 bg-black">
		<a href="/" class="mr-5"><h1>Parlay Nation</h1></a>
		<nav class="flex gap-5 underline">
			<a href="/craps">Craps</a>
			<a href="/simulator">Simulator</a>
		</nav>
	</header>

	<main class="grow">
		<slot />
	</main>

	<footer class="shrink-0 p-12 bg-black">© Parlay Nation 2023</footer>
</div>
