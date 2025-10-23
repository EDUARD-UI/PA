package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.ServiceEventos;

@RestController
@RequestMapping("/eventos")
public class EventoController {
    private final ServiceEventos serviceEventos;

    public EventoController(ServiceEventos serviceEventos) {
        this.serviceEventos = serviceEventos;
    }

    @GetMapping("/{evento}")
    public String buscarEvento(@PathVariable String evento){
        return serviceEventos.buscarEventos(evento);
    }

}
