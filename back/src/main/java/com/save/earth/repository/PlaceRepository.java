package com.save.earth.repository;


import com.save.earth.domain.Place;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceRepository extends JpaRepository<Place, Long> {
    public List<Place> findAll();
}
