package com.save.earth.controller;

import com.save.earth.domain.Place;
import com.save.earth.dto.PlaceResponseDto;
import com.save.earth.dto.PlaceSaveRequestDto;
import com.save.earth.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @PostMapping("/api/place")
    public void save(PlaceSaveRequestDto placeSaveRequestDto, @RequestParam("img") MultipartFile file){
        placeService.savePlace(placeSaveRequestDto, file);
    }

    @GetMapping("/api/place")
    public List<PlaceResponseDto> placeList(){
        return placeService.findAllPlace();
    }
}
