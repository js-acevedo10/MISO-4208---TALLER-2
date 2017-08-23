var assert = require('assert');
describe('los estudiantes login', function() {
    it('busca profesores, visita sus paginas y filtra sus materias', function() {
        browser.url('https://losestudiantes.co/');
        browser.click('button=Cerrar');
        browser.waitForVisible('.buscador', 5000);
        var cajaBusquedaUno = browser.element('.Select-placeholder');
        cajaBusquedaUno.click();
        var cajaBusquedaDos = browser.element('.Select-input');
        var inputBusqueda = cajaBusquedaDos.element('input');
        inputBusqueda.keys('Mario Linares');
        browser.waitForVisible('.Select-menu-outer', 5000);
        browser.waitForVisible('.Select-option', 5000);
        var profesor = browser.element('.Select-option');
        profesor.click();
        browser.waitForVisible('.infoProfesor', 5000);
        var materias = browser.element('.labelHover');
        materias.click();
        var departamento = browser.element('#departamento').getText();
        expect(departamento).toBe('Ingeniería de Sistemas');
    })
});