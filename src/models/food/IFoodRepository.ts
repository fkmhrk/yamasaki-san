interface IFoodRepository {
    chooseFood(): Promise<IFood>;
}

interface IFood {
    name: string;
}
