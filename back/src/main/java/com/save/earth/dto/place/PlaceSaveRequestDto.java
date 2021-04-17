package com.save.earth.dto.place;

import com.save.earth.domain.Place;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PlaceSaveRequestDto {

    private String name;
    private String address;
    private String imgUrl;
    private String category;
    private String contents;
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
