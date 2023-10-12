import { YovolveConfig } from './libs/config'

function handle(config: YovolveConfig): YovolveConfig {
    config.items[0].count = (config.items[0].count ?? 0) + 1
    return config
}

export function startService(
    config: YovolveConfig,
    updateConfig: (config: YovolveConfig) => void
) {
    setInterval(() => {
        config = handle(config)
        updateConfig(config)
    }, 1000)
}