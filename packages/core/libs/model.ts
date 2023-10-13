import { YovolveConfig } from "./config";

export interface ModelReturn<T> {
    updatedConfig: boolean
    config?: YovolveConfig
    return: T
}