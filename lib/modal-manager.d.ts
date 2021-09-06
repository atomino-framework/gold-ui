import type { SvelteComponent } from "svelte";
import type { Writable } from "svelte/store";
export declare class Modal {
    component: typeof SvelteComponent;
    props: any;
    id: any;
    constructor(component: typeof SvelteComponent, props?: any);
    open(): void;
    close(): void;
}
declare class ModalManager {
    modals: Writable<Array<Modal>>;
    add(modal: Modal): void;
    remove(modal: Modal): void;
}
declare let modalManager: ModalManager;
export default modalManager;
//# sourceMappingURL=modal-manager.d.ts.map