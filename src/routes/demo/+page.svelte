<script>
	import { resolve } from '$app/paths';
	import { recentScans, tireSets, wearColor, badgeClass } from '$lib/demo-data';

	const watched = tireSets.filter((set) => set.status === 'À surveiller').length;
	const replace = tireSets.filter((set) => set.status === 'Remplacer').length;
</script>

<svelte:head>
	<title>Dashboard — TireTrack</title>
</svelte:head>

<section class="mx-auto max-w-7xl px-6 py-8">
	<div
		class="flex flex-col justify-between gap-5 border-b border-black/10 pb-6 lg:flex-row lg:items-end"
	>
		<div>
			<p
				class="border-l-4 border-[#d6001c] pl-4 text-sm font-black uppercase tracking-[0.25em] text-black/45"
			>
				Dashboard paddock
			</p>

			<h1 class="mt-4 text-4xl font-black uppercase tracking-[-0.03em] md:text-6xl">
				Vue d’ensemble pneus
			</h1>

			<p class="mt-4 max-w-3xl text-lg leading-8 text-black/60">
				Suivi des derniers scans réalisés à la réception, avant pose, après session ou après dépose.
				Le dashboard permet de repérer rapidement les trains OK, à surveiller ou à remplacer.
			</p>
		</div>

		<a
			href={resolve('/demo/trains')}
			class="bg-[#d6001c] px-6 py-4 text-center font-black uppercase tracking-wide text-white hover:bg-[#b80018]"
		>
			Voir les trains
		</a>
	</div>

	<div class="mt-8 grid gap-4 md:grid-cols-4">
		<div class="border-t-4 border-[#111] bg-white p-5 shadow-sm">
			<p class="text-sm font-black uppercase text-black/40">Trains enregistrés</p>
			<p class="mt-2 text-4xl font-black">{tireSets.length}</p>
		</div>

		<div class="border-t-4 border-[#d6001c] bg-white p-5 shadow-sm">
			<p class="text-sm font-black uppercase text-black/40">Derniers scans</p>
			<p class="mt-2 text-4xl font-black">{recentScans.length}</p>
		</div>

		<div class="border-t-4 border-orange-400 bg-white p-5 shadow-sm">
			<p class="text-sm font-black uppercase text-black/40">À surveiller</p>
			<p class="mt-2 text-4xl font-black">{watched}</p>
		</div>

		<div class="border-t-4 border-[#d6001c] bg-white p-5 shadow-sm">
			<p class="text-sm font-black uppercase text-black/40">À remplacer</p>
			<p class="mt-2 text-4xl font-black">{replace}</p>
		</div>
	</div>

	<div class="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
		<section class="border border-black/10 bg-white p-5">
			<div class="mb-5 flex items-center justify-between">
				<div>
					<p class="text-xs font-black uppercase tracking-[0.22em] text-black/35">Activité</p>
					<h2 class="mt-1 text-2xl font-black uppercase">Derniers scans</h2>
				</div>

				<span class="bg-[#111] px-4 py-2 text-xs font-black uppercase text-white">
					Caméra + laser
				</span>
			</div>

			<div class="space-y-4">
				{#each recentScans as scan (scan.id)}
					<article class="border border-black/10 bg-[#f7f7f7] p-4">
						<div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
							<div>
								<div class="flex items-center gap-3">
									<p class="text-xl font-black">{scan.setId}</p>
									<span class="px-2 py-1 text-[10px] font-black uppercase {badgeClass(scan.color)}">
										{scan.state}
									</span>
								</div>

								<p class="mt-1 text-sm font-semibold text-black/45">
									{scan.id} · {scan.type} · {scan.method}
								</p>
							</div>

							<div class="w-full md:w-64">
								<div
									class="mb-1 flex justify-between text-[10px] font-black uppercase text-black/40"
								>
									<span>Usure estimée</span>
									<span>{scan.wear}%</span>
								</div>

								<div class="h-2 bg-black/10">
									<div class="h-2 {wearColor(scan.color)}" style={`width: ${scan.wear}%`}></div>
								</div>
							</div>
						</div>

						<p
							class="mt-3 border-l-4 border-[#d6001c] bg-white p-3 text-sm font-semibold text-black/60"
						>
							{scan.message}
						</p>
					</article>
				{/each}
			</div>
		</section>

		<section class="border border-black/10 bg-[#111] p-5 text-white">
			<p class="text-xs font-black uppercase tracking-[0.22em] text-white/35">Synthèse</p>
			<h2 class="mt-1 text-2xl font-black uppercase">État du stock</h2>

			<div class="mt-6 space-y-4">
				{#each tireSets as set (set.id)}
					<div>
						<div class="mb-1 flex items-center justify-between">
							<p class="font-black">{set.id}</p>
							<p class="text-sm font-black text-white/50">{set.globalWear}%</p>
						</div>

						<div class="h-3 bg-white/10">
							<div class="h-3 {wearColor(set.color)}" style={`width: ${set.globalWear}%`}></div>
						</div>

						<p class="mt-1 text-xs font-semibold text-white/40">{set.status} · {set.lastScan}</p>
					</div>
				{/each}
			</div>
		</section>
	</div>
</section>
