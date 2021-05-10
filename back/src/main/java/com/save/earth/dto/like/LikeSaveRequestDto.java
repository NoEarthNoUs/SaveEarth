package com.save.earth.dto.like;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel(description = "좋아요 저장 모델")
@Getter
@NoArgsConstructor
public class LikeSaveRequestDto {
    @ApiModelProperty(value = "좋아요 누른 유저 아이디", required = true)
    private String userId;

    @ApiModelProperty(value = "좋아요 누른 장소 아이디", required = true)
    private Long placeId;
}
