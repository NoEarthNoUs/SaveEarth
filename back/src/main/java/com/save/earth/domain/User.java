package com.save.earth.domain;

import com.sun.istack.NotNull;
import lombok.Builder;
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
    private String id;

    @NotNull
    private String email;

    @NotNull
    private String name;

    @Column
    private String imgUrl;

    @OneToMany(mappedBy = "userLike")
    private List<Like> likeList = new ArrayList<Like>();

    @OneToMany(mappedBy = "userComment")
    private List<Comment> commentList = new ArrayList<Comment>();

    @Builder
    public User(String id, String email, String name, String imgUrl) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.imgUrl = imgUrl;
    }
}
