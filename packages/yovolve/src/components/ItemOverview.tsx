import { type Component, For, useContext, Switch, Match } from 'solid-js'
import type { Item } from '@yovolve/core';
import { YovolveContext } from './Game'
import styles from './ItemOverview.module.css'
import { NumberDisplay } from '@yovolve/utils';

const ItemOverview: Component = () => {
    const service = useContext(YovolveContext)

    return (
        <div>
            <For each={service().items} fallback={<></>}>
                {(item: Item) => <p class={styles.item}>
                    <span>{item.display}</span>
                    <span>{NumberDisplay(item.count ?? 0)}</span>
                    <Switch fallback={<span>0</span>}>
                        <Match when={(item.speed ?? 0) > 0}>
                            <span class={styles.countUp}>+{NumberDisplay(item.speed ?? 0)}</span>
                        </Match>
                        <Match when={(item.speed ?? 0) < 0}>
                            <span class={styles.countDown}>{NumberDisplay(item.speed ?? 0)}</span>
                        </Match>
                    </Switch>
                </p>}
            </For>
        </div>
    );
};

export default ItemOverview;
