package com.alejandro.usuarios.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.usuarios.entity.dao.IDireccionDao;
import com.alejandro.usuarios.entity.models.Direccion;

import java.util.List;

@Service
public class DireccionServiceImpl implements IDireccionService {

    @Autowired
    private IDireccionDao direccionDao;

    @Override
    public List<Direccion> getAllDireccion() {
        return (List<Direccion>) direccionDao.findAll();
    }
    
	@Override
	public Direccion get(long id) {
		return direccionDao.findById(id).get();
	}

    @Override
    public void createDireccion(Direccion direccion) {
        direccionDao.save(direccion);
    }

    @Override
    public void updateDireccion(Direccion direccion, long id) {
    	direccionDao.findById(id).ifPresent((x) ->{
    		direccion.setId(id);
    		direccionDao.save(direccion);
		});
    }

    @Override
    public void deleteDireccion(long id) {
    	direccionDao.deleteById(id);
    }
}
