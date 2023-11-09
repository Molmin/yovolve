import { YovolveConfig } from "@yovolve/core"

const config: YovolveConfig = {
    name: "测试",
    items: [
        {
            id: 1,
            name: "circle",
            display: "小圆球",
            description: "很圆",
            craftFrom: {},
            everySecond: {},
        },
        {
            id: 2,
            name: "strong",
            display: "赵强",
            description: "很强",
            craftFrom: { "circle": 2 },
            costMulti: { "circle": 5 },
            everySecond: { "circle": 1 },
        },
        {
            id: 3,
            name: "qiao",
            display: "俏颖",
            description: "翘",
            craftFrom: { "circle": 3 },
            costMulti: { "circle": 5 },
            everySecond: { "circle": 1 },
        },
        {
            id: 4,
            name: "hunk",
            display: "猛男",
            description: "很萌",
            craftFrom: { "strong": 1, "qiao": 1 },
            costMulti: { "circle": 3 },
            everySecond: { "circle": 2.5 },
        },
        {
            id: 5,
            name: "alaska",
            display: "树春",
            description: "很肥",
            craftFrom: { "circle": 1000, "hunk": 1 },
            costMulti: { "circle": 10, "hunk": 1 },
            everySecond: { "circle": -50, "hunk": 10 },
        },
    ],
}

export default config