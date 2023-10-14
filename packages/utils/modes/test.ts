import { YovolveConfig } from "@yovolve/core"

const config: YovolveConfig = {
    name: "测试",
    items: [
        {
            id: 1,
            name: "money",
            display: "钱",
            description: "有用的",
            craftFrom: {},
            everySecond: {},
        },
        {
            id: 2,
            name: "wood",
            display: "木头",
            description: "圆料",
            craftFrom: { "money": 2 },
            costMulti: {},
            everySecond: {},
        },
        {
            id: 3,
            name: "human",
            display: "人类",
            description: "homo",
            craftFrom: {},
            costMulti: {},
            everySecond: { "money": 2 },
        },
        {
            id: 4,
            name: "house",
            display: "木屋",
            description: "很萌",
            craftFrom: { "wood": 70, "money": 100 },
            costMulti: { "wood": 2, "money": 1.5 },
            everySecond: { "human": 1 },
        },
        {
            id: 5,
            name: "shuchang",
            display: "树厂",
            description: "strong",
            craftFrom: { "human": 20, "house": 5 },
            costMulti: { "human": 2, "house": 1.5 },
            everySecond: { "wood": 20 },
        },
        {
            id: 6,
            name: "cat",
            display: "猫",
            description: "超猛（萌）",
            craftFrom: { "money": 250 },
            costMulti: { "money": 2 },
            everySecond: { "money": 5 },
        },
    ],
}

export default config