package com.save.earth.config.oauth.dto;

import com.save.earth.domain.User;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {
    private String name;
    private String email;
    private String imgUrl;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.imgUrl = user.getImgUrl();
    }
}
