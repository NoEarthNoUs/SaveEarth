package com.save.earth.service;

import com.save.earth.domain.Story;
import com.save.earth.repository.story.StoryRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
public class StoryServiceTest {

    @Autowired
    StoryRepository storyRepository;

    @Test
    public void 스토리_전체목록_불러오기() throws Exception {
        //given
        String title = "제목";
        storyRepository.save(Story.builder().contents("스토리1").title(title).imgUrl("c://").build());
        storyRepository.save(Story.builder().contents("스토리1").title("제목2").imgUrl("c://").build());
        //when
        List<Story> stories = storyRepository.findAll();

        //then
        assertThat(stories.get(0).getTitle()).isEqualTo(title);

    }

    @Test
    public void 스토리_아이디로_불러오기() throws Exception {
        //given
        String title = "제목";
        storyRepository.save(Story.builder().contents("스토리1").title(title).imgUrl("c://").build());

        //when
        Optional<Story> story = storyRepository.findById(1L);

        //then
        assertThat(story.get().getTitle()).isEqualTo(title);
    }

}