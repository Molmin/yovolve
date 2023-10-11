export interface Item {
    id: number
    name: string
    display: string
    description: string
    craftFrom: Record<string | number, number>
    requireMulti?: number
    everySecond: Record<string | number, number>
    count?: number
}