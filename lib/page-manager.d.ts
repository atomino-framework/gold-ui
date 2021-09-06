import type ListManager from "./list-manager";
import type Page from "./page";
import type { Writable } from "svelte/store";
export default class PageManager {
    listManager: ListManager | null;
    protected pages: Array<Page>;
    protected active: Page | null;
    $pages: Writable<Array<Page>>;
    $active: Writable<Page | null>;
    private getIndex;
    update(): void;
    remove(page: Page): void;
    add(page: Page): void;
}
//# sourceMappingURL=page-manager.d.ts.map