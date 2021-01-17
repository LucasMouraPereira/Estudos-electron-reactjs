import InitialBackground from '../../assets/gifs/gifTest.gif';

const initialData = {
    initialImage: InitialBackground,
    english: {
        language: "en-us",
        title: "Adventures` Ravenloft: Sanguinis Quo",
        buttons: [
            {
                id: "1",
                text: "New Game",
            },
            {
                id: "2",
                text: "Continue",
            },
            {
                id: "3",
                text: "Settings",
                complement: "Return to outset"
            },
            {
                id: "4",
                text: "Credits",
            },
            {
                id: "5",
                text: "Quit",
            },                        
        ]
    },
    portuguese: {
        language: "pt-br",
        title: "Aventuras de Ravenloft: Sanguinis Quo",
        buttons: [
            {
                id: "1",
                text: "Novo Jogo",
            },
            {
                id: "2",
                text: "Continuar",
            },
            {
                id: "3",
                text: "Ajustes",
                complement: "Voltar ao início"
            },
            {
                id: "4",
                text: "Créditos",
            },
            {
                id: "5",
                text: "Sair",
            },                        
        ]
    }, 
    spanish: {
        language: "es-es",
        title: "Aventuras de Ravenloft: Sanguinis Quo",
        buttons: [
            {
                id: "1",
                text: "Nuevo juego",
            },
            {
                id: "2",
                text: "Seguir",
            },
            {
                id: "3",
                text: "Configuraciones",
                complement: "Volver al principio",
            },
            {
                id: "4",
                text: "Créditos",
            },
            {
                id: "5",
                text: "Dejar",
            },                        
        ]
    }
}

export default initialData;