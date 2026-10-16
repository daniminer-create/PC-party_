/* PC PARTY — systems for questions, rounds, minigames, events and the shop. */

const difficultySettings = {
    easy: { label: "🟢 FÁCIL", points: 100, timeScale: 1.25, extra: 0 },
    medium: { label: "🟡 MÉDIO", points: 200, timeScale: 1, extra: 1 },
    hard: { label: "🔴 DIFÍCIL", points: 300, timeScale: 0.75, extra: 2 }
};

const categoryByMinigame = {
    virus: "Segurança digital",
    storage: "Armazenamento",
    heat: "Hardware e refrigeração",
    ram: "Memória e montagem",
    spyware: "Segurança digital",
    worms: "Segurança de redes",
    cables: "Redes e periféricos",
    boot: "Inicialização e UEFI",
    backup: "Backup e recuperação",
    diagnostic: "Diagnóstico técnico",
    assembly: "Montagem e compatibilidade",
    taskmanager: "Desempenho e recursos",
    sequence: "Procedimentos de suporte",
    interview: "Atendimento técnico"
};

function question(difficulty, title, description, answers, correctIndex, minigame, explanation = "", category = "") {
    return {
        difficulty,
        title,
        description,
        category: category || categoryByMinigame[minigame],
        options: answers.map((text, index) => ({
            letter: String.fromCharCode(65 + index),
            text,
            id: `answer-${index}`
        })),
        answer: `answer-${correctIndex}`,
        explanation: explanation || `A melhor conduta é ${answers[correctIndex].charAt(0).toLowerCase()}${answers[correctIndex].slice(1)}. Ela responde aos sintomas apresentados sem pular etapas importantes do diagnóstico.`,
        minigame
    };
}

const questions = [
   
question("easy", "Meu PC está muito lento.", "Tudo demora para abrir, mesmo sem programas pesados em execução.", [
  "Verificar uso de CPU, RAM, disco e aplicativos de inicialização",
  "Aumentar a memória virtual sem investigar o consumo de recursos",
  "Atualizar todos os drivers antes de verificar o Gerenciador de Tarefas",
  "Desfragmentar o disco sem verificar se é um SSD"
], 0, "storage"),

question("medium", "O computador desliga durante os jogos.", "O desligamento acontece após alguns minutos em jogos exigentes.", [
  "Reinstalar o driver de vídeo antes de verificar temperaturas e energia",
  "Monitorar temperaturas e verificar refrigeração e alimentação elétrica",
  "Reduzir a resolução e considerar o problema definitivamente resolvido",
  "Testar a memória RAM sem investigar o comportamento sob carga"
], 1, "heat"),

question("easy", "Anúncios estranhos aparecem no navegador.", "Novas abas abrem sozinhas e a página inicial mudou.", [
  "Limpar apenas o histórico e manter todas as extensões instaladas",
  "Redefinir o DNS sem verificar as configurações do navegador",
  "Investigar extensões e programas suspeitos e executar uma verificação antimalware",
  "Reinstalar o driver de rede e testar novamente"
], 2, "spyware"),

question("medium", "O PC não reconhece um pente de RAM.", "O módulo funciona às vezes, mas desaparece após reiniciar.", [
  "Verificar encaixe, compatibilidade, contatos e funcionamento dos slots",
  "Aumentar a memória virtual para compensar a memória não detectada",
  "Atualizar o driver de vídeo para corrigir a identificação da RAM",
  "Alterar a frequência da memória sem verificar a estabilidade"
], 0, "ram"),

question("easy", "O disco está quase sem espaço.", "O Windows avisa que não há espaço suficiente para atualizações.", [
  "Mover todas as pastas pessoais sem verificar se os arquivos foram copiados",
  "Identificar arquivos dispensáveis, revisar temporários e liberar espaço com segurança",
  "Desativar as atualizações para impedir novos avisos",
  "Excluir pontos de restauração e backups sem verificar sua importância"
], 1, "storage"),

question("medium", "A ventoinha faz muito barulho.", "O ruído aumenta quando abro jogos ou programas pesados.", [
  "Substituir a ventoinha imediatamente, sem identificar a origem do ruído",
  "Reduzir a velocidade das ventoinhas para diminuir o barulho",
  "Verificar temperaturas, poeira, obstruções e possíveis falhas nas ventoinhas",
  "Reinstalar o Windows para corrigir o controle de rotação"
], 2, "heat"),

question("hard", "A CPU fica em 95°C mesmo em tarefas leves.", "O cooler está instalado, mas a temperatura continua elevada.", [
  "Aumentar a velocidade da ventoinha sem verificar a montagem do cooler",
  "Reduzir a frequência da CPU e ignorar a possível causa física",
  "Atualizar a BIOS imediatamente, sem verificar o modelo da placa-mãe",
  "Verificar contato e fixação do cooler, pasta térmica e fluxo de ar"
], 3, "heat"),

question("easy", "Meu SSD novo não aparece no Explorador.", "Ele aparece na BIOS, mas não tem uma letra de unidade.", [
  "Verificar o Gerenciamento de Disco e, se necessário, inicializar e criar um volume",
  "Alterar a ordem de boot até o SSD aparecer no Explorador",
  "Reinstalar o driver de vídeo para atualizar a lista de unidades",
  "Formatar o disco do sistema para que o SSD seja reconhecido"
], 0, "storage"),

question("medium", "Um HDD faz cliques e demora para abrir arquivos.", "Os arquivos importantes ainda estão acessíveis.", [
  "Executar uma desfragmentação completa antes de copiar os arquivos",
  "Fazer backup prioritário dos dados acessíveis e avaliar a saúde do disco",
  "Executar repetidamente testes intensivos de leitura antes do backup",
  "Reinstalar o Windows no HDD para corrigir possíveis erros"
], 1, "backup"),

question("hard", "A BIOS não detecta o SSD M.2.", "A placa-mãe possui mais de um slot M.2.", [
  "Alterar o modo de boot entre UEFI e Legacy para forçar a detecção física",
  "Atualizar o Windows antes de verificar se o disco aparece na BIOS",
  "Conferir encaixe, compatibilidade SATA/NVMe e possíveis limitações dos slots",
  "Inicializar o SSD pelo Gerenciamento de Disco mesmo sem ele ser detectado"
], 2, "boot"),

question("easy", "O monitor diz 'sem sinal'.", "O computador parece ligado, mas a tela permanece preta.", [
  "Reinstalar o Windows usando outro computador",
  "Verificar a memória virtual e reiniciar o sistema",
  "Atualizar o driver gráfico sem confirmar se há imagem disponível",
  "Conferir entrada do monitor, cabo, conexão e saída de vídeo utilizada"
], 3, "cables"),

question("medium", "O computador liga, mas não inicia o Windows.", "A mensagem exibida é 'Boot device not found'.", [
  "Verificar se a unidade é detectada e conferir a ordem de inicialização na UEFI",
  "Reinstalar os drivers de rede para recuperar o carregamento do sistema",
  "Aumentar a memória virtual para que o Windows encontre o disco",
  "Alterar a resolução de vídeo para restaurar o carregador de inicialização"
], 0, "boot"),

question("hard", "Após uma atualização, o PC entra em loop de inicialização.", "O modo de segurança ainda pode ser acessado.", [
  "Reinstalar todos os drivers antes de verificar a atualização problemática",
  "Usar a recuperação do Windows para reverter a atualização e diagnosticar o erro",
  "Formatar imediatamente, sem tentar preservar os dados",
  "Desativar permanentemente o Windows Update sem investigar a falha"
], 1, "boot"),

question("medium", "A fonte faz um estalo e o PC apagou.", "Há cheiro de queimado vindo da parte traseira.", [
  "Testar a fonte repetidamente para descobrir se o problema desaparece",
  "Abrir a fonte e verificar os componentes internos com o computador conectado",
  "Desconectar o equipamento da tomada e não o religar até avaliar a fonte e possíveis danos",
  "Substituir o cabo de vídeo e tentar iniciar novamente"
], 2, "boot"),

question("easy", "O Wi-Fi conecta, mas nenhum site abre.", "Outros dispositivos da mesma rede também estão sem internet.", [
  "Reinstalar o driver de Wi-Fi em todos os dispositivos da casa",
  "Alterar o DNS de apenas um computador e presumir que toda a rede será corrigida",
  "Redefinir as configurações de rede de cada dispositivo imediatamente",
  "Verificar modem, roteador, conexão WAN e possíveis falhas do provedor"
], 3, "cables"),

question("medium", "Sites abrem pelo IP, mas não pelo nome.", "A conexão está ativa e o ping para um IP funciona.", [
  "Investigar a resolução DNS, testar o servidor configurado e limpar o cache quando apropriado",
  "Trocar o cabo do monitor para restabelecer a resolução dos endereços",
  "Aumentar a RAM para permitir que os nomes dos sites sejam traduzidos",
  "Reinstalar o sistema operacional antes de testar a configuração de rede"
], 0, "boot"),

question("hard", "A rede cai durante o envio de arquivos grandes.", "O cabo está conectado, mas o link oscila.", [
  "Alterar o DNS e manter a conexão física sem investigação",
  "Verificar cabo, conectores, erros da interface, negociação de velocidade e porta do switch",
  "Reduzir o tamanho dos arquivos e considerar o problema resolvido",
  "Atualizar o driver gráfico para diminuir a utilização da rede"
], 1, "cables"),

question("easy", "O teclado USB não responde na porta frontal.", "As portas USB traseiras funcionam normalmente.", [
  "Reinstalar o Windows para recuperar as portas frontais",
  "Desativar o controlador USB na BIOS e reiniciar",
  "Testar outro dispositivo e verificar o cabeamento frontal e a conexão à placa-mãe",
  "Substituir o teclado sem testar outras portas frontais"
], 2, "cables"),

question("medium", "A impressora aparece como offline.", "Ela está conectada à mesma rede do computador.", [
  "Reinstalar o Windows antes de verificar a impressora",
  "Alterar o DNS público sem testar a conectividade com o equipamento",
  "Desativar o firewall permanentemente para liberar a impressão",
  "Verificar alimentação, conectividade, fila de impressão, endereço IP e impressora selecionada"
], 3, "boot"),

question("easy", "O mouse fica desconectando.", "O problema começou após conectar um hub USB sem alimentação externa.", [
  "Testar outra porta, conferir cabo e verificar se o hub recebe energia suficiente",
  "Atualizar a BIOS antes de testar o mouse diretamente no computador",
  "Alterar o DNS para evitar interrupções nos periféricos USB",
  "Reinstalar o sistema operacional sem verificar a conexão física"
], 0, "cables"),

question("medium", "O driver de vídeo parou de funcionar.", "O problema começou após instalar uma versão nova do driver.", [
  "Desinstalar todos os drivers do computador, inclusive os não relacionados",
  "Reverter para a versão anterior estável ou reinstalar o driver compatível do fabricante",
  "Formatar o disco para remover possíveis conflitos entre versões",
  "Alterar a frequência do monitor sem verificar o erro do driver"
], 1, "boot"),

question("easy", "Um antivírus encontrou um arquivo suspeito.", "O arquivo veio de um anexo inesperado.", [
  "Abrir o arquivo em modo de administrador para verificar seu conteúdo",
  "Desativar temporariamente o antivírus para concluir o download",
  "Manter o arquivo em quarentena e verificar a origem sem executá-lo",
  "Enviar o arquivo a colegas para descobrir se o alerta também aparece"
], 2, "virus"),

question("medium", "Todos os meus arquivos mudaram de extensão e não abrem.", "Uma mensagem exige pagamento para recuperá-los.", [
  "Renomear os arquivos para as extensões antigas e tentar abri-los",
  "Restaurar imediatamente os arquivos sem verificar se a ameaça continua ativa",
  "Alterar os aplicativos padrão para abrir as novas extensões",
  "Isolar o computador da rede, acionar o procedimento de resposta e recuperar de backups íntegros após conter a ameaça"
], 3, "backup"),

question("hard", "Vários PCs da rede estão infectados ao mesmo tempo.", "O malware parece se espalhar sem ação direta dos usuários.", [
  "Isolar os equipamentos afetados, investigar a propagação lateral e conter o malware na rede",
  "Executar uma limpeza individual em um único computador e ignorar os demais",
  "Atualizar o antivírus de apenas uma máquina e aguardar",
  "Desconectar os monitores para interromper a comunicação entre os computadores"
], 0, "worms"),

question("medium", "Um programa desconhecido envia dados em segundo plano.", "O tráfego continua mesmo sem o navegador aberto.", [
  "Aumentar a memória virtual para reduzir o tráfego de rede",
  "Identificar o processo, examinar conexões e verificar possível spyware antes de agir",
  "Desativar todas as conexões de rede permanentemente",
  "Reinstalar o navegador, mesmo que o tráfego venha de outro processo"
], 1, "spyware"),

question("hard", "Um instalador parece legítimo, mas instala outro programa escondido.", "O arquivo foi baixado de um site não oficial.", [
  "Executar novamente o instalador para identificar tudo o que ele instala",
  "Desativar as proteções do sistema para evitar bloqueios durante a instalação",
  "Tratar como possível trojan, verificar a origem e analisar o arquivo sem executá-lo",
  "Excluir documentos pessoais para impedir que o programa os encontre"
], 2, "virus"),

question("easy", "Recebi um e-mail pedindo minha senha com urgência.", "O link parece semelhante ao endereço do banco.", [
  "Abrir o link em uma janela anônima para verificar se é seguro",
  "Responder ao e-mail pedindo confirmação da identidade do remetente",
  "Baixar o anexo para descobrir se a mensagem é legítima",
  "Não clicar no link, conferir o domínio por um canal oficial e denunciar a mensagem suspeita"
], 3, "spyware"),

question("medium", "O navegador mostra extensões que não instalei.", "A página inicial também mudou sozinha.", [
  "Investigar extensões e programas suspeitos, remover os não autorizados e verificar malware",
  "Restaurar a página inicial sem verificar se a alteração volta a ocorrer",
  "Reinstalar o driver de vídeo para corrigir a configuração do navegador",
  "Desativar todas as atualizações do navegador para impedir novas alterações"
], 0, "spyware"),

question("easy", "O PC ficou lento depois de baixar um 'otimizador'.", "O aplicativo é de um desenvolvedor desconhecido.", [
  "Instalar outros otimizadores para comparar o desempenho",
  "Investigar o programa, removê-lo com segurança e verificar adware ou malware",
  "Desativar o firewall para que o otimizador tenha mais recursos",
  "Excluir arquivos do Windows para compensar o consumo de recursos"
], 1, "virus"),

question("medium", "Os arquivos da empresa precisam ser protegidos.", "Há documentos únicos e espaço limitado no destino.", [
  "Copiar todos os arquivos indiscriminadamente, mesmo sem espaço suficiente",
  "Guardar a única cópia no mesmo disco para facilitar o acesso",
  "Priorizar os dados importantes, planejar a cópia e validar sua integridade e segurança",
  "Copiar somente os atalhos para economizar espaço e preservar os documentos"
], 2, "backup"),

question("hard", "A cópia de segurança foi concluída, mas ninguém testou a restauração.", "O backup nunca foi utilizado para recuperar arquivos.", [
  "Considerar o backup confiável apenas porque o processo terminou sem erro",
  "Apagar a cópia anterior para liberar espaço antes de testar a nova",
  "Guardar a única cópia junto aos arquivos originais no mesmo disco",
  "Testar uma restauração, validar os arquivos e manter cópias isoladas e versionadas"
], 3, "backup"),

question("easy", "O gabinete está cheio de poeira.", "O computador está desligado e desconectado da tomada.", [
  "Usar ar comprimido adequado, evitar tocar nos componentes e impedir que as ventoinhas girem livremente durante a limpeza",
  "Aplicar álcool líquido diretamente sobre a placa-mãe sem esperar a secagem",
  "Usar um aspirador doméstico encostado nos componentes eletrônicos",
  "Bloquear as entradas de ar para impedir o acúmulo de poeira"
], 0, "heat"),

question("medium", "Depois de trocar a pasta térmica, a CPU aquece mais.", "O cooler foi removido e instalado novamente.", [
  "Aumentar a quantidade de pasta até ela cobrir todos os componentes próximos",
  "Verificar quantidade e aplicação da pasta, fixação do cooler e pressão de contato",
  "Desativar as ventoinhas para que o cooler trabalhe sem interferência",
  "Aumentar a tensão da CPU para compensar a elevação da temperatura"
], 1, "heat"),

question("hard", "O PC reinicia ao iniciar um jogo e a GPU está estável.", "O consumo de energia aumenta muito durante o jogo.", [
  "Substituir a GPU sem verificar o restante do sistema",
  "Reduzir a qualidade gráfica e concluir que a fonte está em boas condições",
  "Investigar a capacidade e a qualidade da fonte, os conectores e a estabilidade sob carga",
  "Desativar o antivírus para liberar energia para os componentes"
], 2, "boot"),

question("medium", "A placa-mãe não dá vídeo após a montagem.", "Os LEDs acendem, mas a tela permanece preta.", [
  "Reinstalar o Windows mesmo sem conseguir visualizar a tela",
  "Atualizar o driver gráfico a partir do sistema que não inicia",
  "Alterar a resolução do monitor antes de verificar os componentes",
  "Conferir alimentação ATX e CPU, encaixe da RAM e GPU e códigos de diagnóstico"
], 3, "cables"),

question("hard", "Um módulo de RAM funciona sozinho, mas não em dual-channel.", "A placa tem quatro slots e o manual indica pares recomendados.", [
  "Instalar os módulos nos slots pareados indicados no manual e verificar compatibilidade",
  "Forçar os módulos nos slots que apresentarem maior resistência",
  "Desativar o carregador de inicialização para liberar canais de memória",
  "Alterar o DNS para que o sistema reconheça os dois módulos"
], 0, "ram"),

question("easy", "O Windows precisa de espaço para atualizar.", "Há arquivos temporários e downloads antigos acumulados.", [
  "Excluir pastas do sistema para liberar o maior espaço possível",
  "Revisar arquivos dispensáveis e usar as ferramentas de armazenamento do Windows",
  "Desativar permanentemente as atualizações para evitar novos avisos",
  "Remover todos os drivers antigos sem verificar se ainda são necessários"
], 1, "storage"),

question("medium", "Um dispositivo USB não é reconhecido.", "O mesmo dispositivo funciona em outro computador.", [
  "Substituir a placa-mãe antes de testar outras portas",
  "Alterar as configurações DNS do computador",
  "Testar outras portas e cabos e verificar o Gerenciador de Dispositivos e os drivers",
  "Desativar o controlador USB na BIOS sem investigar o problema"
], 2, "cables"),

question("easy", "O PC demora para iniciar com muitos aplicativos.", "Vários programas abrem automaticamente ao entrar no Windows.", [
  "Excluir arquivos de sistema para diminuir o tempo de inicialização",
  "Substituir a fonte antes de analisar os programas em execução",
  "Desinstalar todos os drivers para reduzir o número de serviços",
  "Revisar os aplicativos de inicialização e desativar os desnecessários"
], 3, "boot"),

question("hard", "A UEFI detecta a unidade, mas o sistema operacional não inicia.", "O problema apareceu após alterar configurações de inicialização.", [
  "Conferir modo UEFI/Legacy, ordem de boot e entradas de inicialização antes de reparar o carregador",
  "Apagar os dados do backup para evitar conflitos com a UEFI",
  "Desativar a memória RAM para forçar a inicialização pelo disco",
  "Reinstalar os drivers de áudio para restaurar o sistema operacional"
], 0, "boot"),

question("medium", "Um processo chamado 'svch0st.exe' consome rede.", "O nome lembra um processo do Windows, mas contém um zero.", [
  "Considerar o processo legítimo porque seu nome se parece com um componente do Windows",
  "Verificar caminho, assinatura digital, conexões e comportamento; analisar o arquivo suspeito",
  "Excluir imediatamente todos os arquivos que contenham 'svch' no nome",
  "Desativar a conexão de internet permanentemente sem investigar o processo"
], 1, "spyware"),

question("hard", "A ventoinha da GPU para e a temperatura dispara.", "O computador continua ligado.", [
  "Aumentar a carga gráfica para verificar se a ventoinha volta a girar",
  "Continuar jogando até que o sistema desligue automaticamente",
  "Interromper a carga e verificar ventoinha, obstruções, conexões e controle térmico",
  "Reduzir a resolução e continuar usando a GPU sem monitorar a temperatura"
], 2, "heat"),

question("easy", "O computador foi infectado por um vírus de pendrive.", "O pendrive precisa ser usado para recuperar documentos.", [
  "Conectar o pendrive a todos os computadores para identificar os infectados",
  "Executar os arquivos do dispositivo para conferir quais ainda funcionam",
  "Desativar o antivírus durante a cópia para evitar falsos positivos",
  "Isolar o dispositivo, analisá-lo em ambiente protegido e recuperar apenas arquivos verificados"
], 3, "virus"),

question("medium", "Há cabos desconectados após mover o gabinete.", "O PC não liga e o botão frontal parece solto.", [
  "Verificar a alimentação e conferir os conectores do painel frontal conforme o manual da placa-mãe",
  "Formatar o SSD para restaurar a função do botão de ligar",
  "Alterar o DNS para recuperar a alimentação elétrica",
  "Remover o cooler antes de conferir os cabos desconectados"
], 0, "cables"),

question("hard", "Após uma queda de energia, arquivos recentes sumiram.", "Havia uma cópia automática configurada.", [
  "Continuar gravando no disco sem verificar possíveis danos",
  "Verificar a integridade do armazenamento e recuperar os arquivos de uma cópia validada",
  "Excluir versões anteriores para evitar conflitos durante a recuperação",
  "Desativar o backup automático antes de investigar o desaparecimento"
], 1, "backup"),

question("medium", "O sistema congela quando a memória fica cheia.", "O Gerenciador de Tarefas mostra uso elevado de RAM.", [
  "Apagar arquivos do sistema para reduzir o uso de memória",
  "Desativar a refrigeração para diminuir o consumo de recursos",
  "Identificar os processos que consomem RAM, reduzir a carga e avaliar a necessidade de memória adicional",
  "Trocar o cabo de vídeo antes de investigar o consumo de memória"
], 2, "ram"),

question("hard", "A placa-mãe mostra erro de bateria CMOS.", "Data, hora e configurações da UEFI se perdem ao desligar.", [
  "Trocar o roteador para preservar as configurações da placa-mãe",
  "Reinstalar o driver de impressora para restaurar a data e a hora",
  "Formatar o armazenamento para impedir a perda das configurações",
  "Substituir a bateria CMOS, conferir a polaridade e reconfigurar a UEFI"
], 3, "boot"),

question("easy", "Quero liberar espaço sem perder fotos.", "A pasta Downloads contém itens antigos e repetidos.", [
  "Revisar os arquivos, identificar duplicatas e fazer backup antes de excluir os dispensáveis",
  "Excluir toda a pasta Documentos para liberar espaço rapidamente",
  "Apagar a pasta do sistema para recuperar armazenamento",
  "Formatar o SSD e restaurar somente os aplicativos"
], 0, "storage"),

question("medium", "O PC não acessa um compartilhamento de rede.", "A internet funciona, mas o nome do servidor não é resolvido.", [
  "Trocar a pasta térmica para melhorar a comunicação entre os computadores",
  "Verificar a resolução DNS, o endereço do servidor, a conectividade e as permissões do compartilhamento",
  "Aumentar a memória de vídeo para carregar arquivos compartilhados",
  "Desativar permanentemente o firewall sem verificar as regras de rede"
], 1, "cables")

];

