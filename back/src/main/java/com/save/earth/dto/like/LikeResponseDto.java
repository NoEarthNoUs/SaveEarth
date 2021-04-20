package com.save.earth.dto.like;

import com.save.earth.domain.Like;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LikeResponseDto {

    private String name;
    private String imgUrl;
    private String category;

    public LikeResponseDto (Like like) {
        this.name = like.getPlaceLike().getName();
        this.imgUrl = like.getPlaceLike().getImgUrl();
        this.category = like.getPlaceLike().getCategory();
    }
}