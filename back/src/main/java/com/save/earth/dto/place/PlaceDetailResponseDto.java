package com.save.earth.dto.place;

import com.save.earth.domain.Place;
import com.save.earth.dto.comment.CommentResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class PlaceDetailResponseDto {
    private String name;
    private String address;
    private String imgUrl;
    private String category;
    private String contents;
    private int allMenuVegan;
    private List<CommentResponseDto> commentList = new ArrayList<>();

    public PlaceDetailResponseDto(Place place) {
        this.name = place.getName();
        this.address = place.getAddress();
        this.imgUrl = place.getImgUrl();
        this.category = place.getCategory();
        this.contents = place.getContents();
        this.allMenuVegan = place.getAllMenuVegan();
        this.commentList = place.getCommentList().stream().map(CommentResponseDto::new).collect(Collectors.toList());
    }
}
