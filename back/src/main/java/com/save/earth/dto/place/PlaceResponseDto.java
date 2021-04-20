package com.save.earth.dto.place;

import com.save.earth.domain.Place;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PlaceResponseDto {
    private String name;
    private String imgUrl;
    private String category;

    public PlaceResponseDto (Place place) {
        this.name = place.getName();
        this.imgUrl = place.getImgUrl();
        this.category = place.getCategory();
    }
}
