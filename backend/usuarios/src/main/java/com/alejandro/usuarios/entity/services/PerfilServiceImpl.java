package com.alejandro.usuarios.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.usuarios.entity.dao.IPerfilDao;
import com.alejandro.usuarios.entity.models.Perfil;

import java.util.List;

@Service
public class PerfilServiceImpl implements IPerfilService {

    @Autowired
    private IPerfilDao perfilDao;

    @Override
    public List<Perfil> getAllPerfil() {
        return (List<Perfil>) perfilDao.findAll();
    }
    
	@Override
	public Perfil get(long id) {
		return perfilDao.findById(id).get();
	}

    @Override
    public void createPerfil(Perfil perfil) {
        perfilDao.save(perfil);
    }

    @Override
    public void updatePerfil(long id, Perfil perfil) {
    	perfilDao.findById(id).ifPresent((x) ->{
    		perfil.setId(id);
    		perfilDao.save(perfil);
		});
    }

    @Override
    public void deletePerfil(long id) {
    	perfilDao.deleteById(id);
    }
}

