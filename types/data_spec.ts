interface TniJsonData {
	game_version: string,
	enums: TniJsonDataEnums,
	programs: Record<string, TniJsonProgram>,
	users: Record<string, TniJsonUser>,
	devices: Record<string, TniJsonDevice>,
	proposal_packs: Record<string, TniJsonProposalPack>,
	use_configs: Record<string, TniJsonUseConfig>,
}

// Actual enum definitions are at the bottom of this file.
interface TniJsonDataEnums {
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

interface TniJsonProgram {

}

interface TniJsonUser {

}

interface TniJsonDevice {
	product_name: string,
	description: string,
	device_rendered_description: string,
	text: string,
	extra_descriptions: unknown,
	price: unknown,
	base_warranty_days: unknown,
	base_warranty_cycles: unknown,
	recycle_price_factor: unknown,
	recycle_price: unknown,
	force_auto_config_powctl_based_on_logctl: unknown,
	force_auto_config_nbw_based_on_ports: unknown,
	force_auto_config_logctl_powerload: unknown,
	defect_possibility: unknown,
	auto_config_bw_multiplier: unknown,
	auto_config_pload_multiplier: unknown,
	device_application_unlocks: unknown,
	device_hardware_class: unknown,
	mount_type: unknown,
}

interface TniJsonProposalPack {
	[key: string]: TniJsonProposal,
}

interface TniJsonProposal {

}

interface TniJsonUseConfig {

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