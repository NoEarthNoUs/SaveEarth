package com.save.earth.controller;

import com.save.earth.dto.comment.CommentResponseDto;
import com.save.earth.dto.comment.CommentSaveRequestDto;
import com.save.earth.dto.comment.CommentUpdateRequestDto;
import com.save.earth.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/comment")
    public void saveComment(@RequestBody CommentSaveRequestDto commentSaveRequestDto){
        commentService.saveComment(commentSaveRequestDto);
    }

    @PatchMapping("/comment/{commentId}")
    public void updateComment(@PathVariable(value = "commentId") Long id, @RequestBody CommentUpdateRequestDto commentUpdateRequestDto){
        commentService.updateComment(id, commentUpdateRequestDto.getContents());
    }

    @DeleteMapping("/comment/{commentId}")
    public void deleteComment(@PathVariable(value = "commentId") Long id){
        commentService.deleteComment(id);
    }

    @GetMapping("/comment/{placeId}")
    public List<CommentResponseDto> placeCommentList(@PathVariable(value = "placeId") Long placeId,
                                                     @PageableDefault Pageable pageable){
        return commentService.selectPlaceComment(placeId, pageable);
    }

    @GetMapping("/comment/user/{userId}")
    public List<String> userCommentList(@PathVariable(value = "userId") String userId,
                                        @PageableDefault Pageable pageable){
        return commentService.selectUserComment(userId, pageable);
    }
}
