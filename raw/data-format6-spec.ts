export type TniJsonId = string;
export type TniJsonProgramId = TniJsonId;
export type TniJsonUserId = TniJsonId;
export type TniJsonDeviceId = TniJsonId;
export type TniJsonProposalPackId = TniJsonId;
export type TniJsonMerchantId = TniJsonId;
export type TniJsonPlugId = TniJsonId;
export type TniJsonUseConfigId = TniJsonId;
export type TniJsonThemeConfigId = TniJsonId;
export type TniJsonProposalName = string;

type integer = number;

export const SPEC_FORMAT_VERSION = 6;


export interface TniJsonData {
	game_version: string,
	/** The revision count of this data for this particular game version. */
	revision: integer,
	/** The format version of the data. \
	 * The following fields will never change name or type; `game_version`, `revision` and `format`
	 * @see SPEC_FORMAT_VERSION */
	format: integer,

	enums: TniJsonDataEnums,
	BalanceCalc: TniJsonBalanceCalc,

	programs: Record<TniJsonProgramId, TniJsonProgram>,
	users: Record<TniJsonUserId, TniJsonUser>,
	devices: Record<TniJsonDeviceId, TniJsonDevice>,
	proposal_packs: Record<TniJsonProposalPackId, TniJsonProposalPack>,
	merchants: Record<TniJsonMerchantId, TniJsonMerchant>,
	plugs: Record<TniJsonPlugId, TniJsonPlug>,
	use_configs: Record<TniJsonUseConfigId, TniJsonUseConfig>,
	theme_configs: Record<TniJsonThemeConfigId, TniJsonThemeConfig>,
}

// Actual enum definitions are at the bottom of this file.
export interface TniJsonDataEnums {
	"Program.ControllerModifiers": string[],
	"DeviceUnit.DeviceHardwareClass": string[],
	"TraversalConsume.ProductTarget": string[],
	"TraversalConsume.ConversionPolicy": string[],
	"TraversalConsume.ConsumptionPolicy": string[],
	"AlwaysProduce.ProduceLimitType": string[],
	"UserTraversal.ProductTarget": string[],
	"UserTraversal.ConversionPolicy": string[],
	"UserTraversal.ConsumptionPolicy": string[],
	"UserTraversal.HostSelMethod": string[],
	"UserTraversalP2P.P2PMethod": string[],
	"LogicControllerUser.PaymentCalculationMethod": string[],
	"DeviceUnit.ExtraDescriptionType": string[],
	"Socket.Type": string[],
	"Plug.CableMakeType": string[],
}

export interface TniJsonBalanceCalc {
	GLOBAL_USER_DAILY_RATE_MULTIPLIER: number,
	GLOBAL_WARRANTY_PERIOD_DAYS_PER_CYCLE: integer,
	GLOBAL_HWGENERATION_DAYS_PER_CYCLE: integer,
	GLOBAL_SLOTPACK_MIN: integer,
	GLOBAL_TRAVERSAL_PROGRAM_BW_MULTIPLIER: number,
	GLOBAL_DEVICE_BW_MULTIPLIER: number,
	GLOBAL_TOWERLINK_BW_MULTIPLIER: number,
	GLOBAL_DEVICE_POWERLOAD_MULTIPLIER: number,
}

