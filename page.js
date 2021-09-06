import FaIcon from "./fa-icon";
import { writable } from "svelte/store";
export default class Page {
    constructor() {
        this.closeable = true;
        this.pageManager = null;
        this.$loading = writable(false);
    }
    set loading(loading) { this.$loading.set(loading); }
    get id() { return this.constructor.name; }
    get $icon() { return writable(FaIcon.s('coins')); }
    get $title() { return writable('Page'); }
    get $isChanged() { return writable(false); }
    attached(pageManager) { this.pageManager = pageManager; }
    detached() { this.pageManager = null; }
}
//# sourceMappingURL=page.js.map