function addQuestionGroup(category, minigame, answers, scenarios) {
    scenarios.forEach(([difficulty, title, description, correctIndex, explanation, preferredPosition]) => {
        const options = [...answers];
        let answerPosition = correctIndex;
        if (preferredPosition !== undefined && preferredPosition !== correctIndex) {
            const [correctAnswer] = options.splice(correctIndex, 1);
            options.splice(preferredPosition, 0, correctAnswer);
            answerPosition = preferredPosition;
        }
        questions.push(question(difficulty, title, description, options, answerPosition, minigame, explanation, category));
    });
}

const additionalQuestionGroups = [
    ["Refrigeração e CPU", "heat", [
        "Conferir montagem, pressão de contato e aplicação da pasta térmica",
        "Verificar se a ventoinha está conectada ao cabeçalho correto e responde à rotação",
        "Limpar filtros e dissipadores com o equipamento desligado e desenergizado",
        "Registrar temperaturas e uso sob carga antes de concluir que há defeito"
    ], [
        ["easy", "A CPU aquece logo após a troca do cooler.", "O aumento começou imediatamente depois da manutenção.", 0, "A mudança coincide com a instalação; contato, fixação e pasta térmica são as primeiras verificações.", 3],
        ["medium", "A ventoinha do processador não acelera durante um teste.", "A temperatura sobe, mas a rotação indicada permanece quase constante.", 1, "O cabeçalho, o modo de controle e a resposta da ventoinha esclarecem se o problema é de conexão ou controle."],
        ["hard", "A temperatura oscila depois de meses de uso.", "Há poeira visível no filtro frontal e no dissipador.", 2, "A obstrução reduz o fluxo de ar; a limpeza segura deve preceder trocas de componentes."],
        ["medium", "Um jogo causa lentidão e temperatura elevada.", "Não há registro de temperatura, frequência ou uso durante a falha.", 3, "A medição sob a carga que reproduz o sintoma distingue calor excessivo de outros gargalos."]
    ]],
    ["Memória RAM", "ram", [
        "Conferir padrão DDR, capacidade suportada e lista de compatibilidade da placa",
        "Instalar os módulos nos slots pareados indicados no manual da placa-mãe",
        "Testar os módulos individualmente e executar um diagnóstico de memória",
        "Reencaixar o módulo com o computador desligado e verificar se as travas fecharam"
    ], [
        ["easy", "A placa não reconhece uma memória recém-comprada.", "A embalagem informa DDR5, mas o modelo da placa ainda não foi conferido.", 0, "DDR4 e DDR5 não são intercambiáveis; confirme o padrão e o suporte antes da instalação."],
        ["medium", "Dois módulos funcionam, mas aparecem em single-channel.", "O manual recomenda slots específicos para o par.", 1, "O posicionamento nos slots pareados normalmente habilita o dual-channel."],
        ["hard", "O PC apresenta erros aleatórios depois de ampliar a RAM.", "Cada módulo inicia sozinho, mas a falha reaparece com ambos.", 2, "Testar cada módulo separadamente ajuda a diferenciar defeito de incompatibilidade ou ajuste instável."],
        ["easy", "Um módulo não aparece na UEFI.", "Ele foi transportado recentemente e uma das travas parece aberta.", 3, "Um encaixe incompleto é uma causa comum e pode ser verificado sem alterar configurações."]
    ]],
    ["Armazenamento", "storage", [
        "Consultar SMART e priorizar cópia dos dados antes de testes intensivos",
        "Verificar no Gerenciamento de Disco se falta inicialização, partição ou letra",
        "Conferir conexão, encaixe e compatibilidade da unidade com a porta ou slot",
        "Comparar espaço livre, atividade e tempo de resposta durante a lentidão"
    ], [
        ["medium", "Um HDD começou a fazer ruídos e ainda abre alguns arquivos.", "Os documentos importantes não têm outra cópia.", 0, "Ruídos podem indicar falha física; preservar os dados vem antes de testes que sobrecarreguem o disco."],
        ["easy", "Um SSD aparece na UEFI, mas não no Explorador.", "A unidade é nova e ainda não foi configurada no sistema.", 1, "Se a UEFI detecta o SSD, confira se o sistema precisa inicializar, particionar ou atribuir uma letra."],
        ["medium", "Um NVMe desapareceu após ser instalado em outro slot.", "A unidade não aparece nem na UEFI.", 2, "Sem detecção na UEFI, confira encaixe, slot habilitado e compatibilidade antes de atuar no sistema operacional."],
        ["hard", "Um SSD fica lento durante cópias longas.", "A lentidão é reproduzível e há espaço livre, mas nenhuma métrica foi registrada.", 3, "Atividade, espaço e latência medidos durante a cópia ajudam a separar saturação de unidade de outros limites."]
    ]],
    ["Placa de vídeo e drivers", "diagnostic", [
        "Reverter o driver recente em modo de segurança e testar uma versão estável",
        "Monitorar temperatura, frequência e consumo da GPU durante a carga",
        "Conferir encaixe, alimentação PCIe e saída de vídeo usada",
        "Comparar o erro em outro aplicativo e verificar registros do driver"
    ], [
        ["medium", "A tela pisca desde a última atualização do driver.", "O problema não ocorria com a versão anterior.", 0, "A relação temporal justifica reverter o driver e confirmar se o sintoma desaparece."],
        ["hard", "A GPU reduz o desempenho após alguns minutos de jogo.", "O relógio cai junto com um aumento de temperatura.", 1, "A correlação entre temperatura e frequência aponta para investigação térmica sob carga."],
        ["easy", "Uma placa de vídeo recém-instalada não dá imagem.", "As ventoinhas giram, mas o monitor está conectado à placa-mãe.", 2, "Confirme a saída correta e a alimentação PCIe antes de investigar software."],
        ["hard", "Um aplicativo fecha com erro gráfico, mas os demais funcionam.", "O problema começou após trocar uma configuração do aplicativo.", 3, "Reprodução isolada e registros ajudam a separar uma falha específica de um defeito geral da GPU."]
    ]],
    ["Fontes e energia", "diagnostic", [
        "Verificar potência disponível, qualidade da fonte e margem para os componentes",
        "Conferir a conexão do cabo de alimentação e os conectores ATX/CPU",
        "Interromper o uso e encaminhar a fonte para avaliação ou substituição segura",
        "Registrar em que carga e momento ocorre o desligamento"
    ], [
        ["hard", "O computador reinicia ao iniciar jogos exigentes.", "O consumo da GPU aumenta muito nesse momento.", 0, "A demanda sob carga e a capacidade real da fonte devem ser comparadas antes de trocar peças."],
        ["easy", "O computador novo não liga após a montagem.", "O cabo de energia está conectado, mas o conector CPU da placa não foi conferido.", 1, "Uma conexão de alimentação ausente pode impedir a inicialização; confira os conectores conforme o manual."],
        ["hard", "A fonte estalou e há cheiro de queimado.", "O computador desligou logo em seguida.", 2, "Não religue nem abra a fonte; há risco elétrico e dano potencial aos componentes."],
        ["medium", "O PC desliga apenas em tarefas pesadas.", "Ainda não foi registrado se ocorre em CPU, GPU ou ambos.", 3, "Reproduzir e anotar a carga que precede o desligamento reduz hipóteses antes de substituir hardware."]
    ]],
    ["POST e UEFI", "boot", [
        "Consultar no manual o código de bipes ou LEDs de diagnóstico",
        "Restaurar configurações padrão da UEFI após registrar as atuais",
        "Testar a inicialização com configuração mínima e componente conhecido",
        "Conferir ordem de boot e modo UEFI/Legacy após confirmar que o disco é detectado"
    ], [
        ["easy", "O PC liga, mas não conclui o POST e emite bipes.", "A placa-mãe tem LEDs de diagnóstico e manual disponível.", 0, "O código do fabricante indica qual componente verificar primeiro."],
        ["medium", "A UEFI deixa de iniciar após ativar um perfil de memória.", "O sistema era estável antes da alteração.", 1, "Voltar a um padrão conhecido permite confirmar se o perfil causou instabilidade."],
        ["hard", "Uma montagem nova não dá vídeo nem chega à UEFI.", "Há vários periféricos conectados e a causa ainda não foi isolada.", 2, "A configuração mínima reduz variáveis e facilita localizar a falha de POST."],
        ["medium", "A UEFI detecta o SSD, mas mostra 'Boot device not found'.", "O erro apareceu depois de mudar as opções de inicialização.", 3, "Com o disco detectado, modo de boot e ordem das entradas são as próximas verificações pertinentes."]
    ]],
    ["Windows e recuperação", "sequence", [
        "Usar o histórico de confiabilidade e o Visualizador de Eventos para localizar a falha",
        "Reverter a atualização ou driver recente usando as opções de recuperação",
        "Executar verificação de integridade do sistema e registrar o resultado",
        "Criar ou confirmar um backup antes de operações de reparo que alterem dados"
    ], [
        ["easy", "Um aplicativo fecha com frequência, mas o Windows continua estável.", "A falha ocorre sempre no mesmo aplicativo.", 0, "Os registros e a repetição do sintoma ajudam a identificar se o erro vem do aplicativo ou do sistema."],
        ["medium", "Uma tela azul começou depois de instalar um driver.", "O modo de segurança ainda funciona.", 1, "A reversão do componente recém-instalado é mais informativa e menos invasiva que formatar."],
        ["hard", "O sistema apresenta arquivos corrompidos após quedas de energia.", "O computador ainda inicia e os dados precisam ser preservados.", 2, "Uma verificação de integridade documenta o estado antes de reparos adicionais."],
        ["medium", "O Windows solicita reparo de inicialização.", "Há arquivos importantes sem cópia recente.", 3, "Preservar os dados reduz o risco antes de qualquer intervenção na inicialização."]
    ]],
    ["Linux e serviços", "taskmanager", [
        "Usar top/htop para comparar processos, CPU, memória e carga do sistema",
        "Consultar journalctl e o estado do serviço para encontrar erros recentes",
        "Verificar espaço e inodes com df antes de remover arquivos",
        "Conferir permissões e proprietário do arquivo antes de alterá-los"
    ], [
        ["easy", "Uma estação Linux fica lenta com a CPU aparentemente ocupada.", "O uso por processo ainda não foi verificado.", 0, "Uma visão por processo identifica quem consome CPU sem encerrar serviços às cegas."],
        ["medium", "Um serviço web não inicia após uma atualização.", "O sistema registra mensagens de erro durante a inicialização.", 1, "O estado e o journal do serviço revelam erros de configuração ou dependência."],
        ["hard", "Um servidor Linux não grava logs novos.", "O volume parece cheio, mas a lista de arquivos não explica o espaço.", 2, "Verificar espaço e inodes distingue falta de blocos de esgotamento de inodes."],
        ["medium", "Um script retorna 'permission denied'.", "O arquivo existe e o usuário que executa foi identificado.", 3, "Confira permissões e propriedade; conceda apenas o acesso necessário."]
    ]],
    ["Endereçamento IP e DHCP", "diagnostic", [
        "Verificar endereço, máscara, gateway e concessão DHCP na interface",
        "Confirmar se o pool DHCP tem endereços disponíveis e a reserva está correta",
        "Testar conectividade até o gateway antes de testar destinos externos",
        "Verificar conflito de IP e comparar o endereço com os demais dispositivos"
    ], [
        ["easy", "Um computador recebe um endereço 169.254.x.x.", "Os demais dispositivos obtêm endereço normalmente pelo roteador.", 0, "O endereço indica que a interface não obteve concessão DHCP; confira os parâmetros locais."],
        ["hard", "Novos dispositivos não recebem IP, mas os conectados continuam funcionando.", "A rede usa DHCP e está perto do limite de dispositivos.", 1, "Pool esgotado ou reserva incorreta explica a falha restrita a novas concessões."],
        ["medium", "O computador acessa a rede local, mas não sai para a internet.", "O gateway configurado não responde.", 2, "Antes de investigar destinos externos, valide o primeiro salto da rede."],
        ["medium", "A conexão cai quando um dispositivo específico entra na rede.", "Dois equipamentos parecem usar o mesmo endereço manual.", 3, "Um conflito de endereço pode interromper a comunicação; compare e corrija a atribuição."]
    ]],
    ["DNS", "diagnostic", [
        "Usar nslookup/dig para comparar a resolução no servidor configurado",
        "Testar acesso ao gateway e a um IP externo conhecido",
        "Consultar a configuração DHCP para confirmar qual DNS foi distribuído",
        "Limpar o cache DNS após confirmar que o registro no servidor já foi corrigido"
    ], [
        ["easy", "Sites por IP abrem, mas nomes de domínio não resolvem.", "A conexão IP está ativa.", 0, "A consulta direta identifica se o servidor DNS responde com o registro esperado."],
        ["medium", "Nenhum endereço externo responde, nem mesmo por IP.", "O gateway local também está inacessível.", 1, "A falha pode ser anterior ao DNS; confirme o caminho local primeiro."],
        ["hard", "Só os computadores de uma sub-rede usam um DNS antigo.", "Eles recebem a configuração automaticamente.", 2, "A opção distribuída pelo DHCP pode estar diferente naquela sub-rede."],
        ["medium", "Um domínio continua apontando para um endereço antigo em um PC.", "O administrador já atualizou o registro no servidor DNS.", 3, "Depois de confirmar o registro novo no servidor, limpar cache local remove a resposta antiga armazenada."]
    ]],
    ["Wi-Fi", "diagnostic", [
        "Comparar sinal, banda, interferência e canal no local onde ocorre a queda",
        "Verificar se o problema afeta outros dispositivos e reiniciar o ponto de acesso com autorização",
        "Esquecer e reconfigurar o perfil Wi-Fi após confirmar que a senha ou segurança foi alterada",
        "Testar a conexão cabeada e o acesso à internet para separar Wi-Fi de falha do provedor"
    ], [
        ["easy", "O Wi-Fi funciona perto do roteador, mas cai em outro cômodo.", "A falha acompanha a distância e não os dispositivos.", 0, "Sinal e interferência no ponto de uso são as primeiras variáveis a medir."],
        ["medium", "Todos os dispositivos perderam acesso ao mesmo tempo.", "O Wi-Fi continua conectado, mas o roteador não acessa a internet.", 1, "Um problema comum a todos sugere examinar o ponto de acesso e o enlace WAN, não cada cliente."],
        ["hard", "Um notebook não autentica após a troca da segurança da rede.", "Os outros dispositivos já foram atualizados para a nova configuração.", 2, "O perfil armazenado pode conter credenciais ou parâmetros antigos."],
        ["medium", "Os usuários relatam lentidão, mas o sinal Wi-Fi é forte.", "A velocidade também é baixa em um teste cabeado.", 3, "A comparação cabeada separa interferência sem fio de limitação do provedor ou roteador."]
    ]],
    ["Ethernet e cabeamento", "cables", [
        "Trocar por um cabo conhecido e testar outra porta do switch",
        "Conferir a negociação de velocidade e contadores de erros na interface",
        "Verificar o patch panel e identificar as duas pontas antes de recertificar a tomada",
        "Testar continuidade e ordem dos pares com ferramenta adequada"
    ], [
        ["easy", "Um computador não obtém link depois de ser movido.", "A interface e a porta do switch funcionam com outro cabo.", 0, "Um cabo conhecido e uma porta testada isolam rapidamente um defeito físico simples."],
        ["hard", "A conexão negocia a 100 Mb/s em uma rede Gigabit.", "Não há erros de DNS e o cabo instalado é longo.", 1, "Velocidade negociada e erros ajudam a localizar pares danificados ou incompatibilidade."],
        ["medium", "Uma tomada de rede foi etiquetada incorretamente.", "O cabo termina em um patch panel com várias portas.", 2, "Identificar as duas pontas evita desconectar o circuito errado."],
        ["medium", "Um enlace recém-crimpado perde pacotes.", "O link sobe, mas o problema muda quando o cabo é movimentado.", 3, "Um teste de continuidade e pinagem pode revelar crimpagem intermitente ou ordem incorreta."]
    ]],
    ["Phishing e identidade", "spyware", [
        "Conferir o domínio por canal oficial independente e não seguir o link recebido",
        "Validar a identidade do remetente por outro canal antes de compartilhar dados",
        "Reportar a mensagem e preservar cabeçalhos para análise da equipe responsável",
        "Acessar o serviço digitando seu endereço conhecido, sem abrir anexos inesperados"
    ], [
        ["easy", "Uma mensagem urgente pede a senha e leva a um domínio parecido com o oficial.", "O remetente ameaça bloquear a conta em poucos minutos.", 0, "O domínio deve ser validado independentemente; urgência e imitação são sinais comuns de phishing."],
        ["medium", "Um fornecedor pede alteração de dados bancários por e-mail.", "A mensagem parece vir do contato habitual.", 1, "Uma solicitação sensível deve ser confirmada por um canal previamente conhecido."],
        ["hard", "Vários funcionários receberam o mesmo e-mail suspeito.", "A equipe de segurança pediu evidências para bloquear a campanha.", 2, "Reportar e preservar detalhes ajuda a equipe a investigar sem propagar o link."],
        ["medium", "Um anexo inesperado diz conter uma fatura urgente.", "A empresa realmente usa o serviço citado, mas não esperava esse documento.", 3, "Acesse o portal conhecido diretamente e confirme a fatura sem executar o anexo."]
    ]],
    ["Malware e resposta", "virus", [
        "Isolar o equipamento da rede e acionar o procedimento de resposta a incidentes",
        "Verificar assinatura, origem e hash do instalador sem executá-lo",
        "Conter a ameaça, preservar evidências e verificar o escopo antes de restaurar",
        "Executar uma varredura atualizada e revisar persistência e processos suspeitos"
    ], [
        ["easy", "Um ransomware renomeou documentos e exibe pedido de pagamento.", "O computador ainda está conectado à rede da empresa.", 0, "O isolamento reduz propagação; restauração deve seguir o plano de resposta após conter a ameaça."],
        ["medium", "Um instalador baixado fora do site oficial pede privilégios elevados.", "O fabricante não reconhece o arquivo.", 1, "Verificar procedência e assinatura evita executar um possível trojan para 'testá-lo'."],
        ["hard", "Um malware foi encontrado em um computador com acesso a pastas compartilhadas.", "Há suspeita de que outros sistemas também foram afetados.", 2, "Contenção e preservação de evidências ajudam a dimensionar o incidente antes de recuperar dados."],
        ["medium", "Alertas de adware voltam após cada reinicialização.", "A primeira limpeza removeu os arquivos visíveis.", 3, "A persistência precisa ser investigada; remover apenas o arquivo detectado pode não eliminar a causa."]
    ]],
    ["Backup e recuperação", "backup", [
        "Restaurar primeiro uma amostra isolada e validar integridade e permissões",
        "Priorizar os dados únicos e confirmar capacidade, destino e cópia concluída",
        "Recuperar de cópia offline/versionada posterior ao último estado íntegro",
        "Criar imagem ou cópia dos dados antes de tentar reparos no disco original"
    ], [
        ["easy", "O backup terminou sem erro, mas nunca foi restaurado.", "A equipe precisa saber se os documentos podem ser recuperados.", 0, "Uma restauração de teste valida na prática a legibilidade e o procedimento."],
        ["medium", "O espaço disponível não comporta uma cópia integral.", "A pasta contém dados repetidos e documentos únicos.", 1, "Priorizar dados únicos e confirmar o destino reduz perda e cópias incompletas."],
        ["hard", "Uma cópia recente pode conter arquivos criptografados pelo ransomware.", "Há uma versão offline anterior ao incidente.", 2, "Use uma versão conhecida como íntegra e isolada, depois de conter a ameaça."],
        ["hard", "Um disco com setores defeituosos contém os únicos arquivos do cliente.", "A máquina ainda consegue ler alguns diretórios.", 3, "Preservar uma cópia antes de reparos evita agravar a perda no disco instável."]
    ]],
    ["Impressoras", "cables", [
        "Conferir fila, impressora padrão e estado do serviço de impressão",
        "Verificar endereço IP, rede e acessibilidade da impressora",
        "Limpar ou substituir o cartucho conforme o procedimento do fabricante",
        "Instalar o driver compatível com o modelo e a versão do sistema"
    ], [
        ["easy", "Um documento fica parado em 'pausado' na fila.", "A impressora está ligada e imprime a página de teste local.", 0, "Fila e impressora padrão são verificações apropriadas quando o equipamento está disponível."],
        ["medium", "Vários computadores mostram a impressora de rede como offline.", "A impressora também perdeu conexão com o Wi-Fi.", 1, "A falha compartilhada aponta para conectividade e endereço da impressora."],
        ["easy", "As páginas saem com falhas de cor.", "O aviso indica nível baixo no cartucho colorido.", 2, "Inspecionar suprimento e seguir a manutenção indicada é mais adequado que reinstalar drivers."],
        ["hard", "A impressora imprime a página de teste, mas falha após atualização do sistema.", "O driver instalado é de outro modelo da mesma marca.", 3, "Compatibilidade exata do driver deve ser confirmada após a atualização."]
    ]],
    ["USB e periféricos", "cables", [
        "Testar outra porta e um cabo funcional, sem hub, para isolar o caminho",
        "Verificar o Gerenciador de Dispositivos e o estado do controlador USB",
        "Conferir alimentação do hub e o consumo combinado dos dispositivos",
        "Remover o dispositivo com segurança e comparar se a falha ocorre em outro PC"
    ], [
        ["easy", "Um teclado deixa de responder apenas na porta frontal.", "As portas traseiras funcionam com o mesmo teclado.", 0, "Porta e cabeamento frontal podem ser isolados sem reinstalar o sistema."],
        ["medium", "O Windows mostra um dispositivo USB desconhecido.", "Outros equipamentos funcionam na mesma porta.", 1, "O estado do dispositivo e o controlador podem revelar falha de enumeração ou driver."],
        ["medium", "Um HD externo desconecta quando outros dispositivos são ligados ao hub.", "O hub não tem fonte externa.", 2, "A alimentação compartilhada pode ser insuficiente para a carga combinada."],
        ["hard", "Um periférico falha intermitentemente, mas não há erro em outro computador.", "O usuário costuma removê-lo durante gravações.", 3, "Compare em outro host e remova com segurança para distinguir política de energia, porta e dispositivo."]
    ]],
    ["Manutenção preventiva", "sequence", [
        "Desligar, desconectar da energia e seguir procedimento antiestático antes de abrir",
        "Registrar estado, sintomas e temperaturas antes de limpar ou alterar componentes",
        "Usar limpeza apropriada sem aplicar líquidos diretamente nos componentes",
        "Validar temperaturas, conexões e funcionamento após concluir a manutenção"
    ], [
        ["easy", "É preciso remover poeira de um gabinete para manutenção.", "O PC ainda está ligado à tomada.", 0, "Desenergizar e tomar precauções antiestáticas vem antes de tocar nos componentes."],
        ["medium", "Um computador aquece mais do que na última manutenção.", "Não há medições ou registro anterior para comparação.", 1, "Documentar o estado antes da limpeza permite avaliar se a intervenção melhorou o fluxo de ar."],
        ["easy", "Há poeira acumulada sobre a placa-mãe.", "O técnico propõe borrifar produto de limpeza diretamente.", 2, "Evite líquidos sobre eletrônicos; use método apropriado com o equipamento desligado."],
        ["hard", "Uma ventoinha foi substituída durante manutenção preventiva.", "O equipamento ainda não foi ligado desde o serviço.", 3, "Verificar conexão e medir o funcionamento após a intervenção confirma que a manutenção foi bem-sucedida."]
    ]],
    ["Atendimento e triagem", "interview", [
        "Perguntar quando começou, com que frequência ocorre e se houve alteração recente",
        "Perguntar quais usuários e equipamentos são afetados e se há impacto no trabalho",
        "Confirmar mensagens exatas, passos para reproduzir e ações já tentadas",
        "Explicar o próximo teste, obter autorização quando necessária e registrar o atendimento"
    ], [
        ["easy", "Um cliente diz apenas: 'meu computador não funciona'.", "Ainda não há descrição do que acontece ao ligar.", 0, "Perguntas sobre início, frequência e mudanças recentes esclarecem o relato sem assumir uma causa."],
        ["medium", "Uma aplicação parou de funcionar em uma equipe inteira.", "Ainda não se sabe quem foi afetado nem quando começou.", 1, "Escopo e impacto ajudam a priorizar e distinguir falha geral de um único dispositivo."],
        ["hard", "O cliente relata uma tela azul, mas não sabe o código.", "A falha pode ser reproduzida após uma sequência específica.", 2, "Mensagem e reprodução fiel são evidências melhores que uma hipótese baseada apenas no relato genérico."],
        ["medium", "A correção proposta pode interromper o serviço de um setor.", "O técnico ainda não informou efeitos nem janela de manutenção.", 3, "Explicar impactos, obter autorização e registrar evita mudanças não aprovadas."]
    ]],
    ["Montagem e compatibilidade", "assembly", [
        "Confirmar o socket do processador e o suporte da placa-mãe antes da montagem",
        "Conferir o tipo de memória aceito e os slots recomendados no manual",
        "Calcular a demanda dos componentes e escolher fonte adequada com conectores corretos",
        "Verificar dimensões da placa e GPU em relação ao gabinete e ao espaço de refrigeração"
    ], [
        ["easy", "Um processador AM5 foi comprado para uma placa-mãe antiga.", "O anúncio cita suporte a Ryzen, mas não informa o socket.", 0, "Compatibilidade depende do socket e suporte específico, não apenas da família do fabricante."],
        ["medium", "Um kit DDR5 foi separado para uma placa com slots DDR4.", "Os módulos têm encaixes físicos diferentes.", 1, "O padrão aceito pela placa precisa coincidir com o módulo; DDR4 e DDR5 não se encaixam nem são intercambiáveis."],
        ["hard", "Uma GPU nova exige dois conectores de energia e será instalada com uma fonte existente.", "A potência nominal da fonte parece suficiente, mas faltam dados dos conectores.", 2, "Potência, qualidade e conectores disponíveis devem ser verificados para a carga real."],
        ["medium", "A placa de vídeo não cabe no gabinete escolhido.", "O comprimento da GPU e o espaço ocupado por ventoinhas ainda não foram medidos.", 3, "Dimensões e folga física devem ser confirmadas antes da montagem."]
    ]],
    ["Processos e recursos", "taskmanager", [
        "Ordenar processos por uso e comparar a medição durante o sintoma",
        "Observar uso de memória e paginação antes de recomendar mais RAM",
        "Comparar atividade/latência do disco com o processo que aguarda operações",
        "Verificar frequência, temperatura e uso agregado da CPU sob carga"
    ], [
        ["easy", "O PC fica lento ao abrir um programa.", "Nenhum componente foi medido durante a lentidão.", 0, "Medir por processo no momento do sintoma identifica o recurso consumido sem adivinhar."],
        ["medium", "A memória está em 92%, mas o navegador é o principal aplicativo.", "A lentidão ocorre com muitas abas e pouca paginação observada.", 1, "Uso de RAM isolado não prova falta de memória; avalie pressão e paginação antes de ampliar."],
        ["hard", "A tela congela durante salvamentos.", "O disco mostra latência elevada, mas pouco uso de CPU.", 2, "Latência e atividade do disco são mais compatíveis com espera de armazenamento."],
        ["medium", "Uma estação de cálculo demora apenas durante uma tarefa específica.", "A CPU chega a 100% e a GPU permanece ociosa.", 3, "A carga observada aponta para CPU; temperatura e frequência ajudam a diferenciar limitação térmica."]
    ]],
    ["Arquivos e espaço", "storage", [
        "Revisar arquivos temporários e downloads antes de remover itens pessoais",
        "Localizar os maiores diretórios e confirmar o conteúdo com o usuário",
        "Verificar duplicatas por conteúdo e manter pelo menos uma cópia validada",
        "Usar a ferramenta de armazenamento do sistema e revisar cada categoria antes da limpeza"
    ], [
        ["easy", "O SSD está quase cheio e há muitos arquivos temporários.", "Os documentos pessoais precisam ser preservados.", 0, "Temporários são candidatos à limpeza, mas confirme os itens antes de excluir dados pessoais."],
        ["medium", "Uma pasta de projeto ocupa quase todo o volume.", "O técnico não sabe quais subpastas o cliente ainda usa.", 1, "Identifique os maiores diretórios e confirme a necessidade com o usuário antes de movê-los ou excluí-los."],
        ["hard", "Há várias cópias de fotos com nomes diferentes.", "Algumas versões foram editadas e não há backup externo.", 2, "Compare conteúdo e preserve uma cópia validada; nomes iguais ou diferentes não provam duplicidade."],
        ["medium", "O Windows continua avisando que há pouco espaço após apagar alguns downloads.", "A ferramenta do sistema mostra categorias grandes que não foram revisadas.", 3, "Revise as categorias e use a limpeza integrada, sem remover pastas do sistema indiscriminadamente."]
    ]],
    ["Contas e permissões", "diagnostic", [
        "Confirmar a conta usada e verificar se o bloqueio também ocorre em outro serviço",
        "Revisar grupo, política e permissões efetivas sem conceder privilégios amplos",
        "Validar a identidade do solicitante antes de redefinir credenciais",
        "Consultar logs de autenticação e horário do sistema para localizar recusas"
    ], [
        ["easy", "Um usuário não consegue entrar no e-mail corporativo.", "Ainda não foi confirmado se a senha funciona em outros serviços.", 0, "Confirmar o escopo evita redefinir uma credencial quando a falha pode estar restrita ao serviço."],
        ["medium", "Um funcionário não consegue abrir uma pasta compartilhada.", "O acesso foi concedido a um grupo, mas sua conta não está nesse grupo.", 1, "Revise a permissão efetiva e a política; evite tornar a pasta pública para contornar o problema."],
        ["hard", "Alguém solicita redefinição urgente da conta de administrador por telefone.", "O solicitante não consegue confirmar os dados de identidade.", 2, "Verifique identidade pelo processo oficial antes de alterar uma conta privilegiada."],
        ["medium", "Falhas de login começaram após uma mudança de horário.", "Os logs registram recusas apesar de a senha estar correta.", 3, "Logs e sincronização de horário ajudam a diagnosticar autenticação sem expor credenciais."]
    ]],
    ["Desempenho em jogos", "taskmanager", [
        "Comparar FPS, uso, temperatura e frequência da GPU durante a queda",
        "Verificar limite de CPU por núcleo, processos em segundo plano e temperatura",
        "Conferir uso de VRAM e configurações de textura compatíveis com a placa",
        "Comparar a taxa de quadros com a frequência configurada no monitor"
    ], [
        ["easy", "Um jogo apresenta quedas de FPS em cenas com muitos efeitos.", "A GPU chega a uso alto e a frequência cai com a temperatura.", 0, "Métricas correlacionadas da GPU revelam se há limitação térmica ou de carga gráfica."],
        ["hard", "A GPU tem uso baixo, mas o jogo apresenta travamentos.", "Um núcleo da CPU fica saturado e há processos de fundo ativos.", 1, "Gargalo em um núcleo ou concorrência de processos pode limitar o jogo mesmo com CPU agregada abaixo de 100%."],
        ["medium", "Texturas piscam e a placa tem pouca VRAM.", "O problema aparece com texturas no nível máximo.", 2, "Uso de VRAM e qualidade das texturas devem ser comparados antes de concluir falha física."],
        ["easy", "O jogo parece limitado a 60 quadros em um monitor de 144 Hz.", "A GPU tem folga e o monitor foi configurado recentemente.", 3, "Frequência do monitor e limite de quadros são verificações pertinentes para um teto estável de 60 FPS."]
    ]],
    ["Placas-mãe e expansão", "assembly", [
        "Verificar geração, formato e suporte de BIOS para o processador escolhido",
        "Conferir quais slots M.2 compartilham pistas ou desativam portas SATA",
        "Consultar o manual sobre slots PCIe e distribuição de pistas",
        "Confirmar tamanho ATX/mATX/ITX e pontos de fixação do gabinete"
    ], [
        ["hard", "Um processador compatível com o socket não inicia em uma placa antiga.", "A versão da BIOS instalada é anterior ao suporte do processador.", 0, "Socket igual não garante suporte sem a versão de BIOS necessária."],
        ["medium", "Ao instalar um SSD M.2, duas portas SATA deixam de funcionar.", "O manual informa compartilhamento de recursos entre slots.", 1, "A tabela de compartilhamento da placa explica quais portas são desativadas."],
        ["hard", "Uma placa de expansão não opera na velocidade esperada.", "Ela foi instalada em um slot secundário compartilhado.", 2, "O manual detalha largura e distribuição das pistas PCIe entre os slots."],
        ["easy", "Os furos da placa-mãe não alinham com o gabinete.", "O gabinete é compacto e a placa foi comprada sem conferir o formato.", 3, "O padrão físico e os pontos de montagem devem coincidir antes de instalar a placa."]
    ]],
    ["Segurança de navegação", "spyware", [
        "Remover a extensão não autorizada e verificar políticas e programas que a reinstalam",
        "Confirmar o certificado e o domínio digitado antes de inserir credenciais",
        "Revisar permissões de notificação e extensões sem desativar proteções do navegador",
        "Verificar o destino real do link sem abrir páginas ou anexos suspeitos"
    ], [
        ["easy", "Uma extensão desconhecida reaparece após ser removida.", "O navegador é gerenciado por uma política do computador.", 0, "Uma política ou programa pode reinstalar a extensão; identifique a origem antes de removê-la novamente."],
        ["medium", "O navegador exibe um aviso de certificado em um portal de login.", "A página solicita credenciais corporativas.", 1, "Não insira credenciais até validar domínio e certificado pelo canal oficial."],
        ["medium", "Um site envia notificações de propaganda mesmo quando está fechado.", "O usuário pode ter permitido notificações sem perceber.", 2, "Revise permissões e extensões; não é necessário desativar toda a segurança do navegador."],
        ["hard", "Um link encurtado foi recebido em uma mensagem inesperada.", "O usuário quer verificar o destino antes de decidir.", 3, "Analise o destino por meio seguro ou canal oficial sem abrir diretamente o conteúdo suspeito."]
    ]],
    ["Rede e compartilhamentos", "diagnostic", [
        "Verificar resolução do nome, rota até o servidor e disponibilidade da porta necessária",
        "Confirmar permissões do compartilhamento e credenciais usadas pelo cliente",
        "Comparar acesso pelo nome e pelo IP e examinar DNS e descoberta de rede",
        "Checar se o serviço do servidor está ativo e se há manutenção anunciada"
    ], [
        ["easy", "Um compartilhamento não abre pelo nome do servidor.", "A internet funciona e o servidor responde ao endereço IP.", 0, "Nome, rota e porta do serviço são verificações alinhadas ao sintoma."],
        ["medium", "Só um usuário recebe 'acesso negado' em uma pasta compartilhada.", "Outros usuários conseguem abrir a mesma pasta.", 1, "O escopo individual aponta para credencial ou permissão efetiva, não para a rede inteira."],
        ["hard", "O servidor é acessível pelo IP, mas não aparece na lista de rede.", "Acesso direto pelo nome também falha.", 2, "Compare nome e IP e confira DNS e descoberta; visibilidade na lista não é prova de indisponibilidade."],
        ["medium", "Todos os usuários perderam acesso ao sistema de arquivos.", "A rede local funciona e há uma janela de manutenção programada.", 3, "Verifique o serviço e a manutenção antes de alterar configurações em cada cliente."]
    ]],
    ["Energia e proteção elétrica", "diagnostic", [
        "Comparar a carga total com a potência contínua e os conectores do nobreak",
        "Verificar aterramento, circuito e sinais de sobrecarga com profissional qualificado",
        "Desconectar o equipamento com segurança e interromper o uso se houver cheiro ou ruído anormal",
        "Consultar logs e horário de eventos para correlacionar quedas com a alimentação"
    ], [
        ["medium", "O nobreak apita quando o PC inicia um jogo.", "A carga aumenta e o modelo do nobreak ainda não foi comparado com os equipamentos.", 0, "A carga conectada precisa estar dentro da capacidade contínua do nobreak."],
        ["hard", "Vários PCs reiniciam quando um equipamento de alta potência é ligado.", "O circuito e aterramento ainda não foram avaliados.", 1, "A instalação elétrica precisa ser examinada por profissional qualificado; evite soluções improvisadas."],
        ["easy", "Uma tomada e um carregador apresentam cheiro de queimado.", "O carregador está quente e ainda conectado.", 2, "Interrompa o uso com segurança; não continue testando um componente com sinais de dano."],
        ["hard", "Uma estação reinicia em horários coincidentes com quedas de energia.", "Os eventos do sistema estão registrados com horário confiável.", 3, "A correlação entre logs e eventos elétricos ajuda a confirmar se a alimentação está envolvida."]
    ]],
    ["BIOS e atualização de firmware", "boot", [
        "Confirmar modelo e revisão exatos e seguir instruções oficiais do fabricante",
        "Registrar configurações atuais e garantir energia estável antes da atualização",
        "Não interromper o processo e aguardar a confirmação de conclusão do fabricante",
        "Preferir atualização somente quando corrigir uma necessidade ou problema identificado"
    ], [
        ["hard", "Uma atualização de BIOS foi baixada para uma placa de nome parecido.", "A revisão da placa ainda não foi conferida.", 0, "Firmware incorreto pode inutilizar a placa; confira modelo e revisão em fonte oficial."],
        ["medium", "A equipe planeja atualizar a BIOS durante instabilidade elétrica.", "O equipamento não tem nobreak e não há urgência.", 1, "Energia estável e registro das configurações reduzem o risco e ajudam na recuperação."],
        ["easy", "A barra de atualização de firmware parece parada há alguns minutos.", "O fabricante informa que a operação pode levar tempo.", 2, "Interromper uma gravação em andamento pode corromper o firmware; siga o tempo e instruções oficiais."],
        ["medium", "Uma máquina funciona corretamente e foi sugerida atualização por rotina.", "A nova versão não menciona correção necessária para esse sistema.", 3, "Atualização de firmware deve ter objetivo claro; mudanças desnecessárias acrescentam risco."]
    ]],
    ["Diagnóstico e testes", "diagnostic", [
        "Alterar uma variável por vez e anotar o resultado observado",
        "Começar por verificações não invasivas que reproduzam o sintoma",
        "Comparar com uma configuração conhecida e reverter a mudança se não ajudar",
        "Distinguir evidência observada de hipótese antes de substituir peças"
    ], [
        ["easy", "O suporte testa várias configurações simultaneamente e a falha desaparece.", "Ninguém sabe qual mudança resolveu o problema.", 0, "Uma variável por vez preserva a relação entre mudança e resultado."],
        ["medium", "Um usuário relata falha intermitente que pode ser reproduzida em um cenário específico.", "Nenhum dado foi coletado ainda.", 1, "Comece por testes seguros e repetíveis no cenário real antes de substituir componentes."],
        ["hard", "Uma alteração recente não resolveu a falha e introduziu outro sintoma.", "A configuração original foi registrada.", 2, "Reverter permite separar os efeitos e evita acumular mudanças sem evidência."],
        ["medium", "Um técnico recomenda trocar a placa-mãe após um único erro de inicialização.", "Não foram testados cabo, memória ou alimentação.", 3, "Uma hipótese precisa de evidências; teste causas simples antes de substituir a placa."]
    ]],
    ["Armazenamento e sistema de arquivos", "storage", [
        "Verificar o sistema de arquivos e os registros antes de executar reparos",
        "Garantir backup e desmontar ou bloquear gravações antes de reparo offline",
        "Conferir estado SMART e preservar dados se houver indício de falha física",
        "Validar sistema de arquivos e opções de montagem conforme o sistema operacional"
    ], [
        ["medium", "O volume informa erro de sistema de arquivos após desligamento inesperado.", "O SMART não indica falha e há backup recente.", 0, "Confira registros e sistema de arquivos antes de escolher o reparo apropriado."],
        ["hard", "Um reparo exige acesso exclusivo ao volume.", "Há aplicativos gravando nele neste momento.", 1, "Faça backup e impeça gravações concorrentes antes de um reparo offline."],
        ["hard", "Um disco relata setores pendentes e arquivos ilegíveis.", "O usuário propõe executar vários reparos em sequência.", 2, "Indícios físicos pedem preservação dos dados e avaliação, não carga adicional desnecessária."],
        ["medium", "Uma partição Linux não monta após editar o fstab.", "A partição aparece e o identificador pode ter mudado.", 3, "Verifique UUID, sistema de arquivos e opções de montagem antes de alterar os dados."]
    ]],
    ["Planejamento de rede", "cables", [
        "Mapear os dispositivos afetados e localizar o primeiro ponto comum da topologia",
        "Conferir VLAN e porta do switch antes de alterar endereços dos clientes",
        "Validar enlace físico, velocidade negociada e contadores de erros",
        "Documentar configuração anterior e alterar uma regra por vez"
    ], [
        ["medium", "Vários computadores de uma sala perderam acesso ao servidor.", "Os demais setores continuam conectados.", 0, "O primeiro ponto comum na topologia reduz a busca ao segmento compartilhado."],
        ["hard", "Um novo computador recebe IP, mas não acessa a rede de produção.", "O equipamento foi ligado a uma porta recém-configurada.", 1, "VLAN e porta do switch explicam acesso local sem conectividade ao segmento esperado."],
        ["easy", "Um enlace Ethernet conecta e desconecta ao mover o cabo.", "O link negocia em velocidade inferior à esperada.", 2, "Inspecionar enlace e erros pode identificar cabo ou conector intermitente."],
        ["hard", "Uma mudança de firewall interrompeu um serviço de rede.", "A regra anterior ainda está documentada.", 3, "Reverter ou ajustar uma regra por vez torna a mudança verificável e recuperável."]
    ]]
];

