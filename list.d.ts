import type { SvelteComponent } from "svelte";
import type ListManager from "list-manager";
export default abstract class List {
    listManager: ListManager | null;
    attached(listManager: ListManager): Promise<any>;
    abstract get component(): typeof SvelteComponent;
    abstract get id(): string;
}
//# sourceMappingURL=list.d.ts.map