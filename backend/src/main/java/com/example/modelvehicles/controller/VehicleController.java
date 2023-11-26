package com.example.modelvehicles.controller;


import com.example.modelvehicles.dto.VehicleDto;
import com.example.modelvehicles.services.VehicleService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/vehicle")
@CrossOrigin(origins = "*")
public class VehicleController {
    private final VehicleService vehicleService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void create(@RequestBody VehicleDto vehicleDto){
        vehicleService.create(vehicleDto);
    }

    @GetMapping
    public List<VehicleDto> findAll(){
        return vehicleService.findAll();
    }

    public void delete(@PathVariable Long id){
        vehicleService.delete(id);
    }
}