export interface TniJsonProgram {
	cpu_load: integer,
	code_size: integer,
	stack_size: integer,
	data_size: integer,
	release_name: string,
	description: string,
	rendered_description: string,
	modifiers: TniProgramControllerModifiers[],
	application_unlocks: TniJsonId[],  // Should only be TniJsonProgramId
	required_hardware_device: TniDeviceHardwareClass[],
	unlocked_by: TniJsonId[],
	TraversalBase?: TniJsonProgramTraversalBase,
	TraversalConsume?: TniJsonProgramTraversalConsume,
	AlwaysProduce?: TniJsonProgramAlwaysProduce,
	WormBase?: TniJsonProgramWormBase,
	UserHosting?: TniJsonProgramUserHosting,
	SurveyScaledUserHosting?: TniJsonProgramSurveyScaledUserHosting,
	VisitorScaledUserHosting?: TniJsonProgramVisitorScaledUserHosting,
	UserTraversal?: TniJsonProgramUserTraversal,
	UserTraversalFQDN?: TniJsonProgramUserTraversalFQDN,
	UserTraversalP2P?: TniJsonProgramUserTraversalP2P,
	UserTraversalHostingBackend?: TniJsonProgramUserTraversalHostingBackend,
	UseStorage?: TniJsonProgramUseStorage,
}
export interface TniJsonProgramTraversalBase {
	traffic_class: string,
	traffic_weight: integer,
}
/** Program will always have TraversalBase if it has this. */
export interface TniJsonProgramTraversalConsume {
	produce_use_config: TniJsonUseConfigId,
	produce_target: TniTraversalProductTarget,
	produce_factor: integer,
	conversion_policy: TniTraversalConversionPolicy,
	produce_limit_type: TniProduceLimitType,
	limit_factor: integer,
	consumption_policy: TniTraversalConsumptionPolicy,
	consume_use_config: TniJsonUseConfigId,
	consume_factor: integer,
	allow_localhost_consumption: boolean,
	allow_user_consumption: boolean,
	additional_descriptions: string[],
}
export interface TniJsonProgramAlwaysProduce {
	produce_use_config: TniJsonUseConfigId,
	produce_factor: integer,
	produce_limit_type: TniProduceLimitType,
	limit_factor: integer,
	additional_descriptions: string[],
}
export interface TniJsonProgramWormBase {
	release_name_template: string,
	max_spread_per_tick: integer,
	signature: string,
	vulnerable_device_types: TniDeviceHardwareClass[],
	incubation_cycles: integer,
	force_hint_hide: boolean,
}
export interface TniJsonProgramUserHosting {
	satiety_weight: integer,
	advertised_use_config: TniJsonUseConfigId,
	theme_config: TniJsonThemeConfigId,
	desired_visitors_per_tick: integer,
	self_produce: boolean,
	tld_choice: string[],
	extra_visitor_limit: integer,
}
export interface TniJsonProgramSurveyScaledUserHosting {
	min_visitors: integer,
	max_visitors: integer,
	desired_ratio: number,
}
export interface TniJsonProgramVisitorScaledUserHosting {
	min_visitors: integer,
	max_visitors: integer,
	growth_per_tick: integer,
	shrink_per_tick: integer,
	greed_factor: integer,
	min_visitor_scale_factor: number,
}
export interface TniJsonProgramUserTraversal {
	satiety_weight: integer,
	producer_satiety_change_on_consume: integer,
	consumer_satiety_change_on_consume: integer,
	hidden_from_surveys: boolean,
	will_select_player_providers: boolean,
	max_acceptable_ppu: number,
	surveyor_dialog_target: TniTraversalProductTarget,
	add_dialog_text_on_success: boolean,
	dialog_text: string,
	surveyor_dialog_ptype: string,
	theme_affinity: TniJsonThemeConfigId,
}
export interface TniJsonProgramUserTraversalFQDN {
	manifest_probability: number,
	never_manifest_without_any_provider: boolean,
	host_selection_algorithm: TniUserHostSelMethod,
}
export interface TniJsonProgramUserTraversalP2P {
	p2p_method: TniUserP2PMethod,
	facility_selection_algorithm: TniUserHostSelMethod,
}
export interface TniJsonProgramUserTraversalHostingBackend {
	user_hosting_frontend: "???",
	warning_checks_uses_or_condition: boolean,
}
export interface TniJsonProgramUseStorage {
	stored_use_config: TniJsonUseConfigId,
	storage_factor: integer,
}

export interface TniJsonUser {
	description: string,
	user_profile_name: string,
	base_use_period: number,
	use_period_variance: number,
	downtime_sla_seconds: integer,
	init_grace_days: integer,
	daily_rate: integer,
	eagerness_factor: integer,
	max_satiety_decay_ratio: number,
	satiety_sla_ratio: number,
	active_time_float: number,
	inactive_time_float: number,
	fulfilment_penalty_factor: number,
	user_application_unlocks: TniJsonId[],  // Should only be TniJsonProgramId
	consumption_payment_scaling: number,
	allow_hwreset: boolean,
	ot_probability: number,
	payment_calculation_method: TniUserPaymentCalculationMethod,
	behaviours: TniJsonProgramId[],
}

