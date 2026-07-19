import { Component, plugin } from "@odoo/owl";
import { useProps, t } from "@odoo/owl";

import { TodoStorePlugin } from "../../plugins/todo_store_plugin";

export class TodoItem extends Component {
    static template = "odoo_todo.TodoItem";

    props = useProps({
        todo: t.object({
            id: t.number(),
            title: t.string(),
            completed: t.boolean().optional(false),
        }),
    });

    setup() {
        this.store = plugin(TodoStorePlugin);
    }
}
