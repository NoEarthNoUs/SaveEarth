package com.save.earth.service;

import com.save.earth.domain.Like;
import com.save.earth.domain.Place;
import com.save.earth.domain.User;
import com.save.earth.repository.like.LikeRepository;
import com.save.earth.repository.like.LikeRepositoryCustom;
import com.save.earth.repository.place.PlaceRepository;
import com.save.earth.repository.user.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
public class LikeServiceTest {

    @Autowired
    LikeRepository likeRepository;

    @Autowired
    PlaceRepository placeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    LikeRepositoryCustom likeRepositoryCustom;

    @Test
    public void 좋아요_등록() throws Exception {
        //given
        Long placeId = 1L;
        String userId = "1111";

        Long likeId = likeRepositoryCustom.findLikeByUserIdAndPlaceId(userId, placeId);

        Place place = placeRepository.getOne(placeId);
        User user = userRepository.getOne(userId);

        //when
        Like like = likeRepository.save(Like.builder().placeLike(place).userLike(user).build());

        //then
        assertThat(like.getUserLike().getId()).isEqualTo(userId);
        assertThat(like.getPlaceLike().getId()).isEqualTo(placeId);
    }

    @Test
    public void 좋아요_취소() throws Exception {
        //given
        Long placeId = 1L;
        String userId = "1111";

        Place place = placeRepository.getOne(placeId);
        User user = userRepository.getOne(userId);

        likeRepository.save(Like.builder().placeLike(place).userLike(user).build());
        Long likeId = likeRepositoryCustom.findLikeByUserIdAndPlaceId(userId, placeId);

        //when
        likeRepository.deleteById(likeId);
        Like deleteLike = likeRepository.findById(likeId).orElse(null);

        //then
        assertThat(deleteLike).isNull();
    }

}