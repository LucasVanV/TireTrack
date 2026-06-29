<script>
	import { tireSets } from '$lib/demo-data';
</script>

<svelte:head>
	<title>Données — TireTrack</title>
</svelte:head>

<section class="mx-auto max-w-7xl px-6 py-8">
	<div class="border-b border-black/10 pb-6">
		<p
			class="border-l-4 border-[#d6001c] pl-4 text-sm font-black uppercase tracking-[0.25em] text-black/45"
		>
			Analyse
		</p>

		<h1 class="mt-4 text-4xl font-black uppercase tracking-[-0.03em] md:text-6xl">
			Données d’usure
		</h1>

		<p class="mt-4 max-w-3xl text-lg leading-8 text-black/60">
			Chaque graphique représente l’évolution d’un train de pneus au fil des scans : réception,
			essais, qualification, course ou dépose.
		</p>
	</div>

	<div class="mt-8 grid gap-6 lg:grid-cols-2">
		{#each tireSets as set (set.id)}
			<article class="border border-black/10 bg-white p-6">
				<div class="flex items-start justify-between gap-4">
					<div>
						<p class="text-sm font-black uppercase tracking-[0.22em] text-black/35">
							{set.type}
						</p>
						<h2 class="mt-1 text-3xl font-black uppercase">{set.id}</h2>
					</div>

					<span
						class="px-3 py-2 text-xs font-black uppercase
							{set.color === 'green'
							? 'bg-green-100 text-green-700'
							: set.color === 'red'
								? 'bg-red-100 text-red-700'
								: 'bg-orange-100 text-orange-700'}"
					>
						{set.status}
					</span>
				</div>

				<div class="mt-8 space-y-4">
					{#each set.history as point (point.label)}
						<div class="grid grid-cols-[92px_1fr_44px] items-center gap-4">
							<div>
								<p class="text-sm font-black">{point.label}</p>
								<p class="text-[10px] font-bold uppercase text-black/35">
									{point.scanType}
								</p>
							</div>

							<div class="h-5 bg-black/10">
								<div
									class="h-5 {point.wear >= 80
										? 'bg-[#d6001c]'
										: point.wear >= 55
											? 'bg-orange-400'
											: 'bg-green-500'}"
									style={`width: ${point.wear}%`}
								></div>
							</div>

							<p class="text-right text-sm font-black">{point.wear}%</p>
						</div>
					{/each}
				</div>

				<div class="mt-6 grid grid-cols-4 gap-2">
					{#each set.positions as position (position.label)}
						<div class="bg-[#f4f4f4] p-3">
							<p class="text-[10px] font-black uppercase text-black/40">
								{position.label}
							</p>
							<p class="mt-1 text-xl font-black">{position.wear}%</p>
							<p class="mt-1 truncate text-[10px] font-bold uppercase text-black/35">
								{position.state}
							</p>
						</div>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>
