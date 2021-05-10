package com.save.earth.controller;

import com.save.earth.dto.like.LikeResponseDto;
import com.save.earth.dto.like.LikeSaveRequestDto;
import com.save.earth.service.LikeService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LikeController {

    private final LikeService likeService;

    @ApiOperation(value="좋아요 등록, 취소", response = Integer.class)
    @PostMapping("/like")
    public ResponseEntity like(@Valid @RequestBody LikeSaveRequestDto likeSaveRequestDto){
        return new ResponseEntity(likeService.like(likeSaveRequestDto), HttpStatus.OK);
    }

    @ApiOperation(value="내가 좋아요 한 리스트", response = LikeResponseDto.class)
    @GetMapping("/like/{userId}")
    public ResponseEntity<LikeResponseDto> userLike(@PathVariable(value = "userId") String userId){
        return new ResponseEntity(likeService.userLikeList(userId), HttpStatus.OK);
    }
}
