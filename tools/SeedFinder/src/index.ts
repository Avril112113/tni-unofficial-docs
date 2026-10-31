import { TniJsonProposalPackId } from "raw/data-format11-spec";
import { day0Pool, deals, firstBatch, randomSeedText, seedHash, proposalPack, ProposalEntry } from "./seeds";

// interface VersionEntry { id: string; data: string; scenario: string; pack: string; known: KnownSeed[] }

interface SFKnownSeed { seed: string; first: string[] }
interface SFScenario { name: string, pack: TniJsonProposalPackId, from_version: string }
interface SFVerification { game_versions: string[], revision: number, pack: TniJsonProposalPackId, known: SFKnownSeed[] }
interface SFConfig { scenarios: SFScenario[], verifications: SFVerification[]  }

const MAX_PICKS = 3;
const WANT_RESULTS = 12;
const MAX_TRIES = 3_000_000;

const root = document.getElementById("seedfinder")!;
const base = window.SiteConfig!.baseUrl;
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

let pool: string[] = [];
let pack: Record<string, ProposalEntry> = {};
const picked: string[] = [];
let searchId = 0;

const label = (id: string) => pack[id]?.name ?? id;

// async function loadVersions(): Promise<VersionEntry[]> {
// 	const res = await fetch(`${base}/tools/SeedFinder/versions.json`);
// 	return (await res.json()).versions as VersionEntry[];
// }

function getVersionDataUrls(): string[] {
	const versionPaths = [];
	for (const node of $("sf-versions").children) {
		versionPaths.push(node.textContent);
	}
	return versionPaths;
}

async function loadConfig(): Promise<SFConfig> {
	// window.SiteConfig!.
	const res = await fetch(`${base}/tools/SeedFinder/config.json`);
	return await res.json() as SFConfig;
}

async function selectVersion(dataId: string, versionDataUrl: string, scenario: SFScenario, knownSeeds: SFKnownSeed[]) {
	const displayedName = `${dataId} (${scenario.name})`;
	$("sf-status").textContent = `Loading ${displayedName}...`;
	const data = await (await fetch(versionDataUrl)).json();
	pack = proposalPack(data, scenario.pack);
	pool = day0Pool(data, scenario.pack);
	picked.length = 0;
	searchId++;
	renderPicks();
	$("sf-results").replaceChildren();
	$("sf-status").textContent = "";

	// Self-check: re-deal every seed checked in game.
	const failed = knownSeeds.filter((k) => {
		const hand = firstBatch(pool, k.seed);
		return !(hand.length === k.first.length && k.first.every((id) => hand.includes(id)));
	});
	const badge = $("sf-verified");
	if (knownSeeds.length === 0) {
		badge.textContent = `Unverified: no seeds have been checked in game for ${displayedName}.`;
		badge.dataset.state = "unverified";
	} else if (failed.length === 0) {
		badge.textContent = `Verified: ${knownSeeds.map((k) => k.seed).join(", ")} deal as they do in game (${scenario.name}).`;
		badge.dataset.state = "ok";
	} else {
		badge.textContent = `Mismatch: ${failed.map((k) => k.seed).join(", ")} no longer deal as recorded. The game may pick proposals differently in ${displayedName}; don't trust these results.`;
		badge.dataset.state = "bad";
	}
	check();
}

function renderPicks() {
	const list = $("sf-pool");
	list.replaceChildren();
	for (const id of pool) {
		const b = document.createElement("button");
		b.type = "button";
		b.className = "sf-pick";
		const on = picked.includes(id);
		b.setAttribute("aria-pressed", String(on));
		b.disabled = !on && picked.length >= MAX_PICKS;
		b.textContent = label(id);
		b.title = id;
		b.addEventListener("click", () => {
			const i = picked.indexOf(id);
			if (i >= 0) picked.splice(i, 1);
			else if (picked.length < MAX_PICKS) picked.push(id);
			renderPicks();
		});
		list.appendChild(b);
	}
	$("sf-count").textContent = `${picked.length} of ${MAX_PICKS} picked`;
	($("sf-find") as HTMLButtonElement).disabled = picked.length === 0;
}

function resultRow(seed: string): HTMLTableRowElement {
	const tr = document.createElement("tr");
	const cells = [seed, String(seedHash(seed)), firstBatch(pool, seed).map(label).join(" · ")];
	for (const [i, text] of cells.entries()) {
		const td = document.createElement("td");
		td.textContent = text;
		if (i === 0) td.className = "sf-seed";
		tr.appendChild(td);
	}
	const td = document.createElement("td");
	const copy = document.createElement("button");
	copy.type = "button";
	copy.textContent = "Copy";
	copy.addEventListener("click", () => {
		navigator.clipboard?.writeText(seed).then(
			() => { copy.textContent = "Copied"; setTimeout(() => (copy.textContent = "Copy"), 1200); },
			() => {},
		);
	});
	td.appendChild(copy);
	tr.appendChild(td);
	return tr;
}

