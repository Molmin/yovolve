import { YovolveConfig } from "../libs/config"
import { ModelReturn } from "../libs/model"

export function checkCanClickItem(config: YovolveConfig, id: number): ModelReturn {
    return {
        updatedConfig: false,
        return: false,
    }
}