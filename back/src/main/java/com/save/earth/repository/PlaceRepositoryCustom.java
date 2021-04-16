package com.save.earth.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.save.earth.domain.Place;
import com.save.earth.domain.QComment;
import com.save.earth.domain.QPlace;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PlaceRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    public List<Place> findByIdWithComment(Long id){
        QPlace qPlace = QPlace.place;
        QComment qComment = QComment.comment;
//        QUser qUser = QUser.user;

        return jpaQueryFactory.selectDistinct(qPlace)
                .from(qPlace).where(qPlace.id.eq(id))
                .innerJoin(qPlace.commentList, qComment)
                .fetch();
    }
}
