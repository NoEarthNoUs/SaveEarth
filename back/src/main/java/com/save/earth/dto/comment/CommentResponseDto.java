package com.save.earth.dto.comment;

import com.save.earth.domain.Comment;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@ApiModel(description = "댓글 응답 모델")
@Getter
@NoArgsConstructor
public class CommentResponseDto {

    @ApiModelProperty(value = "댓글 내용", required = true)
    private String contents;

    @ApiModelProperty(value = "댓글 작성자", required = true)
    private String userName;

    @ApiModelProperty(value = "댓글 작성자 이미지", required = true)
    private String userImgUrl;

    @ApiModelProperty(value = "댓글 작성 시간", required = true)
    private LocalDateTime createDateTime;

    public CommentResponseDto(Comment comment){
        this.contents = comment.getContents();
        this.userName = comment.getUserComment().getName();
        this.userImgUrl = comment.getUserComment().getImgUrl();
        this.createDateTime = comment.getCreateDateTime();
    }
}
