import { type Component, useContext, createSignal, For, Switch, Match } from 'solid-js'
import styles from './logger.module.css'
import { LoggerContext } from './game'

const Logger: Component = () => {
    const logs = useContext(LoggerContext)

    const [displayLogger, setDisplayLogger] = createSignal<'event' | 'log'>('event');

    return (
        <div class={styles.container}>
            <span
                class={displayLogger() === 'event' ? styles.selectTab : styles.tab}
                onClick={() => { setDisplayLogger('event') }}
            >
                事件日志
            </span>
            <span
                class={displayLogger() === 'log' ? styles.selectTab : styles.tab}
                onClick={() => { setDisplayLogger('log') }}
            >
                调试信息
            </span>
            <Switch fallback={<div>Not Found</div>}>
                <Match when={displayLogger() === "event"}>
                    <div class={styles.logger}>
                        <For each={logs().event} fallback={<p>暂无事件日志。</p>}>
                            {content => <p>{content}</p>}
                        </For>
                    </div>
                </Match>
                <Match when={displayLogger() === "log"}>
                    <div class={styles.logger}>
                        <For each={logs().log} fallback={<p>暂无调试信息。</p>}>
                            {content => <p>{content}</p>}
                        </For>
                    </div>
                </Match>
            </Switch>
        </div>
    );
};

export default Logger;
