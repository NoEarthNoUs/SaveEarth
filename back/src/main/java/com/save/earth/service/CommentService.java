package com.save.earth.service;

import com.save.earth.domain.Comment;
import com.save.earth.dto.comment.CommentResponseDto;
import com.save.earth.dto.comment.CommentUpdateRequestDto;
import com.save.earth.dto.place.PlaceResponseDto;
import com.save.earth.repository.CommentRepository;
import com.save.earth.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class CommentService {

    private final CommentRepository commentRepository;
    private final PlaceRepository placeRepository;

//    public List<CommentResponseDto> findAllComment(Long placeId, Pageable pageable){
//        return placeRepository.findAllById(placeId, pageable).stream().map(CommentResponseDto::new).collect(Collectors.toList());
//    }

    public void deleteComment(Long id){
        commentRepository.deleteById(id);
    }

    public void updateComment(Long id, String contents){
        Comment comment = commentRepository.getOne(id);
        comment.changeContents(contents);
    }
}
