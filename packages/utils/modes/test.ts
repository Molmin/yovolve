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
            craftFrom: { "yo-yo": 10 },
            everySecond: {},
        },
    ],
}

export default config