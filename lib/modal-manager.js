import { writable } from "svelte/store";
export class Modal {
    constructor(component, props = {}) {
        this.component = component;
        this.props = props;
        this.props.modal = this;
        this.id = Math.random();
    }
    open() {
        modalManager.add(this);
    }
    close() {
        modalManager.remove(this);
    }
}
class ModalManager {
    constructor() {
        this.modals = writable([]);
    }
    add(modal) {
        this.modals.update((modals) => {
            modals.push(modal);
            return modals;
        });
    }
    remove(modal) {
        this.modals.update((modals) => {
            let index = modals.findIndex(item => item === modal);
            modals.splice(index, 1);
            return modals;
        });
    }
}
let modalManager = new ModalManager();
export default modalManager;
//# sourceMappingURL=modal-manager.js.map