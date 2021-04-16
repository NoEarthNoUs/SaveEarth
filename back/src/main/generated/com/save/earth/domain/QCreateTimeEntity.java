package com.save.earth.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCreateTimeEntity is a Querydsl query type for CreateTimeEntity
 */
@Generated("com.querydsl.codegen.SupertypeSerializer")
public class QCreateTimeEntity extends EntityPathBase<CreateTimeEntity> {

    private static final long serialVersionUID = 1651563630L;

    public static final QCreateTimeEntity createTimeEntity = new QCreateTimeEntity("createTimeEntity");

    public final DateTimePath<java.time.LocalDateTime> createDateTime = createDateTime("createDateTime", java.time.LocalDateTime.class);

    public QCreateTimeEntity(String variable) {
        super(CreateTimeEntity.class, forVariable(variable));
    }

    public QCreateTimeEntity(Path<? extends CreateTimeEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCreateTimeEntity(PathMetadata metadata) {
        super(CreateTimeEntity.class, metadata);
    }

}

