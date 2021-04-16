package com.save.earth.controller;

import com.save.earth.dto.comment.CommentResponseDto;
import com.save.earth.dto.comment.CommentUpdateRequestDto;
import com.save.earth.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CommentController {

    private final CommentService commentService;

//    @PostMapping("/comment")
//    public CommentSaveRequestDto saveComment(){
//
//    }

    @PatchMapping("/comment/{commentId}")
    public void updateComment(@PathVariable(value = "commentId") Long id, @RequestBody CommentUpdateRequestDto commentUpdateRequestDto){
        commentService.updateComment(id, commentUpdateRequestDto.getContents());
    }

    @DeleteMapping("/comment/{commentId}")
    public void deleteComment(@PathVariable(value = "commentId") Long id){
        commentService.deleteComment(id);
    }

    @GetMapping("/comment/{placeId}")
    public List<CommentResponseDto> commentList(@PathVariable(value = "placeId") Long placeId){
        return commentService.selectComment(placeId);
    }
}
