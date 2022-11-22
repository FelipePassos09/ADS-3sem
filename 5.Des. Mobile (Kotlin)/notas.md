<h1>Desenvolvimento Mobile</h1>
<h2>Prof. Gilberto</h2>
<p>Para desenvolvermos um aplicativo para Android utilizamos tanto a linguagem Java quanto a Linguagem Kotlin, esta segunda tendo sido criada como um super conjunto do java, trazendo melhorias de sintaxe e otimizações gerais de performance para melhorar o prcoesso de aprendizado e também desenvolvimento das aplicações.<br/><br/>Além destas temos também o Xamarin, conjunto de frameworks para o .Nets com a finalidade de desenvolver aplicações mobile e o Swift para desenvolvimento voltado à IOS. Curiosamente algumas linguagens permitem o desenvolvimento híbrido como o caso do proprio Xamarin, do Python ou do Flutter, que possuem compatibilidade com todos os sistemas operacionais mobile mais populares.</p>
<h2>IDE - Android Studio</h2>
<p>
    Para desenvolvimento Android o mais usual é utilizarmos uma IDE (Ambiente de Desenvolvimento Integrado), no caso a mais comum e específica para isso sendo o Android Studio, desenvilvido e sustentado pela JetBrains. O Android Studio constitui um ambiente completo de desenvolvimento e inclui, além do editor de código, uma camada de emulação onde podemos simular (emular) um dispositivo Android, lembrando que, para tanto, o hardware onde está sendo feito o desenvolvimento precisa atender aos requisitos mínimos desta aplicação.
    <br/><br/>
    Outra maneira de desenvolvermos é utilizando um dispositivo Android conectado à estação que fará as vezes do ambiente de execução da aplicação desenvolvida ou, alé de tudo isso, usarmos um editor de texto para escrevermos o código e, durante a compilação, instalarmos o .apk resultante para testá-lo no aparelho manualmente.
</p>
<h3>SDK - Software Development Kit</h3>
<p>
    O Android, como visto acima, necessita de uma etapa de compilação, ou seja, seu código fonte não é executado diretamente, sendo necessário compilá-lo para binário a fim de ser corretamente interpretado pelo sistema operacional. Para isso precisamos além da IDE, de um compilador (ou builder) que trata-se do SDK, este fará o empacotamento do código criado em linguagem de alto nível para baixo nível e retornará um arquivo com a extensão .apk. Também é possível executarmos arquivos .jar, porém além de carregar consigo uma baixa performance também levam menor compatibilidade com recursos nativos do sistema operacional.
</p>
<h2>Kotlin</h2>
    <p>
        Como pontuado acima, o Kotlin é uma linguagem derivada do Java, tendo sido criada pela Google para desenvolvimento das aplicações Android. esta linguagem, apesar de derivada do Java também possui influências do JavaScript, C# e Python, sendo menos verbosa e com instruções mais resumidas e diretas, desse modo tornando a confecção do source-code mais simples e de manutenção mais fácil.
        <br /><br/>
        Por ser baseado em Java, o Kotlin é um linguagem, primariamente, orientada à objetos, ou seja, para desenvolvermos nela utilizamos os já conhecidos principios da orientação à objetos como Classes, Instanciação, Métodos e os paradigmas básicos dessa metodologia. No entanto, por ser mais simplificada, isso se torna de mais fácil compreenção e implementação.
        <br /><br />
        Outra vantagem do Kotlin se dá pela característica de modularidade, ou seja, ele permite que importemos e utilizemos diversos recursos já previamente estruturados (chamados de bibliotecas) isso torna o trabalho de desenvlver nesta linguagem mais simples e sólido pois as bibliotecas permitem usarmos recursos específicos para a finalidade desejada.
    </p>
<h2>Trabalhando com Kotlin</h2>
<p>Através do kotlin, podemos, como comentado acima, definir funções, métodos, instaciar objetos e criar classes. Isso tudo a</p>
<h2>AndroidManifest.xml</h2>
    <p>É destinado para definir os parâmetros gráficos e de layout gerais, nele inferimos os ícones, temas, padrões de cores, versão do android, telas principais, etc...</p>
