package com.save.earth.dto.user;

import com.save.earth.domain.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@ApiModel(description = "유저 저장 모델")
@Getter
@Setter
@NoArgsConstructor
public class UserSaveRequestDto {
    @ApiModelProperty(value = "유저 아이디", required = true)
    private String id;

    @ApiModelProperty(value = "유저 이메일", required = true)
    private String email;

    @ApiModelProperty(value = "유저 이름", required = true)
    private String name;

    @ApiModelProperty(value = "유저 이미지", required = true)
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
