import { YovolveConfig } from './libs/config'
import { findItemId } from './models/item'

function handle(config: YovolveConfig): YovolveConfig {
    for (let i in config.items)
        config.items[i].speed = -(config.items[i].count ?? 0)
    for (let item of config.items) {
        let canMerge = true
        for (let [it, x] of Object.entries(item.everySecond ?? {})) {
            const id = findItemId(config, it) as number
            if ((config.items[id].count ?? 0) + Math.floor(x * (item.count ?? 0)) < 0) canMerge = false
        }
        if (canMerge)
            for (let [it, x] of Object.entries(item.everySecond ?? {})) {
                const id = findItemId(config, it) as number
                config.items[id].count = (config.items[id].count ?? 0) + Math.floor(x * (item.count ?? 0))
            }
    }
    for (let i in config.items)
        config.items[i].speed = (config.items[i].count ?? 0) + (config.items[i].speed ?? 0)
    return config
}

export function startService(
    config: () => YovolveConfig,
    updateConfig: (config: YovolveConfig) => void
) {
    setInterval(() => {
        updateConfig(handle(config()))
    }, 1000)
}