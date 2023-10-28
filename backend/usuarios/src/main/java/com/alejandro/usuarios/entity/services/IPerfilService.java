package com.alejandro.usuarios.entity.services;

import java.util.List;

import com.alejandro.usuarios.entity.models.Perfil;

public interface IPerfilService {
	public List<Perfil> getAllPerfil();
	public Perfil get(long id);
    public void createPerfil(Perfil perfil);
    public void updatePerfil(long id, Perfil perfil);
    public void deletePerfil(long id);
}
