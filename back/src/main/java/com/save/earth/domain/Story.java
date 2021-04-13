package com.save.earth.domain;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "stories")
public class Story extends CreateTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STORY_ID")
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String contents;

    @NotNull
    private String imgUrl;
}
