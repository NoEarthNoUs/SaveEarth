package com.save.earth.dto.place;

import com.save.earth.domain.Place;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel(description = "장소 상세 응답 모델")
@Getter
@NoArgsConstructor
public class PlaceDetailResponseDto {
    @ApiModelProperty(value = "장소 아이디", required = true)
    private Long id;

    @ApiModelProperty(value = "장소 이름", required = true)
    private String name;

    @ApiModelProperty(value = "장소 주소", required = true)
    private String address;

    @ApiModelProperty(value = "장소 이미지", required = true)
    private String imgUrl;

    @ApiModelProperty(value = "장소 카테고리", required = true)
    private String category;

    @ApiModelProperty(value = "장소 내용", required = true)
    private String contents;

    @ApiModelProperty(value = "전체 메뉴 비건 여부", required = true)
    private int allMenuVegan;

    public PlaceDetailResponseDto(Place place) {
        this.id = place.getId();
        this.name = place.getName();
        this.address = place.getAddress();
        this.imgUrl = place.getImgUrl();
        this.category = place.getCategory();
        this.contents = place.getContents();
        this.allMenuVegan = place.getAllMenuVegan();
    }
}
