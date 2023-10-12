export interface Item {
    id: number
    name: string
    display: string
    description: string
    craftFrom: Record<string | number, number>
    requireMulti?: number
    everySecond: Record<string | number, number>
    count?: number
    speed?: number
}

export function findItem(items: Item[], id: number | string): Item | null {
    const result = items.filter(
        item => (typeof id === 'string' ? item.name : item.id) == id
    )
    if (result.length > 0) return result[0]
    else return null
}