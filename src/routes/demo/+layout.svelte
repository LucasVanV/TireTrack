<script lang="ts">
	import { page } from '$app/state';

	let { children } = $props();

	const navItems = [
		{ label: 'Dashboard', href: '/demo' },
		{ label: 'Trains', href: '/demo/trains' },
		{ label: 'Données', href: '/demo/donnees' }
	];

	function isActive(href: string) {
		if (href === '/demo') return page.url.pathname === '/demo';
		return page.url.pathname.startsWith(href);
	}
</script>

<main class="min-h-screen bg-[#f4f4f4] text-[#111]">
	<header class="sticky top-0 z-30 border-b border-black/10 bg-white">
		<div class="mx-auto flex max-w-7xl items-center gap-5 px-6 py-4">
			<a href="/" class="flex h-10 shrink-0 items-center bg-[#d6001c] px-5 font-black text-white">
				TireTrack
			</a>

			<div class="hidden shrink-0 border-l border-black/10 pl-5 md:block">
				<p class="text-[10px] font-black uppercase tracking-[0.22em] text-black/40">Écurie</p>
				<p class="font-black uppercase leading-none">Iridium Racing</p>
			</div>

			<nav class="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto">
				{#each navItems as item}
					<a
						href={item.href}
						class="shrink-0 px-5 py-2 text-sm font-black uppercase tracking-wide transition
							{isActive(item.href)
								? 'bg-[#111] text-white'
								: 'text-black/50 hover:bg-black/5 hover:text-black'}"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="flex shrink-0 items-center gap-3">
				<div class="hidden text-right xl:block">
					<p class="text-sm font-black">Lucas V.</p>
					<p class="text-xs font-semibold text-black/45">Ingénieur data pneus</p>
				</div>
			</div>
		</div>
	</header>

	{@render children()}
</main>