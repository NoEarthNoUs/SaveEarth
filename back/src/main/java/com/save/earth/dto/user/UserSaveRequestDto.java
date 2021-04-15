package com.save.earth.dto.user;

import com.save.earth.domain.User;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
public class UserSaveRequestDto {
    private String id;
    private String email;
    private String name;
    private String imgUrl;

    public User toEntity(){
        return User.builder()
                .id(id)
                .email(email)
                .name(name)
                .imgUrl(imgUrl)
                .build();
    }
}