additionalQuestionGroups.forEach(([category, minigame, answers, scenarios]) =>
    addQuestionGroup(category, minigame, answers, scenarios)
);
const addedQuestionCount = additionalQuestionGroups.reduce((total, group) => total + group[3].length, 0);

const items = [
    { id: "dirty", icon: "🖌️", name: "Tela Suja", price: 60, description: "Atrasa visualmente o próximo minigame de um rival." },
    { id: "freeze", icon: "🧊", name: "Congelamento", price: 100, description: "Imobiliza um rival por alguns segundos no próximo minigame." },
    { id: "slow", icon: "🐌", name: "PC de 2008", price: 90, description: "Deixa o próximo minigame de um rival mais difícil." },
    { id: "virus", icon: "🦠", name: "Vírus", price: 80, description: "Adiciona ameaças ao próximo minigame de um rival." },
    { id: "ups", icon: "🔋", name: "Nobreak", price: 110, description: "Bloqueia uma queda ou pico de energia que atingir você." },
    { id: "antivirus", icon: "🛡️", name: "Antivírus", price: 100, description: "Remove ameaças extras e reduz worms no próximo minigame." },
    { id: "backup", icon: "💾", name: "Backup", price: 90, description: "Protege você de uma penalidade de pontuação." },
    { id: "clean", icon: "🧹", name: "Limpeza Profunda", price: 70, description: "Remove obstáculos extras do seu próximo minigame." }
];

