{
    "name": "Odoo Todo",
    "version": "1.0",
    "category": "Tools",
    "summary": "OWL 3 Todo tutorial",
    "license": "LGPL-3",
    "depends": ["web"],
    "assets": {
        "web.assets_backend": [
            "todo/static/src/**/*",
        ],
    },
    "data": [
        "views/odoo_todo_views.xml",
    ],
    "installable": True,
    "author": "Darpan Daswani - DTDA",
}
