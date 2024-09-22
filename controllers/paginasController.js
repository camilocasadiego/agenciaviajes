import { Testimonial } from "../models/Testimonial.js";
import { Viaje } from "../models/Viaje.js";

const paginaInicio = async (req, res) => {  
    
    const promises = [];

    promises.push(Viaje.findAll({limit: 3}));
    promises.push(Testimonial.findAll({limit: 3}));
    
    const resultado =  await Promise.all(promises);

    res.render('inicio', {
        pagina: 'Inicio',
        home: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    });
}

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    
    // Consultar BD 
    const viajes = await Viaje.findAll();

    res.render("viajes", {
        pagina: 'Viajes',
        viajes
        
    });
}

const paginaTestimoniales = async (req, res) => {
    
    const testimoniales = await Testimonial.findAll();

    try {
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje', 
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}