package com.save.earth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SaveEarthApplication {

	public static void main(String[] args) {
		SpringApplication.run(SaveEarthApplication.class, args);
	}

}
