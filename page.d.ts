import type { SvelteComponent } from "svelte";
import FaIcon from "./fa-icon";
import type PageManager from "./page-manager";
import type { Writable } from "svelte/store";
export default abstract class Page {
    closeable: boolean;
    pageManager: PageManager | null;
    $loading: Writable<boolean>;
    set loading(loading: boolean);
    get id(): string;
    get $icon(): Writable<FaIcon>;
    get $title(): Writable<string>;
    get $isChanged(): Writable<boolean>;
    attached(pageManager: PageManager): void;
    detached(): void;
    abstract get component(): typeof SvelteComponent;
}
//# sourceMappingURL=page.d.ts.map