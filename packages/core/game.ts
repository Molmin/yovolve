import { YovolveConfig } from './libs/config'
import { ModelReturn } from './libs/model'
import { findItemId } from './models'

function handle(config: YovolveConfig): YovolveConfig {
    for (let i in config.items)
        config.items[i].speed = -(config.items[i].count ?? 0)
    for (let item of config.items)
        for (let [it, x] of Object.entries(item.everySecond ?? {})) {
            const id = findItemId(config, it).return as number
            config.items[id].count = (config.items[id].count ?? 0) + x * (item.count ?? 0)
        }
    for (let i in config.items)
        config.items[i].speed = (config.items[i].count ?? 0) + (config.items[i].speed ?? 0)
    return config
}

export async function startService(
    config: YovolveConfig,
    updateConfig: (config: YovolveConfig) => void
) {
    setInterval(() => {
        config = handle(config)
        updateConfig(config)
    }, 1000)
    const functions: Record<string, Function> = await import('./models')
    let retFunctions: Record<string, Function> = {}
    for (let [funcName, func] of Object.entries(functions))
        retFunctions[funcName] = (...args: any[]) => {
            const res: ModelReturn<any> = func(config, ...args)
            if (res.updatedConfig && res.config) updateConfig(res.config)
            if (res.return) return res.return
        }
    return retFunctions
}