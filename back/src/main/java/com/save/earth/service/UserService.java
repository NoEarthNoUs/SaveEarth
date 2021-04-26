package com.save.earth.service;

import com.save.earth.domain.User;
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
        userSaveRequestDto.setId("123456789765432");
        userRepository.save(userSaveRequestDto.toEntity());
    }

    public String selectUser(String userId){
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            return user.get().getId();
        }else{
            return null;
        }
    }
}
