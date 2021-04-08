package com.save.earth.domain;

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

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String imgUrl;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String contents;

    @OneToMany(mappedBy = "placeComment")
    private List<Comment> commentList = new ArrayList<Comment>();

}
