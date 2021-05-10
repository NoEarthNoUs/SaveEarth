package com.save.earth.dto.story;

import com.save.earth.domain.Story;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel(description = "스토리 응답 모델")
@Getter
@NoArgsConstructor
public class StoryResponseDto {

    @ApiModelProperty(value = "스토리 아이디", required = true)
    private Long id;

    @ApiModelProperty(value = "스토리 제목", required = true)
    private String title;

    @ApiModelProperty(value = "스토리 내용", required = true)
    private String contents;

    @ApiModelProperty(value = "스토리 이미지", required = true)
    private String imgUrl;

    public StoryResponseDto(Story story){
        this.id = story.getId();
        this.title = story.getTitle();
        this.contents = story.getContents();
        this.imgUrl = story.getImgUrl();
    }
}
