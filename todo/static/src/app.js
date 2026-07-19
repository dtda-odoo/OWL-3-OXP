import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class TodoApp extends Component {
    static template = "odoo_todo.TodoApp";
}

registry.category("actions").add("odoo_todo.todo_app", TodoApp);
