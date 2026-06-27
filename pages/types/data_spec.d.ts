interface TniJsonData {
	game_version: string,
	enums: TniJsonDataEnums,
	programs: Record<string, TniJsonProgram>,
	users: Record<string, TniJsonUser>,
	devices: Record<string, TniJsonDevice>,
	proposal_packs: Record<string, TniJsonProposalPack>,
	use_configs: Record<string, TniJsonUseConfig>,
}

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
	description: unknown,
	device_rendered_description: unknown,
	text: unknown,
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
