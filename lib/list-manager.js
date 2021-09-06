import { writable } from "svelte/store";
export default class ListManager {
    constructor() {
        this.pageManager = null;
        this.lists = [];
        this.active = null;
        this.$lists = writable(this.lists);
        this.$active = writable(this.active);
    }
    getIndex(id) { return this.lists.findIndex(item => item.id === id); }
    getList(id) { return this.lists[this.getIndex(id)]; }
    update() {
        this.$lists.update(() => this.lists);
        this.$active.update(() => this.active);
    }
    add(list) {
        let index = this.getIndex(list.id);
        if (index === -1) {
            this.lists.push(list);
            this.active = list;
            list.attached(this).then(() => this.update());
        }
        else if (this.lists[index].id !== this.active?.id) {
            this.active = this.lists[index];
            this.update();
        }
    }
}
//# sourceMappingURL=list-manager.js.map