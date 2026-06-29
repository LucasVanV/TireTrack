<script lang="ts">
	import { goto } from '$app/navigation';

	function openDemo() {
		goto('/demo');
	}

	const tireSets = [
		{
			id: 'SET-S01',
			status: 'OK',
			stage: 'Réception',
			scan: 'Avant pose',
			wear: 12,
			color: 'green'
		},
		{
			id: 'SET-S02',
			status: 'OK',
			stage: 'Après essais',
			scan: 'Après session',
			wear: 38,
			color: 'green'
		},
		{
			id: 'SET-S03',
			status: 'À surveiller',
			stage: 'Qualification',
			scan: 'Avant repose',
			wear: 67,
			color: 'orange'
		},
		{
			id: 'SET-S04',
			status: 'Remplacer',
			stage: 'Course',
			scan: 'Après dépose',
			wear: 86,
			color: 'red'
		}
	];

	const positions = [
		{ label: 'AVG', wear: 62, state: 'Usure int.', color: 'orange' },
		{ label: 'AVD', wear: 68, state: 'Graining', color: 'orange' },
		{ label: 'ARG', wear: 74, state: 'À surveiller', color: 'red' },
		{ label: 'ARD', wear: 59, state: 'Correct', color: 'orange' }
	];

	function wearColor(color) {
		if (color === 'green') return 'bg-green-500';
		if (color === 'red') return 'bg-[#d6001c]';
		return 'bg-orange-400';
	}

	function badgeClass(color) {
		if (color === 'green') return 'bg-green-100 text-green-700';
		if (color === 'red') return 'bg-red-100 text-red-700';
		return 'bg-orange-100 text-orange-700';
	}
</script>

<svelte:head>
	<title>TireTrack — Réemploi SCANDIAG®</title>
	<meta
		name="description"
		content="Solution IoT de suivi et d'analyse des trains de pneus issue du réemploi du FACOM SCANDIAG®."
	/>
</svelte:head>

