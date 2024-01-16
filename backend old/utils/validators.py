def is_valid_password(password):
    if len(password) > 6:
        return password
    else:
        raise ValueError("Password must be of atleast 6 characters.")
