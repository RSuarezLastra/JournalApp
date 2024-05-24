import { fileUpload } from "../../src/helpers";


describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async () => {

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaGbv8PqvJ83UeUfku1NqNruZ0ehsOVX2rJ2nIwqfLA&s';

        const resp = await fetch(imageUrl);
        const blob = await  resp.blob();
        const file = new File([blob], 'fotoPrueba.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string')
    });
    
    test('debe retornar null si no hay un archivo', async () => {

        const file = new File([], 'fotoPrueba.jpg');
        const url = await fileUpload(file);
        
        expect(url).toBe(null)
    });

});