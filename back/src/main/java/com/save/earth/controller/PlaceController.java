package com.save.earth.controller;

import com.save.earth.dto.place.PlaceDetailResponseDto;
import com.save.earth.dto.place.PlaceResponseDto;
import com.save.earth.dto.place.PlaceSaveRequestDto;
import com.save.earth.service.PlaceService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PlaceController {

    private final PlaceService placeService;

    @ApiOperation(value="에코 플레이스 저장")
    @PostMapping("/place")
    public ResponseEntity save(@Valid PlaceSaveRequestDto placeSaveRequestDto, @RequestParam("img") MultipartFile file) throws IOException {
        placeService.savePlace(placeSaveRequestDto, file);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value="에코 플레이스 리스트 불러오기", response = PlaceResponseDto.class)
    @GetMapping("/place")
    public ResponseEntity<PlaceResponseDto> placeList(@PageableDefault(sort = { "name" }, direction = Sort.Direction.ASC, size = 12) Pageable pageable){
        return new ResponseEntity(placeService.findAllPlace(pageable), HttpStatus.OK);
    }

    @ApiOperation(value="에코 플레이스 상세보기", response = PlaceDetailResponseDto.class)
    @GetMapping("/place/{placeId}")
    public ResponseEntity<PlaceDetailResponseDto> placeDetailList(@PathVariable(value = "placeId") Long id){
        return new ResponseEntity(placeService.findById(id), HttpStatus.OK);
    }
}
