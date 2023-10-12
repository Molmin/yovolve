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