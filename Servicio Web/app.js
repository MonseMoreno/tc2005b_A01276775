// Declarar las constantes de los paquetes 

const express = require ('express');
const cors = require('cors');
const request = require('request');

// Inicializar la aplicación de express
const app = express();
app.use(cors())

// Agregar las credenciales de paypal 

const CLIENT = 'Acpguy5NNYAmJUZYgzJvQaQ8VXIb3V8-ej6M7ejqhHAYBPmfbEQvR_tEecpb3PBWfuT241PfClZF3jaC';
const SECRET = 'EMutcwi1TTwGVZrW1hdycb1I3nU4sFIJZpVvpd1I5cF25KpXvfoCGf9vc04E3eLh_f_WBgtDrvG8beNv';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Entonrno para pruebas

const auth = {user: CLIENT, pass: SECRET}

// Establecer controladores 

const createPatment (req, res) => {
    const body = {
        intent: 'CAPTURE',// intención: capturar
        purchase_inits: [{ 
            amount: {
                // Monto de lo que queremos cobrar
                currency_code: 'MEX',
                value: '150'
            }
        }], 

        application_context: {
            brand_name: `MonchisTienda.com`,
            landing_page: 'NO_REFERENCE',
            user_action: 'PAY NOW', // Botón de acción
            //Páginas de redireccionamiento 
            return_url: `http://localhost:3000/execute-payment`, //Éxitosa
            cancel_url: `http://localhost:3000/cancel-payment` // Pago cancelado

        }
    }

    // PETICIÓN DE TIPO POST
    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        res.json({data: response.body})
    })
}

app.get(`/execute-payment`, executePayment)
app.listen(3000, () => {
    console.log ('Comenzamos a generar dinero -> http://localhost:3000');
})