<main class="min-h-screen bg-[#f4f4f4] text-[#111]">
	<header class="border-b border-black/10 bg-white">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
			<div class="flex items-center gap-3">
				<div class="flex h-10 items-center bg-[#d6001c] px-4 font-black tracking-tight text-white">
					TireTrack
				</div>
				<span class="hidden text-sm font-semibold text-black/50 sm:inline">
					Réemploi SCANDIAG® · Suivi pneus
				</span>
			</div>

			<button
				onclick={openDemo}
				class="rounded-sm bg-[#d6001c] px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#b80018]"
			>
				Démonstration
			</button>
		</div>
	</header>

	<section class="relative overflow-hidden">
		<div class="absolute right-0 top-0 h-full w-1/3 bg-[#d6001c] max-lg:hidden"></div>

		<div
			class="absolute inset-0 opacity-[0.04]"
			style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 36px 36px;"
		></div>

		<div
			class="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr]"
		>
			<div>
				<p
					class="mb-5 inline-flex border-l-4 border-[#d6001c] bg-white px-4 py-2 text-sm font-bold uppercase tracking-wide text-black/60 shadow-sm"
				>
					Concours national informatique · FACOM · RSE
				</p>

				<h1
					class="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-7xl"
				>
					Suivi intelligent des trains de pneus.
				</h1>

				<p class="mt-7 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
					TireTrack transforme le SCANDIAG® en outil IoT de traçabilité pneus : scan
					code-barres à la réception, contrôle laser de l’état, historique d’usure et aide à
					la décision avant ou après chaque pose.
				</p>

				<div class="mt-10 flex flex-col gap-4 sm:flex-row">
					<button
						onclick={openDemo}
						class="rounded-sm bg-[#d6001c] px-7 py-4 font-black uppercase tracking-wide text-white shadow-lg shadow-red-900/10 transition hover:-translate-y-0.5 hover:bg-[#b80018]"
					>
						Voir la démonstration écurie
					</button>

					<a
						href="#concept"
						class="rounded-sm border border-black/20 bg-white px-7 py-4 text-center font-black uppercase tracking-wide text-black transition hover:border-black hover:bg-black hover:text-white"
					>
						Comprendre le concept
					</a>
				</div>

				<div class="mt-12 grid max-w-2xl grid-cols-3 gap-3">
					<div class="border-t-4 border-[#d6001c] bg-white p-5 shadow-sm">
						<p class="text-3xl font-black">4</p>
						<p class="mt-1 text-sm font-semibold text-black/50">positions suivies</p>
					</div>

					<div class="border-t-4 border-[#111] bg-white p-5 shadow-sm">
						<p class="text-3xl font-black">2</p>
						<p class="mt-1 text-sm font-semibold text-black/50">types de scan</p>
					</div>

					<div class="border-t-4 border-[#111] bg-white p-5 shadow-sm">
						<p class="text-3xl font-black">IoT</p>
						<p class="mt-1 text-sm font-semibold text-black/50">caméra + laser</p>
					</div>
				</div>
			</div>

			<div class="relative">
				<div class="relative border border-black/10 bg-white p-5 shadow-2xl">
					<div class="mb-4 flex items-center justify-between">
						<div>
							<p class="text-xs font-black uppercase tracking-[0.22em] text-black/40">
								Vue écurie
							</p>
							<p class="text-2xl font-black uppercase">Trains de pneus</p>
						</div>

						<span class="bg-[#d6001c] px-4 py-2 text-xs font-black uppercase text-white">
							Live scan
						</span>
					</div>

					<div class="grid gap-3">
						<div class="border border-black/10 bg-[#111] p-4 text-white">
                            <div class="mb-4 flex items-start justify-between gap-4">
                                <div>
                                    <p class="text-xs font-bold uppercase tracking-wide text-white/40">
                                        Train sélectionné
                                    </p>
                                    <p class="mt-1 text-3xl font-black">SET-S03</p>
                                </div>

                                <span
                                    class="border border-orange-300/30 bg-orange-400/15 px-3 py-1 text-xs font-black uppercase text-orange-200"
                                >
                                    À surveiller
                                </span>
                            </div>

                            <div class="mb-4 grid grid-cols-3 gap-2">
                                <div class="bg-white/[0.06] p-3">
                                    <p class="text-[10px] font-black uppercase text-white/35">Scan</p>
                                    <p class="mt-1 text-sm font-bold">Avant repose</p>
                                </div>

                                <div class="bg-white/[0.06] p-3">
                                    <p class="text-[10px] font-black uppercase text-white/35">Code</p>
                                    <p class="mt-1 text-sm font-bold">BAR-S03</p>
                                </div>

                                <div class="bg-white/[0.06] p-3">
                                    <p class="text-[10px] font-black uppercase text-white/35">Méthode</p>
                                    <p class="mt-1 text-sm font-bold">Caméra + laser</p>
                                </div>
                            </div>

                            <div class="grid gap-3">
                                <div>
                                    <p class="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                                        Avant
                                    </p>

                                    <div class="grid grid-cols-2 gap-2">
                                        {#each positions.slice(0, 2) as position}
                                            <div class="bg-white/[0.06] p-3">
                                                <div class="flex items-start justify-between gap-2">
                                                    <div>
                                                        <p class="text-[10px] font-black uppercase text-white/35">
                                                            {position.label}
                                                        </p>
                                                        <p class="mt-1 text-2xl font-black">{position.wear}%</p>
                                                    </div>

                                                    <p class="text-[10px] font-bold uppercase text-white/35">
                                                        {position.state}
                                                    </p>
                                                </div>

                                                <div class="mt-3 h-2 bg-white/10">
                                                    <div
                                                        class="h-2 {wearColor(position.color)}"
                                                        style={`width: ${position.wear}%`}
                                                    ></div>
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                </div>

                                <div>
                                    <p class="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/35">
                                        Arrière
                                    </p>

                                    <div class="grid grid-cols-2 gap-2">
                                        {#each positions.slice(2, 4) as position}
                                            <div class="bg-white/[0.06] p-3">
                                                <div class="flex items-start justify-between gap-2">
                                                    <div>
                                                        <p class="text-[10px] font-black uppercase text-white/35">
                                                            {position.label}
                                                        </p>
                                                        <p class="mt-1 text-2xl font-black">{position.wear}%</p>
                                                    </div>

                                                    <p class="text-[10px] font-bold uppercase text-white/35">
                                                        {position.state}
                                                    </p>
                                                </div>

                                                <div class="mt-3 h-2 bg-white/10">
                                                    <div
                                                        class="h-2 {wearColor(position.color)}"
                                                        style={`width: ${position.wear}%`}
                                                    ></div>
                                                </div>
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>

				<div
					class="absolute -right-6 -top-6 hidden bg-[#d6001c] px-5 py-3 font-black uppercase text-white shadow-lg lg:block"
				>
					POC
				</div>
			</div>
		</div>
	</section>

	<section id="concept" class="border-t border-black/10 bg-white px-6 py-24">
		<div class="mx-auto max-w-6xl">
			<p
				class="border-l-4 border-[#d6001c] pl-4 text-sm font-black uppercase tracking-[0.25em] text-black/50"
			>
				Concept
			</p>

			<h2 class="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight md:text-5xl">
				Du pneu réceptionné au pneu réutilisé, chaque étape est historisée.
			</h2>

			<div class="mt-12 grid gap-5 md:grid-cols-4">
				<div class="border border-black/10 bg-[#f4f4f4] p-6">
					<p class="text-xl font-black uppercase">Scanner</p>
					<p class="mt-3 leading-7 text-black/60">
						À la réception, le code-barres du pneu ou du train est lu grâce à la caméra du
						boîtier.
					</p>
				</div>

				<div class="border border-black/10 bg-[#f4f4f4] p-6">
					<p class="text-xl font-black uppercase">Contrôler</p>
					<p class="mt-3 leading-7 text-black/60">
						Le laser permet d’évaluer ou documenter l’état du pneu lors du scan.
					</p>
				</div>

				<div class="border border-black/10 bg-[#f4f4f4] p-6">
					<p class="text-xl font-black uppercase">Positionner</p>
					<p class="mt-3 leading-7 text-black/60">
						Chaque pneu est associé à une position : avant gauche, avant droit, arrière gauche
						ou arrière droit.
					</p>
				</div>

				<div class="border border-black/10 bg-[#f4f4f4] p-6">
					<p class="text-xl font-black uppercase">Analyser</p>
					<p class="mt-3 leading-7 text-black/60">
						L’évolution d’usure est historisée avec graphiques, statuts et recommandations
						d’équipe.
					</p>
				</div>
			</div>

			<div class="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
				<div class="border border-black/10 bg-[#111] p-6 text-white">
					<p class="text-sm font-black uppercase tracking-[0.25em] text-white/40">
						Workflow
					</p>

					<div class="mt-6 space-y-4">
						<div class="flex gap-4">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center bg-[#d6001c] font-black">
								1
							</div>
							<div>
								<p class="font-black uppercase">Réception</p>
								<p class="mt-1 text-sm leading-6 text-white/55">
									Le train est scanné avant toute pose sur le véhicule.
								</p>
							</div>
						</div>

						<div class="flex gap-4">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center bg-[#d6001c] font-black">
								2
							</div>
							<div>
								<p class="font-black uppercase">Pose véhicule</p>
								<p class="mt-1 text-sm leading-6 text-white/55">
									Chaque pneu est associé à une position : AVG, AVD, ARG ou ARD.
								</p>
							</div>
						</div>

						<div class="flex gap-4">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center bg-[#d6001c] font-black">
								3
							</div>
							<div>
								<p class="font-black uppercase">Scan après session</p>
								<p class="mt-1 text-sm leading-6 text-white/55">
									L’état est mesuré ou documenté après roulage, puis ajouté à l’historique.
								</p>
							</div>
						</div>

						<div class="flex gap-4">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center bg-[#d6001c] font-black">
								4
							</div>
							<div>
								<p class="font-black uppercase">Décision</p>
								<p class="mt-1 text-sm leading-6 text-white/55">
									L’équipe sait si le train est OK, à surveiller, à réserver aux essais ou à remplacer.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="border border-black/10 bg-[#f4f4f4] p-6">
                    <div class="flex items-end justify-between gap-4">
                        <div>
                            <p class="text-sm font-black uppercase tracking-[0.25em] text-black/40">
                                Évolution
                            </p>
                            <p class="mt-2 text-2xl font-black uppercase">SET-S03 · usure par scan</p>
                        </div>

                        <span class="bg-orange-100 px-3 py-2 text-xs font-black uppercase text-orange-700">
                            À surveiller
                        </span>
                    </div>

                    <div class="mt-8 border border-black/10 bg-white p-5">
                        <div class="mb-4 flex items-center justify-between text-xs font-black uppercase text-black/40">
                            <span>Niveau d’usure estimé</span>
                            <span>0% → 100%</span>
                        </div>

                        <div class="space-y-4">
                            <div class="grid grid-cols-[90px_1fr_44px] items-center gap-4">
                                <p class="text-sm font-black text-black/55">Réception</p>
                                <div class="h-5 bg-black/10">
                                    <div class="h-5 bg-green-500" style="width: 12%;"></div>
                                </div>
                                <p class="text-right text-sm font-black">12%</p>
                            </div>

                            <div class="grid grid-cols-[90px_1fr_44px] items-center gap-4">
                                <p class="text-sm font-black text-black/55">Essais</p>
                                <div class="h-5 bg-black/10">
                                    <div class="h-5 bg-green-500" style="width: 38%;"></div>
                                </div>
                                <p class="text-right text-sm font-black">38%</p>
                            </div>

                            <div class="grid grid-cols-[90px_1fr_44px] items-center gap-4">
                                <p class="text-sm font-black text-black/55">Qualif</p>
                                <div class="h-5 bg-black/10">
                                    <div class="h-5 bg-orange-400" style="width: 57%;"></div>
                                </div>
                                <p class="text-right text-sm font-black">57%</p>
                            </div>

                            <div class="grid grid-cols-[90px_1fr_44px] items-center gap-4">
                                <p class="text-sm font-black text-black/55">Course</p>
                                <div class="h-5 bg-black/10">
                                    <div class="h-5 bg-[#d6001c]" style="width: 74%;"></div>
                                </div>
                                <p class="text-right text-sm font-black">74%</p>
                            </div>
                        </div>
                    </div>

                    <p class="mt-5 text-sm leading-7 text-black/60">
                        Chaque scan enrichit l’historique du train : contexte, position sur la voiture,
                        niveau d’usure, état visuel et recommandation. L’objectif est de rendre la décision
                        de réutilisation plus fiable et traçable.
                    </p>
                </div>
			</div>
		</div>
	</section>
</main>