export interface TniJsonDevice {
	product_name: string,
	description: string,
	device_rendered_description: string,
	text: string,
	extra_descriptions: TniDeviceExtraDescriptionType,
	price: integer,
	base_warranty_days: integer,
	base_warranty_cycles: integer,
	recycle_price_factor: number,
	recycle_price: integer,
	force_auto_config_powctl_based_on_logctl: boolean,
	force_auto_config_nbw_based_on_ports: boolean,
	force_auto_config_logctl_powerload: boolean,
	defect_possibility: boolean,
	auto_config_bw_multiplier: number,
	auto_config_pload_multiplier: number,
	device_application_unlocks: TniJsonId[],  // Should only be TniJsonProgramId
	device_hardware_class: TniDeviceHardwareClass,
	mount_type: TniDeviceMountType,
	logic_controller?: TniJsonDeviceLogicController,
	power_controller?: TniJsonDevicePowerController,
}
export interface TniJsonDeviceLogicController {
	default_tick_period: integer,
	auto_cycle_enabled: boolean,
	installed_cpu: integer,
	installed_mem: integer,
	installed_sto: integer,
	installed_nbw: integer,
	power_load: integer,
	infinite_power_mode: boolean,
	force_autoconfig: boolean,
	skip_autoconfig_cpu: boolean,
	allow_storage_mods: boolean,
	allow_process_mods: boolean,
	auto_config_additional_cpu: integer,
	auto_config_additional_sto: integer,
	auto_config_additional_mem: integer,
	installed_programs: TniJsonProgramId[],
	ports: TniJsonDeviceSocket[],
}
export interface TniJsonDevicePowerController {
	propagate_charges: boolean,
	disabled: boolean,
	charge_rate: integer,
	allow_passthrough: boolean,
	charge_capacity: integer,
	can_discharge_to_supply: boolean,
	surge_blocker: boolean,
	ports: TniJsonDeviceSocket[],
}
export interface TniJsonDeviceSocket {
	type: TniSocketType,
	disable_egress: boolean,
	disable_ingress: boolean,
	LogicControllerSocket?: TniJsonDeviceSocketLogicController,
	PeripheralSocket?: TniJsonDeviceSocketPeripheral,
	StorageSocket?: TniJsonDeviceSocketStorage,
	KeystoneSocket?: TniJsonDeviceSocketKeystone,
	LogicControllerSoCableSlotcket?: TniJsonDeviceSocketCableSlot,
}
export interface TniJsonDeviceSocketLogicController {
	is_back_port: boolean,
}
export interface TniJsonDeviceSocketPeripheral {
	peripheral_lock_switch: boolean,
}
export interface TniJsonDeviceSocketStorage {
}
export interface TniJsonDeviceSocketKeystone {
}
export interface TniJsonDeviceSocketCableSlot {
	coil_radius: number,
	coil_tightness: number,
	coil_gap: number,
}

export interface TniJsonProposalPack {
	[key: TniJsonProposalName]: TniJsonProposal,
}

export interface TniJsonProposal {
	locked: boolean,
	depends_on: TniJsonProposalName,
	disallow_proposal_if_depends_submitted: boolean,
	can_be_proposed_beginning: integer,
	force_once_on_day: integer,
	name: string,
	cost: integer|null,
	description: string,
	LogicProgramUnlock?: TniJsonProposalLogicProgramUnlock,
}
export interface TniJsonProposalLogicProgramUnlock {
	title: string,
	dialog_text: string,
	logic_program_scn: TniJsonProgramId,
}

export interface TniJsonMerchant {
	display_name: string,
	description: string,
	listings: TniJsonMerchantListing[],
	DeviceMerchant: TniJsonDeviceMerchant,
}
export interface TniJsonMerchantListing {
	device_scn: TniJsonId,
	listed_on_day: integer,
	delisted_on_day: integer,
	allowed_variant: TniDeviceListingVariantType,
	// Additional data collected, not directly from a DeviceListing object.
	AdditionalData: {
		description: string,
		warranty_period: integer,
		base_price: integer,
		price: integer,
	}
}
export interface TniJsonDeviceMerchant {
	restock_period: number,
	restock_mode: TniDeviceMerchantRestockMode,
	entry_max_stocks: integer,
	price_multiplier: number,
	price_add_constant: integer,
	warranty_multiplier: number,
	warranty_add_constant: integer,
}

