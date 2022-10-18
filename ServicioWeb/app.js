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
const createPayment = (req, res) => {

    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: '250'
            }
        }],
        application_context: {
            brand_name: `MonchisTiendita.com`,
            landing_page: 'NO_PREFERENCE', 
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `http://localhost:3000/execute-payment`, // Url despues de realizar el pago exitósamente
            cancel_url: `http://localhost:3000/cancel-payment` // Url cancelar el pago
        }
    }

    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}


const executePayment = (req, res) => {
    const token = req.query.token; //<-----------

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        res.json({ data: response.body })
    })
}



//    http://localhost:3000/create-payment [POST]
app.post(`/create-payment`, createPayment)

app.get(`/execute-payment`, executePayment)



app.listen(3000, () => {
    console.log(`buscar ruta: postman.com  http://localhost:3000/create-payment [POST]`);
})



/*

------------------------------- RUTAS --------------------------------
INICIAR EL PAGO: https://www.sandbox.paypal.com/checkoutnow?token=3UF06372KF896352W
VERIFICAR EL PAGO RECIBIDO: https://www.sandbox.paypal.com

------------------------------ USUARIOS ------------------------------

USER PRUEBA: sb-rtw1121613119@personal.example.com
pass: Km4^7g7_

TIENDA PRUEBA: sb-43psz4721623262@business.example.com
pass: IS7eg}/,


*/ 