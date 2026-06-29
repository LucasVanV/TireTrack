export const tireSets = [
	{
		id: 'SET-S01',
		type: 'Slick medium',
		status: 'OK',
		car: 'Non assigné',
		stage: 'Réception',
		lastScan: 'Avant pose',
		laps: 0,
		scans: 1,
		globalWear: 12,
		color: 'green',
		positions: [
			{ label: 'AVG', name: 'Avant gauche', wear: 10, state: 'Neuf' },
			{ label: 'AVD', name: 'Avant droit', wear: 12, state: 'Neuf' },
			{ label: 'ARG', name: 'Arrière gauche', wear: 13, state: 'Neuf' },
			{ label: 'ARD', name: 'Arrière droit', wear: 11, state: 'Neuf' }
		],
		history: [{ label: 'Réception', wear: 12, scanType: 'Avant pose' }]
	},
	{
		id: 'SET-S02',
		type: 'Slick medium',
		status: 'OK',
		car: 'Civic Cup #21',
		stage: 'Essais libres',
		lastScan: 'Après session',
		laps: 18,
		scans: 3,
		globalWear: 38,
		color: 'green',
		positions: [
			{ label: 'AVG', name: 'Avant gauche', wear: 34, state: 'Correct' },
			{ label: 'AVD', name: 'Avant droit', wear: 36, state: 'Correct' },
			{ label: 'ARG', name: 'Arrière gauche', wear: 41, state: 'Correct' },
			{ label: 'ARD', name: 'Arrière droit', wear: 39, state: 'Correct' }
		],
		history: [
			{ label: 'Réception', wear: 11, scanType: 'Avant pose' },
			{ label: 'Essais 1', wear: 24, scanType: 'Après session' },
			{ label: 'Essais 2', wear: 38, scanType: 'Après session' }
		]
	},
	{
		id: 'SET-S03',
		type: 'Slick hard',
		status: 'À surveiller',
		car: '208 Racing Cup #24',
		stage: 'Qualification',
		lastScan: 'Avant repose',
		laps: 42,
		scans: 5,
		globalWear: 67,
		color: 'orange',
		positions: [
			{ label: 'AVG', name: 'Avant gauche', wear: 62, state: 'Usure int.' },
			{ label: 'AVD', name: 'Avant droit', wear: 68, state: 'Graining' },
			{ label: 'ARG', name: 'Arrière gauche', wear: 74, state: 'À surveiller' },
			{ label: 'ARD', name: 'Arrière droit', wear: 59, state: 'Correct' }
		],
		history: [
			{ label: 'Réception', wear: 12, scanType: 'Avant pose' },
			{ label: 'Essais', wear: 38, scanType: 'Après session' },
			{ label: 'Qualif', wear: 57, scanType: 'Après session' },
			{ label: 'Avant repose', wear: 67, scanType: 'Avant pose' }
		]
	},
	{
		id: 'SET-S04',
		type: 'Slick soft',
		status: 'Remplacer',
		car: 'Clio Cup #12',
		stage: 'Course',
		lastScan: 'Après dépose',
		laps: 66,
		scans: 6,
		globalWear: 86,
		color: 'red',
		positions: [
			{ label: 'AVG', name: 'Avant gauche', wear: 82, state: 'Limite' },
			{ label: 'AVD', name: 'Avant droit', wear: 88, state: 'Flat spot' },
			{ label: 'ARG', name: 'Arrière gauche', wear: 87, state: 'Limite' },
			{ label: 'ARD', name: 'Arrière droit', wear: 86, state: 'Limite' }
		],
		history: [
			{ label: 'Réception', wear: 14, scanType: 'Avant pose' },
			{ label: 'Essais', wear: 36, scanType: 'Après session' },
			{ label: 'Qualif', wear: 61, scanType: 'Après session' },
			{ label: 'Course', wear: 86, scanType: 'Après dépose' }
		]
	}
];

export const recentScans = [
	{
		id: 'SCAN-104',
		setId: 'SET-S03',
		type: 'Avant repose',
		method: 'Code-barres + laser',
		state: 'À surveiller',
		wear: 67,
		message: 'Arrière gauche marqué, éviter un relais long.',
		color: 'orange'
	},
	{
		id: 'SCAN-103',
		setId: 'SET-S04',
		type: 'Après dépose',
		method: 'Laser',
		state: 'Remplacer',
		wear: 86,
		message: 'Flat spot avant droit détecté.',
		color: 'red'
	},
	{
		id: 'SCAN-102',
		setId: 'SET-S02',
		type: 'Après session',
		method: 'Code-barres + laser',
		state: 'OK',
		wear: 38,
		message: 'Usure homogène après essais libres.',
		color: 'green'
	},
	{
		id: 'SCAN-101',
		setId: 'SET-S01',
		type: 'Réception',
		method: 'Code-barres caméra',
		state: 'OK',
		wear: 12,
		message: 'Train reçu, identifié et stocké.',
		color: 'green'
	}
];

export function wearColor(color) {
	if (color === 'green') return 'bg-green-500';
	if (color === 'red') return 'bg-[#d6001c]';
	return 'bg-orange-400';
}

export function badgeClass(color) {
	if (color === 'green') return 'bg-green-100 text-green-700';
	if (color === 'red') return 'bg-red-100 text-red-700';
	return 'bg-orange-100 text-orange-700';
}
