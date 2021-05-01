package com.save.earth.service;

import com.save.earth.domain.User;
import com.save.earth.dto.user.UserResponseDto;
import com.save.earth.dto.user.UserSaveRequestDto;
import com.save.earth.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void saveUser(UserSaveRequestDto userSaveRequestDto){
        userRepository.save(userSaveRequestDto.toEntity());
    }

    public UserResponseDto selectUser(String userId){
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            return user.map(UserResponseDto::new).get();
        }else{
            return null;
        }
    }
}
