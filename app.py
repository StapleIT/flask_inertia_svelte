from flask import Flask
from flask_inertia import Inertia
from flask_inertia import render_inertia

SECRET_KEY = "secret"
# `base.html` template will be used as inertia default template
INERTIA_TEMPLATE = "base.html"

# import mimetypes

# mimetypes.add_type("text/html", ".svelte")

# init the app setting `template_folder` and `static_folder`
app = Flask(
    __name__,
    # template_folder="templates",
    # static_folder="static/dist",
)

# set the config
app.config.from_object(__name__)

# init inertia adapter
Inertia(app)


@app.route("/")
def index():
    """Example route."""
    fake_data = {
        "foo": "bar",
        "fiz": "buzz",
        "num": 42,
    }
    return render_inertia("Index", props=fake_data)


@app.route("/parameters/")
def params():
    """Second route."""
    return render_inertia("Params")
