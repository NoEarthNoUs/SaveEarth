package com.save.earth.controller;

import com.save.earth.dto.story.StoryResponseDto;
import com.save.earth.service.StoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class StoryController {

    private final StoryService storyService;

    @GetMapping("/api/story")
    public List<StoryResponseDto> storyList(@PageableDefault(sort = { "id" }, direction = Sort.Direction.DESC, size = 6) Pageable pageable){
        return storyService.findAllStory(pageable);
    }
}
