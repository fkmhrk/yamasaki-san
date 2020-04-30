const foods = <IFood[]>[
    {
        name: "しょうゆラーメン",
    },
    {
        name: "みそラーメン",
    },
    {
        name: "とんこつラーメン",
    },
    {
        name: "家系ラーメン",
    },
    {
        name: "ちゃんぽん",
    },
    {
        name: "皿うどん",
    },
    {
        name: "やきそば",
    },
    {
        name: "やきうどん",
    },
    {
        name: "チャーハン",
    },
    {
        name: "餃子",
    },
    {
        name: "焼売",
    },
    {
        name: "天津飯",
    },
    {
        name: "タンメン",
    },
    {
        name: "牛丼",
    },
    {
        name: "豚丼",
    },
    {
        name: "ポークカレー",
    },
    {
        name: "ビーフカレー",
    },
    {
        name: "チキンカレー",
    },
    {
        name: "マトンカレー",
    },
    {
        name: "カツカレー",
    },
    {
        name: "わかめうどん",
    },
    {
        name: "ざるうどん",
    },
    {
        name: "たぬきうどん",
    },
    {
        name: "肉うどん",
    },
    {
        name: "ごぼう天うどん",
    },
    {
        name: "わかめそば",
    },
    {
        name: "肉そば",
    },
    {
        name: "ごぼう天そば",
    },
    {
        name: "焼き魚",
    },
    {
        name: "お刺身",
    },
    {
        name: "海鮮丼",
    },
    {
        name: "寿司",
    },
    {
        name: "ミートソーススパゲッティ",
    },
    {
        name: "ナポリタン",
    },
    {
        name: "ペペロンチーノ",
    },
    {
        name: "マルゲリータ",
    },
    {
        name: "デミグラスソースハンバーグ",
    },
    {
        name: "和風ハンバーグ",
    },
    {
        name: "ミラノ風ドリア",
    },
    {
        name: "カツ丼",
    },
    {
        name: "天丼",
    },
    {
        name: "ビビン丼",
    },
    {
        name: "サーロインステーキ",
    },
];

export default class FoodRepository implements IFoodRepository {
    chooseFood(): Promise<IFood> {
        const index = Math.floor(Math.random() * foods.length);
        return Promise.resolve(foods[index]);
    }
}
