import { TniJsonBalanceCalc, TniJsonData, TniJsonDataEnums, TniJsonDevice, TniJsonDeviceId, TniJsonId, TniJsonMerchant, TniJsonMerchantId, TniJsonMerchantListing, TniJsonPlug, TniJsonPlugId, TniJsonProgram, TniJsonProgramId, TniJsonProposalPack, TniJsonProposalPackId, TniJsonThemeConfig, TniJsonThemeConfigId, TniJsonUseConfig, TniJsonUseConfigId, TniJsonUser, TniJsonUserId, TniSocketType } from "raw/data-format6-spec";

type integer = number;


export class DataCached implements TniJsonData {
	readonly data: TniJsonData;

	
	//#region TniJsonData
	game_version!: string;
	/** The revision count of this data for this particular game version. */
	revision!: integer;
	/** The format version of the data. \
	 * The following fields will never change name or type; `game_version`, `revision` and `format`
	 * @see SPEC_FORMAT_VERSION */
	format!: integer;

	enums!: TniJsonDataEnums;
	BalanceCalc!: TniJsonBalanceCalc;

	programs!: Record<TniJsonProgramId, TniJsonProgram>;
	users!: Record<TniJsonUserId, TniJsonUser>;
	devices!: Record<TniJsonDeviceId, TniJsonDevice>;
	proposal_packs!: Record<TniJsonProposalPackId, TniJsonProposalPack>;
	merchants!: Record<TniJsonMerchantId, TniJsonMerchant>;
	plugs!: Record<TniJsonPlugId, TniJsonPlug>;
	use_configs!: Record<TniJsonUseConfigId, TniJsonUseConfig>;
	theme_configs!: Record<TniJsonThemeConfigId, TniJsonThemeConfig>;
	//#endregion

	constructor(data: TniJsonData) {
		this.data = data;

		Object.assign(this, data);
	}

	private __plugs_by_type: Record<TniSocketType, TniJsonPlugId[]>|null = null;
	public get plugs_by_type() {
		if (!this.__plugs_by_type) {
			this.__plugs_by_type = {} as Record<TniSocketType, TniJsonPlugId[]>;
			for (const socket_type of Object.values(TniSocketType)) {
				this.__plugs_by_type[socket_type] = [];
			}
			for (const plug_id in this.data.plugs) {
				const plug: TniJsonPlug = this.data.plugs[plug_id]!;
				for (const socket_type of plug.compatibles) {
					if (!(socket_type in this.__plugs_by_type))
						this.__plugs_by_type[socket_type] = [];
					this.__plugs_by_type[socket_type].push(plug_id);
				}
			}
		}
		return this.__plugs_by_type!;
	}

	private __device_listings: Record<TniJsonId, { merchant: TniJsonMerchant, listing: TniJsonMerchantListing }[]>|null = null;
	public get device_listings() {
		if (!this.__device_listings) {
			this.__device_listings = {};
			for (const merchant_id in this.data.merchants) {
				const merchant = this.data.merchants[merchant_id]!;
				for (const listing of merchant.listings) {
					if (!(listing.device_scn in this.__device_listings))
						this.__device_listings[listing.device_scn] = [];
					this.__device_listings[listing.device_scn]!.push({
						merchant: merchant,
						listing: listing,
					});
				}
			}
		}
		return this.__device_listings!;
	}

	public isAvailableToday(id: TniJsonId, day: integer): boolean|null {
		const listings = this.device_listings[id];
		if (!listings)
			return null;

		for (const listing of listings) {
			if (day >= listing.listing.listed_on_day && day < listing.listing.delisted_on_day)
				return true;
		}
		return false;
	}

	/** Get's the price of the currently available listing with the highest warranty. */
	public getIdealListingToday(id: TniJsonId, day: integer): { merchant: TniJsonMerchant, listing: TniJsonMerchantListing }|null {
		const listings = this.device_listings[id];
		if (!listings)
			return null;

		let ideal_listing: { merchant: TniJsonMerchant, listing: TniJsonMerchantListing }|null = null;
		for (const listing of listings) {
			if (day >= listing.listing.listed_on_day && day < listing.listing.delisted_on_day) {
				if (
					!ideal_listing ||
					listing.listing.AdditionalData.warranty_period > ideal_listing.listing.AdditionalData.warranty_period ||
					(listing.listing.AdditionalData.warranty_period == ideal_listing.listing.AdditionalData.warranty_period && listing.listing.AdditionalData.price < ideal_listing.listing.AdditionalData.price)
				) {
					ideal_listing = listing;
				}
			}
		}
		return ideal_listing;
	}
	
}
