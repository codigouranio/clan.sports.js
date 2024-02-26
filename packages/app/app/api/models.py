from datetime import datetime
from typing import List, Optional

from flask_login import UserMixin
from sqlalchemy import DateTime, ForeignKey, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

from .serializablemixin import SerializableMixin


class Base(DeclarativeBase):
    pass

class User(Base, UserMixin, SerializableMixin):
    __tablename__ = "user_account"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(30))
    phoneNumber: Mapped[str] = mapped_column(String(30))
    fullname: Mapped[Optional[str]]
    is_active: Mapped[bool] = mapped_column(default=True)
    addresses: Mapped[List["Address"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )
    def __repr__(self) -> str:
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r}, phoneNumber={self.phoneNumber!r})"
    
class RequestCode(Base, SerializableMixin):
    __tablename__ = "request_code"
    id: Mapped[int] = mapped_column(primary_key=True)
    code: Mapped[str] = mapped_column(String(6))
    phoneNumber: Mapped[str] = mapped_column(String(30))
    sessionId: Mapped[str] = mapped_column(String(256))
    expires: Mapped[datetime] = mapped_column(DateTime)
    def __repr__(self) -> str:
        return f"RequestCode(id={self.id!r}, code={self.code!r})"

class Address(Base, SerializableMixin):
    __tablename__ = "address"
    id: Mapped[int] = mapped_column(primary_key=True)
    email_address: Mapped[str]
    user_id: Mapped[int] = mapped_column(ForeignKey("user_account.id"))
    user: Mapped["User"] = relationship(back_populates="addresses")
    def __repr__(self) -> str:
        return f"Address(id={self.id!r}, email_address={self.email_address!r})"