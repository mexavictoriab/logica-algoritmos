const fs = require('fs');

const filePath = './notas.json';

// --- Funciones ---

function agregarNota(titulo, contenido) {
    let notas = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        notas = JSON.parse(data);
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('✅ Nota agregada con éxito.');
}

function listarNotas() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(data);

        if (notas.length === 0) {
            console.log('🗒️ No hay notas guardadas.');
        } else {
            console.log('📋 Lista de notas:');
            notas.forEach((nota, i) => {
                console.log(`${i + 1}. ${nota.titulo}: ${nota.contenido}`);
            });
        }
    } else {
        console.log('🗒️ No hay notas guardadas.');
    }
}

function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        const notas = JSON.parse(data);

        const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

        if (notas.length === notasRestantes.length) {
            console.log(`❌ No se encontró ninguna nota con el título "${titulo}".`);
        } else {
            fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
            console.log(`🗑️ Nota con título "${titulo}" eliminada.`);
        }
    } else {
        console.log('⚠️ No hay notas para eliminar.');
    }
}

// --- Lógica para comandos desde consola ---

const comando = process.argv[2];
const titulo = process.argv[3];
const contenido = process.argv[4];

switch (comando) {
    case 'agregar':
        if (titulo && contenido) {
            agregarNota(titulo, contenido);
        } else {
            console.log('⚠️ Debes proporcionar un título y contenido para agregar una nota.');
        }
        break;

    case 'listar':
        listarNotas();
        break;

    case 'eliminar':
        if (titulo) {
            eliminarNota(titulo);
        } else {
            console.log('⚠️ Debes proporcionar el título de la nota a eliminar.');
        }
        break;

    default:
        console.log('❓ Comando no reconocido. Usa: agregar, listar o eliminar.');
}