const $ = id => document.getElementById(id);
const devMinigames = [
    { id: "virus", name: "🦠 Caça aos vírus" },
    { id: "storage", name: "🗑️ Limpeza de armazenamento" },
    { id: "heat", name: "🌡️ Temperatura" },
    { id: "ram", name: "🧠 Instalação de RAM" },
    { id: "spyware", name: "🕵️ Caça ao spyware" },
    { id: "worms", name: "🐛 Surto de worms" },
    { id: "cables", name: "🔌 Conexão de cabos" },
    { id: "boot", name: "🖥️ Diagnóstico de boot" },
    { id: "backup", name: "💾 Backup seguro" },
    { id: "diagnostic", name: "🧪 Diagnóstico por evidências" },
    { id: "assembly", name: "🧰 Montagem de PC" },
    { id: "taskmanager", name: "📊 Gerenciador de tarefas" },
    { id: "sequence", name: "🧩 Sequência de reparo" },
    { id: "interview", name: "🎧 Atendimento técnico" }
];
let devMinigamePreview = null;
const game = {
    players: [],
    currentPlayer: 0,
    round: 1,
    maxRounds: 8,
    questionCount: 0,
    speedBonusEnabled: false,
    currentProblem: null,
    waiting: false,
    roundQuestions: [],
    usedQuestions: new Set(),
    eventsProcessedRound: 0,
    global: {},
    timers: [],
    timeouts: [],
    miniFinished: false,
    diagnosisAnswered: false,
    ramTotal: 0,
    ramTarget: 0,
    playerEvent: "",
    mysteryResolved: false,
    devAuthorized: false,
    answerTimeLimit: 25,
    answerTimeRemaining: 25,
    answerTimer: null
};

const positiveItemIds = ["ups", "antivirus", "backup", "clean"];

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    const screen = $(id);
    if (!screen) throw new Error(`Tela não encontrada: ${id}`);
    screen.classList.add("active");
}

function startGame(numberOfPlayers) {
    clearMinigameTasks();
    stopAnswerTimer();
    const selectedRounds = Number($("roundCount").value);
    if (!Number.isInteger(selectedRounds) || selectedRounds < 4 || selectedRounds > 10) {
        alert("Escolha uma duração entre 4 e 10 rodadas.");
        return;
    }
    game.players = Array.from({ length: numberOfPlayers }, (_, index) => ({
        name: `Player ${index + 1}`,
        score: 0,
        credits: 100,
        debuffs: [],
        inventory: [],
        activeItems: []
    }));
    game.currentPlayer = 0;
    game.round = 1;
    game.maxRounds = selectedRounds;
    game.questionCount = 0;
    game.speedBonusEnabled = false;
    game.roundQuestions = [];
    game.usedQuestions = new Set();
    game.eventsProcessedRound = 0;
    game.global = {};
    game.devAuthorized = false;
    pauseAnswerTimer();
    loadRound();
    showScreen("game");
}

function drawQuestion() {
    if (!game.roundQuestions.length) {
        let unused = questions.filter(item => !game.usedQuestions.has(item));
        if (!unused.length) {
            game.usedQuestions.clear();
            unused = questions;
        }
        game.roundQuestions = shuffle(unused);
    }
    const targetDifficulty = difficultyForRound(game.round);
    let questionIndex = -1;
    for (let index = game.roundQuestions.length - 1; index >= 0; index--) {
        if (game.roundQuestions[index].difficulty === targetDifficulty) {
            questionIndex = index;
            break;
        }
    }
    if (questionIndex < 0) questionIndex = game.roundQuestions.length - 1;
    const selected = game.roundQuestions.splice(questionIndex, 1)[0];
    game.usedQuestions.add(selected);
    return selected;
}

function difficultyForRound(round) {
    const easyThrough = Math.max(2, Math.floor(game.maxRounds / 4));
    const mediumThrough = Math.max(easyThrough + 1, Math.ceil(game.maxRounds * 0.625));
    return round <= easyThrough ? "easy" : round <= mediumThrough ? "medium" : "hard";
}

