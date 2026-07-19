import { Component, signal, proxy } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { TodoItem } from "./components/todo_item";
import { Card } from "./components/card";

export class TodoApp extends Component {
    static template = "odoo_todo.TodoApp";
    static components = { Card, TodoItem };

    setup() {
        this.nextId = 4;

        this.todos = signal.Array([
            proxy({ id: 1, title: "Learn OWL Components" }),
            proxy({ id: 2, title: "Build Todo App" }),
            proxy({ id: 3, title: "Push First Commit", completed: true }),
        ]);
    }

    addTodo() {
        const title = window.prompt("Todo title");

        if (!title) {
            return;
        }

        this.todos().push({
            id: this.nextId++,
            title,
        });
    }

   toggleTodo(todo) {
        todo.completed = !todo.completed;
    }

    editTodo(todo) {
        const title = window.prompt("Edit todo", todo.title);

        if (!title) {
            return;
        }

        todo.title = title;
    }

    deleteTodo(todo) {
        const index = this.todos().indexOf(todo);
        this.todos().splice(index, 1);
    }
}

registry.category("actions").add("odoo_todo.todo_app", TodoApp);
