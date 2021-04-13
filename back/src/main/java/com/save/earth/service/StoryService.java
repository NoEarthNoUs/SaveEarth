package com.save.earth.service;

import com.save.earth.dto.story.StoryResponseDto;
import com.save.earth.repository.StoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class StoryService {
    private final StoryRepository storyRepository;

    public List<StoryResponseDto> findAllStory(Pageable pageable){
        return storyRepository.findAll(pageable).stream().map(StoryResponseDto::new).collect(Collectors.toList());
    }
}
