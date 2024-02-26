"""Compile static assets."""
from flask import current_app as app
from flask_assets import Bundle


def compile_static_assets(assets: Bundle) -> Bundle:
    """
    Create CSS stylesheet bundles from .less files.

    :param Bundle assets: Static asset bundle.

    :returns: Bundle
    """
    return assets