<h2>Criando um Projeto</h2>
    <p>
        <h3>Nome de Pacote</h3>
            <p>É empregado para definir que a sua aplicação é única, ou seja, que ela pertence apenas à você.</p>
        <h3>Linguagem</h3>
            <p>Serve para indicarmos qual a linguagem principal do projeto, podendo ser Java ou Kotlin.</p>
        <h3>Minimum SDK</h3>
            <p>Aqui definimos qual será a versão mínima de compatibilidade da nossa aplicação, podendo ser escolhida dentre as opções disponíveis de todas as gerações do Android. Quanto mais antigo o SDK maior a compatibilidade porém menores serão os recursos disponíveis.</p>
    </p>
<h2>Activities in Views</h2>
    <p>Dentro da Tah activites podemos inserir nossa views, as views consistem de blocos gráficos que representam botões, blocos de texto, imagens, etc. Em resumo o conjunto de views forma o layout da aplicação.
        <ul>
            <li>TextView - são os blocos que possuem dentro de sí apenas textos.</li>
            <li>ImageView - São blocos que possuem imagens.</li>
            <li>ButtonView - São blocos que representam botões.</li>
        </ul>
    </p>
    <h3>ViewGroups</h3>
        <p>As ViewGroups são agrupamentos de views, ou containeres, podendo ser LinearLayout, RelativeLayout ou ScrollView:
            <ul>
                <li>LinearLayout - é um containner com distribuição linear a partir de um eixo 0. Podem ser com alinhamento horizontal ou vertical.</li>
                <li>RelativeLayout - é um alinhamento também linear, mas que utiliza um eixo variável como outra view ou componente.</li>
                <li>ScrollView - este tipo de container permite acrescentar a barra de rolagem na aplicação.</li>
            </ul>
        </p>
    <h3>Estilização</h3>
        <p>Assim como qualquer outro tipo de interface, aqui também podemos definir os padrões de estilização da intyerface, como tamanho e peso das views, alinhamento dos conteúdos, justificação das views em relação aos conteúdos, etc...</p>
<h2>Lógica</h2>
    <p>
        Como visto, temos duas camadas para desenvolvermos uma aplicação Android, uma camada de interface e outra de lógica. Neste caso a lógica será a implementação Java ou Kotlin, que será responsável por executar os cálculos, análises, consultas, etc. e retornar essas informações para a interface.
        <h3>Objetos</h3>
            <p>
                No caso tanto do java quanto do kotlin, ambos se utilizam da Orientação à Objetos como paradigma principal, portanto teremos a criação de classes e instanciação de objetos, por vezes estes objetos e métodos serão associados aos elementos da interface para serem instanciados ou executados. Por padrão, ao criarmos um novo projeto de interface já é criado uma nova classe Main associada aà interface e, nesse caso, nela iremos definir o que são nossas variáveis, associalas aos elemntos da interface a partir de ID's e, por fim, os métodos e funções que serão executadas a partir das interações. Uma coisa muito importante, sempre que tivermos um elemento que seja associado à uma variável devemos identificá-lo por um ID, no formato <i>id="@+id/nome_do_id</i>, esse código será o responsável por indicar à parte lógica qual o componente visual ela estará associada.
            </p>
            <h3>Instanciando Variáveis</h3>
                <p>
                    Para instanciarmos um objeto da interface na parte lógica precisamos, inicialmente, criar uma variável do mesmo tipo da view, ou objeto, e, em seguida, atribuí-la a partir do id. No caso de uma view isso significa:
                    <br/><br/>
                    private TextView mExemplo;
                    <br/>
                    mExemplo = findViewById(R.id.nome_do_id);
                    <br/><br/>
                    Alguns detalhes importantes:
                    <br/>
                    <b>Sempre identificar iniciar as variáveis com m minúsculo pois isso é uma boa prática do desenvolvimento Android e o m representa que está é uma variável mobile.</b>
                    <br />
                    <b>Ao criar uma variável, sempre definí-la como private pois esta será utilizada apenas no escopo local da classe onde está instá invocada. Desse modo podemos garantir a segurança da aplicação e proteger esse conteúdo de manipulação por outras variáveis.</b>
                </p>
            <h3>Criando Funções</h3>
                <p>
                    Para criarmos as funções usamos os mesmos princípios da linguagem utilizada, porém no caso do Java temos que passar como parametros o Tipo de objeto ao qual será atribuído essa função e seu 'nome', por exemplo, no caso de uma view usamos (View view), outro detalhe é que as funções que geram alterações na interface não possuem retorno, sendo no caso funções void.<br/>
                    Para que hajam as alterações na interface basta utilizarmos as variáveis previamente instanciadas com os métodos .setText ou similares e formatar a saída de acordo com o método (no caso do .setText sempre devemos converter o valor para string).
                </p>
    </p>