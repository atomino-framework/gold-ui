export default class MenuItem {
    constructor(label, icon, action, role = null) {
        this.label = label;
        this.icon = icon;
        this.action = action;
        this.role = role;
        if (typeof role === "string")
            this.role = [role];
    }
}
//# sourceMappingURL=menu-item.js.map