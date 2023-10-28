package com.alejandro.usuarios.entity.services;

import java.util.List;

import com.alejandro.usuarios.entity.models.Direccion;

public interface IDireccionService {
    List<Direccion> getAllDireccion();
    public Direccion get(long id);
    void createDireccion(Direccion direccion);
    void updateDireccion(Direccion direccion, long id);
    void deleteDireccion(long id);
}
