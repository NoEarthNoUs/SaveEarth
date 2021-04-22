package com.save.earth.service;

import com.save.earth.domain.Place;
import com.save.earth.repository.place.PlaceRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
public class PlaceServiceTest {

    @Autowired
    PlaceRepository placeRepository;

    @Test
    public void 에코플레이스_등록_불러오기() throws Exception{
        //given
        String name = "김환희";
        placeRepository.save(
                Place.builder()
                        .name(name)
                        .address("서울특별시")
                        .imgUrl("www.naver.com")
                        .category("채식식당")
                        .contents("맛있어요")
                        .build());
        //when
        List<Place> placeList = placeRepository.findAll();

        //then
        assertEquals(name, placeList.get(0).getName());
    }

    @Test
    public void 아이디로_에코플레이스_찾기() throws Exception{
        //given
        Long id = 1L;

        //when
        Optional<Place> findById = placeRepository.findById(id);

        //then
        assertEquals(id, findById.get().getId());
    }
}