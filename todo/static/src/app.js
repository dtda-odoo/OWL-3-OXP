import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { TodoItem } from "./components/todo_item";
import { Card } from "./components/card";

export class TodoApp extends Component {
    static template = "odoo_todo.TodoApp";
    static components = { Card, TodoItem };

    setup() {
        this.todos = [
            { id: 1, title: "Learn OWL Components" },
            { id: 2, title: "Build Todo App" },
            { id: 3, title: "Push First Commit" },
        ];
    }

    onAddTodoClick() {
        window.alert("Coming soon! We'll add todos in the next lesson.");
    }
}

registry.category("actions").add("odoo_todo.todo_app", TodoApp);
