package com.alejandro.usuarios.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.alejandro.usuarios.entity.models.Perfil;
import com.alejandro.usuarios.entity.services.IPerfilService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PerfilController {

    @Autowired
    private IPerfilService perfilService;

    @GetMapping("/perfiles")
    public List<Perfil> getAllProfiles() {
        return perfilService.getAllPerfil();
    }
    
	@GetMapping("/perfiles/{id}")
	public Perfil getOne(@PathVariable(value = "id") long id){
		return perfilService.get(id);
	}

    @PostMapping("/perfiles")
    public void createProfile(Perfil perfil) {
    	perfilService.createPerfil(perfil);
    }

    @PutMapping("/perfiles/{id}")
    public void updateProfile(@PathVariable (value = "id") long id, Perfil perfil) {
    	perfilService.updatePerfil(id, perfil);
    }

    @DeleteMapping("/perfiles/{id}")
    public void deleteProfile(@PathVariable (value = "id") long id) {
    	perfilService.deletePerfil(id);
    }
}