function shuffle(array) {
    const result = [...array];
    for (let index = result.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
}

function loadRound() {
    stopAnswerTimer();
    game.questionCount++;
    game.speedBonusEnabled = game.questionCount > 3;
    game.waiting = false;
    game.miniFinished = false;
    game.diagnosisAnswered = false;
    game.playerEvent = "";
    game.mysteryResolved = false;
    game.playerEffects = { timerPenalty: 0 };
    $("message").innerHTML = "";
    const player = game.players[game.currentPlayer];
    if (game.eventsProcessedRound !== game.round) {
        game.eventsProcessedRound = game.round;
        triggerGlobalEvent();
    }
    game.currentProblem = drawQuestion();
    if (Math.random() < 0.15) triggerPlayerEvent(player);

    $("round").textContent = `${game.round} / ${game.maxRounds}`;
    $("currentPlayer").textContent = player.name;
    $("problemTitle").textContent = game.currentProblem.title;
    $("problemDescription").textContent = game.currentProblem.description;
    renderDifficulty();
    $("diagnostic").classList.remove("hidden");
    $("minigame").classList.add("hidden");
    $("nextButton").classList.add("hidden");
    renderOptions();
    renderScoreboard();
    applyCustomerEvent();
    startAnswerTimer();
}

function renderDifficulty() {
    let indicator = $("difficultyBadge");
    if (!indicator) {
        indicator = document.createElement("div");
        indicator.id = "difficultyBadge";
        indicator.className = "difficulty-badge";
        $("problemTitle").insertAdjacentElement("afterend", indicator);
    }
    const settings = difficultySettings[game.currentProblem.difficulty];
    indicator.textContent = `${settings.label} — ${settings.points} PONTOS · ${game.currentProblem.category}`;
}

function renderScoreboard() {
    $("scoreboard").innerHTML = "";
    const effectNames = {
        dirty: "🖌️ Tela Suja",
        freeze: "🧊 Congelamento",
        slow: "🐌 PC lento",
        virus: "🦠 Pop-ups",
        "global-virus": "🦠 Ataque global",
        outage: "⚡ Queda de energia"
    };
    game.players.forEach((player, index) => {
        const div = document.createElement("div");
        div.className = "col-6 col-md-3";
        const pendingEffects = player.debuffs.map(effect => effectNames[effect]).filter(Boolean);
        div.innerHTML = `<div class="player-card ${index === game.currentPlayer ? "current" : ""}">
            <div class="player-name">${index === game.currentPlayer ? "🔧 " : ""}${player.name}</div>
            <div class="score">${player.score} pts</div>
            <div class="credits">💰 ${player.credits}</div>
            ${pendingEffects.length ? `<small class="pending-effects">Próximo minigame: ${pendingEffects.join(", ")}</small>` : ""}
            <small class="inventory-label">${player.inventory.length + player.activeItems.length ? `🎒 ${player.inventory.length + player.activeItems.length} item(ns) · ${player.activeItems.length} ativo(s)` : "🎒 Sem itens"}</small>
        </div>`;
        $("scoreboard").appendChild(div);
    });
}

function renderOptions() {
    $("options").innerHTML = "";
    game.currentProblem.options.forEach(option => {
        const div = document.createElement("div");
        div.className = "col-12 col-md-6";
        const button = document.createElement("button");
        button.className = "option";
        button.disabled = game.playerEvent === "mystery" && !game.mysteryResolved;
        button.innerHTML = `<span class="option-letter">${option.letter}</span><strong>${option.text}</strong>`;
        button.addEventListener("click", () => chooseDiagnosis(option.id));
        div.appendChild(button);
        $("options").appendChild(div);
    });
}

function adjustScore(player, amount, allowShield = true) {
    if (amount < 0 && allowShield && consumeItem(player, "backup")) {
        return { amount: 0, message: "💾 Seu Backup bloqueou a penalidade!" };
    }
    player.score = Math.max(0, player.score + amount);
    return { amount, message: "" };
}

function startAnswerTimer() {
    const panel = $("answerBonusPanel");
    if (!game.speedBonusEnabled) {
        game.answerTimeRemaining = 0;
        panel.classList.add("hidden");
        return;
    }
    game.answerTimeRemaining = game.answerTimeLimit;
    panel.classList.remove("hidden");
    updateAnswerTimer();
    resumeAnswerTimer();
}

function resumeAnswerTimer() {
    if (game.answerTimeRemaining <= 0 || game.answerTimer || game.diagnosisAnswered || game.waiting) return;
    game.answerTimer = setInterval(() => {
        game.answerTimeRemaining = Math.max(0, game.answerTimeRemaining - 1);
        updateAnswerTimer();
        if (game.answerTimeRemaining === 0) stopAnswerTimer();
    }, 1000);
}

function stopAnswerTimer() {
    if (game.answerTimer) {
        clearInterval(game.answerTimer);
        game.timers = game.timers.filter(timer => timer !== game.answerTimer);
        game.answerTimer = null;
    }
}

function pauseAnswerTimer() {
    stopAnswerTimer();
}

function updateAnswerTimer() {
    const time = $("answerTime");
    const bonus = $("speedBonus");
    const fill = $("answerTimerFill");
    const status = $("speedBonusStatus");
    if (!time || !bonus || !fill || !status) return;
    const availableBonus = Math.floor(100 * game.answerTimeRemaining / game.answerTimeLimit);
    time.textContent = game.answerTimeRemaining;
    bonus.textContent = availableBonus;
    fill.style.width = `${game.answerTimeRemaining / game.answerTimeLimit * 100}%`;
    fill.classList.toggle("timer-low", game.answerTimeRemaining <= 7);
    const expired = game.answerTimeRemaining <= 0;
    const statusText = expired
        ? "⏱️ Bônus de rapidez expirado."
        : "⚡ Bônus de rapidez ativo: responda corretamente antes do tempo acabar.";
    if (status.textContent !== statusText) status.textContent = statusText;
    status.classList.toggle("expired", expired);
}

function chooseDiagnosis(choice) {
    if (game.waiting || game.miniFinished || game.diagnosisAnswered) return;
    game.diagnosisAnswered = true;
    stopAnswerTimer();
    const player = game.players[game.currentPlayer];
    if (choice !== game.currentProblem.answer) {
        const penalty = adjustScore(player, -50);
        player.credits = Math.max(0, player.credits - 10);
        const penaltyText = penalty.amount ? "−50 pontos" : "seu Backup bloqueou a perda de pontos";
        const correctOption = game.currentProblem.options.find(option => option.id === game.currentProblem.answer);
        const bonusMessage = game.speedBonusEnabled ? "O bônus de rapidez não foi conquistado." : "Sem bônus de rapidez nesta pergunta.";
        $("message").innerHTML = `<div class="alert alert-danger score-loss">❌ Conduta inadequada. ${penaltyText} e −10 créditos. ${penalty.message}<br>${bonusMessage}<hr><strong>Mais adequada:</strong> ${correctOption.text}<br>${game.currentProblem.explanation}</div>`;
        renderScoreboard();
        endRound();
        return;
    }
    const basePoints = difficultySettings[game.currentProblem.difficulty].points;
    const speedBonus = game.speedBonusEnabled
        ? Math.floor(100 * game.answerTimeRemaining / game.answerTimeLimit)
        : 0;
    const points = basePoints + speedBonus;
    player.score += points;
    $("diagnostic").classList.add("hidden");
    $("minigame").classList.remove("hidden");
    const speedBonusNotice = !game.speedBonusEnabled
        ? ""
        : speedBonus
            ? `<div class="speed-bonus-awarded" role="status">⚡ Bônus de rapidez conquistado: +${speedBonus} pontos!</div>`
            : `<div class="speed-bonus-expired" role="status">⏱️ Tempo esgotado: sem pontos extras de rapidez.</div>`;
    const speedBonusSummary = speedBonus ? ` e +${speedBonus} de bônus por rapidez` : "";
    $("message").innerHTML = `<div class="alert alert-success score-gain">✅ Conduta correta! +${basePoints} pontos da pergunta${speedBonusSummary}. Total: <strong>+${points} pontos</strong>.${speedBonusNotice}<hr>${game.currentProblem.explanation}</div>`;
    renderScoreboard();
    startMinigame(game.currentProblem.minigame);
}

function startMinigame(type) {
    game.miniFinished = false;
    const player = game.players[game.currentPlayer];
    const debuffs = player.debuffs.splice(0);
    if (debuffs.includes("global-virus")) type = "virus";
    game.activeDebuffs = debuffs;
    game.activeDebuffs.push(...(game.global.virusAttack ? ["virus"] : []));
    game.global.virusAttack = false;
    game.playerEffects = {
        dirty: debuffs.includes("dirty"),
        freeze: debuffs.includes("freeze"),
        slow: debuffs.includes("slow"),
        virus: debuffs.includes("virus") || debuffs.includes("global-virus") || Boolean(game.global.extraViruses),
        antivirus: (type === "virus" || type === "worms") && consumeItem(player, "antivirus"),
        clean: consumeItem(player, "clean"),
        timerPenalty: (debuffs.includes("outage") ? 5 : 0) + (game.global.timerPenalty || 0) + (game.playerEvent === "heat" ? 3 : 0),
        internet: game.playerEvent === "internet"
    };
    game.global.timerPenalty = 0;
    const screen = $("minigame");
    screen.classList.toggle("dirty-screen", game.playerEffects.dirty);
    if (game.playerEffects.freeze) {
        game.freezePending = true;
    }
    const launch = () => {
        if (type === "virus") virusGame();
        else if (type === "storage") storageGame();
        else if (type === "heat") heatGame();
        else if (type === "ram") ramGame();
        else if (type === "spyware") spywareGame();
        else if (type === "worms") wormsGame();
        else if (type === "cables") cablesGame();
        else if (type === "boot") bootGame();
        else if (type === "backup") backupGame();
        else if (type === "diagnostic") diagnosticGame();
        else if (type === "assembly") assemblyGame();
        else if (type === "taskmanager") taskManagerGame();
        else if (type === "sequence") repairSequenceGame();
        else if (type === "interview") supportInterviewGame();
        else finishMinigame(false, 0, "Minigame não encontrado.");
        if (game.playerEffects.virus && type !== "virus") spawnSabotagePopups();
    };
    if (game.playerEffects.freeze) {
        $("message").insertAdjacentHTML("beforeend", '<div class="event-banner event-warning">🧊 Seu computador travou por alguns instantes...</div>');
        launch();
        const blocker = document.createElement("div");
        blocker.className = "freeze-overlay";
        blocker.textContent = "🧊 Sistema congelado! Aguarde...";
        $("minigame").appendChild(blocker);
        game.timeouts.push(setTimeout(() => blocker.remove(), 1800));
    }
    else launch();
}

function clearMinigameTasks() {
    game.timers.forEach(clearInterval);
    game.timeouts.forEach(clearTimeout);
    game.timers = [];
    game.timeouts = [];
}

function finishMinigame(success, bonus = 0, customMessage = "", suppressPenalty = false) {
    if (game.miniFinished) return;
    game.miniFinished = true;
    clearMinigameTasks();
    if (devMinigamePreview) {
        const result = customMessage || (success ? "Minigame concluído com sucesso!" : "Minigame encerrado.");
        restoreDevMinigamePreview();
        $("devMinigameMessage").innerHTML = `<div class="alert ${success ? "alert-success" : "alert-warning"}">${result}<br><small>Modo de teste: a pontuação e a partida não foram alteradas.</small></div>`;
        return;
    }
    const player = game.players[game.currentPlayer];
    const result = success ? Math.max(0, Math.min(300, bonus)) : 0;
    let eventMessage = "";
    if (success) {
        player.score += result;
        player.credits += 35 + Math.floor(result / 4);
        eventMessage = `🏆 Minigame concluído! +${result} pontos e +${35 + Math.floor(result / 4)} créditos.`;
    } else if (!suppressPenalty) {
        const adjustment = adjustScore(player, -50);
        eventMessage = `⚠️ Serviço incompleto: −50 pontos. ${adjustment.message}`;
    }
    $("minigame").classList.remove("dirty-screen");
    $("minigame").querySelectorAll(".freeze-overlay").forEach(element => element.remove());
    const resultMessage = customMessage ? `${customMessage} ${eventMessage}` : eventMessage;
    $("message").innerHTML = `<div class="alert ${success ? "alert-success score-gain" : "alert-warning score-loss"}">${resultMessage}</div>`;
    renderScoreboard();
    endRound();
}

function endRound() {
    game.waiting = true;
    $("nextButton").classList.remove("hidden");
}

function nextRound() {
    if (!game.waiting) return;
    clearMinigameTasks();
    if (game.currentPlayer + 1 < game.players.length) {
        game.currentPlayer++;
    } else {
        game.currentPlayer = 0;
        game.round++;
        if (game.round > game.maxRounds) {
            finishGame();
            return;
        }
    }
    loadRound();
}

function showMinigame(title, instructions, body) {
    $("minigame").innerHTML = `<div class="text-center"><h3>${title}</h3><p>${instructions}</p>${body}</div>`;
}

function difficultyCount(easy, medium, hard) {
    const difficulty = game.currentProblem.difficulty;
    return difficulty === "easy" ? easy : difficulty === "medium" ? medium : hard;
}

function miniTimer(seconds, label, callback) {
    let remaining = seconds;
    const timer = document.createElement("p");
    timer.className = "mini-timer";
    timer.innerHTML = `${label}: <strong>${remaining}</strong>s`;
    $("minigame").querySelector(".text-center").prepend(timer);
    game.timers.push(setInterval(() => {
        if (game.miniFinished) return;
        remaining--;
        timer.querySelector("strong").textContent = remaining;
        if (remaining <= 0) callback();
    }, 1000));
}

function timerSeconds(base) {
    const settings = difficultySettings[game.currentProblem.difficulty];
    return Math.max(5, Math.floor(base * settings.timeScale) - (game.playerEffects.timerPenalty || 0) - (game.playerEffects.slow ? 3 : 0));
}

function virusGame() {
    const required = difficultyCount(5, 7, 9) + (game.playerEffects.virus ? 2 : 0);
    const decoys = Math.max(0, difficultyCount(1, 3, 5) - (game.playerEffects.antivirus || game.playerEffects.clean ? 1 : 0));
    const seconds = timerSeconds(22);
    showMinigame("🦠 Caça aos vírus", `Feche ${required} alertas maliciosos e não feche os avisos legítimos. Tempo: <strong id="virusTime">${seconds}</strong>s.`,
        `<div id="virusArena" class="minigame-screen virus-arena"></div><p>Ameaças removidas: <strong id="virusCount">0</strong> / ${required}</p>`);
    let count = 0;
    let remaining = seconds;
    let spawnedDecoys = 0;
    const arena = $("virusArena");
    function spawn() {
        if (game.miniFinished) return;
        const isDecoy = spawnedDecoys < decoys && Math.random() < 0.32;
        if (isDecoy) spawnedDecoys++;
        const popup = document.createElement("button");
        popup.className = `virus-popup ${isDecoy ? "legit-popup" : ""}`;
        popup.style.left = `${Math.random() * 72}%`;
        popup.style.top = `${Math.random() * 65}%`;
        popup.textContent = isDecoy ? "✅ Atualização confiável — ignorar" : "⚠️ ALERTA! Ameaça detectada — remover";
        let removed = false;
        const removePopup = () => {
            if (removed || game.miniFinished) return;
            removed = true;
            popup.remove();
            if (isDecoy) {
                game.timeouts.push(setTimeout(spawn, 250));
            }
        };
        popup.addEventListener("click", () => {
            if (isDecoy) {
                removePopup();
                return;
            }
            removed = true;
            count++;
            $("virusCount").textContent = count;
            popup.remove();
            if (count >= required) finishMinigame(true, 120 + count * 10);
            else spawn();
        });
        arena.appendChild(popup);
        if (isDecoy) {
            game.timeouts.push(setTimeout(removePopup, 2400));
        }
    }
    spawn();
    game.timers.push(setInterval(() => {
        remaining--;
        $("virusTime").textContent = remaining;
        if (remaining <= 0) finishMinigame(false, 0, "⏰ Os pop-ups tomaram conta do sistema!");
    }, 1000));
}

function spawnSabotagePopups() {
    const total = game.playerEffects.virus ? 2 : 0;
    const arena = $("minigame").querySelector(".minigame-screen") || $("minigame");
    let shown = 0;
    const showPopup = () => {
        if (game.miniFinished || shown >= total || !arena.isConnected) return;
        shown++;
        const popup = document.createElement("button");
        popup.className = "virus-popup sabotage-popup";
        popup.style.left = `${12 + Math.random() * 55}%`;
        popup.style.top = `${12 + Math.random() * 48}%`;
        popup.textContent = "🦠 ALERTA FALSO! Feche para continuar";
        popup.addEventListener("click", () => {
            popup.remove();
            if (shown < total) game.timeouts.push(setTimeout(showPopup, 1200));
        }, { once: true });
        arena.appendChild(popup);
        game.timeouts.push(setTimeout(() => {
            if (popup.isConnected) {
                popup.remove();
                if (shown < total) showPopup();
            }
        }, 5000));
    };
    showPopup();
}

const storageVersions = [
    [
        ["📁", "Documentos", true, true], ["📁", "Downloads", true, true], ["📁", "Jogos", true, true],
        ["📄", "fotos_antigas.zip", false], ["📄", "instalador_antigo.exe", false], ["📄", "cache_video.tmp", false],
        ["📄", "documentos_importantes.docx", true], ["📄", "impostos_2025.pdf", true], ["📁", "Windows", true, true], ["🪟", "System32", "system"]
    ],
    [
        ["📁", "Programas", true, true], ["📁", "Projetos", true, true], ["📄", "backup_familia.zip", true],
        ["📄", "setup_duplicado.exe", false], ["📄", "lixo_download_44.tmp", false], ["📄", "video_cache.dat", false],
        ["📄", "curriculo_final.docx", true], ["📁", "Windows", true, true], ["🪟", "System32", "system"], ["📄", "memes_2018.zip", false]
    ],
    [
        ["📁", "Área de Trabalho", true, true], ["📁", "Fotos", true, true], ["📄", "contrato_assinado.pdf", true],
        ["📄", "temporario_instalacao.tmp", false], ["📄", "filme_incompleto.part", false], ["📄", "instalador_gpu_antigo.exe", false],
        ["📄", "chaves_acesso.txt", true], ["📁", "Windows", true, true], ["🪟", "System32", "system"], ["📄", "fotos_borradas.zip", false]
    ]
];

function storageGame() {
    const difficulty = game.currentProblem.difficulty;
    const target = Math.max(1, difficultyCount(2, 3, 4) + (game.playerEffects.clean ? -1 : 0) + (game.playerEffects.slow ? 1 : 0));
    const files = shuffle(storageVersions[Math.floor(Math.random() * storageVersions.length)]);
    let seconds = timerSeconds(45);
    showMinigame("🗑️ Limpeza de armazenamento", `Explore os arquivos. Apague ${target} itens inúteis e preserve dados importantes. Tempo: <strong id="storageTime">${seconds}</strong>s. Dificuldade: ${difficultySettings[difficulty].label}.`,
        `<div class="storage-toolbar">💽 Este Computador <span>🔎 Pesquisar arquivos</span></div><div id="files" class="file-grid"></div><p class="mt-3">Itens inúteis removidos: <strong id="deleted">0</strong> / ${target}</p>`);
    let deleted = 0;
    files.forEach(([icon, name, important, isFolder]) => {
        const button = document.createElement("button");
        button.className = `file ${isFolder ? "folder" : ""}`;
        button.innerHTML = `<span>${icon}</span><span>${name}</span>`;
        button.setAttribute("aria-label", `Apagar ${name}`);
        button.addEventListener("click", () => {
            if (button.disabled || game.miniFinished) return;
            if (important === "system") {
                if (!window.confirm("⚠️ AVISO: Esta pasta é essencial para o funcionamento do Windows. Tem certeza?")) return;
                // This consequence is intentionally absolute and does not end the match.
                game.players[game.currentPlayer].score = 0;
                finishMinigame(false, 0, "💥 Você acabou de apagar o Windows. Parabéns, técnico. Sua pontuação nesta partida foi zerada — o jogo continua!", true);
                return;
            }
            button.disabled = true;
            if (important) {
                button.classList.add("file-protected");
                const adjustment = adjustScore(game.players[game.currentPlayer], -50);
                $("message").innerHTML = `<div class="alert alert-danger score-loss">🚫 ${name} era importante! −50 pontos. ${adjustment.message}</div>`;
                renderScoreboard();
                finishMinigame(false, 0, `🚫 Você apagou ${name}, um arquivo importante. O minigame terminou.`, true);
                return;
            }
            button.classList.add("file-deleted");
            deleted++;
            $("deleted").textContent = deleted;
            if (deleted >= target) finishMinigame(true, Math.min(220, 100 + deleted * 25));
        });
        $("files").appendChild(button);
    });
    game.timers.push(setInterval(() => {
        seconds--;
        $("storageTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O armazenamento continuou cheio quando o tempo acabou.");
    }, 1000));
}

function heatGame() {
    let temperature = 70;
    let seconds = timerSeconds(20);
    const interval = game.currentProblem.difficulty === "easy" ? 900 : game.currentProblem.difficulty === "medium" ? 600 : 380;
    showMinigame("🌡️ CPU pegando fogo!", "Clique para limpar o cooler e baixar a temperatura. Mantenha abaixo de 70°C.",
        `<div class="temperature"><div id="temperatureFill" class="temperature-fill"></div></div><h2 id="temperature">${temperature}°C</h2><p>Tempo: <strong id="heatTime">${seconds}</strong>s</p><button id="cleanButton" class="btn btn-danger btn-lg">🧹 LIMPAR COOLER</button><div id="heatObstacle"></div>`);
    function update() {
        $("temperature").textContent = `${temperature}°C`;
        $("temperatureFill").style.width = `${Math.min(100, temperature)}%`;
        $("temperatureFill").classList.toggle("critical", temperature >= 90);
    }
    $("cleanButton").addEventListener("click", () => {
        if ($("heatObstacle").querySelector('[data-blocked="true"]')) return;
        temperature -= game.playerEffects.clean ? 9 : 5;
        update();
        if (temperature <= 55) finishMinigame(true, 180);
    });
    game.timers.push(setInterval(() => {
        temperature += game.playerEffects.slow ? 3 : 2;
        if (game.currentProblem.difficulty === "hard" && Math.random() < 0.35) temperature += 2;
        update();
        if (temperature >= 110) finishMinigame(false, 0, "🔥 A temperatura crítica desligou o PC!");
    }, interval));
    game.timers.push(setInterval(() => {
        seconds--;
        $("heatTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O tempo acabou antes de resfriar o processador.");
    }, 1000));
    if (game.currentProblem.difficulty === "hard") {
        game.timers.push(setInterval(() => {
            if (game.miniFinished) return;
            const obstacle = document.createElement("button");
            obstacle.className = "heat-obstacle";
            obstacle.textContent = "🧹 Ventoinha obstruída — remover";
            obstacle.dataset.blocked = "true";
            obstacle.addEventListener("click", () => obstacle.remove());
            $("heatObstacle").replaceChildren(obstacle);
        }, 3500));
    }
}

function ramGame() {
    game.ramTotal = 0;
    game.ramTarget = difficultyCount(16, 32, 64);
    showMinigame("🧠 Instalação da RAM", `Instale módulos até atingir exatamente ${game.ramTarget} GB. Não ultrapasse a capacidade solicitada.`,
        `<div class="row g-2">${[8, 16, 32, 64].map(amount => `<div class="col-6 col-md-3"><button class="btn btn-outline-info w-100 ram-option" data-amount="${amount}">RAM ${amount} GB</button></div>`).join("")}</div><div id="ramSlots" class="row g-2 mt-3"></div><h4 class="mt-3">Memória: <span id="ramTotal">0</span> / ${game.ramTarget} GB</h4>`);
    document.querySelectorAll(".ram-option").forEach(button => button.addEventListener("click", () => addRAM(Number(button.dataset.amount))));
    let seconds = timerSeconds(30);
    const timer = document.createElement("p");
    timer.innerHTML = `Tempo restante: <strong id="ramTime">${seconds}</strong>s`;
    $("minigame").querySelector(".text-center").insertBefore(timer, $("ramSlots"));
    game.timers.push(setInterval(() => {
        seconds--;
        $("ramTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O computador não reconheceu a configuração de memória a tempo.");
    }, 1000));
}

function addRAM(amount) {
    if (game.miniFinished) return;
    game.ramTotal += amount;
    $("ramTotal").textContent = game.ramTotal;
    const slot = document.createElement("div");
    slot.className = "col-6 col-md-3";
    slot.innerHTML = `<div class="player-card">🧠 <strong>${amount} GB</strong></div>`;
    $("ramSlots").appendChild(slot);
    if (game.ramTotal === game.ramTarget) finishMinigame(true, 180);
    else if (game.ramTotal > game.ramTarget) finishMinigame(false, 0, "⚠️ Você ultrapassou a capacidade solicitada.");
}

const spywareProcessSets = [
    ["Chrome.exe", "Discord.exe", "Windows Explorer", "Spotify.exe", "svchost.exe", "SpyMonitor.exe", "Game.exe", "System"],
    ["firefox.exe", "Steam.exe", "Runtime Broker", "CloudSync.exe", "KeyWatch.exe", "SearchIndexer.exe", "AudioSrv.exe"],
    ["explorer.exe", "OneDrive.exe", "UpdateService.exe", "ScreenLogger.exe", "TaskHost.exe", "Defender.exe", "Game.exe"]
];

function spywareGame() {
    const processes = spywareProcessSets[Math.floor(Math.random() * spywareProcessSets.length)];
    const suspects = processes.filter(name => /SpyMonitor|KeyWatch|ScreenLogger/.test(name));
    const suspicious = suspects[Math.floor(Math.random() * suspects.length)];
    const count = Math.max(4, Math.min(processes.length, 6 + difficultySettings[game.currentProblem.difficulty].extra - (game.playerEffects.clean ? 1 : 0)));
    const shown = shuffle([...new Set([suspicious, ...processes.filter(name => name !== suspicious)])]).slice(0, count);
    const seconds = timerSeconds(18);
    showMinigame("🕵️ Caça ao spyware", `Identifique o processo espião. Tempo: <strong id="spyTime">${seconds}</strong>s.`,
        `<div id="processList" class="process-list"></div>`);
    shown.forEach(name => {
        const button = document.createElement("button");
        button.className = "process-item";
        button.textContent = `⚙️ ${name}`;
        button.addEventListener("click", () => {
            if (name === suspicious) finishMinigame(true, 160);
            else finishMinigame(false, 0, `❌ ${name} era um processo legítimo. O spyware escapou.`);
        });
        $("processList").appendChild(button);
    });
    let remaining = seconds;
    game.timers.push(setInterval(() => {
        remaining--;
        $("spyTime").textContent = remaining;
        if (remaining <= 0) finishMinigame(false, 0, "⏰ O spyware continuou coletando dados!");
    }, 1000));
}

function wormsGame() {
    const target = Math.max(3, difficultyCount(5, 8, 11) + (game.playerEffects.virus ? 2 : 0) - (game.playerEffects.antivirus || game.playerEffects.clean ? 2 : 0));
    const healthMax = 100;
    let health = healthMax;
    let kills = 0;
    let spawnCount = 0;
    showMinigame("🐛 Surto de worms", `Clique nos worms antes que infectem o sistema. Elimine ${target} para vencer.`,
        `<p>🖥️ INTEGRIDADE DO SISTEMA: <strong id="integrityText">${health}%</strong></p><div class="integrity-bar"><div id="integrityFill" class="integrity-fill"></div></div><div id="wormArena" class="minigame-screen worm-arena"></div><p>Worms eliminados: <strong id="wormCount">0</strong> / ${target}</p>`);
    function spawnWorm() {
        if (game.miniFinished) return;
        if (health <= 0) {
            finishMinigame(false, 0, "🦠 A integridade chegou a 0%. O sistema foi infectado!");
            return;
        }
        spawnCount++;
        const worm = document.createElement("button");
        worm.className = "worm";
        worm.textContent = "🐛";
        worm.style.left = `${Math.random() * 85}%`;
        worm.style.top = `${Math.random() * 70}%`;
        worm.addEventListener("click", () => {
            kills++;
            $("wormCount").textContent = kills;
            worm.remove();
            if (kills >= target) finishMinigame(true, Math.min(250, 120 + kills * 10));
        });
        $("wormArena").appendChild(worm);
        const baseLifetime = game.currentProblem.difficulty === "hard" ? 1600 : game.currentProblem.difficulty === "medium" ? 2300 : 3200;
        const lifetime = Math.max(700, baseLifetime - (game.playerEffects.slow ? 400 : 0));
        const timeout = setTimeout(() => {
            if (!worm.isConnected || game.miniFinished) return;
            worm.remove();
            health -= game.playerEffects.antivirus ? 10 : game.currentProblem.difficulty === "hard" ? 25 : 20;
            $("integrityText").textContent = `${Math.max(0, health)}%`;
            $("integrityFill").style.width = `${Math.max(0, health / healthMax * 100)}%`;
            spawnWorm();
        }, lifetime);
        game.timeouts.push(timeout);
    }
    const baseRate = game.currentProblem.difficulty === "hard" ? 1100 : game.currentProblem.difficulty === "medium" ? 1450 : 1900;
    const rate = Math.max(650, baseRate - (game.playerEffects.slow ? 300 : 0));
    spawnWorm();
    game.timers.push(setInterval(() => {
        if (spawnCount < target + 5) spawnWorm();
    }, rate));
}

function cablesGame() {
    const allMappings = [
        ["HDMI", "Monitor"], ["Ethernet", "Roteador"], ["USB", "Periférico"], ["Energia", "Fonte"],
        ["DisplayPort", "Monitor"], ["P2", "Caixas de som"]
    ];
    const cableCount = Math.max(3, difficultyCount(3, 4, 6) - (game.playerEffects.clean ? 1 : 0));
    const mappings = shuffle(allMappings).slice(0, cableCount);
    const targets = shuffle([...new Set(mappings.map(item => item[1]))]);
    showMinigame("🔌 Conecte os cabos", "Ligue cada cabo ao destino correto e confirme as conexões.",
        `<div id="cableRows" class="cable-list"></div><button id="checkCables" class="btn btn-info mt-3">Testar conexões</button>`);
    mappings.forEach(([cable]) => {
        const row = document.createElement("label");
        row.className = "cable-row";
        row.innerHTML = `<strong>🔌 ${cable}</strong><select class="form-select cable-target" data-cable="${cable}"><option value="">Escolha o destino</option>${targets.map(target => `<option value="${target}">${target}</option>`).join("")}</select>`;
        $("cableRows").appendChild(row);
    });
    let seconds = timerSeconds(35);
    const timer = document.createElement("p");
    timer.innerHTML = `Tempo restante: <strong id="cableTime">${seconds}</strong>s`;
    $("minigame").querySelector(".text-center").insertBefore(timer, $("cableRows"));
    game.timers.push(setInterval(() => {
        seconds--;
        $("cableTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O tempo acabou antes de conectar os cabos.");
    }, 1000));
    $("checkCables").addEventListener("click", () => {
        const correct = [...document.querySelectorAll(".cable-target")].every(select => mappings.find(item => item[0] === select.dataset.cable)[1] === select.value);
        if (correct) finishMinigame(true, 170);
        else finishMinigame(false, 0, "⚡ Há cabos conectados ao lugar errado. Revise o esquema!");
    });
}

const bootScenarios = [
    { prompt: "Erro: Boot device not found", solution: "Verificar se a unidade é detectada e revisar a ordem de boot" },
    { prompt: "Tela azul após instalar um driver", solution: "Iniciar em modo de segurança e reverter o driver recente" },
    { prompt: "O relógio e as configurações UEFI se perdem ao desligar", solution: "Verificar e substituir a bateria CMOS" },
    { prompt: "PC liga, mas não conclui o POST e emite bipes", solution: "Consultar o código de bipes e verificar RAM/conexões" }
];

function bootGame() {
    const scenario = bootScenarios[Math.floor(Math.random() * bootScenarios.length)];
    const wrong = shuffle(bootScenarios.filter(item => item !== scenario).map(item => item.solution)).slice(0, 3);
    const choices = shuffle([scenario.solution, ...wrong]).slice(0, game.playerEffects.clean ? 3 : 4);
    let seconds = timerSeconds(25);
    showMinigame("🖥️ Diagnóstico de inicialização", `<strong>${scenario.prompt}</strong><br>Escolha o primeiro diagnóstico seguro. Tempo: <strong id="bootTime">${seconds}</strong>s.`,
        `<div id="bootOptions" class="row g-2"></div>`);
    choices.forEach(solution => {
        const column = document.createElement("div");
        column.className = "col-12";
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = solution;
        button.addEventListener("click", () => {
            if (solution === scenario.solution) finishMinigame(true, 170);
            else finishMinigame(false, 0, "❌ Esse diagnóstico não resolve a falha de inicialização.");
        });
        column.appendChild(button);
        $("bootOptions").appendChild(column);
    });
    game.timers.push(setInterval(() => {
        seconds--;
        $("bootTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O sistema não iniciou a tempo!");
    }, 1000));
}

function backupGame() {
    const files = shuffle([
        { name: "fotos_familia.jpg", kind: "personal", required: true },
        { name: "contrato_assinado.pdf", kind: "personal", required: true },
        { name: "projeto_escola.docx", kind: "personal", required: true },
        { name: "cache_browser.tmp", kind: "junk" },
        { name: "instalador_duplicado.exe", kind: "junk" },
        { name: "trojan_update.exe", kind: "malware" },
        { name: "senha_banco.txt.exe", kind: "malware" },
        { name: "video_grande.mp4", kind: "personal", required: game.currentProblem.difficulty === "hard" }
    ]);
    let seconds = timerSeconds(40) + (game.playerEffects.clean ? 5 : 0);
    showMinigame("💾 Backup seguro", `Inclua todos os arquivos pessoais importantes. Não inclua arquivos suspeitos. Tempo: <strong id="backupTime">${seconds}</strong>s.`,
        `<div id="backupFiles" class="backup-list"></div><button id="createBackup" class="btn btn-success mt-3">Criar backup seguro</button>`);
    files.forEach(file => {
        const label = document.createElement("label");
        label.className = "backup-file";
        label.innerHTML = `<input type="checkbox" class="backup-choice" data-kind="${file.kind}" data-required="${Boolean(file.required)}"> <span>${file.kind === "malware" ? "⚠️" : file.kind === "junk" ? "🗑️" : "📄"} ${file.name}</span>`;
        $("backupFiles").appendChild(label);
    });
    $("createBackup").addEventListener("click", () => {
        const valid = [...document.querySelectorAll(".backup-choice")];
        const selectedMalware = valid.some(input => input.checked && input.dataset.kind === "malware");
        const missingRequired = valid.some(input => input.dataset.required === "true" && !input.checked);
        if (!selectedMalware && !missingRequired) finishMinigame(true, 190);
        else finishMinigame(false, 0, selectedMalware ? "🦠 O backup incluiu malware! Nunca restaure esse arquivo." : "⚠️ Faltaram arquivos pessoais importantes no backup.");
    });
    game.timers.push(setInterval(() => {
        seconds--;
        $("backupTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O backup não ficou pronto a tempo.");
    }, 1000));
}

const diagnosticScenarios = [
    {
        symptoms: "O computador reinicia ao executar um jogo; em tarefas leves permanece estável.",
        tests: [
            ["Temperatura da CPU e GPU durante carga", "Registre os máximos e compare-os com os limites do fabricante."],
            ["Eventos críticos no Visualizador de Eventos", "Procure reinicializações inesperadas e erros associados."],
            ["Conectores e capacidade da fonte", "Confira conexões e margem de potência para CPU e GPU."],
            ["Integridade dos arquivos do jogo", "Verifique se os arquivos do jogo estão íntegros."]
        ],
        causes: ["Sobreaquecimento sob carga", "Instabilidade na alimentação elétrica", "Falha de arquivo do jogo", "Defeito no monitor"],
        answer: 1
    },
    {
        symptoms: "Um PC fica lento após algum tempo ligado; o uso de memória cresce continuamente.",
        tests: [
            ["Uso de RAM por processo", "Compare os processos ao longo do tempo e procure crescimento persistente."],
            ["Espaço livre no disco do sistema", "Confirme se há espaço para paginação e arquivos temporários."],
            ["Temperatura do processador", "Observe se há redução de frequência por temperatura."],
            ["Inicialização de serviços", "Identifique serviços que iniciam junto com o sistema."]
        ],
        causes: ["Vazamento de memória em um processo", "Disco com pouco espaço livre", "Limitação térmica da CPU", "Excesso de programas na inicialização"],
        answer: 0
    },
    {
        symptoms: "Os sites não abrem pelo nome, mas a conexão com endereços IP funciona.",
        tests: [
            ["Endereço IP e gateway atribuídos", "Confira a configuração da interface e a rota padrão."],
            ["Consulta DNS com nslookup", "Compare a resolução do nome com o servidor DNS configurado."],
            ["Estado do link Ethernet ou Wi-Fi", "Confira se a interface permanece conectada."],
            ["Acesso ao gateway local", "Teste a comunicação com o roteador da rede."]
        ],
        causes: ["Falha na resolução DNS", "Endereço IP duplicado", "Perda do link físico", "Falha no gateway da rede"],
        answer: 0
    },
    {
        symptoms: "O PC liga, mas não conclui o POST depois de instalar um módulo de memória.",
        tests: [
            ["Código de diagnóstico da placa-mãe", "Consulte LEDs ou bipes no manual do fabricante."],
            ["Inicialização com a memória anterior", "Desligue da tomada e compare a inicialização com a configuração conhecida."],
            ["Compatibilidade e encaixe do módulo", "Confira padrão suportado e reinstale o módulo corretamente."],
            ["Saída de vídeo e monitor", "Confirme que o monitor está na entrada correta."]
        ],
        causes: ["Módulo incompatível ou mal encaixado", "Problema na saída de vídeo", "Falha do disco de inicialização", "Configuração incorreta do monitor"],
        answer: 0
    }
];

function diagnosticGame() {
    const scenario = diagnosticScenarios[Math.floor(Math.random() * diagnosticScenarios.length)];
    const seconds = timerSeconds(55);
    showMinigame("🧪 Diagnóstico por evidências", `<strong>${scenario.symptoms}</strong><br>Escolha testes seguros. Os testes não descontam pontos; reúna evidências antes de concluir.`, `
        <div id="diagnosticTests" class="diagnostic-tests"></div>
        <button id="runDiagnosticTests" class="btn btn-info mt-3" disabled>Executar testes selecionados</button>
        <div id="diagnosticResults" class="diagnostic-results" aria-live="polite"></div>
        <div id="diagnosticConclusions" class="diagnostic-conclusions hidden"></div>`);
    miniTimer(seconds, "Tempo para investigar", () => finishMinigame(false, 0, "⏰ O tempo de investigação acabou."));
    scenario.tests.forEach(([name]) => {
        const label = document.createElement("label");
        label.className = "diagnostic-test";
        label.innerHTML = `<input type="checkbox" value="${name}"><span>${name}</span>`;
        label.querySelector("input").addEventListener("change", () => {
            $("runDiagnosticTests").disabled = !document.querySelector("#diagnosticTests input:checked");
        });
        $("diagnosticTests").appendChild(label);
    });
    $("runDiagnosticTests").addEventListener("click", () => {
        const selected = new Set([...document.querySelectorAll("#diagnosticTests input:checked")].map(input => input.value));
        if (!selected.size || game.miniFinished) return;
        const results = scenario.tests.filter(([name]) => selected.has(name));
        $("diagnosticResults").innerHTML = results.map(([name, result]) => `<p><strong>${name}:</strong> ${result}</p>`).join("");
        const conclusions = $("diagnosticConclusions");
        conclusions.classList.remove("hidden");
        conclusions.innerHTML = "<h4>Com base nos testes, qual causa explica melhor os sintomas?</h4><div class='row g-2' id='diagnosticCauseOptions'></div>";
        shuffle(scenario.causes.map((cause, index) => ({ cause, index }))).forEach(({ cause, index }) => {
            const column = document.createElement("div");
            column.className = "col-12 col-md-6";
            const button = document.createElement("button");
            button.className = "option";
            button.textContent = cause;
            button.addEventListener("click", () => {
                if (index === scenario.answer) finishMinigame(true, 210, "✅ As evidências sustentam esse diagnóstico; testes exploratórios seguros não custaram pontos.");
                else $("diagnosticResults").insertAdjacentHTML("beforeend", "<p class='text-warning'>Essa hipótese ainda não é sustentada pelos testes selecionados. Você pode testar outras evidências ou tentar outra hipótese.</p>");
            });
            column.appendChild(button);
            $("diagnosticCauseOptions").appendChild(column);
        });
    });
}

const assemblyBuilds = [
    {
        name: "Estação AM5 para jogos",
        cpu: "r5-7600", board: "b650", ram: "ddr5-32", gpu: "rtx-4060", drive: "nvme-1tb", psu: "650w",
        target: "Monte um sistema AM5 com DDR5, GPU dedicada e fonte com margem adequada."
    },
    {
        name: "Estação LGA1700 de uso geral",
        cpu: "i5-12400", board: "b660-ddr4", ram: "ddr4-32", gpu: "integrated", drive: "nvme-1tb", psu: "550w",
        target: "Monte uma máquina sem GPU dedicada; a placa-mãe deve aceitar o processador e a RAM escolhidos."
    },
    {
        name: "Estação AM4 com placa de vídeo",
        cpu: "r5-5600", board: "b550", ram: "ddr4-32", gpu: "rx-7600", drive: "nvme-1tb", psu: "650w",
        target: "Monte um sistema AM4 com GPU dedicada e armazenamento NVMe."
    }
];
const assemblyParts = {
    cpu: [["r5-7600", "Ryzen 5 7600 · AM5"], ["i5-12400", "Core i5-12400 · LGA1700"], ["r5-5600", "Ryzen 5 5600 · AM4"]],
    board: [["b650", "B650 · AM5 · DDR5"], ["b660-ddr4", "B660 · LGA1700 · DDR4"], ["b550", "B550 · AM4 · DDR4"]],
    ram: [["ddr5-32", "32 GB DDR5"], ["ddr4-32", "32 GB DDR4"], ["ddr4-16", "16 GB DDR4"]],
    gpu: [["rtx-4060", "GPU dedicada · RTX 4060"], ["rx-7600", "GPU dedicada · RX 7600"], ["integrated", "Gráficos integrados"]],
    drive: [["nvme-1tb", "SSD NVMe · 1 TB"], ["sata-1tb", "SSD SATA · 1 TB"], ["hdd-2tb", "HDD SATA · 2 TB"]],
    psu: [["550w", "Fonte · 550 W"], ["650w", "Fonte · 650 W"], ["850w", "Fonte · 850 W"]]
};

function assemblyGame() {
    const build = assemblyBuilds[Math.floor(Math.random() * assemblyBuilds.length)];
    const fields = [["cpu", "Processador"], ["board", "Placa-mãe"], ["ram", "Memória"], ["gpu", "Vídeo"], ["drive", "Armazenamento"], ["psu", "Fonte"]];
    showMinigame("🧩 Montagem compatível", `${build.target}<br>Selecione componentes compatíveis e confira socket, memória e alimentação antes de montar.`, `
        <div id="assemblyParts" class="assembly-grid"></div>
        <button id="checkAssembly" class="btn btn-info mt-3">Verificar compatibilidade</button>
        <p id="assemblyFeedback" class="mt-3" aria-live="polite"></p>`);
    fields.forEach(([key, label]) => {
        const wrapper = document.createElement("label");
        wrapper.className = "assembly-part";
        const select = document.createElement("select");
        select.className = "form-select";
        select.dataset.part = key;
        select.innerHTML = `<option value="">${label}: selecione</option>${assemblyParts[key].map(([value, text]) => `<option value="${value}">${text}</option>`).join("")}`;
        wrapper.append(label, select);
        $("assemblyParts").appendChild(wrapper);
    });
    $("checkAssembly").addEventListener("click", () => {
        if (game.miniFinished) return;
        const selected = Object.fromEntries([...document.querySelectorAll("#assemblyParts select")].map(select => [select.dataset.part, select.value]));
        if (Object.values(selected).some(value => !value)) {
            $("assemblyFeedback").textContent = "Selecione todos os componentes antes de verificar.";
            return;
        }
        const mismatches = fields.filter(([key]) => selected[key] !== build[key]).map(([, label]) => label);
        if (!mismatches.length) finishMinigame(true, 220, "✅ Componentes compatíveis! Montagem validada.");
        else $("assemblyFeedback").textContent = `Confira ${mismatches.join(", ")}. Verifique socket, tipo de memória e margem de potência; você pode ajustar a montagem sem perder pontos.`;
    });
}

const taskScenarios = [
    { title: "Editor de vídeo", metrics: [["CPU", 43], ["RAM", 72], ["Disco", 98], ["GPU", 38]], cause: "Disco", clue: "O disco permanece em 98% de atividade enquanto o projeto carrega." },
    { title: "Muitas abas abertas", metrics: [["CPU", 36], ["RAM", 96], ["Disco", 41], ["GPU", 22]], cause: "RAM", clue: "A memória está quase cheia e o sistema começou a paginar." },
    { title: "Renderização 3D", metrics: [["CPU", 34], ["RAM", 51], ["Disco", 16], ["GPU", 99]], cause: "GPU", clue: "A GPU está no limite; CPU, memória e disco têm folga." },
    { title: "Cálculo em planilha", metrics: [["CPU", 100], ["RAM", 47], ["Disco", 14], ["GPU", 8]], cause: "CPU", clue: "Um núcleo de processamento fica saturado durante o recálculo." },
    { title: "Cópia de arquivos", metrics: [["CPU", 18], ["RAM", 35], ["Disco", 97], ["GPU", 4]], cause: "Disco", clue: "A unidade permanece ocupada durante a transferência." },
    { title: "Jogo com texturas", metrics: [["CPU", 63], ["RAM", 89], ["Disco", 20], ["GPU", 91]], cause: "RAM", clue: "O uso de memória está perto do limite e há carregamentos frequentes." }
];

function taskManagerGame() {
    const scenario = taskScenarios[Math.floor(Math.random() * taskScenarios.length)];
    showMinigame("📊 Gerenciador de tarefas", `Chamado: <strong>${scenario.title}</strong>. ${scenario.clue}<br>Interprete os indicadores e selecione o recurso que limita o desempenho.`, `
        <div class="resource-metrics">${scenario.metrics.map(([name, value]) => `<div class="resource-metric"><span>${name}</span><strong>${value}%</strong><div class="metric-track"><i style="width:${value}%"></i></div></div>`).join("")}</div>
        <div id="resourceChoices" class="resource-choices"></div><p id="resourceFeedback" aria-live="polite"></p>`);
    ["CPU", "RAM", "Disco", "GPU"].forEach(resource => {
        const button = document.createElement("button");
        button.className = "btn btn-outline-info";
        button.textContent = resource;
        button.addEventListener("click", () => {
            if (game.miniFinished) return;
            if (resource === scenario.cause) finishMinigame(true, 190, `✅ ${scenario.clue}`);
            else $("resourceFeedback").textContent = `${resource} não explica o gargalo observado. Compare utilização, sintomas e atividade dos outros recursos e tente novamente.`;
        });
        $("resourceChoices").appendChild(button);
    });
}

const repairSteps = [
    "Confirmar o relato e reproduzir o sintoma",
    "Verificar segurança, conexões e alterações recentes",
    "Fazer backup ou proteger os dados antes de mudanças",
    "Executar testes para isolar a causa provável",
    "Aplicar a correção e validar o funcionamento"
];

function repairSequenceGame() {
    const scrambled = shuffle(repairSteps);
    showMinigame("🧭 Sequência de reparo", "Ordene o atendimento técnico: investigue antes de alterar, proteja dados e valide a correção no final.", `
        <div id="repairSequence" class="repair-sequence"></div>
        <button id="checkSequence" class="btn btn-info mt-3">Conferir sequência</button>
        <p id="sequenceFeedback" aria-live="polite"></p>`);
    scrambled.forEach(step => {
        const row = document.createElement("label");
        row.className = "sequence-step";
        const select = document.createElement("select");
        select.className = "form-select sequence-position";
        select.innerHTML = `<option value="">Ordem</option>${repairSteps.map((_, index) => `<option value="${index}">${index + 1}</option>`).join("")}`;
        row.append(step, select);
        $("repairSequence").appendChild(row);
    });
    $("checkSequence").addEventListener("click", () => {
        const rows = [...document.querySelectorAll(".sequence-position")];
        if (rows.some(select => !select.value)) {
            $("sequenceFeedback").textContent = "Defina uma posição para cada etapa.";
            return;
        }
        const positions = rows.map(select => Number(select.value));
        if (new Set(positions).size !== repairSteps.length) {
            $("sequenceFeedback").textContent = "Cada etapa precisa ocupar uma posição diferente.";
            return;
        }
        const ordered = rows.map((select, index) => ({ position: Number(select.value), step: scrambled[index] })).sort((a, b) => a.position - b.position).map(entry => entry.step);
        if (ordered.every((step, index) => step === repairSteps[index])) finishMinigame(true, 200, "✅ Boa sequência: primeiro entenda e proteja, depois teste, corrija e valide.");
        else $("sequenceFeedback").textContent = "A ordem ainda pode expor os dados ou alterar o sistema antes de entender a causa. Reorganize as etapas; não há penalidade por tentar.";
    });
}

const interviewScenarios = [
    {
        complaint: "O notebook desliga sem aviso durante chamadas de vídeo.",
        questions: [
            ["Quando acontece?", "Ocorre depois de 15 a 20 minutos, mesmo conectado à tomada."],
            ["Ele esquenta ou faz ruído?", "A base fica muito quente e a ventoinha quase não é audível."],
            ["Começou após alguma mudança?", "Não instalei nada recentemente."]
        ],
        answer: "Investigar temperatura e funcionamento da refrigeração"
    },
    {
        complaint: "A impressora de rede parou de imprimir.",
        questions: [
            ["Outras pessoas conseguem imprimir?", "Ninguém consegue imprimir por essa impressora."],
            ["A impressora mostra erro ou está desligada?", "Ela está ligada, mas mostra que perdeu a conexão Wi-Fi."],
            ["O problema ocorre em outra rede?", "Ainda não testamos uma conexão cabeada."]
        ],
        answer: "Verificar conexão da impressora com a rede e o ponto de acesso"
    },
    {
        complaint: "O computador ficou lento depois que arquivos foram baixados.",
        questions: [
            ["De onde vieram os arquivos?", "Vieram de um link recebido por mensagem inesperada."],
            ["O antivírus exibiu algum alerta?", "Sim, detectou um programa desconhecido na pasta de downloads."],
            ["O comportamento começou antes do download?", "Não, começou logo depois de executar um instalador."]
        ],
        answer: "Isolar o equipamento e investigar possível malware sem executar o arquivo novamente"
    }
];

function supportInterviewGame() {
    const scenario = interviewScenarios[Math.floor(Math.random() * interviewScenarios.length)];
    const asked = new Set();
    showMinigame("🗣️ Atendimento técnico", `Cliente: “${scenario.complaint}”<br>Faça perguntas relevantes antes de recomendar uma ação. Perguntar não reduz sua pontuação.`, `
        <div id="interviewQuestions" class="interview-questions"></div>
        <div id="interviewAnswers" class="interview-answers" aria-live="polite"></div>
        <div id="interviewDiagnosis" class="interview-diagnosis hidden"></div>`);
    scenario.questions.forEach(([questionText, reply]) => {
        const button = document.createElement("button");
        button.className = "btn btn-outline-info";
        button.textContent = questionText;
        button.addEventListener("click", () => {
            if (game.miniFinished || asked.has(questionText)) return;
            asked.add(questionText);
            button.disabled = true;
            $("interviewAnswers").insertAdjacentHTML("beforeend", `<p><strong>Você:</strong> ${questionText}<br><strong>Cliente:</strong> ${reply}</p>`);
            if (asked.size >= 2) renderInterviewDiagnosis(scenario);
        });
        $("interviewQuestions").appendChild(button);
    });
}

function renderInterviewDiagnosis(scenario) {
    const panel = $("interviewDiagnosis");
    panel.classList.remove("hidden");
    if (panel.dataset.ready) return;
    panel.dataset.ready = "true";
    panel.innerHTML = "<h4>Qual é o próximo passo mais adequado?</h4><div class='interview-actions'></div>";
    const actions = [
        scenario.answer,
        "Reinstalar o sistema operacional antes de coletar mais informações",
        "Prometer uma solução definitiva sem verificar o equipamento",
        "Apagar arquivos e configurações para testar se o sintoma desaparece"
    ];
    shuffle(actions).forEach(action => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = action;
        button.addEventListener("click", () => {
            if (game.miniFinished) return;
            if (action === scenario.answer) finishMinigame(true, 200, "✅ Você coletou sintomas antes de indicar um procedimento e preservou a segurança dos dados.");
            else $("interviewAnswers").insertAdjacentHTML("beforeend", "<p class='text-warning'>Essa recomendação é prematura ou arriscada. Use as respostas para escolher um próximo passo seguro; você pode tentar novamente.</p>");
        });
        panel.querySelector(".interview-actions").appendChild(button);
    });
}

