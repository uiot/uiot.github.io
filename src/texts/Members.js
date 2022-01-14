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
    linkedin: "",
    github: "dasprado12",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "lucasmartins",
    name: "Lucas Martins",
    area: "Doutorando em Engenharia Elétrica",
    email: "lucas.martins@uiot.org",
    picture: "man",
    bio: "A cool person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "coordination"
    }
  },
  {
    key: "fabio",
    name: "Fábio Lucio Lopes de Mendonca",
    area: "Professor Dr. Engenharia Elétrica",
    email: "fabio.mendonca@redes.unb.br ",
    picture: "man",
    bio: "A cool person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "coordination"
    }
  },
  {
    key: "georges",
    name: "Georges Daniel Amvame Nze",
    area: "Professor Dr. Engenharia Elétrica",
    email: "georges@unb.br",
    picture: "man",
    bio: "A cool person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "coordination"
    }
  },
  {
    key: "desousa",
    name: "Rafael de Sousa Jr.",
    area: "Professor Dr. Engenharia Elétrica",
    email: "desousa@unb.br",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "coordination"
    },
    order: 0
  },
  {
    key: "franciscocaldasf",
    name: "Francisco de Caldas Filho",
    area: "Doutorando em Engenharia Elétrica",
    email: "francisco.caldas@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "msc-francisco-lopes-de-c-filho-b0255224",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "coordination"
    },
    order: 2
  },
  {
    key: "victorcampos",
    name: "Victor Campos",
    area: "Ciência da Computação",
    role: "software",
    email: "victor.campos@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "lincolnbarbosa",
    name: "Lincoln Abreu",
    area: "Engenharia da Computação",
    email: "lincoln.barbosa@uiot.org",
    picture: "man",
    bio: "A smart person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "hardware"
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
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "security"
    }
  },
  {
    key: "fabiomendonca",
    name: "Fábio L. L. de Mendonça",
    area: "Doutorando em Engenharia Elétrica",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "coordination"
    }
  },
  {
    key: "marcosandrade",
    name: "Marcos Blandim",
    area: "Engenharia da Computação",
    role: "hardware",
    email: "marcos.blandim@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "marcosblandim",
    github: "marcosblandim",
    belong: true,
    lab: {
      active: true,
      area: "hardware"
    }
  },
  {
    key: "matheusmonteiro",
    name: "Matheus S. Monteiro",
    area: "Engenharia de Redes de Comunicação",
    role: "hardware",
    email: "matheus.monteiro@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "hardware"
    }
  },
  {
    key: "patrao",
    name: "Rafael L. Patrão",
    area: "Engenharia de Produção",
    role: "quality",
    email: "rafael.patrao@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "quality"
    }
  },
  {
    key: "fernandaformiga",
    name: "Fernanda Formiga",
    area: "Análise e Desenvolvimento de Sistemas",
    role: "software",
    email: "fernanda.silva@uiot.org",
    picture: "woman",
    bio: "",
    linkedin: "fernanda-formiga",
    github: "fernandaformiga",
    belong: true,
    lab: {
      active: true,
      area: "quality"
    }
  },

  {
    key: "gustavoluz",
    name: "Gustavo Luz", //Gustavo Pessoa Caixeta Pinto da Luz
    area: "Engenharia de Produção",
    role: "software",
    email: "gustavo.luz@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "gustavo-luz-unb",
    github: "gustavo-luz",
    belong: true,
    lab: {
      active: true,
      area: "quality"
    }
  },
  {
    key: "carolinasartori",
    name: "Carolina Sartori da Silva",
    area: "",
    role: "software",
    email: "carolina.silva@uiot.org",
    picture: "woman",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "justino",
    name: "Bruno Justino G. Praciano",
    area: "Mestrando em Engenharia Elétrica",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "mwlite/in/bruno-justino-58b846123",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "robsonalbuquerde",
    name: "Robson de O. Albuquerque",
    area: "",
    role: "orientation",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "orientation"
    }
  },
  {
    key: "lustosa",
    name: "João Paulo C. L. da Costa",
    area: "",
    role: "orientation",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "orientation"
    }
  },
  {
    key: "cassioribeiro",
    name: "Cassio Fabius C. Ribeiro",
    area: "Mestrando em Engenharia Elétrica",
    role: "hardware",
    email: "cassio.fabius@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "cassiofabius",
    github: "cassiofabius",
    belong: true,
    lab: {
      active: true,
      area: "hardware"
    }
  },
  {
    key: "fiuza",
    name: "João F. de Alencastro",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "maristelaholanda",
    name: "Maristela Holanda",
    area: "",
    role: "orientation",
    email: "",
    picture: "woman",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "orientation"
    }
  },
  {
    key: "thalessperling",
    name: "Thales L. von Sperling",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "dayannecunha",
    name: "Dayanne Cunha",
    area: "Ciencia da Computação",
    role: "software",
    email: "",
    picture: "woman",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "mateuszanatta",
    name: "Mateus da R. Zanatta",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "brunodutra",
    name: "Bruno V. Dutra",
    area: "Ciencia da Computação",
    role: "security",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "security"
    }
  },
  {
    key: "brunofranca",
    name: "Bruno de A. França",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "kfouri",
    name: "Guilherme de O. Kfouri",
    area: "Engenharia Elétrica",
    role: "security",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "security"
    }
  },
  {
    key: "gersonsilva",
    name: "Gerson do N. Silva",
    area: "",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "tribouilet",
    name: "João Tribouilet M. de Menezes",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "demetriosilvaf",
    name: "Demétrio A. da Silva Filho",
    area: "Professor Dr. em Física",
    role: "orientation",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "orientation"
    }
  },
  {
    key: "barenco",
    name: "Cláudia J. Barenco Abbas",
    area: "Professora Dra. Egenharia Elétrica",
    role: "orientation",
    email: "",
    picture: "woman",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "orientation"
    }
  },
  {
    key: "ednacanedo",
    name: "Edna D. Canedo",
    area: "",
    role: "orientation",
    email: "",
    picture: "woman",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "orientation"
    }
  },
  {
    key: "rodrigorocha",
    name: "Rodrigo L. Rocha",
    area: "",
    role: "hardware",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "hardware"
    }
  },
  {
    key: "rubenhuacarpuma",
    name: "Ruben C. Huacarpuma",
    area: "",
    role: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "ingridaraujo",
    name: "Ingrid P. Araújo",
    area: "",
    email: "",
    picture: "woman",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "fabiobuiati",
    name: "Fábio Buiati",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "luisvillalba",
    name: "Luis Javier García Villalba",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "taikim",
    name: "Tai-Hoon Kim",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "caiosilva",
    name: "Caio C. M. Silva",
    area: "",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "samuelalmeida",
    name: "Samuel Almeida",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "poletti",
    name: "João V. Poletti",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "felipemachado",
    name: "Felipe D. Machado",
    area: "",
    role: "hardware",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "hardware"
    }
  },
  {
    key: "sergiolifschitz",
    name: "Sérgio Lifschitz",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "hiroferreira",
    name: "Hiro G. C. Ferreira",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: false,
      area: "software"
    }
  },
  {
    key: "giozza",
    name: "William F. Giozza",
    area: "Professor Dr. Engenharia Elétrica",
    role: "orientation",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "orientation"
    }
  },
  {
    key: "flavioelias",
    name: "Flávio Elias G. de Deus",
    area: "Professor Dr. Engenharia Elétrica",
    role: "orientation",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "orientation"
    }
  },

  {
    key: "danielsilva",
    name: "Daniel A. da Silva",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "josetorres",
    name: "José Alberto S. Torres",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "alexandrepinheiro",
    name: "Alexandre Pinheiro",
    area: "",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: false,
    lab: {
      active: false,
      area: "Area atuação"
    }
  },
  {
    key: "annarosa",
    name: "Anna Carolina Ferreira Rosa",
    area: "Engenharia de Redes de Comunicação",
    role: "hardware",
    email: "anna.rosa@uiot.org",
    picture: "woman",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "hardware"
    }
  },
  {
    key: "hectoroliveira",
    name: "Hector Wender dos Santos Oliveira",
    area: "Cência da Computação",
    role: "hardware",
    email: "hector.oliveira@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "hardware"
    }
  },
  {
    key: "jonathasalves",
    name: "Jonathas Alves de Oliveira",
    area: "Ciência da Computação",
    role: "software",
    email: "jonatas.alves@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "nayarasilva",
    name: "Nayara Rossi Brito da Silva",
    area: "Ciência da Computação",
    role: "software",
    email: "nayara.silva@uiot.org",
    picture: "woman",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "rafaelzerbini",
    name: "Rafael Zerbini",
    area: "Engenharia de Redes de Comunicação",
    role: "security",
    email: "rafael.zerbini@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "rafael-zerbini",
    github: "zerbinidamata",
    belong: true,
    lab: {
      active: true,
      area: "security"
    }
  },
  {
    key: "viniciuscosta",
    name: "Vinicius Salgueiro Costa",
    area: "Engenharia Elétrica",
    role: "hardware",
    email: "vinicius.costa@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "vinicius-salgueiro-1722b21b1",
    github: "Viniciusalgueiro",
    belong: true,
    lab: {
      active: true,
      area: "hardware"
    }
  },
  {
    key: "paulomendes",
    name: "Paulo Henrique",
    area: "Mestrando em Engenharia Elétrica",
    role: "software",
    email: "paulo.mendes@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "security"
    }
  },
  {
    key: "nataliamarques",
    name: "Natália Andrade Marques",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "natalia.marques@uiot.org",
    picture: "woman",
    bio: "A strong person",
    linkedin: "nat%C3%A1lia-a-marques-9159731b1",
    github: "natmarqs",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "lucascoelho",
    name: "Lucas Coelho de Almeida",
    area: "Mestrando em Engenharia Elétrica",
    role: "software",
    email: "lucas.coelho@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "leonardoalmeida",
    name: "Leonardo de Oliveira Almeida",
    area: "Engenharia de Redes de Comunicação",
    role: "quality",
    email: "leonardo.almeida@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "mariaflavia",
    name: "Maria Flávia da Rocha Soares",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "flavia.maria@uiot.org",
    picture: "woman",
    bio: "A strong person",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "pedrosusa",
    name: "Pedro Souza",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "pedro.susa@uiot.org",
    picture: "man",
    bio: "A strong person",
    linkedin: "pedromsouza",
    github: "pedrusouza",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "heitorvieira",
    name: "Heitor Vieira",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "heitor.vieira@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "heitorvieira",
    github: "VieiraHeitor",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "ricardodias",
    name: "Ricardo Dias",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "ricardo.dias@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "ricardo-dias-b5ba49164",
    github: "diasricardo23",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
    key: "andrecavalcanti",
    name: "André Cavalcanti",
    area: "Engenharia de Redes de Comunicação",
    role: "software",
    email: "",
    picture: "man",
    bio: "",
    linkedin: "",
    github: "",
    belong: true,
    lab: {
      active: true,
      area: "software"
    }
  },
  {
      key: "lucasdanelon",
      name: "Lucas Caldas Danelon Lopes",
      area: "Engenharia de Produção",
      role: "hardware",
      email: "lucas.lopes@uiot.org",
      picture: "man",
      bio: "",
      linkedin: "lucas-danelon",
      github: "lucasdanelon",
      belong:true,
      lab: {
        active: true,
        area: "hardware",
      }
  },
  {
    key: "matheuscarvalho",
    name: "Matheus dos Santos Carvalho",
    area: "Engenharia Eletrônica",
    role: "hardware",
    email: "matheus.carvalho@uiot.org",
    picture: "man",
    bio: "",
    linkedin: "mathscarvalho",
    github: "mathscarvalho",
    belong:true,
    lab: {
      active: true,
      area: "hardware",
    }
},
{
  key: "rafaelmonteiro",
  name: "Rafael Moraes Monteiro",
  area: "Engenharia de Redes de Comunicação",
  role: "hardware",
  email: "rafael.monteiro.org",
  picture: "man",
  bio: "",
  linkedin: "rafael-moraes-monteiro",
  github: "Moraes26",
  belong:true,
  lab: {
    active: true,
    area: "hardware",
  }
},
  // template
  // {
  //     key: "x",
  //     name: "",
  //     area: "Area atuação",
  //     role: "",
  //     email: "",
  //     picture: "man",
  //     bio: "",
  //     linkedin: "",
  //     github: "",
  //     lab: {
  //     active: false,
  //     area: "xxxxxxxxxxx",
  // }
  // },
];

export default Members;
