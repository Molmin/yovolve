import { YovolveConfig } from './libs/config'
import { ModelReturn } from './libs/model'

function handle(config: YovolveConfig): YovolveConfig {
    config.items[0].count = (config.items[0].count ?? 0) + 1
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
            const res: ModelReturn = func(config, ...args)
            if (res.updatedConfig && res.config) updateConfig(res.config)
            if (res.return) return res.return
        }
    return retFunctions
}