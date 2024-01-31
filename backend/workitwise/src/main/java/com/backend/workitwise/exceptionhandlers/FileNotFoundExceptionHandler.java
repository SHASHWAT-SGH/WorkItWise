package com.backend.workitwise.exceptionhandlers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.FileNotFoundException;

@RestControllerAdvice
public class FileNotFoundExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = {FileNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handle(FileNotFoundException exception, WebRequest request){

        return handleExceptionInternal(exception,"The asset you are looking for is not available." , new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }
}