function triggerGlobalEvent() {
    game.global = {};
    // Global events are rarer than turn events and are rolled only once per round.
    if (Math.random() >= 0.08) return;
    const event = shuffle(["outage", "attack", "sale"])[0];
    if (event === "outage") {
        game.players.forEach(player => {
            if (!consumeItem(player, "ups")) player.debuffs.push("outage");
        });
        showEvent("⚡ QUEDA GERAL DE ENERGIA!", "Todos perdem 5 segundos no próximo minigame. Nobreaks protegem seus donos.", "event-warning");
    } else if (event === "attack") {
        game.players.forEach(player => player.debuffs.push("global-virus"));
        showEvent("🦠 ATAQUE GLOBAL!", "Todos enfrentarão ameaças extras em seu próximo minigame.", "event-warning");
    } else {
        game.global.sale = true;
        showEvent("💰 PROMOÇÃO GLOBAL!", "Todos os itens da loja custam 20% menos nesta rodada.", "event-good");
    }
}

function triggerPlayerEvent(player) {
    const event = shuffle(["power", "internet", "heat", "virus", "backup", "customer", "mystery"])[0];
    if (event === "power") {
        if (consumeItem(player, "ups")) showEvent("🔋 NOBREAK ATIVADO", "A queda de energia foi bloqueada pelo seu nobreak.", "event-good");
        else {
            player.debuffs.push("outage");
            showEvent(Math.random() < 0.5 ? "⚡ QUEDA DE ENERGIA" : "⚡ PICO DE ENERGIA", "Você perderá 5 segundos no minigame desta rodada.", "event-warning");
        }
    } else if (event === "internet") {
        game.playerEvent = "internet";
        showEvent("🌐 INTERNET CAIU", "Sem conexão externa por enquanto. O minigame terá uma distração extra.", "event-warning");
    } else if (event === "heat") {
        game.playerEvent = "heat";
        showEvent("🔥 SUPERAQUECIMENTO", "O tempo disponível no minigame foi reduzido em 3 segundos.", "event-warning");
    } else if (event === "virus") {
        player.debuffs.push("virus");
        showEvent("🦠 SURTO DE VÍRUS", "Mais ameaças aparecerão no seu próximo minigame.", "event-warning");
    } else if (event === "backup") {
        player.activeItems.push("backup");
        showEvent("💾 BACKUP AUTOMÁTICO", "Você ganhou proteção contra uma penalidade de pontuação.", "event-good");
    } else if (event === "customer") {
        game.playerEvent = "customer";
        showEvent("👻 CLIENTE CONFUSO", "O cliente descreveu o defeito de um jeito... peculiar.", "event-fun");
    } else {
        game.playerEvent = "mystery";
        showEvent("🎁 ARQUIVO MISTERIOSO", "Escolha analisar o arquivo com segurança ou arriscar abri-lo.", "event-fun");
    }
}

