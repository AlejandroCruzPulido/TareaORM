package com.alejandro.usuarios.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.alejandro.usuarios.entity.models.Direccion;
import com.alejandro.usuarios.entity.services.IDireccionService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DireccionController {

    @Autowired
    private IDireccionService direccionService;

    @GetMapping("/direcciones")
    public List<Direccion> getAllDireccion() {
        return direccionService.getAllDireccion();
    }
    
	@GetMapping("/direcciones/{id}")
	public Direccion getOne(@PathVariable(value = "id") long id){
		return direccionService.get(id);
	}

    @PostMapping("/direcciones")
    public void createDireccion(Direccion direccion) {
        direccionService.createDireccion(direccion);
    }

    @PutMapping("/direcciones/{id}")
    public void updateDireccion(Direccion direccion, @PathVariable (value = "id") long id) {
        direccionService.updateDireccion(direccion, id);
    }

    @DeleteMapping("/direcciones/{id}")
    public void deleteDireccion(@PathVariable (value = "id")long id) {
    	direccionService.deleteDireccion(id);
    }
}
