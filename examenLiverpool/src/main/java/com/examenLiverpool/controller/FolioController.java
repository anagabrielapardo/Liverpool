package com.examenLiverpool.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class FolioController {

    @GetMapping("/folio")
    public Map<String, String> obtenerFolio(@RequestParam String folio) {
        SimpleDateFormat formatter = new SimpleDateFormat("ddMMyyHHmmss");
        String fechaHora = formatter.format(new Date());

        String resultado = folio + fechaHora;

        int digest = resultado.hashCode();

        Map<String, String> respuesta = new HashMap<>();
        respuesta.put("folio_con_fecha", resultado);
        respuesta.put("digest", String.valueOf(digest));

        return respuesta;
        //http://localhost:8081/folio?folio=numeroDeFolio
    }
}