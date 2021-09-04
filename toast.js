// @ts-ignore
import { Notification } from "svelma";
export default {
    success: (message) => Notification.create({ message, type: "is-success", position: "is-bottom-right", showClose: false }),
    white: (message) => Notification.create({ message, type: "is-white", position: "is-bottom-right", showClose: false }),
    black: (message) => Notification.create({ message, type: "is-black", position: "is-bottom-right", showClose: false }),
    light: (message) => Notification.create({ message, type: "is-light", position: "is-bottom-right", showClose: false }),
    primary: (message) => Notification.create({ message, type: "is-primary", position: "is-bottom-right", showClose: false }),
    info: (message) => Notification.create({ message, type: "is-info", position: "is-bottom-right", showClose: false }),
    warning: (message) => Notification.create({ message, type: "is-warning", position: "is-bottom-right", showClose: false }),
    danger: (message) => Notification.create({ message, type: "is-danger", position: "is-bottom-right", showClose: false })
};
//# sourceMappingURL=toast.js.map