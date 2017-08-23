module.exports = { // adapted from: https://git.io/vodU0
    'Los estudiantes crea una cuenta': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .pause(1000)
        .click('.botonIngresar')
        .waitForElementVisible('.cajaSignUp', 4000)
        .setValue('.cajaSignUp input[name="nombre"]', 'Prueba')
        .setValue('.cajaSignUp input[name="apellido"]', 'Night')
        .setValue('.cajaSignUp input[name="correo"]', 'prrrrnight6@gmail.com')
        .click('select[name="idDepartamento"]')
        .pause(1000)
        .click('option[value="5"]')
        .pause(1000)
        .setValue('.cajaSignUp input[name="password"]', '123456')
        .click('.cajaSignUp input[name="acepta"]')
        .click('.cajaSignUp .logInButton')
        .waitForElementVisible('.sweet-alert', 4000)
        .assert.containsText('.sweet-alert', 'Registro exitoso!')
        .waitForElementVisible('#cuenta', 4000)
        .click('#cuenta')
        .end()
    },

    'Los estudiantes inicia sesion': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .pause(1000)
        .click('.botonIngresar')
        .waitForElementVisible('.cajaLogIn', 4000)
        .setValue('.cajaLogIn input[name="correo"]', 'prrrrnight6@gmail.com')
        .setValue('.cajaLogIn input[name="password"]', '123456')
        .click('.cajaLogIn .logInButton')
        .waitForElementVisible('#cuenta', 4000)
        .end();
    },
    'Inicia sesion con una cuenta ya utilizada': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .pause(1000)
        .click('.botonIngresar')
        .waitForElementVisible('.cajaSignUp', 4000)
        .setValue('.cajaSignUp input[name="nombre"]', 'Prueba')
        .setValue('.cajaSignUp input[name="apellido"]', 'Night')
        .setValue('.cajaSignUp input[name="correo"]', 'prrrrnight6@gmail.com')
        .click('select[name="idDepartamento"]')
        .pause(1000)
        .click('option[value="5"]')
        .pause(1000)
        .setValue('.cajaSignUp input[name="password"]', '123456')
        .click('.cajaSignUp input[name="acepta"]')
        .click('.cajaSignUp .logInButton')
        .waitForElementVisible('.sweet-alert', 4000)
        .assert.containsText('.sweet-alert', 'Ya existe un usuario registrado con el correo')
        .end()
    },
    'busca un profesor': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.Select-placeholder', 4000)
        .pause(1000)
        .click('.Select-placeholder')
        .pause(1000)
        .setValue('.Select-input input', 'Mario Linares')
        .pause(3000)
        .waitForElementVisible('.Select-menu-outer', 4000)
        .assert.containsText('.Select-menu-outer .Select-option', 'Mario Linares Vasquez - Ingenieria De Sistemas')
        .end()
    }    
  };
