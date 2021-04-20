package com.save.earth.repository.comment;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.save.earth.domain.Comment;
import com.save.earth.domain.QComment;
import com.save.earth.domain.QUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CommentRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;
    QComment qComment = QComment.comment;
    QUser qUser = QUser.user;

    public List<String> findUserComment(String userId){
        return jpaQueryFactory.select(qComment.contents)
                .from(qComment)
                .where(qComment.userComment.id.eq(userId))
                .fetch();
    }

    public List<Comment> findPlaceComment(Long placeId){
        return jpaQueryFactory.select(qComment)
            .from(qComment)
            .innerJoin(qComment.userComment, qUser)
            .fetchJoin()
            .where(qComment.placeComment.id.eq(placeId))
            .fetch();
    }
}
