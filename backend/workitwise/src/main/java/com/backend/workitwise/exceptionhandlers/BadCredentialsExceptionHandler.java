package com.backend.workitwise.exceptionhandlers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.naming.AuthenticationException;
import java.io.FileNotFoundException;

public class AuthenticationExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {AuthenticationException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handle(AuthenticationException exception, WebRequest request){

        return handleExceptionInternal(exception,"Invalid email or password." , new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }
}
