import { type Component, For, useContext } from 'solid-js'
import type { Item } from '@yovolve/core';
import { YovolveContext } from './Game'
import styles from './ItemOverview.module.css'

const ItemOverview: Component = () => {
    const service = useContext(YovolveContext)

    return (
        <div>
            <For each={service().items} fallback={<></>}>
                {(item: Item) => <p class={styles.item}>
                    <span>{item.display}</span>
                    <span>{item.count ?? 0}</span>
                    <span>{item.speed ?? 0}</span>
                </p>}
            </For>
        </div>
    );
};

export default ItemOverview;
