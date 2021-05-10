package com.save.earth.dto.user;

import com.save.earth.domain.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@ApiModel(description = "유저 응답 모델")
@Getter
@NoArgsConstructor
public class UserResponseDto {
    @ApiModelProperty(value = "유저 아이디", required = true)
    private String id;

    @ApiModelProperty(value = "유저 이메일", required = true)
    private String email;

    @ApiModelProperty(value = "유저 이미지", required = true)
    private String imgUrl;

    @ApiModelProperty(value = "유저 이름", required = true)
    private String name;

    public UserResponseDto(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.imgUrl = user.getImgUrl();
        this.name = user.getName();
    }
}
