export default class List {
    constructor() {
        this.listManager = null;
    }
    attached(listManager) { this.listManager = listManager; return Promise.resolve(); }
}
//# sourceMappingURL=list.js.map