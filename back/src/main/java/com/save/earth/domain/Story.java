package com.save.earth.domain;

import com.sun.istack.NotNull;
import lombok.Builder;
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

    @Builder
    public Story(String title, String contents, String imgUrl) {
        this.title = title;
        this.contents = contents;
        this.imgUrl = imgUrl;
    }
}
