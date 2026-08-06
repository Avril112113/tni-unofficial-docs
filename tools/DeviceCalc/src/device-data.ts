import { TniJsonDevice, TniJsonDeviceId, TniJsonPlug, TniJsonPlugId, TniSocketType } from 'raw/data-format8-spec';
import { dataProvider } from "./data-context";
import _ from 'lodash';


function _getDeepDiff<T extends Record<string, any>>(object: T, base: Record<string, any>): Partial<T> {
	return _.transform(object, (result: any, value: any, key: string) => {
		if (!_.isEqual(value, base[key])) {
			result[key] = (_.isObject(value) && _.isObject(base[key]))
				? _getDeepDiff(value as Record<string, any>, base[key] as Record<string, any>)
				: value;
		}
	});
}

// AI Generated.
interface SumCombination {
    sum: number;
    values: number[];
}
function _getSumCombinations(numbers: number[], maxLength: number): SumCombination[] {
    const uniqueSums = new Map<number, number[]>();

    function generate(currentCombo: number[], currentSum: number): void {
        // Store the unique sum and the combination that made it
        if (!uniqueSums.has(currentSum)) {
            uniqueSums.set(currentSum, [...currentCombo]);
        }

        // Base case: stop if we reached the maximum combination length
        if (currentCombo.length === maxLength) {
            return;
        }

        // Recursive case: allow repetition by starting from index 0 every time
        for (let i = 0; i < numbers.length; i++) {
            currentCombo.push(numbers[i]!);
            generate(currentCombo, currentSum + numbers[i]!);
            currentCombo.pop(); // Backtrack
        }
    }

    generate([], 0);
    
    return Array.from(uniqueSums.entries()).map(([sum, values]) => ({
        sum,
        values
    }));
}

export class DeviceDataCustom {
	peripherals = new Map<number, TniJsonPlugId>();
}

export class DeviceData {
	readonly device_id: TniJsonDeviceId;

	device_data: TniJsonDevice;
	custom_data: DeviceDataCustom = new DeviceDataCustom();

	get device_data_original() {
		return dataProvider.value && this.device_id
			? dataProvider.value.devices[this.device_id] ?? null
			: null;
	}

	get device_data_is_original() {
		return _.isEqual(this.device_data_original, this.device_data);
	}
	
	constructor(device_id: TniJsonDeviceId, preserve_from: DeviceData|null = null) {
		if (!dataProvider.value) throw "Data missing; dataProvider.value";

		this.device_id = device_id;

		const device_data = structuredClone(this.device_data_original);
		if (!device_data) throw `Invalid device_id; ${device_id}`;
		this.device_data = device_data;

		if (preserve_from) {
			_.merge(this.device_data, preserve_from.device_data);
		}
	}

	getDataDiffFromOriginal() {
		return this.device_data && this.device_data_original ? _getDeepDiff(this.device_data, this.device_data_original) : {};
	}

	getPortIndicesForSocketType(socket_type: TniSocketType) {
		const lc = this.device_data.logic_controller;
		if (!lc) return [];
		const plug_indices = [];
		for (let index = 0; index < lc.ports.length; index++) {
			const socket = lc.ports[index]!;
			if (socket.type == socket_type)
				plug_indices.push(index);
		}
		return plug_indices;
	}

	static GetSataCombinations(sata_port_count: number) {
		const _sata_options: number[] = [];
		const _sata_prices: Record<number,number> = [];
		const _sata_ids: Record<number,TniJsonPlugId> = [];
		if (dataProvider.value) {
			for (const plug_id in dataProvider.value.plugs_by_type[TniSocketType.SATA35_SLOT]) {
				const plug: TniJsonPlug = dataProvider.value.plugs[plug_id]!;
				if (plug.PeripheralPlug && plug.RemovableStorageDevice) {
					const sata_sto = plug.RemovableStorageDevice.available_sto;
					if (_sata_options.indexOf(sata_sto) == -1){
						_sata_options.push(sata_sto);
						_sata_prices[sata_sto] = plug.PeripheralPlug.price;
						_sata_ids[sata_sto] = plug_id;
					}
				}
			}
		}

		const sata_combinations = _getSumCombinations(_sata_options, sata_port_count)
			.map(combination => {return {
				storage: combination.sum,
				values: combination.values,
				price: _.sumBy(combination.values, sata_size => _sata_prices[sata_size]!),
				plug_ids: combination.values.map(sata_size => _sata_ids[sata_size]!),
			}});

		sata_combinations.sort((a, b) => {
			return a.price - b.price;
		});

		return sata_combinations;
	}
}
