import json

from sqlalchemy.ext.declarative import DeclarativeMeta, declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.orm.attributes import InstrumentedAttribute
from sqlalchemy.orm.relationships import Relationship

Base = declarative_base()

class SerializableMixin:
    """Mixin class to add serialization functionality to SQLAlchemy models."""

    def to_dict(self, include_relationships=True):
      if isinstance(self, SerializableMixin):
        # Initialize an empty dictionary to store the model attributes
        model_dict = {}

        # Iterate over the columns of the model
        for column in self.__table__.columns:
            # Retrieve the value of each attribute and add it to the dictionary
            model_dict[column.name] = getattr(self, column.name)

        if include_relationships:
            # Iterate over the relationships of the model
            for name, relation in self.__mapper__.relationships.items():
                if isinstance(relation, Relationship):
                    related_obj = getattr(self, name)
                    if related_obj is not None:
                        if isinstance(related_obj, list):
                            model_dict[name] = [obj.to_dict(include_relationships=False) for obj in related_obj]
                        else:
                            model_dict[name] = related_obj.to_dict(include_relationships=False)

        return model_dict

# Override the __repr__ method of declarative_base() to provide serialization functionality
Base.__repr__ = lambda self: json.dumps(self.to_dict(), indent=4)
