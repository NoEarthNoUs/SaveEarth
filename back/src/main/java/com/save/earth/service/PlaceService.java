package com.save.earth.service;

import com.save.earth.domain.Place;
import com.save.earth.dto.PlaceSaveRequestDto;
import com.save.earth.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;

    public void savePlace(PlaceSaveRequestDto placeSaveRequestDto, MultipartFile file){
        try {
            String baseDir = "C:\\dev\\SaveEarth\\back\\src\\main\\resources\\static\\img";
            String filePath = baseDir + "\\" + file.getOriginalFilename();
            file.transferTo(new File(filePath));

            placeSaveRequestDto.setImgUrl(filePath);
            placeRepository.save(placeSaveRequestDto.toEntity());
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    public List<Place> findAllPlace(){
        return placeRepository.findAll();
    }
}
