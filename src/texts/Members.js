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
            name: "Daniel Gomes",
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
            name: "fabiomendonca",
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
            name: "marcosandrade",
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
            name: "matheusmonteiro",
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
            name: "patrao",
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
            name: "justino",
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
            name: "lustosa",
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
            name: "cassioribeiro",
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
            name: "João Fiuza",
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
            name: "maristelaholanda",
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
            name: "thalessperling",
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
            name: "brunodutra",
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
            name: "Bruno Franca",
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
            name: "kfouri",
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
            name: "gersonsilva",
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
            name: "tribouilet",
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
            name: "Cláudia Jacy Barenco Abbas",
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
            name: "Edna Canedo",
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
            name: "rodrigorocha",
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
            name: "Ruben Cruz Huacarpuma",
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
            name: "ingridaraujo",
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
            name: "caiosilva",
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
            name: "samuelalmeida",
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
            name: "poletti",
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
            name: "felipemachado",
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
            name: "Hiro Gabriel",
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
            name: "Giozza",
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
            name: "Flávio Elias Gomes de Deus",
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
            name: "Daniel Alves da Silva",
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
            name: "José Alberto Sousa Torres",
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
