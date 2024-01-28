package com.backend.workitwise.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/media/v1")
@RequiredArgsConstructor
public class MediaController {
    @GetMapping(value = "/exercise-category-image", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getExerciseImage(){
        Path file = Paths.get("src/assets", "download.jpg");
        Resource resource = null;
        try {
            resource = new UrlResource(file.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok().body(resource);
    }

    @GetMapping(value = "/exercise-gif", produces = MediaType.IMAGE_GIF_VALUE)
    public ResponseEntity<Resource> getExerciseGif(){
        Path file = Paths.get("src/assets", "a.gif");
        Resource resource = null;
        try {
            resource = new UrlResource(file.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok().body(resource);
    }
}
