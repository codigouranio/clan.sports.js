from flask import Blueprint, Flask
from flask import current_app as app
from flask import current_app as app1
from flask import (jsonify, redirect, render_template, request,
                   send_from_directory, session, url_for)
from werkzeug.utils import safe_join


# Blueprint Configuration
home_blueprint = Blueprint(
    "home_blueprint",
    __name__, 
    template_folder='templates', 
    static_folder='static', static_url_path='',
    url_prefix="/"
)

@home_blueprint.route("/heartbeat")
def heartbeat():
    return jsonify({"status": "healthy"})

@home_blueprint.route("/letmein", methods=["GET"])
def letmein() -> str:
    return render_template(
        "letmein.html",
        title="Let Me In",
        template="letmein-template",
        test={ "test": "test" }
    )

@home_blueprint.route("/letmeleave", methods=["GET"])
def letmeleave() -> str:
    return render_template(
        "letmeleave.html",
        title="Let Me In",
        template="letmeleave-template",
        test={ "test": "test" }
    )

@home_blueprint.route("/", methods=["GET"])
def test() -> str:
    return render_template(
        "index.html",
        title="Test",
        template="test-template",
        test={ "test": "test" }
    )

