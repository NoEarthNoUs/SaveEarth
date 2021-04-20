package com.save.earth.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QStory is a Querydsl query type for Story
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QStory extends EntityPathBase<Story> {

    private static final long serialVersionUID = 1285249267L;

    public static final QStory story = new QStory("story");

    public final QCreateTimeEntity _super = new QCreateTimeEntity(this);

    public final StringPath contents = createString("contents");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createDateTime = _super.createDateTime;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath imgUrl = createString("imgUrl");

    public final StringPath title = createString("title");

    public QStory(String variable) {
        super(Story.class, forVariable(variable));
    }

    public QStory(Path<? extends Story> path) {
        super(path.getType(), path.getMetadata());
    }

    public QStory(PathMetadata metadata) {
        super(Story.class, metadata);
    }

}

