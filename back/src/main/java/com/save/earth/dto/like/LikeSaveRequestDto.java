package com.save.earth.dto.like;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LikeSaveRequestDto {
    private String userId;
    private Long placeId;
}
