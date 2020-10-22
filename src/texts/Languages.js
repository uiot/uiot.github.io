const Languages =  {
    English: {
        welcomeMsg: 'The universal way of connecting things!',
        lorenIpsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante elit, sagittis ac justo vitae, venenatis varius mi. Mauris ultrices magna vel risus lacinia, non varius velit tempus. Sed eget odio magna. Proin tincidunt eros id enim consequat, ac volutpat ante lobortis. Sed efficitur nisl tristique, scelerisque leo id, suscipit ipsum. Integer hendrerit porttitor ante at egestas. Donec tincidunt justo ligula, quis tempus ipsum lobortis sed. Aenean in augue rutrum elit elementum luctus. Morbi nisl urna, facilisis eget sodales vitae, faucibus non mauris. Vestibulum et orci varius, posuere quam a, mollis ipsum. ',
        footer: 'O projeto Universal Internet of Things (UIoT) é mantido pelo Laboratório de Tomada de Decisão (LATITUDE) e está localizado na Faculdade de Tecnologia (FT) no departamento de Engenharia Elétrica - Universidade de Brasília (UnB)',
        toolbar: {
            projects: "Projects",
            publications: "Publications",
            team: "Team"
        },
        wwdo: {
            title: "This is what we do",
            text: "O UIoT é um laboratório de pesquisa científica em aplicações que envolvem Internet das Coisas (IoT). Aqui desenvolvemos projetos que envolvem a solução completa, envolvendo o sistema destes dispositivos (software), a parte física (hardware) e também a segurança da informação",
            hardware: {
                title: "Hardware",
                text: "A área de hardware do laboratório é responsável por desenvolver dispositivos físicos que têm a função de coletar dados do ambiente. Aqui utilizamos as mais diversas tecnologias, como Raspbery's, arduinos, sensores de monitoramento, protocolos como **HTTP**, **LoRA**, entre muitos outros"
            },
            software: {
                title: "Software",
                text: "São responsáveis por criar soluções IoT em software e desenvolver toda a infraestrutura necessária para coletar os dados dos dispositivos físicos, armazená-los, processá-los e entregar uma visualização/interação de qualidade para o usuário."
            },
            security: {
                title: "Security",
                text: "Esta é a equipe responsável por criar soluções que permitem um tráfego de dados seguro de ponta a ponta"
            },
            button: "Check out"
        },
        home: {
            academics: {
                title: "UIoT Publications",
                text: "Ours publications not involve only IoT topics. We research new technologies involving..."
            }
        },
        team: {
            title: "Our Team",
            text: "Nosso time é composto por alunos de diversos cursos da Universidade de Brasília (UnB), dentre eles: Engenharia de Redes de Comunicação, Engenharia Elétrica, Engenharia da Computação, Engenharia de Produção, entre outros. Também é composto por alunos de outros faculdades"
        },
        pages:{
            publications: {
                title: "UIoT Publications",
                subtitle: "Checkout our academics publications",
                publicationYear: "Publication Year"
            },
            projects: {
                title: "UIoT Projects",
                subtitle: "Checkout our projects",
                middleware: {
                    shortdescription: "This is an description of middleware IoT",
                    gateway: "O Gateway UIoT é a instância da arquitetura responsável pela comunicação entre entre os dispositivos físicos e o middleware UIoT",
                    DIMS: "O DIMS é uma instância do UIoT responsável pelo armazenamento de dados dos dispositivos físicos de forma persistente",
                    UIMS: "O UIMS é o módulo gráfico que se comunica com o DIMS para visualização de dados, aqui é possível filtrar os dados de interesse e visualizar em forma de gráficos",
                    dashboard: "O Dashboard é o módulo de visualização de dados do banco de dados mas de forma contextual. É possível criar cenários de interesse e incluir dispositivos, assim como interagir com os mesmos, enviando comandos"
                },
                amoris: {
                    dashboard: "O Dashboard covid é um projeto desenvolvido pelo laboratório UIoT para combater a pandemia causada pelo Covid 19. Este dashboard de monitoramento é capaz de analisar os dados enviados pelos usuários e desenvolver ações de saúde geolocalizadas",
                    solidaria: "Aplicativo desenvolvido para auxiliar na segurança dos alunos da Universidade de Brasília (UnB). Com este aplicativo, um aluno consegue reportar para a segurança da universidade momentos que necessite de ajuda, como alertas de emergência, escolta ou ajudas de saúde."
                }
            },
            team: {
                title: "UIoT Team",
                subtitle: "Our team",
            }
        }
    },
    Portugues : {
        welcomeMsg: 'A maneira universal de conectar as coisas!',
        ecosystem: 'Ecossistema',
        toolbar: {
            projects: "Projetos",
            publications: "Publicações",
            team: "Time"
        },
        wwdo: {
            title: "Isso é o que nós fazemos",
            text: "O UIoT é um laboratório de pesquisa científica em aplicações que envolvem Internet das Coisas (IoT). Aqui desenvolvemos projetos que envolvem a solução completa, envolvendo o sistema destes dispositivos (software), a parte física (hardware) e também a segurança da informação",
            hardware: {
                title: "Hardware",
                text: "A área de hardware do laboratório é responsável por desenvolver dispositivos físicos que têm a função de coletar dados do ambiente. Aqui utilizamos as mais diversas tecnologias, como Raspbery's, arduinos, sensores de monitoramento, protocolos como HTTP, LoRA, entre muitos outros"
            },
            software: {
                title: "Software",
                text: "São responsáveis por criar soluções IoT em software e desenvolver toda a infraestrutura necessária para coletar os dados dos dispositivos físicos, armazená-los, processá-los e entregar uma visualização/interação de qualidade para o usuário."
            },
            security: {
                title: "Segurança",
                text: "Esta é a equipe responsável por criar soluções que permitem um tráfego de dados seguro de ponta a ponta"
            },
            button: "Confira"
        },
        home: {
            academics: {
                title: "UIoT Publicações",
                text: "Nossas publicações não envolvem apenas tópicos de IoT. Pesquisamos novas tecnologias envolvendo ...",
            }
        },
        team: {
            title: "Nosso time",
            text: "Nosso time é composto por alunos de diversos cursos da Universidade de Brasília (UnB), dentre eles: Engenharia de Redes de Comunicação, Engenharia Elétrica, Engenharia da Computação, Engenharia de Produção, entre outros. Também é composto por alunos de outros faculdades"
        },
        pages:{
            publications: {
                title: "Publicações do UIoT",
                subtitle: "Confira nossas publicações acadêmicas",
                publicationYear: "Ano de publicação"
            },
            projects: {
                title: "Projetos do UIoT",
                subtitle: "Confira nossos projetos",
                middleware: {
                    shortdescription: "This is an description of middleware IoT",
                    gateway: "O Gateway UIoT é a instância da arquitetura responsável pela comunicação entre entre os dispositivos físicos e o middleware UIoT",
                    DIMS: "O DIMS é uma instância do UIoT responsável pelo armazenamento de dados dos dispositivos físicos de forma persistente",
                    UIMS: "O UIMS é o módulo gráfico que se comunica com o DIMS para visualização de dados, aqui é possível filtrar os dados de interesse e visualizar em forma de gráficos",
                    dashboard: "O Dashboard é o módulo de visualização de dados do banco de dados mas de forma contextual. É possível criar cenários de interesse e incluir dispositivos, assim como interagir com os mesmos, enviando comandos"
                },
                amoris: {
                    dashboard: "O Dashboard covid é um projeto desenvolvido pelo laboratório UIoT para combater a pandemia causada pelo Covid 19. Este dashboard de monitoramento é capaz de analisar os dados enviados pelos usuários e desenvolver ações de saúde geolocalizadas",
                    solidaria: "Aplicativo desenvolvido para auxiliar na segurança dos alunos da Universidade de Brasília (UnB). Com este aplicativo, um aluno consegue reportar para a segurança da universidade momentos que necessite de ajuda, como alertas de emergência, escolta ou ajudas de saúde."
                }
            },
            team: {
                title: "Time UIoT",
                subtitle: "Nosso time",
            }
        }
    }
}

export default Languages
