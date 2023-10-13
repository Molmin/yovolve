import { Show, type Component, createSignal, For, useContext } from 'solid-js'
import styles from './ItemCard.module.css'
import { Item, ItemId, checkCanClickItem, clickItem, findItem, getCraftItemCost } from '@yovolve/core'
import { YovolveContext, limitRate, pushLimitRate, updateConfig } from './Game'
import { NumberDisplay } from '@yovolve/utils';

const ItemCard: Component<{
    item: Item
}> = props => {
    const { item } = props

    const service = useContext(YovolveContext)

    const [isHover, setIsHover] = createSignal<boolean>(false);

    return (
        <div
            class={(checkCanClickItem(service(), item.id)
                ? '' : styles.disabledContainer + ' ') + styles.container}
            onClick={() => {
                if (
                    checkCanClickItem(service(), item.id)
                    && limitRate(100, 1) && limitRate(1000, 8) && limitRate(5000, 25)
                ) {
                    pushLimitRate()
                    clickItem(service(), item.id, updateConfig)
                }
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <p class={styles.name}>{item.display}</p>
            <div class={styles.countContainer}>
                <span class={styles.countNumber}>{NumberDisplay(item.count ?? 0)}</span>
            </div>
            <Show when={isHover()}>
                <div class={styles.hoverCard}>
                    <p>{item.display}</p>
                    <For
                        each={Object.entries(getCraftItemCost(service(), item.id))}
                        fallback={<></>}
                    >
                        {s => {
                            const it = findItem(service(), s[0] as ItemId) as Item;
                            return <p>{it.display}: {NumberDisplay(s[1] as number)}</p>
                        }}
                    </For>
                    <p>{item.description}</p>
                </div>
            </Show>
        </div>
    );
};

export default ItemCard;
