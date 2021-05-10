package com.save.earth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())
            .select()
            .apis(RequestHandlerSelectors.any()) // 현재 RequestMapping으로 할당된 모든 URL 리스트를 추출
            .paths(PathSelectors.ant("/**")) // 그중 /api/** 인 URL들만 필터링
            .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("SAVE EARTH REST API DOCS")
                .description("Restful API Reference")
                .termsOfServiceUrl("https://github.com/NoEarthNoUs/SaveEarth")
                .license("saveearth License")
                .licenseUrl("https://github.com/NoEarthNoUs/SaveEarth")
                .version("1.0")
                .build();
    }
}
