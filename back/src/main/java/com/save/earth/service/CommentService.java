package com.save.earth.service;

import com.save.earth.domain.Comment;
import com.save.earth.domain.Place;
import com.save.earth.domain.User;
import com.save.earth.dto.comment.CommentResponseDto;
import com.save.earth.dto.comment.CommentSaveRequestDto;
import com.save.earth.repository.user.UserRepository;
import com.save.earth.repository.comment.CommentRepository;
import com.save.earth.repository.comment.CommentRepositoryCustom;
import com.save.earth.repository.place.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CommentService {

    private final CommentRepository commentRepository;
    private final PlaceRepository placeRepository;
    private final UserRepository userRepository;
    private final CommentRepositoryCustom commentRepositoryCustom;

    public void saveComment(CommentSaveRequestDto commentSaveRequestDto) {

        Place place = placeRepository.getOne(commentSaveRequestDto.getPlaceId());
        User user = userRepository.getOne(commentSaveRequestDto.getUserId());
        String contents = commentSaveRequestDto.getContents();

        commentRepository.save(Comment.builder().placeComment(place).userComment(user).contents(contents).build());
    }

    public void deleteComment(Long id){
        commentRepository.deleteById(id);
    }

    public void updateComment(Long id, String contents){
        Comment comment = commentRepository.getOne(id);
        comment.changeContents(contents);
    }

    public List<CommentResponseDto> selectComment(Long placeId){
        return commentRepositoryCustom.findComment(placeId).stream().map(CommentResponseDto::new).collect(Collectors.toList());
    }
}