function find() {
	if (picked.length === 0) return;
	const id = ++searchId;
	const length = Number(($("sf-length") as HTMLSelectElement).value);
	const alphabet = ($("sf-chars") as HTMLSelectElement).value;
	const wanted = [...picked];
	const body = $("sf-results");
	body.replaceChildren();
	const seen = new Set<string>();
	let tried = 0;
	const step = () => {
		if (id !== searchId) return;
		const until = performance.now() + 30;
		while (performance.now() < until && seen.size < WANT_RESULTS && tried < MAX_TRIES) {
			const s = randomSeedText(length, alphabet);
			tried++;
			if (!seen.has(s) && deals(pool, s, wanted)) {
				seen.add(s);
				body.appendChild(resultRow(s));
			}
		}
		$("sf-status").textContent = `${seen.size} seed(s) found, ${tried.toLocaleString()} tried.`;
		if (seen.size < WANT_RESULTS && tried < MAX_TRIES) requestAnimationFrame(step);
		else if (seen.size === 0) $("sf-status").textContent = "No match. Allow more characters or a longer seed.";
	};
	step();
}

function check() {
	const s = ($("sf-seed") as HTMLInputElement).value;   // exactly as typed: case-sensitive
	const out = $("sf-check-out");
	if (!s.trim() || pool.length === 0) { out.textContent = ""; return; }
	out.textContent = `${JSON.stringify(s)} (rng_seed ${seedHash(s)}) opens with: ${firstBatch(pool, s).map(label).join(", ")}`;
}

async function main() {
	// `versionUrls` is sorted from newest to oldest.
	const versionUrls = getVersionDataUrls();
	const config = await loadConfig();

	const versionScenarioKnownSeeds: Record<string, SFKnownSeed[]> = {};

	const sel = $("sf-version") as HTMLSelectElement;
	// One entry per version and scenario: the option value is the entry's index.
	const addedVersions = [];  // Prevent redundant entires with older revisions of data.
	for (let versionIndex = 0; versionIndex < versionUrls.length; versionIndex++) {
		const versionDataUrl = versionUrls[versionIndex]!;
		
		const [, game_version, revision] = /(\d+\.\d+\.\d+)\-(\d+)\.min\.json$/.exec(versionDataUrl)!;
		if (!game_version || addedVersions.indexOf(game_version) >= 0)
			continue;

		for (let scenarioIndex = 0; scenarioIndex < config.scenarios.length; scenarioIndex++) {
			const scenario = config.scenarios[scenarioIndex]!;
			if (addedVersions.indexOf(scenario.from_version) >= 0)
				continue;

			sel.add(new Option(`${game_version} : ${scenario.name}`, `${versionIndex}:${scenarioIndex}`))

			const knownSeeds: SFKnownSeed[] = [];
			for (const verification of config.verifications) {
				if (verification.game_versions.includes(game_version) && verification.pack == scenario.pack) {
					for (const knownSeed of verification.known) {
						knownSeeds.push(knownSeed);
					}
				}
			}
			versionScenarioKnownSeeds[`${game_version}-${revision}:${scenario.pack}`] = knownSeeds;
		}

		addedVersions.push(game_version);
	}

	sel.addEventListener("change", () => {
		const [versionIndexStr, scenarioIndexStr] = sel.value.split(":");
		const versionDataUrl = versionUrls[Number(versionIndexStr)]!;
		const scenario = config.scenarios[Number(scenarioIndexStr)]!;

		const [, game_version, revision] = /(\d+\.\d+\.\d+)\-(\d+)\.min\.json$/.exec(versionDataUrl)!;
		
		const knownSeeds: SFKnownSeed[] = versionScenarioKnownSeeds[`${game_version}-${revision}:${scenario.pack}`]!;
		// TODO: If there is no known seeds for our current version, we should try find the last version that is valid.
		//       Then report that instead.
		
		selectVersion(`${game_version}-${revision}`, versionDataUrl, scenario, knownSeeds);
	});
	$("sf-find").addEventListener("click", find);
	$("sf-check").addEventListener("click", check);
	$("sf-seed").addEventListener("keydown", (e) => { if ((e as KeyboardEvent).key === "Enter") check(); });
	if (sel.options.length > 0) {
		sel.value = sel.options[0]!.value;
		sel.dispatchEvent(new Event("change"));
	}
	root.classList.add("sf-ready");
}

main().catch((e) => { $("sf-status").textContent = `Could not load: ${e}`; });
