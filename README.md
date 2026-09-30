# Moonelle
App brasileiro feito para o discord com o objetivo de testes mirabolantes. 

## Características:
- Sendo um app brasileiro, ele deve ter:
    - Tendo a linguagem nos comandos em Português do Brasil.
    - Documentações em Português do Brasil.
    - Funcionalidades que no momento são importantes para mim e para o Publico.

## Objetivos Atuais:
- [ ] Sistema de Moderação
- [x] Sistema de XP de Interação
    - [x] Rank
    - [ ] Perfil
- [ ] Sistema de Portais

## Sistemas disponíveis
- XP separado por servidor: mensagens com mais de 3 caracteres podem render de 5 a 10 XP, com intervalo de 60 segundos por pessoa; mensagens idênticas seguidas não dão XP.
- Comandos `/xp`, `/rank` e `/top` para consultar nível e classificação.
- Missão semanal de 25 mensagens válidas (um crédito por minuto), resgatável em `/missao` por 250 estrelas e 100 XP.
- Loja de títulos cosméticos em `/loja`; use `/comprar` para equipar um título, exibido em `/perfil`.
- Títulos exigem nível 1, 5 ou 10, além do pagamento em estrelas.

### Configuração de XP
O evento de mensagens precisa da intenção privilegiada `Message Content`. Ative-a em **Discord Developer Portal > Application > Bot > Privileged Gateway Intents** e mantenha `MessageContent` habilitada em `index.js`.

O XP e o progresso da missão são separados por servidor. O saldo de estrelas continua global, como no sistema existente.
