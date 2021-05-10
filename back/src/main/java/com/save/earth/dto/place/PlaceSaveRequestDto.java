package com.save.earth.dto.place;

import com.save.earth.domain.Place;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@ApiModel(description = "장소 저장 모델")
@Getter
@Setter
@NoArgsConstructor
public class PlaceSaveRequestDto {

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

    public Place toEntity(){
        return Place.builder()
                .name(name)
                .address(address)
                .imgUrl(imgUrl)
                .category(category)
                .contents(contents)
                .allMenuVegan(allMenuVegan)
                .build();
    }
}
