<script lang="ts">
	import { tireSets, wearColor, badgeClass } from '$lib/demo-data';
</script>

<svelte:head>
	<title>Trains — TireTrack</title>
</svelte:head>

<section class="mx-auto max-w-7xl px-6 py-8">
	<div class="flex flex-col justify-between gap-5 border-b border-black/10 pb-6 lg:flex-row lg:items-end">
		<div>
			<p class="border-l-4 border-[#d6001c] pl-4 text-sm font-black uppercase tracking-[0.25em] text-black/45">
				Inventaire pneus
			</p>

			<h1 class="mt-4 text-4xl font-black uppercase tracking-[-0.03em] md:text-6xl">
				Trains de pneus
			</h1>

			<p class="mt-4 max-w-3xl text-lg leading-8 text-black/60">
				Chaque ligne représente un train de pneus. Les quatre pourcentages correspondent à l’état
				par position : avant gauche, avant droit, arrière gauche et arrière droit.
			</p>
		</div>

		<button class="bg-[#d6001c] px-6 py-4 font-black uppercase tracking-wide text-white">
			+ Ajouter un train
		</button>
	</div>

	<div class="mt-8 overflow-hidden border border-black/10 bg-white">
		<div class="grid grid-cols-[1.1fr_1fr_0.8fr_2fr_0.8fr] border-b border-black/10 bg-[#111] px-5 py-4 text-xs font-black uppercase tracking-wide text-white">
			<p>Train</p>
			<p>Contexte</p>
			<p>Statut</p>
			<p>Usure par pneu</p>
			<p class="text-right">Tours</p>
		</div>

		<div class="divide-y divide-black/10">
			{#each tireSets as set}
				<article class="grid grid-cols-[1.1fr_1fr_0.8fr_2fr_0.8fr] items-center gap-4 px-5 py-5">
					<div>
						<p class="text-xl font-black">{set.id}</p>
						<p class="mt-1 text-sm font-semibold text-black/45">{set.type}</p>
					</div>

					<div>
						<p class="font-black">{set.stage}</p>
						<p class="mt-1 text-sm font-semibold text-black/45">{set.lastScan}</p>
					</div>

					<div>
						<span class="px-2 py-1 text-[10px] font-black uppercase {badgeClass(set.color)}">
							{set.status}
						</span>
					</div>

					<div class="grid grid-cols-4 gap-2">
						{#each set.positions as position}
							<div class="bg-[#f4f4f4] p-3">
								<div class="flex items-center justify-between">
									<p class="text-[10px] font-black uppercase text-black/40">{position.label}</p>
									<p class="text-sm font-black">{position.wear}%</p>
								</div>

								<div class="mt-2 h-2 bg-black/10">
									<div
										class="h-2 {position.wear >= 80
											? 'bg-[#d6001c]'
											: position.wear >= 55
												? 'bg-orange-400'
												: 'bg-green-500'}"
										style={`width: ${position.wear}%`}
									></div>
								</div>

								<p class="mt-1 truncate text-[10px] font-bold uppercase text-black/35">
									{position.state}
								</p>
							</div>
						{/each}
					</div>

					<p class="text-right text-xl font-black">{set.laps}</p>
				</article>
			{/each}
		</div>
	</div>
</section>