package com.save.earth.dto.user;

import com.save.earth.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserResponseDto {
    private String id;
    private String email;
    private String imgUrl;
    private String name;

    public UserResponseDto(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.imgUrl = user.getImgUrl();
        this.name = user.getName();
    }
}
