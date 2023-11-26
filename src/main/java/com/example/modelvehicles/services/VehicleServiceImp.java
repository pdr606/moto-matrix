package com.example.modelvehicles.services;

import com.example.modelvehicles.dto.VehicleDto;
import com.example.modelvehicles.models.Vehicle;
import com.example.modelvehicles.repository.VehicleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class VehicleServiceImp implements VehicleService {

    private final VehicleRepository vehicleRepository;
    @Override
    public void create(VehicleDto dto) {
        Vehicle vehicle = VehicleDto.toEntity(dto);
        vehicleRepository.save(vehicle);
    }

    @Override
    public void delete(Long id) {
        vehicleRepository.deleteById(id);
    }

    @Override
    public List<VehicleDto> findAll() {
        return VehicleDto.toDto(vehicleRepository.findAll());
    }
}
