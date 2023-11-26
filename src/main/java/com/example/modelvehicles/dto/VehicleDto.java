package com.example.modelvehicles.dto;

import com.example.modelvehicles.models.Vehicle;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import java.util.List;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

@Builder
public record VehicleDto(

        @JsonInclude(JsonInclude.Include.NON_NULL)
         Long id,
        @JsonInclude(JsonInclude.Include.NON_NULL)
         String model,
        @JsonInclude(JsonInclude.Include.NON_NULL)
         String plate,
        @JsonInclude(JsonInclude.Include.NON_NULL)
         String employee,
        @JsonInclude(JsonInclude.Include.NON_NULL)
         LocalDateTime created_at,
        @JsonInclude(JsonInclude.Include.NON_NULL)
         LocalDateTime updated_at
) {

    public static VehicleDto toDto(Vehicle entity){
        return VehicleDto.builder()
                .id(entity.getId())
                .model(entity.getModel())
                .plate(entity.getPlate())
                .employee(entity.getEmployee())
                .created_at(entity.getCreated_at())
                .updated_at(entity.getUpdated_at())
                .build();
    }

    public static Vehicle toEntity(VehicleDto dto){
        return Vehicle.builder()
                .id(dto.id)
                .model(dto.model)
                .plate(dto.plate)
                .employee(dto.employee)
                .created_at(dto.created_at)
                .updated_at(dto.updated_at)
                .build();
    }

    public static List<VehicleDto> toDto(List<Vehicle> vehicles){
        return vehicles.stream().map((vehicle -> toDto(vehicle))).collect(Collectors.toList());
    }

    public static List<Vehicle> toEntity(List<VehicleDto> vehicleDtos){
        return vehicleDtos.stream().map((vehicle -> toEntity(vehicle))).collect(Collectors.toList());
    }
}
