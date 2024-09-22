import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial = async (req, res)  => {
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(!nombre.trim()) {
        errores.push({'mensaje': 'Agrega tu Nombre'})
    }
    if(!correo.trim()) {
        errores.push({'mensaje': 'Tu Correo es Obligatorio'})
    }
    if(!mensaje.trim()) {
        errores.push({'mensaje': 'Un Testimonial no puede ir vacio'})
    }

    // revisar por erroes
    if(errores.length > 0 ){
        // const testimoniales = await Testimonial.findAll();

        // muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre, 
            correo, 
            mensaje,
            pagina: 'Testimoniales'
        });
    } else {
        // almacenalo en la BD
        try {
            await Testimonial.create({
                nombre, 
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }

};

export {
    guardarTestimonial
}