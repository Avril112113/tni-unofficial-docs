export type TniJsonId = string;
export type TniJsonProgramId = TniJsonId;
export type TniJsonUserId = TniJsonId;
export type TniJsonDeviceId = TniJsonId;
export type TniJsonProposalPackId = TniJsonId;
export type TniJsonUseConfigId = TniJsonId;
export type TniJsonProposalName = string;

type integer = number;

export interface TniJsonData {
	game_version: string,
	enums: TniJsonDataEnums,
	programs: Record<TniJsonProgramId, TniJsonProgram>,
	users: Record<TniJsonUserId, TniJsonUser>,
	devices: Record<TniJsonDeviceId, TniJsonDevice>,
	proposal_packs: Record<TniJsonProposalPackId, TniJsonProposalPack>,
	use_configs: Record<TniJsonUseConfigId, TniJsonUseConfig>,
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
	TraversalBase: TniJsonProgramTraversalBase|undefined,
	TraversalConsume: TniJsonProgramTraversalConsume|undefined,
	AlwaysProduce: TniJsonProgramAlwaysProduce|undefined,
	WormBase: TniJsonProgramWormBase|undefined,
	UserHosting: TniJsonProgramUserHosting|undefined,
	SurveyScaledUserHosting: TniJsonProgramSurveyScaledUserHosting|undefined,
	VisitorScaledUserHosting: TniJsonProgramVisitorScaledUserHosting|undefined,
	UserTraversal: TniJsonProgramUserTraversal|undefined,
	UserTraversalFQDN: TniJsonProgramUserTraversalFQDN|undefined,
	UserTraversalP2P: TniJsonProgramUserTraversalP2P|undefined,
	UserTraversalHostingBackend: TniJsonProgramUserTraversalHostingBackend|undefined,
	UseStorage: TniJsonProgramUseStorage|undefined,
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
	release_name_template: unknown,
	max_spread_per_tick: unknown,
	signature: unknown,
	vulnerable_device_types: unknown,
	incubation_cycles: unknown,
	force_hint_hide: unknown,
}
export interface TniJsonProgramUserHosting {
	satiety_weight: unknown,
	advertised_use_config: unknown,
	theme_config: unknown,
	desired_visitors_per_tick: unknown,
	self_produce: unknown,
	tld_choice: unknown,
	extra_visitor_limit: unknown,
}
export interface TniJsonProgramSurveyScaledUserHosting {
	min_visitors: unknown,
	max_visitors: unknown,
	desired_ratio: unknown,
}
export interface TniJsonProgramVisitorScaledUserHosting {
	min_visitors: unknown,
	max_visitors: unknown,
	growth_per_tick: unknown,
	shrink_per_tick: unknown,
	greed_factor: unknown,
	min_visitor_scale_factor: unknown,
}
export interface TniJsonProgramUserTraversal {
	satiety_weight: unknown,
	producer_satiety_change_on_consume: unknown,
	consumer_satiety_change_on_consume: unknown,
	hidden_from_surveys: unknown,
	will_select_player_providers: unknown,
	max_acceptable_ppu: unknown,
	surveyor_dialog_target: unknown,
	add_dialog_text_on_success: unknown,
	dialog_text: unknown,
	surveyor_dialog_ptype: unknown,
	theme_affinity: unknown,
}
export interface TniJsonProgramUserTraversalFQDN {
	manifest_probability: unknown,
	never_manifest_without_any_provider: unknown,
	host_selection_algorithm: unknown,
}
export interface TniJsonProgramUserTraversalP2P {
	p2p_method: unknown,
	facility_selection_algorithm: unknown,
}
export interface TniJsonProgramUserTraversalHostingBackend {
	user_hosting_frontend: unknown,
	warning_checks_uses_or_condition: unknown,
}
export interface TniJsonProgramUseStorage {
	stored_use_config: unknown,
	storage_factor: unknown,
}

export interface TniJsonUser {
	description: unknown,
	user_profile_name: unknown,
	base_use_period: unknown,
	use_period_variance: unknown,
	downtime_sla_seconds: unknown,
	init_grace_days: unknown,
	daily_rate: unknown,
	eagerness_factor: unknown,
	max_satiety_decay_ratio: unknown,
	satiety_sla_ratio: unknown,
	active_time_float: unknown,
	inactive_time_float: unknown,
	fulfilment_penalty_factor: unknown,
	user_application_unlocks: TniJsonId[],  // Should only be TniJsonProgramId
	consumption_payment_scaling: unknown,
	allow_hwreset: unknown,
	ot_probability: unknown,
	payment_calculation_method: TniUserPaymentCalculationMethod,
	behaviours: unknown,
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
	logic_controller: TniJsonDeviceLogicController|undefined,
	power_controller: TniJsonDevicePowerController|undefined,
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
}
export interface TniJsonDevicePowerController {
	propagate_charges: boolean,
	disabled: boolean,
	charge_rate: integer,
	allow_passthrough: boolean,
	charge_capacity: integer,
	can_discharge_to_supply: boolean,
	surge_blocker: boolean,
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
	LogicProgramUnlock: TniJsonProposalLogicProgramUnlock|undefined,
}
export interface TniJsonProposalLogicProgramUnlock {
	title: string,
	dialog_text: string,
	logic_program_scn: TniJsonProgramId,
}

export interface TniJsonUseConfig {
	use_value: string,
	use_descriptions: string[],
	and_compatibility: boolean,
	consume_config_blocks: TniJsonUseConfigConsumeBlock[],
}
export interface TniJsonUseConfigConsumeBlock {
	anti_match: boolean,
	or_compatibility: boolean,
	use_descriptions: string[],
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