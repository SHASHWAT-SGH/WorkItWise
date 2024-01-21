package com.backend.workitwise.exception;

import jakarta.validation.Path;
import lombok.Getter;

import java.util.Map;


@Getter
public class InvalidRequestParameterException extends RuntimeException{

    private final Map<Path,String> violations;
    public InvalidRequestParameterException(String message, Map<Path,String> violations) {
        super(message);
        this.violations = violations;
    }

}
