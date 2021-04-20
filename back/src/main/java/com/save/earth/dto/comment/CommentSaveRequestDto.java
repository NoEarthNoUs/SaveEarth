package com.save.earth.dto.comment;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentSaveRequestDto {

    private String contents;
    private Long placeId;
    private String userId;

}
