package com.save.earth.controller;

import com.save.earth.dto.user.UserResponseDto;
import com.save.earth.dto.user.UserSaveRequestDto;
import com.save.earth.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @ApiOperation(value="유저 정보 저장하기")
    @PostMapping("/api/user")
    public ResponseEntity saveUser(@Valid @RequestBody UserSaveRequestDto userSaveRequestDto){
        userService.saveUser(userSaveRequestDto);
        return new ResponseEntity(HttpStatus.OK);
    }

    @ApiOperation(value="유저 상세 정보 불러오기", response = UserResponseDto.class)
    @GetMapping("/api/user/{userId}")
    public ResponseEntity<UserResponseDto> getUser(@PathVariable("userId") String userId){
        return new ResponseEntity(userService.selectUser(userId), HttpStatus.OK);
    }
}
