package swe574.backend.devcomReborn.template;

import lombok.AllArgsConstructor;
import org.springframework.util.StringUtils;

import java.util.function.Consumer;

@AllArgsConstructor
public enum FieldDataType {
    TEXT(FieldDataType::textValidator),
    IMAGE(FieldDataType::textValidator),
    GEOLOCATION(FieldDataType::textValidator),
    DATE(FieldDataType::textValidator),
    TIME(FieldDataType::textValidator),
    SIGNED_NUMBER(FieldDataType::signedNumberValidator),
    UNSIGNED_NUMBER(FieldDataType::unsignedNumberValidator);

    private final Consumer<String> validator;

    public final void validate(String value) {
        validator.accept(value);
    }

    private static void textValidator(String value) {
        if (!StringUtils.hasText(value)) {
            throw new RuntimeException("Field value has no text!");
        }
        if (value.length() > 255) {
            throw new RuntimeException("Field value is longer than 255 characters!");
        }
    }

    private static void signedNumberValidator(String value) {
        if (!StringUtils.hasText(value)) {
            throw new RuntimeException("Field value has no text!");
        }
        try {
            Double.parseDouble(value);
        } catch (NumberFormatException nfe) {
            throw new RuntimeException("Field value is not in correct number format!");
        }
    }

    private static void unsignedNumberValidator(String value) {
        if (!StringUtils.hasText(value)) {
            throw new RuntimeException("Field value has no text!");
        }
        Double number = null;
        try {
            number = Double.parseDouble(value);
        } catch (NumberFormatException nfe) {
            throw new RuntimeException("Field value is not in correct number format!");
        }
        if (number < 0) {
            throw new RuntimeException("Unsigned number field value should be a positive number!");
        }
    }
}
