export type ItemId = string | number

export interface Item {
    id: number
    name: string
    display: string
    description: string
    craftFrom: Record<ItemId, number>
    costMulti?: Record<ItemId, number>
    everySecond: Record<ItemId, number>
    count?: number
    speed?: number
}