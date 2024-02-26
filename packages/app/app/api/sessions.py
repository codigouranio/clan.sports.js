import secrets
import string
import hashlib
import random
from .repo import Repo
from datetime import datetime, timedelta


# # Generate a unique session ID
# session_id = generate_session_id()
# print("Session ID:", session_id)

# # Generate SHA-256 hash of the session ID
# sha256_hash = generate_sha256_hash(session_id)
# print("SHA-256 Hash:", sha256_hash)

class Sessions():
  def createTemporaryCode():
    return "Temporary code created"
  
  def checkTemporaryCode():
    return "Temporary code checked"
  
  def createSession(phoneNumber, sessionId):
    # Get today's date
    today = datetime.now()
    # Add 1 month to today's date
    one_month_later = today + timedelta(days=30)
    sessionExpires = one_month_later.strftime('%Y-%m-%d %H:%M:%S')
    user = Repo().createUser(phoneNumber, sessionExpires)
  
  def checkSession(sessionId):
    user = Repo().checkSessionId(sessionId)
    if user and user.sessionExpires > datetime.now():
      return True
    return False
  
  def generateTemporaryCode():
    return '{:06d}'.format(random.randint(0, 999999))
  
  def generate_session_id(length=256):
    characters = string.ascii_letters + string.digits + string.punctuation
    session_id = ''.join(secrets.choice(characters) for _ in range(length))
    return session_id

  def generate_sha256_hash(data):
      sha256_hash = hashlib.sha256(data.encode()).hexdigest()
      return sha256_hash