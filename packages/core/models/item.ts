import { YovolveConfig } from "../libs/config"
import { Item, ItemId } from "../libs/item"
import { ModelReturn } from "../libs/model"

export function findItemId(
    config: YovolveConfig, id: ItemId
): ModelReturn<number | null> {
    let i = 0
    while (
        i < config.items.length &&
        (typeof id === 'string' ? config.items[i].name : config.items[i].id) != id
    ) i++
    return {
        updatedConfig: false,
        return: i == config.items.length ? null : i,
    }
}

export function findItem(
    config: YovolveConfig, id: ItemId
): ModelReturn<Item | null> {
    const result = config.items.filter(
        item => (typeof id === 'string' ? item.name : item.id) == id
    )
    return {
        updatedConfig: false,
        return: result.length > 0 ? result[0] : null,
    }
}

export function getCraftItemCost(
    config: YovolveConfig, id: ItemId
): ModelReturn<Record<ItemId, number>> {
    const item = findItem(config, id).return as Item
    let ret: Record<ItemId, number> = {}
    for (let [it, cost] of Object.entries(item.craftFrom ?? {}))
        ret[it] = cost * Math.pow((item.costMulti ?? {})[it] ?? 1, item.count ?? 0)
    return { updatedConfig: false, return: ret }
}

export function checkCanClickItem(
    config: YovolveConfig, id: ItemId
): ModelReturn<boolean> {
    const cost = getCraftItemCost(config, id).return
    let ret = true
    for (let [i, c] of Object.entries(cost))
        if (((findItem(config, i).return as Item).count ?? 0) < c) ret = false
    return { updatedConfig: false, return: ret }
}

export function clickItem(
    config: YovolveConfig, id: ItemId
): ModelReturn<null> {
    const cost = getCraftItemCost(config, id).return
    for (let [i, c] of Object.entries(cost)) {
        const itemId = findItemId(config, i).return as number
        config.items[itemId].count = (config.items[itemId].count ?? 0) - c
    }
    const itemId = findItemId(config, id).return as number
    config.items[itemId].count = (config.items[itemId].count ?? 0) + 1
    return { updatedConfig: true, return: null, config }
}