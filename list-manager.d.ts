import type PageManager from "./page-manager";
import type List from "./list";
import type { Writable } from "svelte/store";
export default class ListManager {
    pageManager: PageManager | null;
    protected lists: Array<List>;
    protected active: List | null;
    $lists: Writable<Array<List>>;
    $active: Writable<List | null>;
    private getIndex;
    getList(id: string): List;
    update(): void;
    add(list: List): void;
}
//# sourceMappingURL=list-manager.d.ts.map