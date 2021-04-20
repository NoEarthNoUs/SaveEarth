package com.save.earth.repository.comment;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.save.earth.domain.Comment;
import com.save.earth.domain.QComment;
import com.save.earth.domain.QPlace;
import com.save.earth.domain.QUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CommentRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    public List<Comment> findComment(Long placeId){
        QPlace qPlace = QPlace.place;
        QComment qComment = QComment.comment;
        QUser qUser = QUser.user;

        return jpaQueryFactory.selectDistinct(qComment)
                .from(qComment).where(qPlace.id.eq(placeId))
                .innerJoin(qComment.placeComment, qPlace)
                .innerJoin(qComment.userComment, qUser)
                .fetch();
    }
}
