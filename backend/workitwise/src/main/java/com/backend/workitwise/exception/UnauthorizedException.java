package com.backend.workitwise.exception;

public class UnauthorizedException extends RuntimeException{

    public UnauthorizedException(String message) {
        super(message);
    }
}
