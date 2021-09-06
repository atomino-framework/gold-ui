export default class FaIcon {
    pack: string;
    icon: string;
    static s(icon: string): FaIcon;
    static r(icon: string): FaIcon;
    static l(icon: string): FaIcon;
    static b(icon: string): FaIcon;
    static d(icon: string): FaIcon;
    constructor(pack: string, icon: string);
    animation: string | null;
    spin(): this;
    pulse(): this;
    protected faa: FaAnim | null;
    anim: any;
    toString(): string;
    get tag(): string;
    get Icon(): string;
    Tag(...classes: Array<string>): string;
}
declare class FaAnim {
    anim: string;
    speed: number;
    reverse: boolean;
    hover: boolean;
    constructor(anim: string, speed?: number, reverse?: boolean, hover?: boolean);
    toString(): string;
}
export {};
//# sourceMappingURL=fa-icon.d.ts.map