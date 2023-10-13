import { Show, type Component, createSignal, For } from 'solid-js'
import styles from './ItemCard.module.css'
import { Item, ItemId } from '@yovolve/core';
import { Yovolve } from './Game';

const ItemCard: Component<{
    item: Item
}> = props => {
    const { item } = props

    const [isHover, setIsHover] = createSignal<boolean>(false);

    return (
        <div
            class={(Yovolve.checkCanClickItem(item.id)
                ? '' : styles.disabledContainer + ' ') + styles.container}
            onClick={() => {
                if (Yovolve.checkCanClickItem(item.id))
                    Yovolve.clickItem(item.id)
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <p class={styles.name}>{item.display}</p>
            <div class={styles.countContainer}>
                <span class={styles.countNumber}>{item.count ?? 0}</span>
            </div>
            <Show when={isHover()}>
                <div class={styles.hoverCard}>
                    <p>{item.display}</p>
                    <For
                        each={Object.entries(Yovolve.getCraftItemCost(item.id))}
                        fallback={<></>}
                    >
                        {s => {
                            const it = Yovolve.findItem(s[0] as ItemId) as Item;
                            return <p>{it.display}: {s[1] as number}</p>
                        }}
                    </For>
                    <p>{item.description}</p>
                </div>
            </Show>
        </div>
    );
};

export default ItemCard;
