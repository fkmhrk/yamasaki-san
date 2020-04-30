/// <reference path="./IModels.ts" />

import AccessToken from "./token/AccessToken";
import AccountRepository from "./account/AccountRepository";
import FoodRepository from "./food/FoodRepository";

export default class Models implements IModels {
    account: IAccountRepository;
    food: IFoodRepository;

    constructor(client: HTTPClient, token: AccessToken) {
        this.account = new AccountRepository(client, token);
        this.food = new FoodRepository();
    }
}
