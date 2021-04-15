package com.save.earth.controller;

import com.save.earth.dto.user.UserSaveRequestDto;
import com.save.earth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/api/user")
    public void saveUser(UserSaveRequestDto userSaveRequestDto){
        userService.saveUser(userSaveRequestDto);
    }
}