function showEvent(title, description, style) {
    const message = document.createElement("div");
    message.className = `event-banner ${style}`;
    message.innerHTML = `<strong>${title}</strong><div>${description}</div>`;
    $("message").appendChild(message);
}

function applyCustomerEvent() {
    if (game.playerEvent === "customer") {
        $("problemDescription").textContent = `👻 “Meu PC está fazendo um barulho de avião e só acontece quando abro o Minecraft!” — ${game.currentProblem.description}`;
    }
    if (game.playerEvent === "mystery") {
        const actions = document.createElement("div");
        actions.className = "mystery-actions";
        actions.innerHTML = `<strong>📦 update_final.exe</strong><button class="btn btn-outline-info btn-sm" id="analyzeMystery">🔎 Analisar</button><button class="btn btn-outline-danger btn-sm" id="openMystery">📂 Abrir mesmo assim</button>`;
        $("message").appendChild(actions);
        $("analyzeMystery").addEventListener("click", () => {
            if (game.mysteryResolved) return;
            game.mysteryResolved = true;
            game.players[game.currentPlayer].score += 25;
            game.playerEvent = "";
            actions.innerHTML = "✅ Arquivo analisado: era suspeito. Você ganhou +25 pontos!";
            document.querySelectorAll("#options .option").forEach(button => { button.disabled = false; });
            renderScoreboard();
        });
        $("openMystery").addEventListener("click", () => {
            if (game.mysteryResolved) return;
            game.mysteryResolved = true;
            const player = game.players[game.currentPlayer];
            const penalty = adjustScore(player, -50);
            game.playerEvent = "";
            actions.innerHTML = `💥 Era uma armadilha! −50 pontos. ${penalty.message}`;
            document.querySelectorAll("#options .option").forEach(button => { button.disabled = false; });
            renderScoreboard();
        });
    }
}

function openShop() {
    pauseAnswerTimer();
    showScreen("shop");
    renderShop();
}

function renderShop() {
    $("shopItems").innerHTML = "";
    items.forEach(item => {
        const price = game.global.sale ? Math.floor(item.price * 0.8) : item.price;
        const div = document.createElement("div");
        div.className = "col-12 col-md-6 col-lg-3";
        div.innerHTML = `<div class="shop-card"><div class="shop-icon">${item.icon}</div><h4>${item.name}</h4><p>${item.description}</p><div class="price mb-2">💰 ${price}</div><button class="btn btn-warning w-100" data-item="${item.id}">Comprar</button></div>`;
        div.querySelector("button").addEventListener("click", () => buyItem(item.id));
        $("shopItems").appendChild(div);
    });
    const current = game.players[game.currentPlayer];
    const status = document.createElement("p");
    status.className = "shop-balance";
    status.textContent = `${current.name}: ${current.credits} créditos · todos os itens comprados vão para o inventário.`;
    $("shopItems").prepend(status);
}

function closeShop() {
    showScreen("game");
    resumeAnswerTimer();
}

function openInventory() {
    if (!game.players.length) return;
    if (game.diagnosisAnswered && !game.waiting) {
        alert("Finalize o minigame antes de abrir o inventário.");
        return;
    }
    pauseAnswerTimer();
    renderInventory();
    showScreen("inventory");
}

function closeInventory() {
    showScreen("game");
    resumeAnswerTimer();
}

function renderInventory() {
    const player = game.players[game.currentPlayer];
    if (!player) return;
    $("inventoryPlayer").textContent = `${player.name} · ${player.inventory.length} item(ns) guardado(s) · ${player.activeItems.length} proteção(ões) ativa(s)`;
    const container = $("inventoryItems");
    container.innerHTML = "";
    const heldCounts = new Map();
    const activeCounts = new Map();
    player.inventory.forEach(id => heldCounts.set(id, (heldCounts.get(id) || 0) + 1));
    player.activeItems.forEach(id => activeCounts.set(id, (activeCounts.get(id) || 0) + 1));
    const availableItems = items.filter(item => heldCounts.has(item.id) || activeCounts.has(item.id));
    if (!availableItems.length) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-secondary">🎒 Seu inventário está vazio. Compre itens na loja e volte aqui para decidir quando usá-los.</div></div>';
        return;
    }
    availableItems.forEach(item => {
        const held = heldCounts.get(item.id) || 0;
        const active = activeCounts.get(item.id) || 0;
        const column = document.createElement("div");
        column.className = "col-12 col-md-6 col-xl-4";
        const card = document.createElement("div");
        card.className = "inventory-card";
        card.innerHTML = `<div class="inventory-item-icon">${item.icon}</div><h3>${item.name}</h3><p>${item.description}</p><div class="inventory-count">Guardado: <strong>${held}</strong> · Ativo: <strong>${active}</strong></div>`;
        if (positiveItemIds.includes(item.id)) {
            if (held > 0) {
                const activate = document.createElement("button");
                activate.className = "btn btn-success w-100 mt-2";
                activate.textContent = "✅ Ativar proteção";
                activate.addEventListener("click", () => activateInventoryItem(item.id));
                card.appendChild(activate);
            }
            if (active > 0) {
                const disarm = document.createElement("button");
                disarm.className = "btn btn-outline-warning w-100 mt-2";
                disarm.textContent = "↩️ Desativar proteção";
                disarm.addEventListener("click", () => disarmInventoryItem(item.id));
                card.appendChild(disarm);
            }
        } else if (held > 0) {
            const targets = game.players.map((target, index) => ({ target, index })).filter(entry => entry.index !== game.currentPlayer);
            if (targets.length) {
                const label = document.createElement("label");
                label.className = "form-label mt-2";
                label.textContent = "Use contra:";
                const select = document.createElement("select");
                select.className = "form-select";
                targets.forEach(({ target, index }) => {
                    const option = document.createElement("option");
                    option.value = index;
                    option.textContent = target.name;
                    select.appendChild(option);
                });
                const use = document.createElement("button");
                use.className = "btn btn-danger w-100 mt-2";
                use.textContent = "💥 Usar sabotagem";
                use.addEventListener("click", () => useInventorySabotage(item.id, Number(select.value)));
                card.append(label, select, use);
            } else {
                const note = document.createElement("small");
                note.className = "text-warning";
                note.textContent = "É necessário haver outro jogador para usar esta sabotagem.";
                card.appendChild(note);
            }
        }
        column.appendChild(card);
        container.appendChild(column);
    });
}

