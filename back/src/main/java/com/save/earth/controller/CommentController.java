package com.save.earth.controller;

import com.save.earth.dto.comment.CommentResponseDto;
import com.save.earth.dto.comment.CommentSaveRequestDto;
import com.save.earth.dto.comment.CommentUpdateRequestDto;
import com.save.earth.service.CommentService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class CommentController {

    private final CommentService commentService;

    @ApiOperation(value="댓글 등록")
    @PostMapping("/comment")
    public ResponseEntity saveComment(@Valid @RequestBody CommentSaveRequestDto commentSaveRequestDto){
        commentService.saveComment(commentSaveRequestDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value="댓글 수정")
    @PatchMapping("/comment/{commentId}")
    public ResponseEntity updateComment(@PathVariable(value = "commentId") Long id, @Valid @RequestBody CommentUpdateRequestDto commentUpdateRequestDto){
        commentService.updateComment(id, commentUpdateRequestDto.getContents());
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value="댓글 삭제")
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity deleteComment(@PathVariable(value = "commentId") Long id){
        commentService.deleteComment(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value="게시글에 대한 댓글 리스트 조회", response = CommentResponseDto.class)
    @GetMapping("/comment/{placeId}")
    public ResponseEntity<CommentResponseDto> placeCommentList(@PathVariable(value = "placeId") Long placeId,
                                                                @PageableDefault Pageable pageable){
        return new ResponseEntity(commentService.selectPlaceComment(placeId, pageable), HttpStatus.OK);
    }

    @ApiOperation(value="내가 쓴 댓글 조회", response = String.class)
    @GetMapping("/comment/user/{userId}")
    public ResponseEntity<String> userCommentList(@PathVariable(value = "userId") String userId,
                                        @PageableDefault Pageable pageable){
        return new ResponseEntity(commentService.selectUserComment(userId, pageable), HttpStatus.OK);
    }
}
