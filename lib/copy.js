import toast from "./toast";
export default function copy(text) {
    navigator.clipboard.writeText(text.toString()).then(toast.success('Copied to clipboard'));
}
//# sourceMappingURL=copy.js.map