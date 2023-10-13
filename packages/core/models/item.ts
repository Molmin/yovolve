import { YovolveConfig } from "../libs/config"
import { Item, ItemId } from "../libs/item"

export function findItemId(
    config: YovolveConfig, id: ItemId,
): number | null {
    let i = 0
    while (
        i < config.items.length &&
        (typeof id === 'string' ? config.items[i].name : config.items[i].id) != id
    ) i++
    return i == config.items.length ? null : i
}

export function findItem(
    config: YovolveConfig, id: ItemId,
): Item | null {
    const result = config.items.filter(
        item => (typeof id === 'string' ? item.name : item.id) == id
    )
    return result.length > 0 ? result[0] : null
}

export function getCraftItemCost(
    config: YovolveConfig, id: ItemId,
): Record<ItemId, number> {
    const item = findItem(config, id) as Item
    let ret: Record<ItemId, number> = {}
    for (let [it, cost] of Object.entries(item.craftFrom ?? {}))
        ret[it] = cost * Math.pow((item.costMulti ?? {})[it] ?? 1, item.count ?? 0)
    return ret
}

export function checkCanClickItem(
    config: YovolveConfig, id: ItemId,
): boolean {
    const cost = getCraftItemCost(config, id)
    let ret = true
    for (let [i, c] of Object.entries(cost))
        if (((findItem(config, i) as Item).count ?? 0) < c) ret = false
    return ret
}

export function clickItem(
    config: YovolveConfig, id: ItemId,
    updateConfig: (config: YovolveConfig) => void,
): void {
    const cost = getCraftItemCost(config, id)
    for (let [i, c] of Object.entries(cost)) {
        const itemId = findItemId(config, i) as number
        config.items[itemId].count = (config.items[itemId].count ?? 0) - c
    }
    const itemId = findItemId(config, id) as number
    config.items[itemId].count = (config.items[itemId].count ?? 0) + 1
    updateConfig(config)
}