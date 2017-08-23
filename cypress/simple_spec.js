describe('Los Estudiantes', function() {
    it('Visita Los Estudiantes y crea una cuenta', function() {
        var email = "pruebamiso15@gmail.com"
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        
        //Registro
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Prueba")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("MISO")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type(email)
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
        cy.get('.cajaSignUp').find('select[name="idDepartamento"]').select("Arte")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("123456")
        cy.get('.cajaSignUp').find('input[name="acepta"]').click()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Registro exitoso!')
        cy.contains('OK').click()
        cy.get('#cuenta').click()
        cy.contains('Salir').click()
        
        //Login exitoso
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type(email)
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("123456")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('#cuenta').click()
        cy.contains('Salir').click()
        
        //Registro Duplicado
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Prueba")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("MISO")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type(email)
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
        cy.get('.cajaSignUp').find('select[name="idDepartamento"]').select("Arte")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("123456")
        cy.get('.cajaSignUp').find('input[name="acepta"]').click()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Error: Ya existe un usuario registrado con el correo \'' + email + '\'')
    })
    
    it('Busca Profesores, visita sus páginas y filtra por materias', function() {
        var profesor = "Mario Linares"
        
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Buscar un profesor').click()
        cy.get('.Select-input').find('input').type(profesor)
        cy.contains('Mario Linares Vasquez - ingenieria de sistemas').click()
        cy.contains('Estructuras De Datos')
        cy.contains('Estructuras De Datos').click()
        cy.contains('Progr Con Tecnologias Web').click()
        cy.contains('Estructuras De Datos').click()
        cy.contains('Progr Con Tecnologias Web').click()
        
    })
})
