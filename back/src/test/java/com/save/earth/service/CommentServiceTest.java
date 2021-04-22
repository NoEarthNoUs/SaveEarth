package com.save.earth.service;

import com.save.earth.domain.Comment;
import com.save.earth.domain.Place;
import com.save.earth.domain.User;
import com.save.earth.repository.comment.CommentRepository;
import com.save.earth.repository.comment.CommentRepositoryCustom;
import com.save.earth.repository.place.PlaceRepository;
import com.save.earth.repository.user.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@RunWith(SpringRunner.class)
@Transactional
public class CommentServiceTest {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    PlaceRepository placeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CommentRepositoryCustom commentRepositoryCustom;

    @Test
    public void 댓글_BaseTimeEntity_등록(){
        //given
        Place place = placeRepository.getOne(1L);
        User user = userRepository.getOne("1111");
        String contents = "contents!";

        LocalDateTime now = LocalDateTime.of(2021,4,22,0,0,0);

        //when
        commentRepository.save(Comment.builder().contents(contents).placeComment(place).userComment(user).build());
        List<Comment> commentList = commentRepository.findAll();

        //then
        Comment comment = commentList.get(0);

        assertThat(comment.getPlaceComment().getId()).isEqualTo(place.getId());
        assertThat(comment.getUserComment().getId()).isEqualTo(user.getId());
        assertThat(comment.getContents()).isEqualTo(contents);
        assertThat(comment.getCreateDateTime()).isAfter(now);
        assertThat(comment.getModifiedDateTime()).isAfter(now);
    }

    @Test
    public void 댓글_수정() throws Exception {
        //given
        String before = "before contents";
        String after = "after contents";
        Comment comment = commentRepository.save(Comment.builder().contents(before).build());
        Long id = comment.getId();

        //when
        commentRepository.getOne(id);
        comment.changeContents(after);

        //then
        assertThat(comment.getContents()).isEqualTo(after);
    }

    @Test
    public void 댓글_삭제() throws Exception {
        //given
        String contents = "contents";
        Comment comment = commentRepository.save(Comment.builder().contents(contents).build());
        Long id = comment.getId();

        //when
        commentRepository.deleteById(id);
        Comment deleteComment = commentRepository.findById(id).orElse(null);
        //then
        assertThat(deleteComment).isNull();
    }

    @Test
    public void 에코플레이스_댓글_불러오기기() throws Exception {
        //given
        Place place = placeRepository.getOne(1L);
        User user = userRepository.getOne("1111");
        Pageable pageable = QPageRequest.of(0, 10);

        String[] contents = {
                "contents1", "contents2", "contents3", "contents4", "contents5", "contents6",
                "contents7", "contents8", "contents9", "contents10", "contents11", "contents12",
                "contents13", "contents14", "contents15", "contents16", "contents17", "contents18"
        };

        for (String o : contents) {
            commentRepository.save(Comment.builder().contents(o).placeComment(place).userComment(user).build());
        }

        //when
        List<Comment> commentList = commentRepositoryCustom.findPlaceComment(place.getId(), pageable);

        //then
        assertThat(pageable.getPageSize()).isEqualTo(commentList.size());
        assertThat(commentList.get(9).getContents()).isEqualTo(contents[9]);
    }

    @Test
    public void 마이페이지_댓글_불러오기() throws Exception {
        //given
        Place place = placeRepository.getOne(1L);
        User user = userRepository.getOne("1111");
        Pageable pageable = QPageRequest.of(0, 10);

        String[] contents = {
                "contents1", "contents2", "contents3", "contents4", "contents5", "contents6",
                "contents7", "contents8", "contents9", "contents10", "contents11", "contents12",
                "contents13", "contents14", "contents15", "contents16", "contents17", "contents18"
        };

        for (String o : contents) {
            commentRepository.save(Comment.builder().contents(o).placeComment(place).userComment(user).build());
        }

        //when
        List<String> commentList = commentRepositoryCustom.findUserComment(user.getId(), pageable);

        //then
        assertThat(pageable.getPageSize()).isEqualTo(commentList.size());
    }
}