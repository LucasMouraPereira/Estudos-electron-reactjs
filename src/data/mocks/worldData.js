import playerIcon from '../../assets/svg/user.svg';
import itemsIcon from '../../assets/svg/mochila.svg';
import mapIcon from '../../assets/svg/map.svg';
import recordIcon from '../../assets/svg/abra-o-livro.svg';
import optionsIcon from '../../assets/svg/gear.svg';
const worldData = {
    language: "pt-br",
    aside:[
        {
            id: "1",
            title: "Personagem",
            icon: playerIcon,
            data: {
                name: "Informaçoes",
                namePlayer: "Diogo",
                life: 15,
                mana: 8,
                experience: "Pontos de Experiência",
                attributes: [
                    {
                        physicalAttack: "Ataque físico: ",
                        points: 10,
                        description: "Este atributo calcula o dano físico de Diogo"
                    },
                    {
                        magicAttack: "Ataque mágico: ",
                        points: 8,
                        description: "Este atributo calcula o dano magico de Diogo"
                    },
                    {
                        defense: "Defesa",
                        points: 8,
                        description: "Este atributo reduz o dano de todos os ataques"
                    },
                    {
                        fortitude: "Fortitude",
                        points: 8,
                        description: "Este atributo reduz danos especiais"
                    },
                    {
                        will: "Vontade",
                        points: 12,
                        description: "Este atributo pode ou não impedir danos que afetam a redução de atributos"
                    }
                ],
                abiliity:[],
            }
        },
        {
            id: "2",
            title: "Itens",
            icon: itemsIcon,
            data: {
                name: "equipamentos",
                equipments: {
                    itens: {
                        storage: [
                            {
                                slug: "arma",
                                name: "Armas",
                                storage: [],
                            },
                            {
                                slug: "armadura",
                                name: "Armaduras",
                                storage: [],
                            },
                            {
                                slug: "escudo",
                                name: "Escudos",
                                storage: [],
                            },

                        ],
                    },
                    support: {
                        slug: "suporte",
                        name: "Suporte",
                        storage: [],
                    },
                    portions: {
                        slug: "porcoes",
                        name: "Porçoes",
                        storage: []
                    }
                }
            }
        },
        {
            id: "3",
            title: "Mapas",
            icon: mapIcon,
            data: {
                name: "Regiões",
                region: []
            }
        },
        {
            id: "4",
            title: "Registros",
            icon: recordIcon,
            data: {
                name: "Registro de conversas",
                npcs: [],
                dialog: [], 
            }
        },
        {
            id: "5",
            title: "Opções",
            icon: optionsIcon,
            data: {
                name: "Opções",
                button: [
                    {
                        id: "1",
                        text: "Salvar",
                        action: {
                            description: "Selecione o slot",
                            spaces: [
                                {
                                    title: "slot 1: ",
                                    slot: [],
                                },
                                {
                                    title: "slot 2: ",
                                    slot: [],
                                },
                                {
                                    title: "slot 3: ",
                                    slot: [],
                                },
                                {
                                    title: "slot 4: ",
                                    slot: [],
                                }
                            ],
                            back: "voltar",
                        }
                    },
                    {
                        id: "2",
                        text: "Continuar"
                    },
                    {
                        id: "3",
                        text: "Voltar para menu principal"
                    }
                ]
            }
        }
    ],
    footer: [
        {
            slug: "magia",
            type: "Magias",
            numberMaxSlots: 6,
            slot: []
        },
        {
            slug: "porcoes",
            type: "Porções",
            numberMaxSlots: 4,
            slot: []
        },
        {
            slug: "arma",
            type: "Arma",
            slot: []
        },
        {
            slug: "armadura",
            type: "Armadura",
            slot: []
        },
        {
            slug: "escudo",
            type: "Escudo",
            slot: []
        },
        {
            slug: "suporte",
            type: "Suporte",
            slot: []
        }
    ]    
};

export default worldData