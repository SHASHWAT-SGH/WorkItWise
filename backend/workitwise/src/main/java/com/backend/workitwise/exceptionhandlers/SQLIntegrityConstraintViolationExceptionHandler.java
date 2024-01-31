package com.backend.workitwise.exceptionhandlers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.SQLIntegrityConstraintViolationException;

@RestControllerAdvice
public class SQLIntegrityConstraintViolationExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {SQLIntegrityConstraintViolationException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> handle(SQLIntegrityConstraintViolationException exception, WebRequest request){

        return handleExceptionInternal(exception, "Duplicate entry for " + exception.getMessage().split(" ")[2], new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }

}
