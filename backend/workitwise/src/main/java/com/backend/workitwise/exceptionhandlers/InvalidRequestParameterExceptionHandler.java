package com.backend.workitwise.exceptionhandlers;

import com.backend.workitwise.exception.InvalidRequestParameterException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class InvalidRequestParameterExceptionHandler extends ResponseEntityExceptionHandler{
    @ExceptionHandler(value = {InvalidRequestParameterException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> handle(InvalidRequestParameterException exception, WebRequest request){

        return handleExceptionInternal(exception, exception.getViolations(), new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }
}
