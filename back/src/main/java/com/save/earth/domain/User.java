package com.save.earth.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "USER_ID")
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column
    private String imgUrl;

    @OneToMany(mappedBy = "userLike")
    private List<Like> likeList = new ArrayList<Like>();

    @OneToMany(mappedBy = "userComment")
    private List<Comment> commentList = new ArrayList<Comment>();
}
