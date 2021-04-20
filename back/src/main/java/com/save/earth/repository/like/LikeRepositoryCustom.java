package com.save.earth.repository.like;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.save.earth.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class LikeRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;
    QPlace qPlace = QPlace.place;
    QLike qLike = QLike.like;

    public Long findLikeByUserIdAndPlaceId(String userId, Long placeId){
        return jpaQueryFactory.select(qLike.id)
                .from(qLike).where(qLike.placeLike.id.eq(placeId).and(qLike.userLike.id.like(userId)))
                .fetchOne();
    }

    public List<Like> findLikeList(String userId){
        return jpaQueryFactory.select(qLike)
                .from(qLike)
                .innerJoin(qLike.placeLike, qPlace)
                .fetchJoin()
                .where(qLike.userLike.id.like(userId))
                .fetch();
    }
}
