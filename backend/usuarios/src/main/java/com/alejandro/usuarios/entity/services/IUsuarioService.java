package com.alejandro.usuarios.entity.services;

import java.util.List;

import com.alejandro.usuarios.entity.models.Usuario;

public interface IUsuarioService {
    public List<Usuario> getAllUsuario();
    public Usuario get(long id);
    public void createUsuario(Usuario usuario);
    public void updateUsuario(long id, Usuario usuario);
    public void deleteUsuario(long id);
}

