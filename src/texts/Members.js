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
            pic: "",
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
            pic: "",
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
            pic: "",
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
            pic: "",
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
            pic: "",
            bio: "A smart person",
            lattes: "",
            linkedin: "meu linked-in",
            belong: true,
            lab: {
                active: true,
                area: "software",
            }
        },
        {
            key: "desousa",
            name: "Rafael Timóteo",
            area: "Professor Dr. Engenharia Elétrica",
            role: "",
            email: "desousa@unb.br",
            pic: "",
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
            pic: "",
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
            area: "",
            role: "",
            email: "",
            pic: "",
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
            key: "marcosandrade",
            name: "Marcos B. Andrade",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "",
            }
        },
        {
            key: "matheusmonteiro",
            name: "Matheus S. Monteiro",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "",
            }
        },
        {
            key: "patrao",
            name: "Rafael L. Patrão",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "",
            }
        },
        {
            key: "justino",
            name: "Bruno Justino G. Praciano",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: true,
            lab: {
                active: false,
                area: "",
            }
        },
        {
            key: "robsonalbuquerde",
            name: "robsonalbuquerde",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            belong: false,
            lab: {
                active: false,
                area: "",
            }
        },
        {
            key: "lustosa",
            name: "João Paulo C. L. da Costa",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "cassioribeiro",
            name: "Cassio Fabius C. Ribeiro",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "fiuza",
            name: "João F. de Alencastro",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "maristelaholanda",
            name: "Maristela Holanda",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "thalessperling",
            name: "Thales L. von Sperling",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "dayannecunha",
            name: "dayannecunha",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "mateuszanatta",
            name: "mateuszanatta",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "brunodutra",
            name: "Bruno V. Dutra",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "brunofranca",
            name: "Bruno de A. França",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "kfouri",
            name: "Guilherme de O. Kfouri",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "gersonsilva",
            name: "Gerson do N. Silva",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "tribouilet",
            name: "João Tribouilet M. de Menezes",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "demetriosilvaf",
            name: "demetriosilvaf",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "barenco",
            name: "Cláudia J. Barenco Abbas",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "ednacanedo",
            name: "Edna D. Canedo",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "rodrigorocha",
            name: "Rodrigo L. Rocha",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "rubenhuacarpuma",
            name: "Ruben C. Huacarpuma",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "ingridaraujo",
            name: "Ingrid P. Araújo",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "fabiobuiati",
            name: "Fábio Buiati",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "luisvillalba",
            name: "Luis Javier García Villalba",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "taikim",
            name: "Tai-Hoon Kim",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "caiosilva",
            name: "Caio C. M. Silva",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "samuelalmeida",
            name: "Samuel Almeida",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "poletti",
            name: "João Victor Poletti",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "felipemachado",
            name: "Felipe D. Machado",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "sergiolifschitz",
            name: "Sérgio Lifschitz",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "hiroferreira",
            name: "Hiro G. C. Ferreira",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "giozza",
            name: "William F. Giozza",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },
        {
            key: "flavioelias",
            name: "Flávio Elias G. de Deus",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            lab: {
                active: false,
                area: "coordination",
            }
        },

        {
            key: "danielsilva",
            name: "Daniel A. da Silva",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            active: false
        },
        {
            key: "josetorres",
            name: "José Alberto S. Torres",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            active: false
        },
        {
            key: "alexandrepinheiro",
            name: "Alexandre Pinheiro",
            area: "",
            role: "",
            email: "",
            pic: "",
            bio: "",
            lattes: "",
            linkedin: "",
            active: false
        },

        // template
        // {
        //     key: "x",
        //     name: "",
        //     area: "",
        //     role: "",
        //     email: "",
        //     pic: "",
        //     bio: "",
        //     lattes: "",
        //     linkedin: "",
        //     lab: {
            //     active: false,
            //     area: "coordination",
            // }
        // },
    ]
  export default Members
