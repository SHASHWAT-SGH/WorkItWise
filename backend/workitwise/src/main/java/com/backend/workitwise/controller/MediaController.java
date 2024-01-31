package com.backend.workitwise.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping(value = "/exercise-category-image/{path}", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<Resource> getExerciseImage(@PathVariable String path){
        Path file = Paths.get("src/assets/exercise/muscle-grp-category", path);
        Resource resource = null;
        try {
            resource = new UrlResource(file.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok().body(resource);
    }

    @GetMapping(value = "/exercise-gif/{category}/{fileName}", produces = MediaType.IMAGE_GIF_VALUE)
    public ResponseEntity<Resource> getExerciseGif(@PathVariable String category, @PathVariable String fileName){
        Path file = Paths.get("src/assets/exercise/gif", category, fileName);
        Resource resource = null;
        try {
            resource = new UrlResource(file.toUri());
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok().body(resource);
    }
}
