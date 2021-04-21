package com.save.earth.controller;

import com.save.earth.dto.like.LikeResponseDto;
import com.save.earth.dto.like.LikeSaveRequestDto;
import com.save.earth.service.LikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LikeController {

    private final LikeService likeService;

    @PostMapping("/like")
    public int like(@RequestBody LikeSaveRequestDto likeSaveRequestDto){
        return likeService.like(likeSaveRequestDto);
    }

    @GetMapping("/like/{userId}")
    public List<LikeResponseDto> userLike(@PathVariable(value = "userId") String userId){
        return likeService.userLikeList(userId);
    }
}
