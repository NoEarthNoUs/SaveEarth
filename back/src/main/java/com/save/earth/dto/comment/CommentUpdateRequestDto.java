package com.save.earth.dto.comment;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel(description = "댓글 수정 모델")
@Getter
@NoArgsConstructor
public class CommentUpdateRequestDto {
    @ApiModelProperty(value = "댓글 내용", required = true)
    private String contents;
}
