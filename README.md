# Sistema de Gerenciamento de Condomínios
O objetivo deste projeto é desenvolver um sistema de gerenciamento de condomínios que possibilite a administração e controle das atividades do condomínio de maneira eficiente e segura.


O sistema de gerenciamento de condomínios tem como objetivo oferecer uma solução para a gestão de condomínios residenciais que possibilite a administração e controle das atividades do condomínio de maneira eficiente e segura. O sistema será capaz de lidar com as tarefas necessárias para que que atenda às necessidades de proprietários, moradores e síndicos, garantindo uma gestão transparente e confiável.

O sistema irá fornecer funcionalidades para gerenciamento de reservas de áreas comuns, como salão de festas, academias e piscinas. Será possível agendar a reserva dessas áreas e verificar a disponibilidade.

O sistema também terá um portal da transparência, onde os moradores poderão ter acesso às informações financeiras, regulamentos e outros documentos relacionados ao condomínio. As informações serão apresentadas de forma clara e organizada, garantindo a transparência na gestão.

O sistema também incluirá um módulo de gerenciamento de regras do condomínio. Os moradores poderão acessar as regras do condomínio através do portal da transparência.

O sistema irá enviar notificações automáticas para os moradores sobre eventos do condomínio, questões de manutenção e outros assuntos importantes.
Além disso, o sistema terá um módulo de gerenciamento de servidores externos, funcionalidade de agendamento em portaria permitirá que os moradores cadastrem a chegada de prestadores de serviço e outras pessoas autorizadas, incluindo servidores responsáveis pela manutenção, garantindo que eles tenham acesso às áreas necessárias para realizar seu trabalho.

O sistema de gerenciamento de condomínios será baseado em tecnologia web, o que permitirá o acesso em qualquer lugar com internet. Será fácil de usar e terá uma interface amigável para garantir a usabilidade. O sistema será desenvolvido usando as melhores práticas de engenharia de software, com ênfase em segurança e confiabilidade.

Nosso objetivo é fornecer um sistema de gerenciamento de condomínios eficiente e fácil de usar que atenda às necessidades de proprietários, moradores e síndicos, garantindo uma gestão transparente e confiável.

## Funcionalidades

-   Reservas de áreas comuns, como salão de festas, academias e piscinas. É possível agendar a reserva dessas áreas, verificar a disponibilidade e gerar relatórios de uso.
-   Portal da transparência, onde os moradores podem ter acesso às informações financeiras, regulamentos e outros documentos relacionados ao condomínio. As informações são apresentadas de forma clara e organizada, garantindo a transparência na gestão.
-   Módulo de de regras do condomínio. Os moradores podem acessar as regras do condomínio através do portal da transparência.
-   Notificações automáticas para os moradores sobre eventos do condomínio, questões de manutenção e outros assuntos importantes.
-   Módulo de agendamentos em portaria de serviços contratados pelo residente. Os moradores podem agendar a chegada de prestadores de serviço, visitas de técnicos, entre outros.



## Arquitetura

O sistema será implementado utilizando a arquitetura baseada em serviços(SOA) e a abordagem de Domain-Driven Design (DDD), que permitirá uma melhor separação de responsabilidades e uma maior flexibilidade para adaptação às necessidades do cliente.

O frontend será desenvolvido utilizando a biblioteca React Native, permitindo a criação de interfaces de usuário nativas para dispositivos móveis, enquanto o backend será implementado em .NET Core, utilizando a linguagem C#.

Durante o desenvolvimento do projeto, serão utilizadas práticas ágeis de desenvolvimento de software, como o Scrum, para garantir a entrega de valor ao cliente em intervalos curtos de tempo e com alta qualidade.

O projeto será desenvolvido sob a orientação do professor e com a participação do cliente, para garantir a aderência às necessidades do negócio.

Mais detalhes sobre o a arquitetura, tecnologias utilizadas, dependências, requisitos e execução da aplicação em [Frontend]() e [Backend]().


## Descrição dos Componentes

O sistema de gerenciamento de condomínios é composto pelos seguintes módulos:

1.  Portal da Transparência: Este módulo é responsável por fornecer acesso a informações relevantes aos moradores do condomínio, como atas de reunião, balancetes, prestações de contas e outros documentos relacionados à gestão do condomínio. Ele também fornece funcionalidades para busca de informações, visualização de documentos e geração de relatórios.
    
2.  Gerenciamento de Áreas Comuns: Este módulo permite que os moradores do condomínio reservem e gerenciem o uso das áreas comuns, como salão de festas, churrasqueiras, piscinas, entre outras. Ele fornece funcionalidades para agendamento de eventos, verificação de disponibilidade, aprovação de reservas, registro de manutenções e geração de relatórios.
    
3.  Cadastro de Servidores Externos: Este módulo permite que o condomínio cadastre e gerencie informações de prestadores de serviços externos, como empresas de segurança, limpeza e manutenção. Ele fornece funcionalidades para registro de informações de contato, controle de pagamentos e geração de relatórios.
    
4.  Regras do Condomínio: Este módulo gerencia as regras e regulamentos do condomínio, como regras de uso das áreas comuns, regras de convivência, entre outras. Ele permite que o condomínio registre as regras e as disponibilize para os moradores, bem como faça o controle de infrações e multas.
    
5.  Notificações: Este módulo permite que o condomínio envie notificações para os moradores, como comunicados de eventos, informações sobre obras ou manutenções, entre outros. Ele fornece funcionalidades para criação de templates de notificações, programação de envios, controle de confirmações e geração de relatórios.
    
6.  Administração do Sistema: Este módulo permite que o admin gerencie as informações do sistema, como criar, editar e excluir usuários, prédios, apartamentos e outras informações relevantes. Ele inclui funcionalidades para autenticação e autorização de usuários, controle de permissões e acesso ao sistema, e gerenciamento de logs de atividades.
