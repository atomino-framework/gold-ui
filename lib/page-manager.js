import { writable } from "svelte/store";
export default class PageManager {
    constructor() {
        this.listManager = null;
        this.pages = [];
        this.active = null;
        this.$pages = writable(this.pages);
        this.$active = writable(this.active);
    }
    getIndex(page) { return this.pages.findIndex(item => item.id === page.id); }
    update() {
        this.$pages.set(this.pages);
        this.$active.set(this.active);
    }
    remove(page) {
        let index = this.getIndex(page);
        if (index !== -1) {
            if (this.active?.id === page.id) {
                if (index === 0) {
                    if (this.pages.length > 2) {
                        this.active = this.pages[1];
                    }
                    else {
                        this.active = null;
                    }
                }
                else {
                    this.active = this.pages[index - 1];
                }
            }
            this.pages.splice(index, 1);
            this.update();
            page.detached();
        }
    }
    add(page) {
        let index = this.getIndex(page);
        if (index === -1) {
            this.pages.push(page);
            this.active = page;
            this.update();
            page.attached(this);
        }
        else if (this.pages[index].id !== this.active?.id) {
            this.active = this.pages[index];
            this.update();
        }
    }
}
//# sourceMappingURL=page-manager.js.map