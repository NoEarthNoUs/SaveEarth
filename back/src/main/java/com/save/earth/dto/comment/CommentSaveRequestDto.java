package com.save.earth.dto.comment;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel(description = "댓글 저장 모델")
@Getter
@NoArgsConstructor
public class CommentSaveRequestDto {

    @ApiModelProperty(value = "댓글 내용", required = true)
    private String contents;

    @ApiModelProperty(value = "댓글이 작성된 게시글 번호", required = true)
    private Long placeId;

    @ApiModelProperty(value = "댓글 작성자의 유저 번호", required = true)
    private String userId;

}
