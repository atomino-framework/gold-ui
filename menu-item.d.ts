import type FaIcon from "./fa-icon";
export default class MenuItem {
    label: string;
    icon: FaIcon | null;
    action: Function | Array<MenuItem>;
    role: string | Array<string> | null;
    constructor(label: string, icon: FaIcon | null, action: Function | Array<MenuItem>, role?: string | Array<string> | null);
}
//# sourceMappingURL=menu-item.d.ts.map