package swe574.backend.devcomReborn.config;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

@Configuration
public class AppConfig {
    @Bean
    public ObjectMapper objectMapper(Jackson2ObjectMapperBuilder builder) {
        ObjectMapper objectMapper = builder.build();
        objectMapper.addMixIn(Object.class, IgnoreHibernatePropertiesInJackson.class);
        return objectMapper;
    }

    // https://stackoverflow.com/a/44152216/1939921
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private static class IgnoreHibernatePropertiesInJackson {
    }
}
