const myPromise = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //resolve('Tenemos un valor en la promesa')
            reject('Reject en promise')
        }, 1000);
    })
}

const timerAsync = async () => {

    try {
        console.log('Inicio');

        const response = await myPromise();
        console.log(response);

        console.log('Fin');

        return "Fin medir tiempo";
    } catch (error) {
        //return error || 'Error'; // lanza error pero se queda en el then
        throw "Throw error" // lanza el error y lo controla con el catch
    }
    
}

timerAsync()
    .then( console.log )
    .catch( err => console.log(err))

