export function rebuildObject(object: any): any {
    if (['number', 'string', 'boolean'].includes(typeof object)) return object
    if (object instanceof Array) {
        let ret: any[] = []
        for (let v of object) ret.push(rebuildObject(v))
        return ret
    }
    else {
        let ret: Record<string, any> = {}
        for (let [k, v] of Object.entries(object)) ret[k] = rebuildObject(v)
        return ret
    }
}

export function NumberDisplay(x: number): string {
    if (x < 2e3) return `${x}`
    if (x < 1e6) return `${(x / 1e3).toFixed(1)}k`
    if (x < 1e9) return `${(x / 1e6).toFixed(2)}m`
    return `${(x / 1e9).toFixed(2)}b`
}