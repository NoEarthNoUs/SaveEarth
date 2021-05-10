package com.save.earth.dto.like;

import com.save.earth.domain.Like;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel(description = "좋아요 응답 모델")
@Getter
@NoArgsConstructor
public class LikeResponseDto {

    @ApiModelProperty(value = "장소 이름", required = true)
    private String name;

    @ApiModelProperty(value = "장소 이미지", required = true)
    private String imgUrl;

    @ApiModelProperty(value = "장소 카테고리", required = true)
    private String category;

    public LikeResponseDto (Like like) {
        this.name = like.getPlaceLike().getName();
        this.imgUrl = like.getPlaceLike().getImgUrl();
        this.category = like.getPlaceLike().getCategory();
    }
}