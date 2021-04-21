package com.save.earth.service;

import com.save.earth.domain.Like;
import com.save.earth.domain.Place;
import com.save.earth.domain.User;
import com.save.earth.dto.like.LikeResponseDto;
import com.save.earth.dto.like.LikeSaveRequestDto;
import com.save.earth.repository.like.LikeRepository;
import com.save.earth.repository.place.PlaceRepository;
import com.save.earth.repository.like.LikeRepositoryCustom;
import com.save.earth.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class LikeService {

    private final LikeRepository likeRepository;
    private final PlaceRepository placeRepository;
    private final UserRepository userRepository;
    private final LikeRepositoryCustom likeRepositoryCustom;

    public int like(LikeSaveRequestDto likeSaveRequestDto){
        Long likeId = likeRepositoryCustom.findLikeByUserIdAndPlaceId(likeSaveRequestDto.getUserId(), likeSaveRequestDto.getPlaceId());
        int likeFlag = 0;
        if(likeId == null){
            Place place = placeRepository.getOne(likeSaveRequestDto.getPlaceId());
            User user = userRepository.getOne(likeSaveRequestDto.getUserId());
            likeRepository.save(Like.builder().placeLike(place).userLike(user).build());
            likeFlag = 1;
        }else{
            likeRepository.deleteById(likeId);
            likeFlag = 0;
        }
        return likeFlag;
    }

    public List<LikeResponseDto> userLikeList(String userId){
        return likeRepositoryCustom.findLikeList(userId).stream().map(LikeResponseDto::new).collect(Collectors.toList());
    }
}
