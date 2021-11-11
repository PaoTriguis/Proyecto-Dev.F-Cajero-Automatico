/* ---------------------------------------------------- CUENTAS ------------------------------------------------------------------*/
const cuentas = [
    {nombre: "Paola", saldo: 200, password: 'Unicornio'},
    {nombre: "Natalia", saldo: 400, password: 'Insfran'},
    {nombre: "Laura", saldo: 600, password: 'Helado'} 
]

/* -------------------------------------- FUNCIONAMIENTO DE BOTON DE INGRESAR ----------------------------------------------------*/
const login = document.querySelector("#IniciarSesion");

login.addEventListener("click", function(event) {
    event.preventDefault();
    var usuario = document.getElementById("UserName").value;
    var contraseña = document.getElementById("Password").value;
    console.log(usuario);
    console.log(contraseña);

/* --------------------------------------- FUNCIONAMIENTO ENCONTRAR CUENTA ------------------------------------------------------ */
    var cuenta = cuentas.find (cuenta => cuenta.nombre == usuario && cuenta.password == contraseña);
        console.log(cuenta);
            if (cuenta) {
                var mostrar = document.getElementById('Bienvenido');
                mostrar.style.display = 'block';
                var ocultar = document.getElementById('Ingreso');
                ocultar.style.display = 'none';

/* --------------------------------------- FUNCIONAMIENTO CONSULTAR SALDO -------------------------------------------------------- */
                const consultarSaldo = document.querySelector("#Saldo");
                consultarSaldo.addEventListener("click", function (event){
                    event.preventDefault();
                    alert("Su saldo es: " + cuenta.saldo + "$");
                }) 

/* ----------------------------------------- FUNCIONAMIENTO DEPOSITO ------------------------------------------------------------- */
                const ingresarMonto = document.querySelector("#Deposito");
                ingresarMonto.addEventListener("click", function (event){
                    event.preventDefault();
                    var montoIngresado = Number(prompt("Introduzca el monto que desea depositar"));
                    var estado = cuenta.saldo + montoIngresado;
                    var cantidadProhibida = (estado > 990);
                    if (isNaN(montoIngresado)) {
                        console.log("String");
                        alert ("Favor ingrese un número válido");
                      } else if (cantidadProhibida) {
                          cuenta.saldo - montoIngresado;
                          alert ("Ese monto no está permitido. Por políticas del negocio no puede superar los 990$ en su cuenta");
                      }
                      else {
                        cuenta.saldo += montoIngresado;
                        alert ("El monto depositado es " + montoIngresado + "$" + "- Su saldo es " + estado + "$")};
                        console.log(estado);
                })
                
/* -------------------------------------------- FUNCIONAMIENTO RETIRO ------------------------------------------------------------ */
                const retirarMonto = document.querySelector("#Retirar");
                retirarMonto.addEventListener("click", function (event){
                    event.preventDefault();
                    var montoRetirado = Number(prompt("Introduzca el monto que desea retirar"));
                    var estado = cuenta.saldo - montoRetirado;
                    var cantidadProhibida = (estado < 10);
                    if (isNaN(montoRetirado)) {
                        console.log("String");
                        alert ("Favor ingrese un número válido");
                      } else if (cantidadProhibida) {
                          cuenta.saldo + montoRetirado;
                          alert ("Ese monto no está permitido. Por políticas del negocio no puede tener menos de 10$ en su cuenta");
                        }
                        else {
                        cuenta.saldo -= montoRetirado;
                        alert ("El monto retirado es " + montoRetirado + "$" + " Su saldo es " + estado + "$");
                        console.log(estado);
                      }
                })
            }
            else {
                alert("Contraseña incorrecta. Intente nuevamente");
            }
    }
)
