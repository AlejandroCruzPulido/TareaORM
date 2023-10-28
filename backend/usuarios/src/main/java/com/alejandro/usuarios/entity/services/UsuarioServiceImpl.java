package com.alejandro.usuarios.entity.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.usuarios.entity.dao.IUsuarioDao;
import com.alejandro.usuarios.entity.models.Usuario;

import java.util.List;

@Service
public class UsuarioServiceImpl implements IUsuarioService {

    @Autowired
    private IUsuarioDao usuarioDao;

    @Override
    public List<Usuario> getAllUsuario() {
        return (List<Usuario>) usuarioDao.findAll();
    }
    
	@Override
	public Usuario get(long id) {
		return usuarioDao.findById(id).get();
	}

    @Override
    public void createUsuario(Usuario usuario) {
        usuarioDao.save(usuario);
    }

    @Override
    public void updateUsuario(long id, Usuario usuario) {
		usuarioDao.findById(id).ifPresent((x) ->{
			usuario.setId(id);
			usuarioDao.save(usuario);
		});
    }

    @Override
    public void deleteUsuario(long id) {
    	usuarioDao.deleteById(id);
    }
}

