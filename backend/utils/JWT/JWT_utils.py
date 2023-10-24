from jose import JWTError, jwt
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from schema.response.auth.res_auth_schema import User_Information
from models.user_models import get_user_info_using_already_hashed_pass


class JWT_utils:
    __oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

    def __init__(self):
        self.__SECRET_KEY = (
            "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
        )
        self.__ALGORITHM = "HS256"
        self.__ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 hours

    def create_access_token(self, data: dict):
        to_encode = data.copy()
        expire = datetime.utcnow() + timedelta(
            minutes=self.__ACCESS_TOKEN_EXPIRE_MINUTES
        )
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(
            to_encode, self.__SECRET_KEY, algorithm=self.__ALGORITHM
        )
        return encoded_jwt

    def validate_jwt_and_get_current_user(self, token: str = Depends(__oauth2_scheme)):
        credential_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        try:
            payload = jwt.decode(
                token, self.__SECRET_KEY, algorithms=[self.__ALGORITHM]
            )
            username: str = payload.get("username")  # username is email (here)
            password: str = payload.get("password")
            if username is None or password is None:
                raise credential_exception
            # token_data = TokenData_req(user_email=username, user_password=password)
        except JWTError:
            raise credential_exception
        user = get_user_info_using_already_hashed_pass(
            email=username, password=password
        )
        if user is None:
            raise credential_exception
        return User_Information(
            user_name=user[1], user_email=user[2], user_password=user[3]
        )