export interface TniJsonPlug {
	compatibles: TniSocketType[],
	cable_make_type: TniCableMakeType[],
	PeripheralPlug?: TniJsonPlugPeripheral,
	RemovableStorageDevice?: TniJsonPlugRemovableStorageDevice,
	DataWiperUSB?: TniJsonPlugDataWiperUSB,
	UnterminatedSpool?: TniJsonPlugUnterminatedSpool,
	RippedSpool?: TniJsonPlugRippedSpool,
}
export interface TniJsonPlugPeripheral {
	product_name: string,
	price: integer,
	description: string,
	rendered_description: string,
}
export interface TniJsonPlugRemovableStorageDevice {
	available_sto: integer,
}
export interface TniJsonPlugDataWiperUSB {
}
export interface TniJsonPlugUnterminatedSpool {
	allow_spool_variant: boolean,
	// [R, G, B, A] in range 0 - 1
	color_variant: [number, number, number, number],
	cable_width: number,
	color_plug_ends: boolean,
	max_spool_length: number,
}
export interface TniJsonPlugRippedSpool {
}

export interface TniJsonUseConfig {
	use_value: string,
	constraint_descript: string,
	use_descriptions: string[],
	and_compatibility: boolean,
	consume_config_blocks: TniJsonUseConfigConsumeBlock[],
}
export interface TniJsonUseConfigConsumeBlock {
	anti_match: boolean,
	or_compatibility: boolean,
	use_descriptions: string[],
}

export interface TniJsonThemeConfig {
	theme_descriptions: string[],
	and_compatibility: boolean,
}

// Enums based on 0.11.3

export enum TniProgramControllerModifiers {
	ALLOW_REMOTE_DEBUGGING = "ALLOW_REMOTE_DEBUGGING",
	ALLOW_PACKET_SWITCHING = "ALLOW_PACKET_SWITCHING",
	ALLOW_PACKET_ROUTING = "ALLOW_PACKET_ROUTING",
	ALLOW_PACKET_INSPECTION = "ALLOW_PACKET_INSPECTION",
	ALLOW_PACKET_FILTERING = "ALLOW_PACKET_FILTERING",
	ALLOW_DOMAIN_QUERYING = "ALLOW_DOMAIN_QUERYING",
	ALLOW_REMOTE_HOST_CONFIGURATION = "ALLOW_REMOTE_HOST_CONFIGURATION",
	ALLOW_HIGH_AVAILABILITY_SETUP = "ALLOW_HIGH_AVAILABILITY_SETUP",
	ALLOW_DECENTRO_STORAGE = "ALLOW_DECENTRO_STORAGE",
	ALLOW_DECENTRO_TRADING = "ALLOW_DECENTRO_TRADING",
	ALLOW_VLAN_TAGGING = "ALLOW_VLAN_TAGGING",
	ALLOW_TRAFFIC_SPLITTING = "ALLOW_TRAFFIC_SPLITTING",
	ALLOW_STP_PORT_CONTROL = "ALLOW_STP_PORT_CONTROL",
	ALLOW_PACKET_TRANSLATION = "ALLOW_PACKET_TRANSLATION",
}

export enum TniDeviceHardwareClass {
	DEFAULT = "DEFAULT",
	NETWORK_SWITCH = "NETWORK_SWITCH",
	NETWORK_ROUTER = "NETWORK_ROUTER",
	NETWORK_TAP = "NETWORK_TAP",
	NETWORK_FIREWALL = "NETWORK_FIREWALL",
	MEDIA_LINE_SIMPLEX = "MEDIA_LINE_SIMPLEX",
	MEDIA_LINE_DUPLEX = "MEDIA_LINE_DUPLEX",
	COMPUTE_SERVER = "COMPUTE_SERVER",
	DISPLAY_MONITOR = "DISPLAY_MONITOR",
	DEBUGGER = "DEBUGGER",
	LOAD_TESTER = "LOAD_TESTER",
	POWER_EXPANSION = "POWER_EXPANSION",
	DECENTRO_RIGS = "DECENTRO_RIGS",
	SURGE_PROTECTOR = "SURGE_PROTECTOR",
	UPS = "UPS",
	INERT = "INERT",
	CCTV = "CCTV",
	PHONE = "PHONE",
	PRINTER = "PRINTER",
	NETWORK_LOAD_BALANCER = "NETWORK_LOAD_BALANCER",
	NETWORK_STORAGE = "NETWORK_STORAGE",
}

