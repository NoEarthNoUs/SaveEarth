package com.save.earth.controller;

import com.save.earth.dto.user.UserResponseDto;
import com.save.earth.dto.user.UserSaveRequestDto;
import com.save.earth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/api/user")
    public void saveUser(@RequestBody UserSaveRequestDto userSaveRequestDto){
        userService.saveUser(userSaveRequestDto);
    }

    @GetMapping("/api/user/{userId}")
    public UserResponseDto getUser(@PathVariable("userId") String userId){
        return userService.selectUser(userId);
    }
}
