from datetime import datetime

from sqlalchemy import create_engine
from sqlalchemy.ext.serializer import dumps, loads
from sqlalchemy.orm import Session, sessionmaker

from .models import Address, Base, User

engine = create_engine("sqlite:///database.db", echo=True)
Base.metadata.create_all(engine)
# Session = sessionmaker(bind=engine)

with Session(engine) as db:
    
    db.query(User).delete()
    db.query(Address).delete()

    admin = User(
        name="admin",
        fullname="ADMIN",
        phoneNumber="1234567890",
        addresses=[Address(email_address="admin@paskot.com")]
    )
    
    db.add_all([admin])

    db.commit()

class Repo():  
  def getAllUsers(self):
    with Session(engine) as session:
      users = session.query(User).all()
      return users
  
  def getUser(self, id):
    with Session(engine) as session:
      user = session.query(User).filter(User.id == id).first()
      return user
    
  def getUserBySessionId(self, sessionId):
    with Session(engine) as session:
      user = session.query(User).filter(User.sessionId == sessionId).first()
      return user
  
  def checkSessionId(self, sessionId):
    with Session(engine) as session:
      user = session.query(User).filter(User.sessionId == sessionId).first()
      return user.sessionExpires < datetime.now()
  
  def createUser(self, phoneNumber, sessionId, sessionExpires):
    with Session(engine) as session:
      user = User(phoneNumber=phoneNumber, sessionId=sessionId, sessionExpires=sessionExpires)
      session.add(user)
      session.commit()
      return user
  
  def createSession(self):
    return ""

