import { Component, plugin, providePlugins } from "@odoo/owl";
import { registry } from "@web/core/registry";

import { Card } from "./components/card/card";
import { TodoItem } from "./components/todo_item/todo_item";
import { TodoStorePlugin } from "./plugins/todo_store_plugin";
import { TodoDialog } from "./components/todo_dialog/todo_dialog";

export class TodoApp extends Component {
    static template = "odoo_todo.TodoApp";
    static components = { Card, TodoItem, TodoDialog };

    setup() {
        providePlugins([TodoStorePlugin]);

        this.store = plugin(TodoStorePlugin);
    }

    onAddTodo() {
        this.store.openCreate();
    }
}

registry.category("actions").add("odoo_todo.todo_app", TodoApp);
