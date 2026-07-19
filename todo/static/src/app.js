import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class TodoApp extends Component {
    static template = "odoo_todo.TodoApp";

    setup() {
        // Component initialization happens here.
    }

    onAddTodoClick() {
        window.alert("Coming soon! We'll add todos in the next lesson.");
    }
}

registry.category("actions").add("odoo_todo.todo_app", TodoApp);
