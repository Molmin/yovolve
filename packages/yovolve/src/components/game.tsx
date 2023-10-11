import { type Component, createContext, createSignal } from 'solid-js'
import styles from './game.module.css'
import Logger from './logger'

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

const Game: Component = () => {
    return (
        <div class={styles.game}>
            <LoggerContext.Provider value={logs}>
                <Logger />
            </LoggerContext.Provider>
        </div>
    )
}

export default Game