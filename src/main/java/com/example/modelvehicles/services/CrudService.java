package com.example.modelvehicles.services;
import java.util.List;
public interface CrudService<T> {

    void create(T dto);
    void delete(Long id);
    List<T> findAll();
}
