const Members = [
  /*
      A definição da chave deve seguir a seguinte regra:
      - regra geral: usar o primeiro nome mais último sobrenome;
        - obs: caso o nome tenha algum sufixo, acrescentar a primeira letra do sufixo no final do nome;
      - exceção 1: usar o "nome de guerra" de professor da UnB (se houver);
      - exceção 2: usar o sobrenome se for um sobrenome já utilizado para se referir a pessoa. Exemplo: Patrão, Prado, Venzi e Kfouri.

      Obs.:
      - todos as letras minúsculas;
      - não usar acentos ou cedilha.
  */
        {
            key: "prado",
            name: "Daniel Prado",
            area: "Engenharia de Redes de Comunicação",
            email: "daniel.prado@uiot.org",
            picture: "man",
            bio: "A cool person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "lucasmartins",
            name: "Lucas Martins",
            area: "Doutorando em Engenharia Elétrica",
            role: "software",
            email: "lucas.martins@uiot.org",
            picture: "man",
            bio: "A cool person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "coordination",
            }
        },
        {
            key: "victorcampos",
            name: "Victor Campos",
            area: "Ciência da Computação",
            role: "software",
            email: "victor.campos@uiot.org",
            picture: "man",
            bio: "A strong person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "lincolnbarbosa",
            name: "Lincoln Abreu",
            area: "Engenharia da Computação",
            email: "lincoln.barbosa@uiot.org",
            picture: "man",
            bio: "A smart person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "venzi",
            name: "Daniel G. V. Gonçalves",
            area: "Engenharia de Redes de Comunicação",
            role: "security",
            email: "daniel.venzi@uiot.org",
            picture: "man",
            bio: "A smart person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: false,
                area: "security",
            }
        },
        {
            key: "desousa",
            name: "Rafael Timóteo",
            area: "Professor Dr. Engenharia Elétrica",
            role: "",
            email: "desousa@unb.br",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "coordination",
            }
        },
        {
            key: "franciscocaldasf",
            name: "Francisco Caldas",
            area: "Doutorando em Engenharia Elétrica",
            role: "",
            email: "francisco.caldas@uiot.org",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "fabiomendonca",
            name: "Fábio L. L. de Mendonça",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "marcosandrade",
            name: "Marcos B. Andrade",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "matheusmonteiro",
            name: "Matheus S. Monteiro",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "hardware",
            }
        },
        {
            key: "patrao",
            name: "Rafael L. Patrão",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "justino",
            name: "Bruno Justino G. Praciano",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "robsonalbuquerde",
            name: "Robson de O. Albuquerde",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "lustosa",
            name: "João Paulo C. L. da Costa",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "cassioribeiro",
            name: "Cassio Fabius C. Ribeiro",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "fiuza",
            name: "João F. de Alencastro",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "maristelaholanda",
            name: "Maristela Holanda",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "thalessperling",
            name: "Thales L. von Sperling",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "dayannecunha",
            name: "Dayanne Cunha",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "mateuszanatta",
            name: "Mateus da R. Zanatta",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "brunodutra",
            name: "Bruno V. Dutra",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "security",
            }
        },
        {
            key: "brunofranca",
            name: "Bruno de A. França",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "kfouri",
            name: "Guilherme de O. Kfouri",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "security",
            }
        },
        {
            key: "gersonsilva",
            name: "Gerson do N. Silva",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "tribouilet",
            name: "João Tribouilet M. de Menezes",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "demetriosilvaf",
            name: "Demétrio A. da Silva Filho",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "barenco",
            name: "Cláudia J. Barenco Abbas",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "ednacanedo",
            name: "Edna D. Canedo",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "rodrigorocha",
            name: "Rodrigo L. Rocha",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "hardware",
            }
        },
        {
            key: "rubenhuacarpuma",
            name: "Ruben C. Huacarpuma",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "ingridaraujo",
            name: "Ingrid P. Araújo",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "fabiobuiati",
            name: "Fábio Buiati",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "luisvillalba",
            name: "Luis Javier García Villalba",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "taikim",
            name: "Tai-Hoon Kim",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "caiosilva",
            name: "Caio C. M. Silva",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "samuelalmeida",
            name: "Samuel Almeida",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "poletti",
            name: "João V. Poletti",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "felipemachado",
            name: "Felipe D. Machado",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "hardware",
            }
        },
        {
            key: "sergiolifschitz",
            name: "Sérgio Lifschitz",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "hiroferreira",
            name: "Hiro G. C. Ferreira",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "software",
            }
        },
        {
            key: "giozza",
            name: "William F. Giozza",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },
        {
            key: "flavioelias",
            name: "Flávio Elias G. de Deus",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "woman",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "orientation",
            }
        },

        {
            key: "danielsilva",
            name: "Daniel A. da Silva",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "josetorres",
            name: "José Alberto S. Torres",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }
        },
        {
            key: "alexandrepinheiro",
            name: "Alexandre Pinheiro",
            area: "Area atuação",
            role: "",
            email: "email@email.com",
            picture: "man",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "Area atuação",
            }

        },

        // template
        // {
        //     key: "x",
        //     name: "",
        //     area: "Area atuação",
        //     role: "",
        //     email: "email@email.com",
        //     picture: "man",
        //     bio: "",
        //     lattes: "",
        //     linkedin: "",
        //     lab: {
            //     active: false,
            //     area: "xxxxxxxxxxx",
            // }
        // },
    ]
  export default Members
