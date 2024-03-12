package com.backend.workitwise.exceptionhandlers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class UsernameNotFoundExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {UsernameNotFoundException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> handle(UsernameNotFoundException exception, WebRequest request){
        return handleExceptionInternal(exception,exception.getMessage() , new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }
}
