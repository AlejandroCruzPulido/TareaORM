package com.alejandro.usuarios.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.alejandro.usuarios.entity.models.Usuario;
import com.alejandro.usuarios.entity.services.IUsuarioService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<Usuario> getAllUsers() {
        return usuarioService.getAllUsuario();
    }
    
	@GetMapping("/usuarios/{id}")
	public Usuario getOne(@PathVariable(value = "id") long id){
		return usuarioService.get(id);
	}

    @PostMapping("/usuarios")
    public void createUsuario(Usuario usuario) {
    	usuarioService.createUsuario(usuario);
    }

    @PutMapping("/usuarios/{id}")
    public void updateUsuario(@PathVariable (value = "id") long id, Usuario usuario) {
        usuarioService.updateUsuario(id, usuario);
    }

    @DeleteMapping("/usuarios/{id}")
    public void deleteUsuario(@PathVariable (value = "id") long id) {
    	usuarioService.deleteUsuario(id);
    }
}
