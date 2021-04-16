package com.save.earth.dto.comment;

import com.save.earth.domain.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class CommentResponseDto {

    private String contents;
//    private String userId;
//    private String userImgUrl;
    private LocalDateTime createDateTime;

    public CommentResponseDto(Comment comment){
        this.contents = comment.getContents();
//        this.userId = comment.getUserComment().getId();
//        this.userImgUrl = comment.getUserComment().getImgUrl();
        this.createDateTime = comment.getCreateDateTime();
    }
}
