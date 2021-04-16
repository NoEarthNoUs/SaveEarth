package com.save.earth.dto.comment;

import com.save.earth.domain.Comment;
import com.save.earth.domain.Place;
import com.save.earth.domain.User;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@NoArgsConstructor
public class CommentSaveRequestDto {

    private String contents;
    private Long placeId;
    private Long userId;

//    public Comment toEntity(){
//        return Comment.builder()
//                .contents(contents)
//                .build();
//    }
}
