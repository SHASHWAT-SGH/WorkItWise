package com.backend.workitwise.validator;

import com.backend.workitwise.exception.InvalidRequestParameterException;
import jakarta.validation.*;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class RequestParameterValidator<T> {
    private final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = factory.getValidator();

    public void validate(T objectToValidate){

        Set<ConstraintViolation<T>> violations = validator.validate(objectToValidate);
        if(!violations.isEmpty()){
            Map<Path, String> mappedViolations = violations
                    .stream()
                    .collect(Collectors.toMap(
                            ConstraintViolation::getPropertyPath,
                            ConstraintViolation::getMessageTemplate,
                            (message1, message2) -> message1 + " " + message2
                    ));
            throw new InvalidRequestParameterException("Invalid request parameter(s)", mappedViolations);
        }
    }

}
