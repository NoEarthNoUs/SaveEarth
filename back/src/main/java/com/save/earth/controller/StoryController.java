package com.save.earth.controller;

import com.save.earth.dto.story.StoryResponseDto;
import com.save.earth.service.StoryService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class StoryController {

    private final StoryService storyService;

    @ApiOperation(value="스토리 전체 리스트 불러오기", response = StoryResponseDto.class)
    @GetMapping("/api/story")
    public ResponseEntity<StoryResponseDto> storyList(@PageableDefault(sort = { "id" }, direction = Sort.Direction.DESC, size = 6) Pageable pageable){
        return new ResponseEntity(storyService.findAllStory(pageable), HttpStatus.OK);
    }

    @ApiOperation(value="스토리 상세보기", response = StoryResponseDto.class)
    @GetMapping("/api/story/{storyId}")
    public ResponseEntity<StoryResponseDto> storyDetailList(@PathVariable(value = "storyId") Long id){
        return new ResponseEntity(storyService.findById(id), HttpStatus.OK);
    }


}
