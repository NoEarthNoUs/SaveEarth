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
@Table(name = "places")
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PLACE_ID")
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String address;

    @NotNull
    private String imgUrl;

    @NotNull
    private String category;

    @NotNull
    private String contents;

    @NotNull
    private int allMenuVegan;

    @OneToMany(mappedBy = "placeComment")
    private List<Comment> commentList = new ArrayList<Comment>();

    @Builder
    public Place(String name, String address, String imgUrl, String category, String contents, int allMenuVegan) {
        this.name = name;
        this.address = address;
        this.imgUrl = imgUrl;
        this.category = category;
        this.contents = contents;
        this.allMenuVegan = allMenuVegan;
    }
}
