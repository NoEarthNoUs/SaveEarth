package com.save.earth.dto.story;

import com.save.earth.domain.Story;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StoryResponseDto {
    private Long id;
    private String title;
    private String contents;
    private String imgUrl;

    public StoryResponseDto(Story story){
        this.id = story.getId();
        this.title = story.getTitle();
        this.contents = story.getContents();
        this.imgUrl = story.getImgUrl();
    }
}
