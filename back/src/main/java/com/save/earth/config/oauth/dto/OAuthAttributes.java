package com.save.earth.config.oauth.dto;
import com.save.earth.domain.User;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
public class OAuthAttributes {
    private Map<String, Object> attributes;
    private String nameAttributeKey;
    private String sub;
    private String name;
    private String email;
    private String imgUrl;

    @Builder
    public OAuthAttributes(Map<String, Object> attributes, String nameAttributeKey, String sub, String name, String email, String imgUrl) {
        this.attributes = attributes;
        this.nameAttributeKey = nameAttributeKey;
        this.sub = sub;
        this.name = name;
        this.email = email;
        this.imgUrl = imgUrl;
    }

    public static OAuthAttributes of(String userNameAttributeName, Map<String, Object> attributes) {
        return OAuthAttributes.builder()
                .sub((String) attributes.get("sub"))
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .imgUrl((String) attributes.get("picture"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }

    public User toEntity() {
        return User.builder()
                .id(sub)
                .name(name)
                .email(email)
                .imgUrl(imgUrl)
                .build();
    }
}