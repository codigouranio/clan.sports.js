"""General page routes."""
from flask import Blueprint, Flask
from flask import current_app as app
from flask import (jsonify, redirect, render_template, request,
                   send_from_directory, session, url_for)
from werkzeug.utils import safe_join

# Blueprint Configuration
ui_blueprint = Blueprint(
    "ui_blueprint",
    __name__, 
    url_prefix='/app',
    static_folder=app.config.get('UI_APP_STATIC_FOLDER'), static_url_path=''
)

@ui_blueprint.route('/', defaults={'path': 'index.html'})
@ui_blueprint.route('/<string:path>')
def catch_all(path):
    return ui_blueprint.send_static_file(path)

@ui_blueprint.route('/static/<string:path_1>/<string:path>')
def catch_all_1_level(path_1, path):
    # print(home_blueprint.root_path)
    return ui_blueprint.send_static_file(safe_join('./static/', path_1, path))
