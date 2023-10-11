import { YovolveConfig } from './libs/config'
import { Item } from './libs/item'

export class YovolveService {
    constructor(public config: YovolveConfig) { }

    startService() {
        setInterval(this.handler, 1000)
    }

    findItem(id: number | string): Item | null {
        const result = this.config.items.filter(
            item => (typeof id === 'string' ? item.name : item.id) == id
        )
        if (result.length > 0) return result[0]
        else return null
    }

    handler() { }
}