export const SPEC_FORMAT_VERSION = 6;
// Enums based on 0.11.3
export var TniProgramControllerModifiers;
(function (TniProgramControllerModifiers) {
    TniProgramControllerModifiers["ALLOW_REMOTE_DEBUGGING"] = "ALLOW_REMOTE_DEBUGGING";
    TniProgramControllerModifiers["ALLOW_PACKET_SWITCHING"] = "ALLOW_PACKET_SWITCHING";
    TniProgramControllerModifiers["ALLOW_PACKET_ROUTING"] = "ALLOW_PACKET_ROUTING";
    TniProgramControllerModifiers["ALLOW_PACKET_INSPECTION"] = "ALLOW_PACKET_INSPECTION";
    TniProgramControllerModifiers["ALLOW_PACKET_FILTERING"] = "ALLOW_PACKET_FILTERING";
    TniProgramControllerModifiers["ALLOW_DOMAIN_QUERYING"] = "ALLOW_DOMAIN_QUERYING";
    TniProgramControllerModifiers["ALLOW_REMOTE_HOST_CONFIGURATION"] = "ALLOW_REMOTE_HOST_CONFIGURATION";
    TniProgramControllerModifiers["ALLOW_HIGH_AVAILABILITY_SETUP"] = "ALLOW_HIGH_AVAILABILITY_SETUP";
    TniProgramControllerModifiers["ALLOW_DECENTRO_STORAGE"] = "ALLOW_DECENTRO_STORAGE";
    TniProgramControllerModifiers["ALLOW_DECENTRO_TRADING"] = "ALLOW_DECENTRO_TRADING";
    TniProgramControllerModifiers["ALLOW_VLAN_TAGGING"] = "ALLOW_VLAN_TAGGING";
    TniProgramControllerModifiers["ALLOW_TRAFFIC_SPLITTING"] = "ALLOW_TRAFFIC_SPLITTING";
    TniProgramControllerModifiers["ALLOW_STP_PORT_CONTROL"] = "ALLOW_STP_PORT_CONTROL";
    TniProgramControllerModifiers["ALLOW_PACKET_TRANSLATION"] = "ALLOW_PACKET_TRANSLATION";
})(TniProgramControllerModifiers || (TniProgramControllerModifiers = {}));
export var TniDeviceHardwareClass;
(function (TniDeviceHardwareClass) {
    TniDeviceHardwareClass["DEFAULT"] = "DEFAULT";
    TniDeviceHardwareClass["NETWORK_SWITCH"] = "NETWORK_SWITCH";
    TniDeviceHardwareClass["NETWORK_ROUTER"] = "NETWORK_ROUTER";
    TniDeviceHardwareClass["NETWORK_TAP"] = "NETWORK_TAP";
    TniDeviceHardwareClass["NETWORK_FIREWALL"] = "NETWORK_FIREWALL";
    TniDeviceHardwareClass["MEDIA_LINE_SIMPLEX"] = "MEDIA_LINE_SIMPLEX";
    TniDeviceHardwareClass["MEDIA_LINE_DUPLEX"] = "MEDIA_LINE_DUPLEX";
    TniDeviceHardwareClass["COMPUTE_SERVER"] = "COMPUTE_SERVER";
    TniDeviceHardwareClass["DISPLAY_MONITOR"] = "DISPLAY_MONITOR";
    TniDeviceHardwareClass["DEBUGGER"] = "DEBUGGER";
    TniDeviceHardwareClass["LOAD_TESTER"] = "LOAD_TESTER";
    TniDeviceHardwareClass["POWER_EXPANSION"] = "POWER_EXPANSION";
    TniDeviceHardwareClass["DECENTRO_RIGS"] = "DECENTRO_RIGS";
    TniDeviceHardwareClass["SURGE_PROTECTOR"] = "SURGE_PROTECTOR";
    TniDeviceHardwareClass["UPS"] = "UPS";
    TniDeviceHardwareClass["INERT"] = "INERT";
    TniDeviceHardwareClass["CCTV"] = "CCTV";
    TniDeviceHardwareClass["PHONE"] = "PHONE";
    TniDeviceHardwareClass["PRINTER"] = "PRINTER";
    TniDeviceHardwareClass["NETWORK_LOAD_BALANCER"] = "NETWORK_LOAD_BALANCER";
    TniDeviceHardwareClass["NETWORK_STORAGE"] = "NETWORK_STORAGE";
})(TniDeviceHardwareClass || (TniDeviceHardwareClass = {}));
export var TniDeviceExtraDescriptionType;
(function (TniDeviceExtraDescriptionType) {
    TniDeviceExtraDescriptionType["NODESCRIPT"] = "NODESCRIPT";
    TniDeviceExtraDescriptionType["BW_PER_TICK"] = "BW_PER_TICK";
    TniDeviceExtraDescriptionType["CMSBW_BASIC"] = "CMSBW_BASIC";
    TniDeviceExtraDescriptionType["POWER_SUPPLY"] = "POWER_SUPPLY";
    TniDeviceExtraDescriptionType["CABLE_O_MATIC"] = "CABLE_O_MATIC";
})(TniDeviceExtraDescriptionType || (TniDeviceExtraDescriptionType = {}));
export var TniDeviceMountType;
(function (TniDeviceMountType) {
    TniDeviceMountType[TniDeviceMountType["NA"] = 0] = "NA";
    TniDeviceMountType[TniDeviceMountType["R500"] = 1] = "R500";
    TniDeviceMountType[TniDeviceMountType["R930"] = 2] = "R930";
    TniDeviceMountType[TniDeviceMountType["R630"] = 3] = "R630";
})(TniDeviceMountType || (TniDeviceMountType = {}));
export var TniTraversalProductTarget;
(function (TniTraversalProductTarget) {
    TniTraversalProductTarget["SOURCE"] = "SOURCE";
    TniTraversalProductTarget["DESTINATION"] = "DESTINATION";
})(TniTraversalProductTarget || (TniTraversalProductTarget = {}));
export var TniTraversalConversionPolicy;
(function (TniTraversalConversionPolicy) {
    TniTraversalConversionPolicy["SKIP_CONSUME_ON_HOST_IF_LIMIT_REACHED"] = "SKIP_CONSUME_ON_HOST_IF_LIMIT_REACHED";
    TniTraversalConversionPolicy["ALWAYS_CONSUME_REGARDLESS_OF_PRODUCE_LIMIT"] = "ALWAYS_CONSUME_REGARDLESS_OF_PRODUCE_LIMIT";
})(TniTraversalConversionPolicy || (TniTraversalConversionPolicy = {}));
export var TniTraversalConsumptionPolicy;
(function (TniTraversalConsumptionPolicy) {
    TniTraversalConsumptionPolicy["ALL_OR_NOTHING"] = "ALL_OR_NOTHING";
    TniTraversalConsumptionPolicy["FRAGMENTED_USE_ALLOWED"] = "FRAGMENTED_USE_ALLOWED";
})(TniTraversalConsumptionPolicy || (TniTraversalConsumptionPolicy = {}));
export var TniProduceLimitType;
(function (TniProduceLimitType) {
    TniProduceLimitType["LIMITED_BY_PRODUCE_FACTOR"] = "LIMITED_BY_PRODUCE_FACTOR";
    TniProduceLimitType["LIMITED_BY_TARGET_FREE_MEMORY"] = "LIMITED_BY_TARGET_FREE_MEMORY";
    TniProduceLimitType["LIMITED_BY_LIMIT_FACTOR"] = "LIMITED_BY_LIMIT_FACTOR";
    TniProduceLimitType["LIMITED_BY_TARGET_TOTAL_MEM"] = "LIMITED_BY_TARGET_TOTAL_MEM";
    TniProduceLimitType["LIMITED_BY_TARGET_TOTAL_CPU"] = "LIMITED_BY_TARGET_TOTAL_CPU";
    TniProduceLimitType["LIMITED_BY_TARGET_TOTAL_STORAGE"] = "LIMITED_BY_TARGET_TOTAL_STORAGE";
})(TniProduceLimitType || (TniProduceLimitType = {}));
export var TniUserHostSelMethod;
(function (TniUserHostSelMethod) {
    TniUserHostSelMethod["UNIFORM_RANDOM"] = "UNIFORM_RANDOM";
    TniUserHostSelMethod["USER_REPEATS_MODULO"] = "USER_REPEATS_MODULO";
    TniUserHostSelMethod["WEIGHTED_REQUIREMENTS_SHARE"] = "WEIGHTED_REQUIREMENTS_SHARE";
})(TniUserHostSelMethod || (TniUserHostSelMethod = {}));
export var TniUserP2PMethod;
(function (TniUserP2PMethod) {
    TniUserP2PMethod["OUT_OF_BAND_UNIFORM_RANDOM"] = "OUT_OF_BAND_UNIFORM_RANDOM";
    TniUserP2PMethod["PRE_CONNECT_FACILITIES"] = "PRE_CONNECT_FACILITIES";
})(TniUserP2PMethod || (TniUserP2PMethod = {}));
export var TniUserPaymentCalculationMethod;
(function (TniUserPaymentCalculationMethod) {
    TniUserPaymentCalculationMethod["USAGE_FULFILMENT_TODAY"] = "USAGE_FULFILMENT_TODAY";
    TniUserPaymentCalculationMethod["LOWEST_SATIETY_TODAY"] = "LOWEST_SATIETY_TODAY";
})(TniUserPaymentCalculationMethod || (TniUserPaymentCalculationMethod = {}));
export var TniSocketType;
(function (TniSocketType) {
    TniSocketType["TEST"] = "TEST";
    TniSocketType["B_3PIN"] = "B_3PIN";
    TniSocketType["UK_3PIN"] = "UK_3PIN";
    TniSocketType["RJ45"] = "RJ45";
    TniSocketType["RJ11"] = "RJ11";
    TniSocketType["A_USB"] = "A_USB";
    TniSocketType["E10_BULB"] = "E10_BULB";
    TniSocketType["SERIAL_DEBUG"] = "SERIAL_DEBUG";
    TniSocketType["DC_JACK"] = "DC_JACK";
    TniSocketType["FIBER_OPTIC_SC"] = "FIBER_OPTIC_SC";
    TniSocketType["SATA35_SLOT"] = "SATA35_SLOT";
    TniSocketType["SATA25_SLOT"] = "SATA25_SLOT";
    TniSocketType["PCIE_SLOT"] = "PCIE_SLOT";
    TniSocketType["DDR3_SLOT"] = "DDR3_SLOT";
    TniSocketType["DDR4_SLOT"] = "DDR4_SLOT";
    TniSocketType["STORAGE_SLOT"] = "STORAGE_SLOT";
    TniSocketType["SPOOL_HOOK"] = "SPOOL_HOOK";
    TniSocketType["CABLE_O_MATIC_RJ45"] = "CABLE_O_MATIC_RJ45";
    TniSocketType["CABLE_O_MATIC_FIBO"] = "CABLE_O_MATIC_FIBO";
    TniSocketType["CABLE_O_MATIC_PMA"] = "CABLE_O_MATIC_PMA";
})(TniSocketType || (TniSocketType = {}));
export var TniCableMakeType;
(function (TniCableMakeType) {
    TniCableMakeType["RJ45"] = "RJ45";
    TniCableMakeType["FIBEROPTIC"] = "FIBEROPTIC";
    TniCableMakeType["POWERMA"] = "POWERMA";
})(TniCableMakeType || (TniCableMakeType = {}));
export var TniDeviceListingVariantType;
(function (TniDeviceListingVariantType) {
    TniDeviceListingVariantType["NO_VARIANT"] = "NO_VARIANT";
    TniDeviceListingVariantType["CABLE_COLOR_MODULATION_VARIANT"] = "CABLE_COLOR_MODULATION_VARIANT";
})(TniDeviceListingVariantType || (TniDeviceListingVariantType = {}));
export var TniDeviceMerchantRestockMode;
(function (TniDeviceMerchantRestockMode) {
    TniDeviceMerchantRestockMode["FILL"] = "FILL";
})(TniDeviceMerchantRestockMode || (TniDeviceMerchantRestockMode = {}));
//# sourceMappingURL=data-format6-spec.js.map