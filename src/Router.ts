/// <reference path="./IRouter.ts" />
/// <reference path="./page.d.ts" />
/// <reference path="./IApplication.ts" />
/// <reference path="./pages/IPage.ts" />

import MainPage from "./pages/MainPage";

export default class Router implements IRouter {
    constructor(app: IApplication) {
        page("/yamasaki-san/index.html", () => {
            this.showPage(new MainPage(app));
        });
    }

    start(): void {
        page();
    }

    navigate(path: string): void {
        page(path);
    }

    redirect(path: string): void {
        page.redirect(path);
    }

    private showPage(next: IPage) {
        next.onCreate();
    }
}
