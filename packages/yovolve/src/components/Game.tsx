import { type Component, createContext, createSignal } from 'solid-js'
import { YovolveConfig, startService } from '@yovolve/core'
import defaultConfig from '@yovolve/utils/modes/test'
import styles from './Game.module.css'
import Logger from './Logger'
import ItemOverview from './ItemOverview'
import Dashboard from './Dashboard'
import { rebuildObject } from '@yovolve/utils'

export interface Logs {
    event: string[]
    log: string[]
}

export const LoggerContext = createContext<() => Logs>(() => ({ log: [], event: [] }))
const [logs, setLogs] = createSignal<Logs>({ log: [], event: [] })

export function newEventLog(content: string) {
    setLogs({ event: logs().event.concat([content]), log: logs().log })
}
export function newDebugLog(content: string) {
    setLogs({ event: logs().event, log: logs().log.concat([content]) })
}

export const YovolveContext = createContext<() => YovolveConfig>(() => defaultConfig)
const [service, updateService] = createSignal<YovolveConfig>(defaultConfig)

const Game: Component = () => {
    startService(service(), (config: YovolveConfig) => {
        updateService(rebuildObject(config))
    })

    return (
        <div class={styles.container}>
            <YovolveContext.Provider value={service}>
                <ItemOverview />
                <Dashboard />
            </YovolveContext.Provider>
            <LoggerContext.Provider value={logs}>
                <Logger />
            </LoggerContext.Provider>
        </div>
    )
}

export default Game