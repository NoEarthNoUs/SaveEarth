package com.save.earth.controller;

import com.save.earth.dto.place.PlaceDetailResponseDto;
import com.save.earth.dto.place.PlaceResponseDto;
import com.save.earth.dto.place.PlaceSaveRequestDto;
import com.save.earth.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    public List<PlaceResponseDto> placeList(@PageableDefault(sort = { "name" }, direction = Sort.Direction.ASC, size = 12) Pageable pageable){
        return placeService.findAllPlace(pageable);
    }

    @GetMapping("/api/place/{placeId}")
    public List<PlaceDetailResponseDto> placeDetailList(@PathVariable(value = "placeId") Long id){
        return placeService.findById(id);
    }
}
