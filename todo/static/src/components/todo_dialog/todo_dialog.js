import {
    Component,
    plugin,
    onMounted,
    onWillDestroy,
    signal,
} from "@odoo/owl";

import { TodoStorePlugin } from "../../plugins/todo_store_plugin";

export class TodoDialog extends Component {
    static template = "odoo_todo.TodoDialog";

    setup() {
        this.store = plugin(TodoStorePlugin);

        this.inputRef = signal.ref();

        onMounted(() => {
            this.inputRef()?.focus();
            console.log("Dialog mounted");
        });

        this.interval = setInterval(() => {
            console.log("Autosaving draft...");
        }, 3000);

        onWillDestroy(() => {
            clearInterval(this.interval);
            console.log("Dialog destroyed");
        });
    }

    onInput(ev) {
        this.store.dialog.title = ev.target.value;
    }

    onSave() {
        if (!this.store.dialog.title.trim()) {
            return;
        }

        if (this.store.dialog.mode === "create") {
            this.store.addTodo();
        } else {
            this.store.updateTodo();
        }
    }

    onCancel() {
        this.store.closeDialog();
    }
}
