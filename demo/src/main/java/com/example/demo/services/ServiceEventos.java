package com.example.demo.services;

import org.springframework.stereotype.Service;

@Service
public class ServiceEventos {
    
    public String buscarEventos(String evento){
        if("Concierto".equalsIgnoreCase(evento)){
            return "Evento de Concierto encontrado.";
        } else if("Conferencia".equalsIgnoreCase(evento)){
            return "Evento de Conferencia encontrado.";
        } else {
            return "Evento no encontrado.";
        }
    }
}
