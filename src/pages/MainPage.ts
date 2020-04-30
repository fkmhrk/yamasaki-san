/// <reference path="./IPage.ts" />
import Ractive from "ractive";
import TextField from "../views/TextField";
import Button from "../views/Button";

import "../scss/main.scss";

export default class MainPage implements IPage {
    private app: IApplication;
    private ractive!: Ractive;

    constructor(app: IApplication) {
        this.app = app;
    }

    async onCreate() {
        const t = await this.app.fetchTemplate("main.html");
        this.ractive = new Ractive({
            el: "#container",
            template: t,
            components: {
                TextField: TextField,
                Button: Button,
            },
            data: {
                inProgress: false,
            },
            on: {
                choose: () => this.choose(),
            },
        });
    }

    private async choose() {
        this.ractive.set("inProgress", true);
        try {
            const food = await this.app.models.food.chooseFood();
            this.ractive.set({
                inProgress: false,
                food,
            });
        } catch (e) {
            console.log("Failed to choose");
        }
    }
}
