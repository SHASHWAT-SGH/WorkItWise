from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from utils.JWT.JWT_handler import  validate_jwt_and_get_current_user


class JWT_brearer(HTTPBearer):
    def __init__(self, auto_error: bool = True):
        super(JWT_brearer, self).__init__(auto_error=auto_error)

    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super(
            JWT_brearer, self
        ).__call__(request)
        if credentials:
            if not credentials.scheme == "Bearer":
                raise HTTPException(
                    status_code=403, detail="Invalid authentication scheme."
                )

            decoded_jwt = validate_jwt_and_get_current_user(credentials.credentials)

            if not decoded_jwt:
                raise HTTPException(
                    status_code=403, detail="Invalid token or expired token."
                )
            
            request.state.decoded_jwt = decoded_jwt
            return decoded_jwt
        else:
            raise HTTPException(status_code=403, detail="Invalid authorization code.")
