import type { Component } from 'solid-js'
import styles from './ItemCard.module.css'
import { Item } from '@yovolve/core';
import { Yovolve } from './Game';

const ItemCard: Component<{
    item: Item
}> = props => {
    const { item } = props

    return (
        <div
            class={styles.container}
            onClick={() => {
                if (Yovolve.checkCanClickItem(item.id))
                    Yovolve.clickItem(item.id)
            }}
        >
            <p class={styles.name}>{item.display}</p>
            <div class={styles.countContainer}>
                <span class={styles.countNumber}>{item.count ?? 0}</span>
            </div>
        </div>
    );
};

export default ItemCard;
