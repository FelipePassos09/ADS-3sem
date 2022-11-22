<h1>Compiutação em Núvem</h1>
<h2>Conceito de Virtualização</h2>
<p>Consiste na possibilidade de se virtualizar, ou seja, transformar algo analógico em virtual, uma máquina. A virtualização de máquinas (ou VM's: Virtual Machines) geralmente é realizada através de sftwares ou outras máquinas dedicadas, como HyperV, Virtual Box e VM Ware. Através dessas tecnologias conseguimos criar uma ou mais máquinas virtuais simulando todos os seus componentes, como processadores, memória, armazenamento, adaptadores de rede e vídeo, etc.</p>
<h2>Elasticidade</h2>
<p>É a possibilidade de se expandir ou reduzir os recursos de uma máquina virtual a partir do quanto ela demandada, desse modo podemos reduzir a capacidade de processamento e rede, por exemplo, em um momento de baixa carga de uso, ou aumentar essas capacidades em momentos de alto volume de desempenho necessário.</p>
<h2>Utility Computing</h2>
<p>É uma visão de negócio onde os serviços de TI são oferecidos de modo contuinuado á um custo mensal fixo baseado no uso, ou seja, a partir de uma mensalidade alguns recursos como máquinas virtuais, armazenamento, etc são fornecidos e cobrados por hora, tipo, quantidade, etc.</p>
<h2>Self-service</h2>
<p>É um modelo de gestão onde o próprio cliente gerencia a alocação de recusrsos de módo manual ou automático, de modo que o provedor tem pouca ou nenhuma intervenção nessa gestão.</p>
<h2>Amplo Acesso</h2>
<p>Diz da característica em que os recursos podem ser acessos remotamente, de qualquer lugar, possuindo também soluções multi-plataforma.</p>
<h2>Pooling de Recursos</h2>
<p>Neste caso diz respeito à característica de provedores que mantém um conjunto de recursos compartilhados entre os clientes e mantém a transparência quanto à localização e manutenção destes equipamentos.</p>
<h2>Serviços Mensurados</h2>
<p>Caracteriza o processo de monitoramento, medição e contabilização detalhada do uso de recursos pelo cliente para fins de cobrança e/ou monitoramento da qualidade dos serviços.</p>
<h1>Desafios da Computação em Núvem</h1>
<h2>Segurança e privacidade</h2>
<p>Devido à característcia principal de virtualização, o acesso aos recursos se dá de maneira remota o que cria janelas de vulnerabilidade que precisam se consideradas na implementação de um serviço de Cloud.</p>
<h2>Disponibilidade</h2>
<p>Devido os recursos fisicos serem, por vezes, distantes ou inacessiveis fisicamente, podem haver diversos problemas de disponibilidade caso o recurso procurado esteja inacessível remotamente ou com desempenho baixo ou comprometido. Tais problemas são os principais vilões no que diz respeito á tecnologia de cloud.</p>
<h2>Portabilidade</h2>
<p>A maioria dos softwares ou aplicações utilizadas (ou fornecidas) por meio de cloud possuem dependências de outros componentes de software que precisam ser compatíveis com a solução implementada.</p>
<h2>Questões Juridicas</h2>
<p>Em virtude de questões comerciais ou legais, alguns softwares ou aplicativos podem não ser aplicáveis em uso em cloud por haver compartilhamento de recursos e mão de obra.</p>
<h2>Vendor Lock-in / Aprisionamento</h2>
<p>Diz-se de uma situação onde o cliente, por diversos motivos, acaba ficando "preso" ao proevdor em virtude de restrições técnicas ou legais, intencionais ou não. Essa pode ser uma grande barreira caso seja necessária a migração de estrutura para outro provedor ou um novo conjunto de recursos diferente.</p>
<h1>Modelo de Serviço</h1>
<p>Representa, em linhas gerais, qual o caminho e modelo de negócio implementado. Isso se reflete no nível de acesso do cliente aos recursos contratados/alocados, o nível de abstração com qual esses serviços são ofertados e como podem ser controlados e, acima de tudo, como se dará o fornecimento destes recursos e serviços.</p>
<h2>Infraestructure as a Service (IaaS)</h2>
<p>Infraestrutura como serviço é uma modalidade onde toda a infraestrutura de recursos é fornecida ao cliente e este fica responsável por todas as demais implementações, como sistemas operacionais, firewall, DNS e demais configurações. Alguns provedores, inclusive, permitem o uso das máquinas para criação de VM's diversas dentro da mesma infraestrutura.</p>
<h2>Platform as a Service (PaaS)</h2>
<p>A plataforma como serviço consiste de uma estrutura onde o usuário não possui liberdade quanto à infraestrutura, recebendo geralmente as implementações prontas para o uso, com sistema operacional e demais aplicações importantes. Este modelo de negócio é utilizado também em cenários onde já há um conjunto de requisitos previamente considerados e metrificados.</p>
<h2>Software as a Service</h2>
<p>O Software como serviço é um modelo de serviço onde o objeto é um software ou aplicação, neste caso não dando liberdade para o cliente controlar infraestrutura ou plataforma. É um modelo comumente utilizado para fornecimento de softwares e/ou jogos pois apenas a aplicação é acessada e controlada pelo usuário.</p>
<h2>Modelos de Serviço Especializados</h2>
<p>São modelos de serviço menos genéricos e direcionados à uma finalidade específica, neste modelo o objeto não é, necessáriamente uma infraestrutura ou um software.</p>
<h2>Everithing as a Service(XaaS)</h2>
<p>É um modelo genérico, seu nome significa Tudo como Serviço. Ou seja, nesse modelo qualquer aplicação ou estrutura pode ser considerada como objeto do negócio.</p>
<h2>DataBase as a Service (DBaaS)</h2>
<p>O Banco de Dados como serviço é um modelo que consiste no fornecimento de um banco de dados, neste caso as soluções visam reduzir o trabalho do cliente com manutenção física e oferecer soluções de bancos de dados escaláveis e personalizáveis de acordo com a necessidade. Um exemplo pode ser o Mongo Atlas, solução de banco de dados NoSQL que possui toda a sua infraestrutura em Cloud.</p>
<h2>Backend as a Service (BaaS)</h2>
<p>É um modelo que visa mitigar o esforço com relação à implementações de backend. Neste modelo são fornecidas plataformas e implementações que abrangem as principais dores do backend como gerenciamento de acessos, verificação de identidade, implementações de bancos de dados e outras features necessárias para um backend sólido.</p>
<h2>Business Process as a Service (BPaaS)</h2>
<p>O processo de negócio como serviço é uma solução que envolve o fernecimento de soluções para o gerenciamento e continuidade de negócio de uma empresa, neste modelo podem ser fornecidas ferramentas de gestão, monitoramento de fluxos e proformance, BI e, ocasionalmente, CRM e ERP, além de conter soluções para garantir a continuidade dos serviços de infraestrutura de TI.</p>
<h1>Modelos de Implantação</h1>
<p>São as abordagens que podem ser aplicadas pelos provedores de serviço. Os modelos de implantação definem aspectos como segurança, disponibilidade e acessibilidade.</p>
<h2>Cloud Privada</h2>
<p>É o modelo mais próximo de uma infraestrutura fisica proprietária. Neste modelo temos uma implementação sem compartilhamento de serviços ou recursos sendo um cenário fechado, onde apenas os membros da organização contratante possuam acesso aos recursos dessa solução.</p>
<h2>Cloud Hibrida</h2>
<p>É uma mescla entre a privada e pública, é geralmente utilizado em implantações que necessitam de camadas distintas de segurança e sigio pois, além de permitir um maior controle e economia. Em virtude da complexidade essa implantação caracteriza cenários criticos de gerenciamento e implantação pois pode não haver compatibilidade entre as soluções, maior responsabilidades administrativass, entre outros.</p>
<h2>Cloud Publica</h2>
<p>Essa implementação consiste de um conjunto onde os recursos provém de um provedor que detém a posse dos recursos fisicos e comercializa esse recurso na forma de cotas ou pacotes, sendo o maior representante de serviços de cloud atualmente. Neste modelo os clientes compartilham os recursos de modo individual, o que gera a possibilidade de escalabilidade quase ilimitada e maior confiabilidade no fornecimento do serviço em virtude do caráter de produto de venda.</p>
<h2>Cloud Comunitária</h2>
<p>Consiste de uma implantação onde dievrsas organizações compartilham da mesma solução e recursos.</p>
<h1>Gerenciamento de Infraestrutura</h1>
<p></p>
<h1>Arquitetura de Aplicação em Núvem</h1>
<p>Em função das aplicações às quais são destinadas a implementação podemos dimensioná-la e segmentá-la em vários módulos funcionais. Os módulos funcionais consistem de partes de uma estrutura responsáveis por atividades e/ou funcionalidades específicas como autenticação, bancos de dados, processamento, entre outros. <br/><br/>Por conveniência, essa segmentação é muito utilzada tanto para otimizar os processos computacionais envolvidos como para reduzir custos com operação, além de agregar segurança à aplicação pois níveis de acessos distintos podem ser incorporados para cada módulo.<br/>O principal objetivo da aqruitetura da aplicação é estudar e planejar como e quais serão os módulos funcionais implementados, suas caracteríticas e demais configurações relacionadas. Para tanto, o projeto de arquitetura prevê esse estudo demodo a termos uma base sólida e segura para a implementação da aplicação desejada, analisando e definindo as caracteríticas que serão empregadas em cada módulo separadamente, por exemplo, se usarmos um módulo de autenticação quais serão os perfis e formas de acesso à este, ou se usarmos um módulo para bancos de dados, como este será dimensionado, quais as necessidades de processamento e armazenamento previstas e qual o nível de escalabilidade será esperado para o mesmo. <br/><br/>Geralmente temos três grandes modelos de arquitetura, são eles: centralizada, decentralizada e híbrida.</p>
<h3>Arquitetura Centralizada</h3>
<p>Modelo tradicionalmente encontrado em aplicações Web. É caracterizado por uma estrutura homogênea onde um componente é responsável pela requisição enquanto outro é responsável pela resposta, geralmente a requisição é feita pelo cliente enquanto que quem responde é o servidor.</p>
<h3>Arquitetura Decentralizada</h3>
<p>Já na arquitetura decentralizada temos uma distinçaõ onde clientes, servidores e componentes de software podem fazer requisições entre si de forma arbitrária, ou seja, sem que haja um endereçamento fixo das requisições de uma origem e um destino. Tal arquitetura é caracterizada pelo modelo Peer-to-Peer (P2P). Um bom exemplo dessa característica são os torrents, onde cada cliente é, também, um servidor, essa caracerística tende a dar maior alcance e rapidez pois as requisições podem ser realizadas com menor atraso entre as diversas instâncias da aplicaçaõ, mas pode tornar a solução sujeita à violações.</p>
<h3>Arquitetura Híbrida</h3>
<p>Tal como o nome da arquitetura, um modelo de arquitetura híbrido compartilha as características de uma estrutura centralizada e uma P2P. Nesse caso temos partes da estrutura seguindo o fluxo centralizado enquanto outras utilizam a estrutura P2P para otimizar a aplicação. Este é um modelo mais complexo porém que traz o melhor de cada arquitetura com a segurança de uma estrutura centralizada com a velocidade de uma P2P.</p>
<h2>Arquitetura de Múltiplas Camadas</h2>
<p>Com o crescente aumento por poder de processamento e velocidade nas aplicações surgiu o modelo de múltiplas camadas, onde temos uma distribuição de camadas de servidores cada qual responsável por determinadas atividades como processamento e bancos de dados, ou autenticação e consulta. Os modelos de múltiplas camadas, embora similares aos modelos decentralizados, tem as características de uma estrutura centraliazda pois as requisições dos clientes são endereçadas aos servidores e apenas estes se comunicam entre sí. Dessa maneira temos a possibilidade de distribuir o processamento ou escalar as aplicações de modo dinâmico se sem impactos diretos aos clientes.</p>