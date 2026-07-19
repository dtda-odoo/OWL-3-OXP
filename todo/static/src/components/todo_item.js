import { Component } from "@odoo/owl";
import { useProps, t } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "odoo_todo.TodoItem";

    props = useProps({
        todo: t.object({
            id: t.number(),
            title: t.string(),
            completed: t.boolean().optional(false),
        }),
        onToggle: t.function(),
        onDelete: t.function(),
        onEdit: t.function(),
    });
}
