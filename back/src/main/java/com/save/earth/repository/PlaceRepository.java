package com.save.earth.repository;


import com.save.earth.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    public Optional<Place> findById(Long id);
}
