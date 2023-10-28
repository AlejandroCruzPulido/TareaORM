package com.alejandro.usuarios.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alejandro.usuarios.entity.models.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long>{

}
