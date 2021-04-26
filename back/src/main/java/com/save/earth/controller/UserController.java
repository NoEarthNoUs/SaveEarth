package com.save.earth.controller;

import com.save.earth.dto.user.UserSaveRequestDto;
import com.save.earth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/api/user/{userId}")
    public String getUser(@PathVariable("userId") String userId){
        return userService.selectUser(userId);
    }
}
