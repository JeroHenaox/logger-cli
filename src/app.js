// Laboratorio - logger-cli
const chalk = require('chalk');

console.log(chalk.bold.cyan("\n=========================================="));
console.log(chalk.bold.cyan("        SISTEMA DE LOGGING DE CONSUMO     "));
console.log(chalk.bold.cyan("==========================================\n"));

// 1. Funciones de logging con formato de color
function logAcceso(mensaje) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(chalk.green(`[ACCESO - ${timestamp}] ✅ ${mensaje}`));
}

function logAdvertencia(mensaje) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(chalk.yellow(`[ADVERTENCIA - ${timestamp}] ⚠️  ${mensaje}`));
}

function logError(mensaje) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(chalk.red.bold(`[ERROR CRÍTICO - ${timestamp}] ❌ ${mensaje}`));
}

// 2. Simulación de eventos
logAcceso("Usuario 'jero' inició sesión correctamente.");
logAcceso("Petición GET realizada a /api/dashboard.");
logAdvertencia("Uso de memoria por encima del 75%.");
logError("Fallo de conexión a la base de datos.");

// 3. Formateo de datos tabulares
const reporteUsuarios = [
    { id: 101, usuario: "jero", rol: "Admin", estado: chalk.green("ACTIVO") },
    { id: 102, usuario: "salome", rol: "Editor", estado: chalk.green("ACTIVO") },
    { id: 103, usuario: "carlos", rol: "Invitado", estado: chalk.red("INACTIVO") }
];

console.log(chalk.magenta.bold("\n--- REPORTE DE USUARIOS DEL SISTEMA ---"));
console.table(reporteUsuarios);