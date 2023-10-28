package com.alejandro.usuarios.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alejandro.usuarios.entity.models.Perfil;

public interface IPerfilDao extends CrudRepository<Perfil, Long>{

}
