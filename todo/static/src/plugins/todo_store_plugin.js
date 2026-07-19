import { Plugin, proxy, signal, computed } from "@odoo/owl";

export class TodoStorePlugin extends Plugin {
    static id = "todo_store";

    setup() {
        this.nextId = 4;

        this.todos = signal.Array([
            proxy({
                id: 1,
                title: "Learn OWL Components",
            }),
            proxy({
                id: 2,
                title: "Build Todo App",
            }),
            proxy({
                id: 3,
                title: "Push First Commit",
                completed: true,
            }),
        ]);

        this.dialog = proxy({
            isOpen: false,
            mode: "create",
            todo: null,
            title: "",
        });

        this.totalTodos = computed(() => this.todos().length);

        this.completedTodos = computed(() =>
            this.todos().filter((todo) => todo.completed).length
        );

        this.pendingTodos = computed(() =>
            this.totalTodos() - this.completedTodos()
        );
    }

    //--------------------------------------------------------------------------
    // Dialog
    //--------------------------------------------------------------------------

    openCreate() {
        this.dialog.mode = "create";
        this.dialog.todo = null;
        this.dialog.title = "";
        this.dialog.isOpen = true;
    }

    openEdit(todo) {
        this.dialog.mode = "edit";
        this.dialog.todo = todo;
        this.dialog.title = todo.title;
        this.dialog.isOpen = true;
    }

    closeDialog() {
        this.dialog.isOpen = false;
        this.dialog.todo = null;
        this.dialog.title = "";
    }

    //--------------------------------------------------------------------------
    // CRUD
    //--------------------------------------------------------------------------

    addTodo() {
        this.todos().push(
            proxy({
                id: this.nextId++,
                title: this.dialog.title.trim(),
                completed: false,
            })
        );

        this.closeDialog();
    }

    updateTodo() {
        if (!this.dialog.todo) {
            return;
        }

        this.dialog.todo.title = this.dialog.title.trim();

        this.closeDialog();
    }

    deleteTodo(todo) {
        const index = this.todos().indexOf(todo);

        if (index >= 0) {
            this.todos().splice(index, 1);
        }
    }

    toggleTodo(todo) {
        todo.completed = !todo.completed;
    }
}
