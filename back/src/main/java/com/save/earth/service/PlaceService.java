package com.save.earth.service;

import com.save.earth.dto.place.PlaceDetailResponseDto;
import com.save.earth.dto.place.PlaceResponseDto;
import com.save.earth.dto.place.PlaceSaveRequestDto;
import com.save.earth.repository.place.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;
    private final S3Service s3Service;

    public void savePlace(PlaceSaveRequestDto placeSaveRequestDto, MultipartFile file){
        try {

            String imgPath = s3Service.upload(file);
            placeSaveRequestDto.setImgUrl(imgPath);

            placeRepository.save(placeSaveRequestDto.toEntity());

        }catch(Exception e){
            e.printStackTrace();
        }
    }

    public List<PlaceResponseDto> findAllPlace(Pageable pageable){
        return placeRepository.findAll(pageable).stream().map(PlaceResponseDto::new).collect(Collectors.toList());
    }

    public Optional<PlaceDetailResponseDto> findById(Long id){
        return placeRepository.findById(id).map(PlaceDetailResponseDto::new);
    }
}
