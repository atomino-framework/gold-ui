export default class FaIcon {
    constructor(pack, icon) {
        this.pack = pack;
        this.icon = icon;
        this.animation = null;
        this.faa = null;
        this.anim = {
            wrench: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("wrench", speed, reverse, hover); return this; },
            ring: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("ring", speed, reverse, hover); return this; },
            horizontal: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("horizontal", speed, reverse, hover); return this; },
            vertical: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("vertical", speed, reverse, hover); return this; },
            flash: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("flash", speed, reverse, hover); return this; },
            bounce: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("bounce", speed, reverse, hover); return this; },
            spin: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("spin", speed, reverse, hover); return this; },
            float: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("float", speed, reverse, hover); return this; },
            pulse: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("pulse", speed, reverse, hover); return this; },
            shake: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("shake", speed, reverse, hover); return this; },
            tada: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("tada", speed, reverse, hover); return this; },
            passing: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("passing", speed, reverse, hover); return this; },
            burst: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("burst", speed, reverse, hover); return this; },
            falling: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("falling", speed, reverse, hover); return this; },
            rising: (speed = 2, reverse = false, hover = false) => { this.faa = new FaAnim("rising", speed, reverse, hover); return this; },
        };
        if (this.icon.substr(0, 3) === 'fa-')
            this.icon = this.icon.substr(3);
    }
    static s(icon) { return new FaIcon('fas', icon); }
    static r(icon) { return new FaIcon('far', icon); }
    static l(icon) { return new FaIcon('fal', icon); }
    static b(icon) { return new FaIcon('fab', icon); }
    static d(icon) { return new FaIcon('fad', icon); }
    spin() { this.animation = "spin"; return this; }
    pulse() { this.animation = "pulse"; return this; }
    toString() { return this.pack + ' fa-' + this.icon + (this.animation !== null ? " fa-" + this.animation : '') + (this.faa !== null ? this.faa : ''); }
    get tag() { return '<i class="' + this.toString() + '"/>'; }
    get Icon() { return '<span class="icon">' + this.tag + '</span>'; }
    Tag(...classes) { return '<i class="' + this.toString() + ' ' + classes.join(' ') + '"/>'; }
}
class FaAnim {
    constructor(anim, speed = 2, reverse = false, hover = false) {
        this.anim = anim;
        this.speed = speed;
        this.reverse = reverse;
        this.hover = hover;
    }
    toString() {
        return (" faa-" + this.anim +
            (this.speed < 2 ? " faa-slow" : "") +
            (this.speed > 2 ? " faa-fast" : "") +
            (this.hover ? " animated-hover" : " animated") +
            (this.reverse ? " faa-reverse" : ""));
    }
}
//# sourceMappingURL=fa-icon.js.map