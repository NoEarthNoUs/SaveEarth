package com.save.earth.dto.place;

import com.save.earth.domain.Place;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PlaceResponseDto {
    private String name;
    private String address;
    private String imgUrl;
    private String category;
    private String contents;
    private int allMenuVegan;

    public PlaceResponseDto (Place place) {
        this.name = place.getName();
        this.address = place.getAddress();
        this.imgUrl = place.getImgUrl();
        this.category = place.getCategory();
        this.contents = place.getContents();
        this.allMenuVegan = place.getAllMenuVegan();
    }
}
