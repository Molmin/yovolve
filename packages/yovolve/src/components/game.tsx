import { type Component, createContext, createSignal } from 'solid-js'
import { YovolveService } from '@yovolve/core'
import defaultConfig from '@yovolve/utils/modes/test'
import styles from './game.module.css'
import Logger from './logger'
import ItemOverview from './overview'
import Dashboard from './dashboard'

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

export const YovolveServiceContext = createContext<() => YovolveService>(() => new YovolveService(defaultConfig))

const Game: Component = () => {
    const service = new YovolveService(defaultConfig)
    service.startService()

    return (
        <div class={styles.container}>
            <YovolveServiceContext.Provider value={() => service}>
                <ItemOverview />
                <Dashboard />
            </YovolveServiceContext.Provider>
            <LoggerContext.Provider value={logs}>
                <Logger />
            </LoggerContext.Provider>
        </div>
    )
}

export default Game