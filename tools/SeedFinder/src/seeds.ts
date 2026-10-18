// Seed -> first Secretariat proposals, as the game deals them.
//
// Found in-game (game 0.13.3; Endless Babel uses the standard pack,
// Tenabolt Prometheus the company_datacenter pack -- both deal this way):
//   1. GameWorld.rng_seed = String.hash() of the typed seed text
//      (djb2 over UTF-8, 32-bit, case-sensitive).
//   2. Godot's global RandomPCG (PCG32) is seeded with it.
//   3. The proposals eligible on day 0, in pack order, are shuffled once with
//      Array.shuffle(), and the first `proposals_per_batch` (3) are offered.
//      Proposal weights play no part in this first batch.
// Confirmed: standard KWZ95, TOWER1, kwz95; company_datacenter KWZ95.

import { TniJsonData } from "raw/data-format11-spec";

export const STANDARD_PACK = "proposals/packs/standard.tscn";
export const BATCH = 3;

export interface ProposalEntry {
	locked: boolean;
	depends_on: string;
	can_be_proposed_beginning: number;
	unlock_description?: string;
	name: string;
}

/** Godot's String.hash(): djb2 over the UTF-8 bytes, 32-bit. */
export function seedHash(text: string): number {
	let h = 5381;
	for (const b of new TextEncoder().encode(text)) h = (((h << 5) + h) + b) >>> 0;
	return h;
}

const M64 = (1n << 64n) - 1n;
const MUL = 6364136223846793005n;
const INC = ((1442695040888963407n << 1n) | 1n) & M64;   // PCG_DEFAULT_INC_64

/** Godot's RandomPCG seeded with `seed`; returns rand() (uint32). */
export function pcg32(seed: number): () => number {
	let state = 0n;
	const next = () => {
		const old = state;
		state = (old * MUL + INC) & M64;
		const xs = Number((((old >> 18n) ^ old) >> 27n) & 0xffffffffn);
		const rot = Number(old >> 59n);
		return ((xs >>> rot) | (xs << ((32 - rot) & 31))) >>> 0;
	};
	next();
	state = (state + BigInt(seed)) & M64;
	next();
	return next;
}

/** A pack's proposals, whichever spelling the data file uses. */
export function proposalPack(data: TniJsonData, packId: string = STANDARD_PACK): Record<string, ProposalEntry> {
	// Due to a typo, we also check for `porposal_packs`
	// @ts-ignore: Property 'porposal_packs' does not exist on type 'TniJsonData'
	const packs = data.proposal_packs ?? data.porposal_packs;
	const pack = packs?.[packId];
	if (!pack) throw new Error(`no ${packId} in this data file`);
	return pack;
}

/**
 * Ids eligible on day 0 of a new world, in pack order. A "Requires ..."
 * unlock condition is a deployment requirement (routers, servers, storage)
 * that a fresh world can never meet.
 */
export function day0Pool(data: TniJsonData, packId: string = STANDARD_PACK): string[] {
	return Object.entries(proposalPack(data, packId))
		.filter(([, p]) => !p.locked && !p.depends_on && p.can_be_proposed_beginning === 0
			&& !/^Requires\b/.test(p.unlock_description ?? ""))
		.map(([id]) => id);
}

/** The first batch a seed deals, as proposal ids, in the game's order. */
export function firstBatch(pool: string[], seedText: string, take = BATCH): string[] {
	const rand = pcg32(seedHash(seedText));
	const a = [...pool];
	for (let i = a.length - 1; i >= 1; i--) {
		const j = rand() % (i + 1);
		[a[i], a[j]] = [a[j]!, a[i]!];
	}
	return a.slice(0, take);
}

/** True when every wanted id is in the seed's first batch. */
export function deals(pool: string[], seedText: string, wanted: string[]): boolean {
	const hand = firstBatch(pool, seedText);
	return wanted.every((w) => hand.includes(w));
}

export function randomSeedText(length: number, alphabet: string): string {
	let s = "";
	for (let i = 0; i < length; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)];
	return s;
}
