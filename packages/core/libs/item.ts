export interface Item {
    id: number
    name: string
    display: string
    description: string
    craftFrom: Record<number, number>
    requireMulti: number
    everySecond: Record<number, number>
}