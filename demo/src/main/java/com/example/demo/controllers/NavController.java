package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/pago")
    public String pago() {
        return "pago";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/signin")
    public String signin() {
        return "signin";
    }

    @GetMapping("/perfil")
    public String perfil() {
        return "perfil";
    }

    @GetMapping("/contacto")
    public String contacto() {
        return "contacto";
    }

    @GetMapping("/sobre_nosotros")
    public String info() {
        return "sobreus";
    }

    @GetMapping("/reclamos")
    public String reclamos() {
        return "reclamos";
    }

    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "dashboards/adminDashboard";
    }


}
