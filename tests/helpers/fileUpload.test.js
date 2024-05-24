import {v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers';

cloudinary.config({
    cloud_name: 'dlpkcfukn',
    api_key: '895787712289597',
    api_secret: 'Dn6WlfuGv8Wh4A4aqO4X7_Y6H08',
    secure: true
})

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async () => {

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaGbv8PqvJ83UeUfku1NqNruZ0ehsOVX2rJ2nIwqfLA&s';

        const resp = await fetch(imageUrl);
        const blob = await  resp.blob();
        const file = new File([blob], 'fotoPrueba.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        const parts = url.split('/');
        const imageId = parts[ parts.length - 1].replace('.jpg', '');

        const cloudRes = await cloudinary.api.delete_resources(['journal/' + imageId]);
        console.log(cloudRes);
    });

    test('debe retornar null si no hay un archivo', async () => {

        const file = new File([], 'fotoPrueba.jpg');
        const url = await fileUpload(file);
        
        expect(url).toBe(null)
    });

});