export enum TniDeviceExtraDescriptionType {
	NODESCRIPT = "NODESCRIPT",
	BW_PER_TICK = "BW_PER_TICK",
	CMSBW_BASIC = "CMSBW_BASIC",
	POWER_SUPPLY = "POWER_SUPPLY",
	CABLE_O_MATIC = "CABLE_O_MATIC",
}

export enum TniDeviceMountType {
	NA = 0,
	R500 = 1,
	R930 = 2,
	R630 = 3,
}

export enum TniTraversalProductTarget {
	SOURCE = "SOURCE",
	DESTINATION = "DESTINATION",
}

export enum TniTraversalConversionPolicy {
	SKIP_CONSUME_ON_HOST_IF_LIMIT_REACHED = "SKIP_CONSUME_ON_HOST_IF_LIMIT_REACHED",
	ALWAYS_CONSUME_REGARDLESS_OF_PRODUCE_LIMIT = "ALWAYS_CONSUME_REGARDLESS_OF_PRODUCE_LIMIT",
}

export enum TniTraversalConsumptionPolicy {
	ALL_OR_NOTHING = "ALL_OR_NOTHING",
	FRAGMENTED_USE_ALLOWED = "FRAGMENTED_USE_ALLOWED",
}

export enum TniProduceLimitType {
	LIMITED_BY_PRODUCE_FACTOR = "LIMITED_BY_PRODUCE_FACTOR",
	LIMITED_BY_TARGET_FREE_MEMORY = "LIMITED_BY_TARGET_FREE_MEMORY",
	LIMITED_BY_LIMIT_FACTOR = "LIMITED_BY_LIMIT_FACTOR",
	LIMITED_BY_TARGET_TOTAL_MEM = "LIMITED_BY_TARGET_TOTAL_MEM",
	LIMITED_BY_TARGET_TOTAL_CPU = "LIMITED_BY_TARGET_TOTAL_CPU",
	LIMITED_BY_TARGET_TOTAL_STORAGE = "LIMITED_BY_TARGET_TOTAL_STORAGE",
}

export enum TniUserHostSelMethod {
	UNIFORM_RANDOM = "UNIFORM_RANDOM",
	USER_REPEATS_MODULO = "USER_REPEATS_MODULO",
	WEIGHTED_REQUIREMENTS_SHARE = "WEIGHTED_REQUIREMENTS_SHARE",
}

export enum TniUserP2PMethod {
	OUT_OF_BAND_UNIFORM_RANDOM = "OUT_OF_BAND_UNIFORM_RANDOM",
	PRE_CONNECT_FACILITIES = "PRE_CONNECT_FACILITIES",
}

export enum TniUserPaymentCalculationMethod {
	USAGE_FULFILMENT_TODAY = "USAGE_FULFILMENT_TODAY",
	LOWEST_SATIETY_TODAY = "LOWEST_SATIETY_TODAY",
}

export enum TniSocketType {
	TEST = "TEST",
	B_3PIN = "B_3PIN",
	UK_3PIN = "UK_3PIN",
	RJ45 = "RJ45",
	RJ11 = "RJ11",
	A_USB = "A_USB",
	E10_BULB = "E10_BULB",
	SERIAL_DEBUG = "SERIAL_DEBUG",
	DC_JACK = "DC_JACK",
	FIBER_OPTIC_SC = "FIBER_OPTIC_SC",
	SATA35_SLOT = "SATA35_SLOT",
	SATA25_SLOT = "SATA25_SLOT",
	PCIE_SLOT = "PCIE_SLOT",
	DDR3_SLOT = "DDR3_SLOT",
	DDR4_SLOT = "DDR4_SLOT",
	STORAGE_SLOT = "STORAGE_SLOT",
	SPOOL_HOOK = "SPOOL_HOOK",
	CABLE_O_MATIC_RJ45 = "CABLE_O_MATIC_RJ45",
	CABLE_O_MATIC_FIBO = "CABLE_O_MATIC_FIBO",
	CABLE_O_MATIC_PMA = "CABLE_O_MATIC_PMA",
}

export enum TniCableMakeType {
	RJ45 = "RJ45",
	FIBEROPTIC = "FIBEROPTIC",
	POWERMA = "POWERMA",
}

export enum TniDeviceListingVariantType {
	NO_VARIANT = "NO_VARIANT",
	CABLE_COLOR_MODULATION_VARIANT = "CABLE_COLOR_MODULATION_VARIANT",
}

export enum TniDeviceMerchantRestockMode {
	FILL = "FILL",
}