function activateInventoryItem(id) {
    const player = game.players[game.currentPlayer];
    if (!positiveItemIds.includes(id)) throw new Error("Somente proteções positivas podem ser ativadas.");
    const index = player.inventory.indexOf(id);
    if (index < 0) return;
    player.inventory.splice(index, 1);
    player.activeItems.push(id);
    renderInventory();
    renderScoreboard();
}

function disarmInventoryItem(id) {
    const player = game.players[game.currentPlayer];
    const index = player.activeItems.indexOf(id);
    if (index < 0) return;
    player.activeItems.splice(index, 1);
    player.inventory.push(id);
    renderInventory();
    renderScoreboard();
}

function useInventorySabotage(id, targetIndex) {
    const player = game.players[game.currentPlayer];
    if (positiveItemIds.includes(id) || !game.players[targetIndex] || targetIndex === game.currentPlayer) {
        throw new Error("Alvo ou item de sabotagem inválido.");
    }
    const index = player.inventory.indexOf(id);
    if (index < 0) return;
    player.inventory.splice(index, 1);
    applyItem({ id }, targetIndex);
    renderInventory();
    renderScoreboard();
    $("inventoryPlayer").textContent = `${player.name} usou ${items.find(item => item.id === id).name} contra ${game.players[targetIndex].name}.`;
}

function buyItem(id) {
    if (game.playerEvent === "internet") {
        alert("🌐 Sem internet, a loja está temporariamente indisponível nesta rodada.");
        return;
    }
    const item = items.find(entry => entry.id === id);
    if (!item) throw new Error(`Item não encontrado: ${id}`);
    const player = game.players[game.currentPlayer];
    const price = game.global.sale ? Math.floor(item.price * 0.8) : item.price;
    if (player.credits < price) {
        alert("💸 Você não tem créditos suficientes!");
        return;
    }
    player.credits -= price;
    player.inventory.push(item.id);
    alert(`${item.icon} ${item.name} guardado no inventário de ${player.name}.`);
    renderScoreboard();
    renderShop();
}

function applyItem(item, target) {
    const victim = game.players[target];
    if (["dirty", "freeze", "slow", "virus"].includes(item.id)) victim.debuffs.push(item.id);
}

function consumeItem(player, id) {
    const index = player.activeItems.indexOf(id);
    if (index === -1) return false;
    player.activeItems.splice(index, 1);
    return true;
}

function finishGame() {
    clearMinigameTasks();
    showScreen("end");
    const ranking = [...game.players].sort((a, b) => b.score - a.score);
    const winner = ranking[0];
    $("winner").textContent = `🏆 ${winner.name} venceu!`;
    $("winnerDescription").textContent = `${winner.name} terminou com ${winner.score} pontos e foi coroado Técnico do Ano!`;
    $("finalScore").innerHTML = "";
    ranking.forEach((player, index) => {
        const div = document.createElement("div");
        div.className = "player-card mb-2";
        const medal = ["🥇", "🥈", "🥉"][index] || "🔧";
        div.textContent = `${medal} ${player.name} — ${player.score} pontos`;
        $("finalScore").appendChild(div);
    });
}

function openDevTools() {
    if (!game.players.length) {
        alert("Inicie uma partida antes de abrir as Dev Tools.");
        return;
    }
    game.devAuthorized = false;
    $("devLogin").classList.remove("hidden");
    $("devPanel").classList.add("hidden");
    $("devPassword").value = "";
    $("devLoginMessage").textContent = "";
    showScreen("devtools");
    $("devPassword").focus();
}

function closeDevTools() {
    if (devMinigamePreview) restoreDevMinigamePreview();
    game.devAuthorized = false;
    showScreen("game");
    resumeAnswerTimer();
}

function authorizeDevTools(event) {
    event.preventDefault();
    if ($("devPassword").value !== "abacate") {
        $("devLoginMessage").innerHTML = '<span class="text-danger">❌ Senha incorreta.</span>';
        $("devPassword").select();
        return;
    }
    game.devAuthorized = true;
    $("devLogin").classList.add("hidden");
    $("devPanel").classList.remove("hidden");
    $("devLoginMessage").textContent = "";
    renderDevTools();
    renderDevQuestionCatalog();
    renderDevMinigameButtons();
}

function requireDevAuthorization() {
    if (!game.devAuthorized || $("devPanel").classList.contains("hidden")) {
        throw new Error("Ação bloqueada: autentique-se nas Dev Tools.");
    }
}

function renderDevTools() {
    requireDevAuthorization();
    $("devPlayer").innerHTML = "";
    game.players.forEach((player, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${player.name} · ${player.credits} créditos`;
        $("devPlayer").appendChild(option);
    });
    $("devRound").max = game.maxRounds;
    $("devCurrentRound").textContent = `${game.round} / ${game.maxRounds}`;
    $("devRoundInfo").textContent = `Rodada ${game.round} de ${game.maxRounds} · ${game.players.length} jogador(es) · Vez de ${game.players[game.currentPlayer].name}`;
    $("devPlayersView").innerHTML = Array.from({ length: game.maxRounds }, (_, index) => {
        const round = index + 1;
        const status = round < game.round ? "✅ Concluída" : round === game.round ? "▶️ Em andamento" : "⏳ Próxima";
        return `<div class="dev-round-row"><span>Rodada ${round}</span><span>${status}</span></div>`;
    }).join("");
}

function renderDevQuestionCatalog() {
    requireDevAuthorization();
    const catalog = $("devQuestionCatalog");
    catalog.innerHTML = "";
    const difficulties = [
        { id: "easy", title: "🟢 FÁCIL", points: difficultySettings.easy.points },
        { id: "medium", title: "🟡 MÉDIO", points: difficultySettings.medium.points },
        { id: "hard", title: "🔴 DIFÍCIL", points: difficultySettings.hard.points }
    ];
    const sortedQuestions = [...questions].sort((first, second) =>
        difficulties.findIndex(level => level.id === first.difficulty) -
        difficulties.findIndex(level => level.id === second.difficulty)
    );

    difficulties.forEach(level => {
        const sectionQuestions = sortedQuestions.filter(item => item.difficulty === level.id);
        const section = document.createElement("details");
        section.className = "dev-question-level";
        const heading = document.createElement("summary");
        heading.textContent = `${level.title} · ${level.points} pontos · ${sectionQuestions.length} perguntas`;
        section.appendChild(heading);
        sectionQuestions.forEach(item => {
            const card = document.createElement("article");
            card.className = "dev-question-card";
            const title = document.createElement("h4");
            title.textContent = item.title;
            const description = document.createElement("p");
            description.textContent = item.description;
            const category = document.createElement("small");
            category.className = "dev-question-category";
            category.textContent = `📂 ${item.category} · Minigame: ${devMinigames.find(minigame => minigame.id === item.minigame)?.name || item.minigame}`;
            const choices = document.createElement("div");
            choices.className = "dev-question-answers";
            const feedback = document.createElement("div");
            feedback.className = "dev-question-feedback";
            let answered = false;
            item.options.forEach(option => {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "dev-question-answer";
                button.textContent = `${option.letter}. ${option.text}`;
                button.addEventListener("click", () => {
                    if (answered) return;
                    answered = true;
                    const correct = option.id === item.answer;
                    button.classList.add(correct ? "answer-correct" : "answer-incorrect");
                    feedback.className = `dev-question-feedback ${correct ? "text-success" : "text-warning"}`;
                    feedback.textContent = correct
                        ? `✅ Correto! ${item.explanation}`
                        : `❌ Não exatamente. Resposta correta: ${item.options.find(answer => answer.id === item.answer).letter}. ${item.options.find(answer => answer.id === item.answer).text}. ${item.explanation}`;
                    choices.querySelectorAll("button").forEach(answerButton => { answerButton.disabled = true; });
                    if (!correct) {
                        const correctButton = [...choices.querySelectorAll("button")].find((_, index) => item.options[index].id === item.answer);
                        correctButton?.classList.add("answer-correct");
                    }
                });
                choices.appendChild(button);
            });
            const reset = document.createElement("button");
            reset.type = "button";
            reset.className = "btn btn-outline-info btn-sm mt-2";
            reset.textContent = "↻ Tentar novamente";
            reset.addEventListener("click", () => {
                answered = false;
                choices.querySelectorAll("button").forEach((button, index) => {
                    button.disabled = false;
                    button.classList.remove("answer-correct", "answer-incorrect");
                    button.textContent = `${item.options[index].letter}. ${item.options[index].text}`;
                });
                feedback.className = "dev-question-feedback";
                feedback.textContent = "";
            });
            card.append(title, description, category, choices, feedback, reset);
            section.appendChild(card);
        });
        catalog.appendChild(section);
    });
}

function renderDevMinigameButtons() {
    requireDevAuthorization();
    const container = $("devMinigameButtons");
    container.innerHTML = "";
    devMinigames.forEach(minigame => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-info";
        button.textContent = `▶ ${minigame.name}`;
        button.addEventListener("click", () => runDevMinigamePreview(minigame.id));
        container.appendChild(button);
    });
}

function runDevMinigamePreview(type) {
    requireDevAuthorization();
    if (devMinigamePreview) return;
    if (game.diagnosisAnswered && !game.waiting) {
        $("devMinigameMessage").innerHTML = '<div class="alert alert-warning">Termine a rodada atual antes de iniciar um teste, para não interromper o minigame em andamento.</div>';
        return;
    }
    const difficulty = $("devMinigameDifficulty").value;
    if (!difficultySettings[difficulty]) throw new Error("Dificuldade de teste inválida.");
    const mount = $("minigame");
    const stage = $("devPreviewStage");
    const existingQuestion = questions.find(item => item.minigame === type);
    const savedGame = { ...game };
    devMinigamePreview = {
        savedGame,
        mount,
        parent: mount.parentNode,
        nextSibling: mount.nextSibling,
        originalHTML: mount.innerHTML,
        originalClass: mount.className
    };
    Object.assign(game, {
        players: [{
            name: "Teste Dev",
            score: 0,
            credits: 0,
            debuffs: [],
            inventory: [],
            activeItems: []
        }],
        currentPlayer: 0,
        currentProblem: { ...(existingQuestion || questions[0]), difficulty, minigame: type },
        waiting: false,
        timers: [],
        timeouts: [],
        miniFinished: false,
        diagnosisAnswered: true,
        ramTotal: 0,
        ramTarget: 0,
        playerEvent: "",
        mysteryResolved: false,
        global: {},
        playerEffects: {
            dirty: false,
            freeze: false,
            slow: false,
            virus: false,
            antivirus: false,
            clean: false,
            timerPenalty: 0,
            internet: false
        }
    });
    $("devMinigameMessage").textContent = `Teste em andamento: ${devMinigames.find(item => item.id === type).name} (${difficultySettings[difficulty].label}).`;
    $("devPreviewReturn").classList.remove("hidden");
    stage.classList.remove("hidden");
    mount.className = "game-box dev-preview-minigame";
    mount.innerHTML = "";
    stage.appendChild(mount);
    try {
        startMinigame(type);
    } catch (error) {
        restoreDevMinigamePreview();
        $("devMinigameMessage").innerHTML = `<div class="alert alert-danger">Não foi possível iniciar o teste: ${error.message}</div>`;
    }
}

function restoreDevMinigamePreview() {
    if (!devMinigamePreview) return;
    const preview = devMinigamePreview;
    clearMinigameTasks();
    Object.assign(game, preview.savedGame);
    preview.mount.innerHTML = preview.originalHTML;
    preview.mount.className = preview.originalClass;
    if (preview.nextSibling && preview.nextSibling.parentNode === preview.parent) {
        preview.parent.insertBefore(preview.mount, preview.nextSibling);
    } else {
        preview.parent.appendChild(preview.mount);
    }
    $("devPreviewStage").classList.add("hidden");
    $("devPreviewReturn").classList.add("hidden");
    devMinigamePreview = null;
}

function cancelDevMinigamePreview() {
    requireDevAuthorization();
    if (!devMinigamePreview) return;
    restoreDevMinigamePreview();
    $("devMinigameMessage").innerHTML = '<div class="alert alert-secondary">Teste encerrado. A partida não foi alterada.</div>';
}

function selectedDevPlayer() {
    requireDevAuthorization();
    const index = Number($("devPlayer").value);
    if (!Number.isInteger(index) || !game.players[index]) {
        throw new Error("Selecione um jogador válido nas Dev Tools.");
    }
    return game.players[index];
}

function changeDevCredits(action) {
    const player = selectedDevPlayer();
    const amount = Number($("devCredits").value);
    if (!Number.isFinite(amount) || amount < 0) {
        $("devTestResults").innerHTML = '<div class="alert alert-danger">Informe uma quantidade de créditos válida (zero ou maior).</div>';
        return;
    }
    const value = Math.floor(amount);
    if (action === "add") player.credits += value;
    else if (action === "subtract") player.credits = Math.max(0, player.credits - value);
    else if (action === "set") player.credits = value;
    else throw new Error(`Ação de créditos desconhecida: ${action}`);
    renderScoreboard();
    renderDevTools();
    $("devTestResults").innerHTML = `<div class="alert alert-success">${player.name} agora tem ${player.credits} créditos.</div>`;
}

function applyDevEffect(kind) {
    const player = selectedDevPlayer();
    if (kind === "positive") {
        const itemId = $("devPositiveEffect").value;
        if (!["ups", "antivirus", "backup", "clean"].includes(itemId)) {
            throw new Error("Efeito positivo inválido.");
        }
        player.inventory.push(itemId);
        $("devTestResults").innerHTML = `<div class="alert alert-success">✨ Proteção adicionada ao inventário de ${player.name}.</div>`;
    } else if (kind === "negative") {
        const effectId = $("devNegativeEffect").value;
        if (!["dirty", "freeze", "slow", "virus"].includes(effectId)) {
            throw new Error("Efeito negativo inválido.");
        }
        player.debuffs.push(effectId);
        $("devTestResults").innerHTML = `<div class="alert alert-warning">💥 Efeito negativo aplicado a ${player.name} para o próximo minigame.</div>`;
    } else {
        throw new Error(`Tipo de efeito desconhecido: ${kind}`);
    }
    renderScoreboard();
    renderDevTools();
}

function setDevRound() {
    requireDevAuthorization();
    const requestedRound = Number($("devRound").value);
    if (!Number.isInteger(requestedRound) || requestedRound < 1 || requestedRound > game.maxRounds) {
        $("devTestResults").innerHTML = `<div class="alert alert-danger">A rodada deve estar entre 1 e ${game.maxRounds}.</div>`;
        return;
    }
    clearMinigameTasks();
    game.round = requestedRound;
    game.questionCount = (requestedRound - 1) * game.players.length + game.currentPlayer;
    game.roundQuestions = [];
    game.eventsProcessedRound = requestedRound - 1;
    game.waiting = false;
    loadRound();
    pauseAnswerTimer();
    renderDevTools();
    $("devTestResults").innerHTML = `<div class="alert alert-success">Partida ajustada para a rodada ${requestedRound}.</div>`;
}

function clearDevEffects() {
    requireDevAuthorization();
    const player = selectedDevPlayer();
    player.debuffs = [];
    renderScoreboard();
    renderDevTools();
    $("devTestResults").innerHTML = `<div class="alert alert-success">Efeitos pendentes removidos de ${player.name}.</div>`;
}

function runDevTests() {
    requireDevAuthorization();
    const answerPositionCounts = [0, 0, 0, 0];
    questions.forEach(item => {
        answerPositionCounts[item.options.findIndex(option => option.id === item.answer)]++;
    });
    const validMinigames = ["virus", "storage", "heat", "ram", "spyware", "worms", "cables", "boot", "backup", "diagnostic", "assembly", "taskmanager", "sequence", "interview"];
    const checks = [
        {
            label: "Banco com ao menos 100 questões novas, únicas e completas",
            passed: addedQuestionCount >= 100 &&
                new Set(questions.map(item => item.title)).size === questions.length &&
                questions.every(item => item.title && item.description && item.explanation && item.category &&
                item.options.length === 4 && new Set(item.options.map(option => option.text.trim())).size === 4 &&
                item.options.some(option => option.id === item.answer) &&
                Boolean(difficultySettings[item.difficulty]) &&
                validMinigames.includes(item.minigame)
            )
        },
        {
            label: "Respostas corretas distribuídas entre as quatro posições",
            passed: Math.max(...answerPositionCounts) - Math.min(...answerPositionCounts) <= 1
        },
        {
            label: "Progressão de dificuldade por rodada",
            passed: game.maxRounds >= 4 && game.maxRounds <= 10 &&
                difficultyForRound(1) === "easy" &&
                difficultyForRound(Math.max(2, Math.floor(game.maxRounds / 4))) === "easy" &&
                difficultyForRound(Math.max(2, Math.floor(game.maxRounds / 4)) + 1) === "medium" &&
                difficultyForRound(game.maxRounds) === "hard"
        },
        {
            label: "Telas principais e tela de Dev Tools presentes",
            passed: ["menu", "game", "shop", "inventory", "devtools", "end"].every(id => Boolean($(id)))
        },
        {
            label: "Quatorze minigames com mecânicas distintas disponíveis",
            passed: [virusGame, storageGame, heatGame, ramGame, spywareGame, wormsGame, cablesGame, bootGame, backupGame, diagnosticGame, assemblyGame, taskManagerGame, repairSequenceGame, supportInterviewGame].every(fn => typeof fn === "function")
        },
        {
            label: "Catálogo de perguntas e seletor de todos os minigames nas Dev Tools",
            passed: $("devQuestionCatalog").querySelectorAll(".dev-question-card").length === questions.length &&
                $("devMinigameButtons").querySelectorAll("button").length === devMinigames.length
        },
        {
            label: "Jogadores com créditos, inventário e efeitos",
            passed: game.players.length > 0 && game.players.every(player =>
                Number.isFinite(player.credits) && Array.isArray(player.inventory) && Array.isArray(player.activeItems) && Array.isArray(player.debuffs)
            )
        }
    ];
    $("devTestResults").innerHTML = checks.map(check =>
        `<div class="dev-test-row ${check.passed ? "test-pass" : "test-fail"}">${check.passed ? "✅" : "❌"} ${check.label}</div>`
    ).join("") + `<div class="mt-2"><strong>${checks.filter(check => check.passed).length}/${checks.length} testes passaram.</strong> Banco: ${questions.length} perguntas, incluindo ${addedQuestionCount} novas.</div>`;
}

function returnToMenu() {
    if (!window.confirm("Voltar à tela inicial? A partida atual será descartada.")) return;
    if (devMinigamePreview) restoreDevMinigamePreview();
    clearMinigameTasks();
    stopAnswerTimer();
    game.players = [];
    game.currentProblem = null;
    game.waiting = false;
    game.devAuthorized = false;
    $("devPanel").classList.add("hidden");
    $("devLogin").classList.remove("hidden");
    showScreen("menu");
}

$("devLogin").addEventListener("submit", authorizeDevTools);
