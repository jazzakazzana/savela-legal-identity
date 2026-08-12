# Savela Legal Identity

# PROJETO

Crie um site institucional premium, responsivo, tecnicamente otimizado e preparado para SEO local, mecanismos de busca e mecanismos de resposta com IA para:

**Dra. Patrícia Savela**
**Advocacia e Consultoria Jurídica**
**OAB/RS 119.240**

Localização principal:

**São Leopoldo — Rio Grande do Sul**

Domínio planejado:

**patriciasavela.com.br**

Contato atual:

**Telefone / WhatsApp:** (51) 99231-4000
**E-mail:** [patriciasavelaadv@gmail.com](mailto:patriciasavelaadv@gmail.com)

Não invente nenhuma informação profissional, endereço, registro, formação, telefone, cidade ou serviço que não esteja descrito neste briefing.

---

# OBJETIVO PRINCIPAL

O site deve posicionar Patrícia Savela como uma profissional séria, técnica, experiente e especializada principalmente em:

* Direito Criminal;
* Tribunal do Júri;
* Sustentação Oral em Tribunais;
* Consultoria Jurídica.

O projeto deve transmitir:

**autoridade, confiança, discrição, preparo técnico, responsabilidade e presença.**

Não utilizar comunicação agressivamente comercial.

Não parecer uma landing page de vendas.

Não utilizar estética genérica de escritório de advocacia.

---

# DIREÇÃO VISUAL

A identidade visual deve seguir o logotipo fornecido.

A linguagem deverá combinar:

**escritório jurídico premium + editorial contemporâneo + minimalismo + sofisticação institucional.**

A experiência deve transmitir:

> “Estou diante de uma profissional preparada, séria, discreta e tecnicamente segura.”

---

# PALETA

Utilize como base:

### Verde institucional

`#004D4A`

Pode ajustar levemente conforme o arquivo real do logotipo.

### Verde muito escuro

`#003B39`

### Dourado principal

`#E9B94A`

### Dourado claro

`#F3D277`

### Off-white

`#F5F3ED`

### Branco

`#FFFFFF`

### Texto escuro

`#17211F`

### Cinza

`#707977`

O verde deve dominar a identidade.

O dourado deve ser usado de maneira restrita em:

* linhas;
* pequenos títulos;
* hover;
* números;
* bordas;
* ícones discretos;
* elementos decorativos;
* CTAs estratégicos.

Não criar grandes blocos dourados.

---

# TIPOGRAFIA

Utilizar duas famílias principais.

## Flatline Sans Regular

Utilizar em:

* headlines;
* frases de impacto;
* títulos especiais;
* elementos editoriais;
* grandes palavras decorativas.

Preparar o projeto para receber posteriormente um arquivo local da fonte.

Criar suporte através de `@font-face`.

Não tentar obter ilegalmente ou embutir arquivos de fonte proprietária de fontes desconhecidas.

Enquanto o arquivo real não estiver disponível, utilizar fallback visual próximo e deixar claramente identificada no código a variável/font-family que deverá ser substituída.

Exemplo:

`--font-display: "Flatline Sans", "Cormorant Garamond", serif;`

## Lato

Utilizar Lato como fonte estrutural.

### Lato Thin / Hairline

Utilizar apenas em:

* títulos grandes;
* navegação;
* subtítulos;
* palavras decorativas.

### Lato Light / Regular

Utilizar em:

* textos;
* descrições;
* formulários;
* botões;
* informações.

Não utilizar Hairline em parágrafos pequenos.

Garantir boa legibilidade.

---

# FOTOGRAFIAS

As fotografias profissionais ainda serão adicionadas posteriormente.

Portanto:

crie placeholders de excelente acabamento, dimensionados corretamente e fáceis de substituir dentro do Lovable.

Preparar os seguintes slots:

`patricia-hero`

`patricia-profile`

`patricia-office`

`patricia-working`

Não usar fotografias genéricas de outras advogadas como se fossem Patrícia.

Enquanto não existirem fotos:

utilizar placeholders neutros ou fundos abstratos inspirados na identidade visual.

Todos os componentes de imagem devem aceitar troca simples posteriormente.

Utilizar:

`object-fit: cover`

e permitir controle de:

`object-position`

para ajustar enquadramento das futuras fotografias.

---

# ARQUITETURA DO SITE

Não construir tudo em uma única landing page.

Criar páginas independentes.

## Home

URL:

`/`

## Sobre Patrícia

URL:

`/patricia-savela`

## Direito Criminal

URL:

`/direito-criminal`

## Tribunal do Júri

URL:

`/tribunal-do-juri`

## Sustentação Oral

URL:

`/sustentacao-oral`

## Atendimento

URL:

`/atendimento`

## Conteúdos

URL:

`/conteudos`

## Artigo individual

URL:

`/conteudos/[slug]`

## Contato

URL:

`/contato`

## Política de Privacidade

URL:

`/politica-de-privacidade`

Criar estrutura preparada para futuras páginas adicionais.

---

# HOME

Criar uma Home sofisticada e editorial.

---

# HEADER

Desktop:

logotipo à esquerda.

Links à direita:

* Início
* Patrícia Savela
* Atuação
* Tribunal do Júri
* Conteúdos
* Atendimento
* Contato

CTA:

**Falar com a advogada**

Header transparente quando estiver sobre o Hero.

Ao rolar:

* fundo verde escuro;
* leve efeito de blur;
* menu branco;
* detalhes dourados;
* animação discreta.

Mobile:

menu hambúrguer.

Criar drawer ou menu fullscreen extremamente limpo.

---

# HERO

Hero grande, aproximadamente 90vh.

Desktop:

layout dividido.

Uma área recebe fotografia de Patrícia.

Outra recebe conteúdo.

Adicionar eyebrow dourado:

**ADVOCACIA CRIMINAL**

Headline:

# Defesa técnica. Estratégia. Presença.

Complemento:

**Atuação em Direito Criminal, Tribunal do Júri e Sustentação Oral em Tribunais.**

Texto:

Atuação jurídica pautada pelo preparo técnico, responsabilidade, discrição e defesa dos direitos e garantias fundamentais.

CTA principal:

**Falar com a advogada**

CTA secundário:

**Conheça a atuação**

Adicionar:

**São Leopoldo — Rio Grande do Sul**

Utilizar uma linha dourada muito fina como elemento editorial.

---

# FAIXA DE ESPECIALIDADES

Criar uma faixa horizontal discreta:

**Direito Criminal**

•

**Tribunal do Júri**

•

**Sustentação Oral**

•

**Consultoria Jurídica**

No desktop poderá existir um movimento horizontal extremamente lento.

Desativar animação caso `prefers-reduced-motion` esteja ativo.

---

# APRESENTAÇÃO

Título:

## Patrícia Savela

Chamada:

**Técnica jurídica aliada à responsabilidade de defender direitos.**

Texto:

Nascida em Tucunduva, no Rio Grande do Sul, Patrícia Savela graduou-se em Direito pela Universidade do Vale do Rio dos Sinos — Unisinos.

Sua trajetória profissional possui atuação especialmente relacionada ao Direito Criminal e ao Tribunal do Júri.

A atuação é construída a partir da análise individual de cada caso, preparação técnica e defesa dos direitos e garantias previstos no ordenamento jurídico.

Além da advocacia, possui experiência jurídica junto à Câmara de Vereadores.

Atualmente, sua base profissional encontra-se em São Leopoldo, no Rio Grande do Sul.

Criar ao lado:

**Formação**
Direito — Unisinos

**OAB**
OAB/RS 119.240

**Área**
Direito Criminal

**Especialidade**
Tribunal do Júri

Não utilizar quatro cards convencionais.

Utilizar layout editorial com linhas e tipografia.

---

# FRASE EDITORIAL

Criar bloco visual com fundo verde profundo.

Texto:

# Defender é garantir que o processo aconteça dentro da lei.

Complemento:

A advocacia criminal possui papel essencial na proteção do contraditório, da ampla defesa e das garantias fundamentais.

---

# ÁREAS DE ATUAÇÃO

Título:

## Atuação jurídica

Texto introdutório:

**Assistência jurídica especializada em diferentes etapas do processo penal.**

Utilizar grid editorial.

### 01 — Direito Criminal

Atuação na defesa técnica dos direitos e garantias do acusado durante o processo penal.

Link:

**Conhecer atuação →**

Direcionar para:

`/direito-criminal`

### 02 — Tribunal do Júri

Atuação técnica e estratégica em processos submetidos ao Tribunal do Júri.

Link:

`/tribunal-do-juri`

### 03 — Sustentação Oral

Preparação e realização de sustentações orais perante Tribunais.

Link:

`/sustentacao-oral`

### 04 — Consultoria Jurídica

Análise jurídica individualizada conforme as particularidades de cada situação.

### 05 — Acompanhamento Processual

Acompanhamento técnico durante as etapas relevantes do processo criminal.

### 06 — Procedimentos Policiais

Assistência jurídica em situações que demandem acompanhamento profissional perante autoridades policiais.

Não prometer resultado.

---

# TRIBUNAL DO JÚRI

Criar seção de forte impacto visual.

Eyebrow:

**ESPECIALIDADE**

Headline:

# Tribunal do Júri

Texto:

O Tribunal do Júri exige preparação minuciosa, domínio técnico do processo e capacidade de comunicação.

Cada caso demanda análise aprofundada das provas, construção estratégica da defesa e compreensão integral dos fatos submetidos aos jurados.

CTA:

**Conheça a atuação no Tribunal do Júri**

Direcionar para:

`/tribunal-do-juri`

Criar grande palavra decorativa de fundo:

**JÚRI**

com baixa opacidade.

---

# SUSTENTAÇÃO ORAL

Título:

## Sustentação Oral em Tribunais

Texto:

A sustentação oral representa um momento relevante da atuação perante os Tribunais.

Além do conhecimento do processo, demanda clareza, objetividade, preparação técnica e capacidade argumentativa para apresentar aos julgadores os aspectos relevantes da defesa.

Frase:

**Argumentação jurídica exige clareza, estratégia e presença.**

CTA:

**Saiba mais**

---

# PILARES

Título:

## Uma atuação construída sobre quatro pilares

### 01

## Técnica

Estudo aprofundado das circunstâncias jurídicas e processuais de cada caso.

### 02

## Estratégia

Construção individualizada da atuação conforme as particularidades do processo.

### 03

## Discrição

Tratamento profissional, responsável e confidencial das situações apresentadas.

### 04

## Presença

Comunicação clara e acompanhamento nas etapas relevantes do processo.

---

# DIREITO CRIMINAL

Criar bloco educativo na Home.

Título:

## O papel da defesa criminal

Texto:

A advocacia criminal possui papel fundamental na garantia de que toda pessoa submetida a investigação ou processo penal tenha seus direitos respeitados.

A atuação da defesa não se limita à elaboração de petições ou ao comparecimento em audiências.

O advogado criminalista analisa provas, acompanha procedimentos, identifica questões jurídicas relevantes e atua para garantir que o processo seja conduzido de acordo com a legislação.

Independentemente das circunstâncias, cabe à defesa assegurar o exercício do contraditório e da ampla defesa.

CTA:

**Entenda a atuação criminal**

---

# LOCALIZAÇÃO

Título:

## Atendimento em São Leopoldo

Texto:

Patrícia Savela possui sua base profissional em São Leopoldo, no Rio Grande do Sul, com atuação em demandas em diferentes regiões do Estado.

Mostrar:

**São Leopoldo — RS**

Telefone:

**(51) 99231-4000**

E-mail:

**[patriciasavelaadv@gmail.com](mailto:patriciasavelaadv@gmail.com)**

Não informar endereço de rua porque ainda não foi fornecido.

Preparar variável:

`OFFICE_ADDRESS`

Enquanto estiver vazia:

não exibir endereço incompleto.

---

# SANTA ROSA

Criar bloco secundário:

## Atendimentos em Santa Rosa

Informar apenas se for mantido no conteúdo final:

**Ed. Neo Centro Profissional — Sala 402**
**Rua Guaporé, 401**
**Santa Rosa — RS**

Antes de publicar definitivamente, deixar esse bloco em uma constante/configuração que possa ser ativada ou desativada.

Não tratar Santa Rosa como sede principal.

São Leopoldo deve permanecer como principal localização profissional.

---

# CTA FINAL

Fundo verde institucional.

Eyebrow:

**ATENDIMENTO JURÍDICO**

Headline:

# Precisa de orientação jurídica?

Texto:

Entre em contato para consultar informações sobre atendimento e disponibilidade.

CTA:

**Falar pelo WhatsApp**

Link:

`https://wa.me/5551992314000`

Abrir em nova aba.

CTA secundário:

**Enviar e-mail**

Adicionar observação discreta:

**O envio de uma mensagem não constitui automaticamente contratação de serviços jurídicos.**

---

# WHATSAPP FLUTUANTE

Criar botão fixo.

Desktop:

ícone + texto:

**Falar com a advogada**

Mobile:

apenas ícone.

Não utilizar verde neon.

Adaptar à identidade do escritório.

Adicionar `aria-label`.

---

# FOOTER

Fundo verde muito escuro.

Adicionar logo.

Informações:

**Dra. Patrícia Savela**
**Advocacia e Consultoria Jurídica**
**OAB/RS 119.240**

**São Leopoldo — RS**

**(51) 99231-4000**

**[patriciasavelaadv@gmail.com](mailto:patriciasavelaadv@gmail.com)**

Links:

* Patrícia Savela
* Direito Criminal
* Tribunal do Júri
* Sustentação Oral
* Conteúdos
* Atendimento
* Contato
* Política de Privacidade

Copyright:

**© Patrícia Savela Advocacia e Consultoria Jurídica. Todos os direitos reservados.**

---

# PÁGINA SOBRE

URL:

`/patricia-savela`

SEO Title:

**Patrícia Savela | Advogada em São Leopoldo – OAB/RS 119.240**

H1:

# Dra. Patrícia Savela

Subtítulo:

**Advocacia Criminal, Tribunal do Júri e Sustentação Oral.**

Criar conteúdo institucional aprofundado.

Incluir claramente:

* nome;
* OAB;
* formação;
* atuação criminal;
* especialização em Tribunal do Júri;
* experiência jurídica;
* São Leopoldo.

Criar seção:

## Formação e trajetória

Criar seção:

## Filosofia profissional

Criar seção:

## Atuação

Adicionar links contextuais para as páginas de especialidade.

---

# PÁGINA DIREITO CRIMINAL

URL:

`/direito-criminal`

SEO Title:

**Advocacia Criminal em São Leopoldo | Patrícia Savela**

H1:

# Direito Criminal

Introdução:

**Defesa técnica e acompanhamento jurídico em diferentes etapas do processo penal.**

Estruturar conteúdo com:

## O papel do advogado criminalista

## Defesa durante investigação

## Processo criminal

## Audiências e acompanhamento processual

## Garantias fundamentais

## Quando procurar orientação jurídica

Não criar afirmações alarmistas.

Não utilizar:

“se você foi preso, ligue imediatamente”

ou outras chamadas sensacionalistas.

CTA final:

**Solicitar informações sobre atendimento**

---

# PÁGINA TRIBUNAL DO JÚRI

URL:

`/tribunal-do-juri`

SEO Title:

**Tribunal do Júri | Dra. Patrícia Savela**

H1:

# Atuação em Tribunal do Júri

Criar conteúdo profundo e informativo.

Estrutura:

## O Tribunal do Júri

## Preparação da defesa

## Análise probatória

## Estratégia jurídica

## Sessão de julgamento

## Atuação profissional

Frase editorial:

**Cada processo possui circunstâncias próprias e exige preparação individualizada.**

Não afirmar índice de sucesso.

Não exibir número de absolvições.

Não prometer resultado.

---

# PÁGINA SUSTENTAÇÃO ORAL

URL:

`/sustentacao-oral`

SEO Title:

**Sustentação Oral em Tribunais | Patrícia Savela**

H1:

# Sustentação Oral em Tribunais

Criar conteúdo sobre:

* preparação;
* domínio do processo;
* organização argumentativa;
* clareza;
* análise jurídica;
* apresentação perante Tribunais.

Evitar linguagem autopromocional excessiva.

---

# PÁGINA ATENDIMENTO

URL:

`/atendimento`

SEO Title:

**Atendimento Jurídico em São Leopoldo | Patrícia Savela**

H1:

# Atendimento jurídico

Destacar:

**São Leopoldo — RS**

Contato:

**WhatsApp: (51) 99231-4000**

**E-mail: [patriciasavelaadv@gmail.com](mailto:patriciasavelaadv@gmail.com)**

Criar estrutura futura para adicionar endereço completo.

Não inventar endereço.

Adicionar área para informações sobre atendimentos em Santa Rosa.

---

# PÁGINA CONTATO

URL:

`/contato`

Adicionar formulário:

* Nome
* Telefone
* E-mail
* Assunto
* Mensagem

Adicionar consentimento:

**Li e concordo com o tratamento dos meus dados para fins de retorno ao contato realizado.**

Criar link para:

`/politica-de-privacidade`

Não enviar dados para serviços externos não configurados.

Preparar componente para futura integração.

Adicionar mensagem de sucesso acessível.

---

# CONTEÚDOS

Criar blog/editorial.

URL:

`/conteudos`

Título:

# Conteúdos jurídicos

Descrição:

**Informações sobre Direito Criminal, Tribunal do Júri, processo penal e temas relacionados à atuação profissional.**

O blog deve ser preparado para SEO.

Cada artigo deverá ter:

* título;
* slug;
* resumo;
* data;
* data de atualização;
* autora;
* categoria;
* imagem;
* texto;
* meta title;
* meta description.

Autoria:

**Dra. Patrícia Savela — OAB/RS 119.240**

Criar:

`Article`

ou

`BlogPosting`

em JSON-LD.

---

# NÃO CRIAR ARTIGOS FALSOS

Não publicar automaticamente dezenas de artigos apenas para preencher o blog.

Criar somente três placeholders claramente identificados no ambiente de desenvolvimento.

Não indexar páginas de conteúdo vazio.

Quando artigos reais forem adicionados, poderão ser indexados.

---

# SEO TÉCNICO

Construir SEO como requisito estrutural, não como complemento posterior.

Cada página deve possuir:

* title único;
* meta description única;
* canonical;
* Open Graph;
* Twitter/X card básico;
* H1 único;
* headings hierárquicos;
* conteúdo HTML rastreável;
* URL limpa;
* links internos;
* alt text em imagens;
* página 404 personalizada.

Não utilizar hash routing.

Não depender exclusivamente de JavaScript client-side para disponibilizar conteúdo importante aos crawlers.

Sempre que a stack permitir, utilizar:

SSR, SSG ou prerenderização.

---

# INDEXAÇÃO

Criar:

`/robots.txt`

`/sitemap.xml`

O sitemap deverá listar apenas URLs públicas e indexáveis.

Não incluir:

* páginas administrativas;
* previews;
* páginas vazias;
* rotas internas;
* páginas de desenvolvimento.

---

# ROBOTS.TXT

Não bloquear Googlebot.

Não bloquear Bingbot.

Não bloquear OAI-SearchBot.

Permitir que mecanismos de busca rastreiem as páginas públicas.

Estrutura conceitual:

User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://patriciasavela.com.br/sitemap.xml

Não utilizar regras experimentais sem necessidade.

---

# GPTBOT

Manter o controle de GPTBot separado de OAI-SearchBot.

OAI-SearchBot deverá permanecer permitido para possibilitar descoberta do site por mecanismos de busca da OpenAI.

Não tratar os dois bots como a mesma coisa.

---

# ENTITY SEO

O código deve comunicar claramente as entidades:

**Patrícia Savela**

e

**Patrícia Savela Advocacia e Consultoria Jurídica**

Criar relações semânticas consistentes entre:

Patrícia Savela
→ Advogada
→ OAB/RS 119.240
→ Direito Criminal
→ Tribunal do Júri
→ Sustentação Oral
→ São Leopoldo
→ Rio Grande do Sul

Essas informações devem existir no conteúdo visível, não somente em dados estruturados.

---

# SCHEMA.ORG

Implementar JSON-LD.

Não inventar informações.

---

# PERSON

Criar um objeto equivalente a:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Patrícia Savela",
  "honorificPrefix": "Dra.",
  "jobTitle": "Advogada",
  "email": "mailto:patriciasavelaadv@gmail.com",
  "telephone": "+55 51 99231-4000",
  "url": "https://patriciasavela.com.br",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Leopoldo",
    "addressRegion": "RS",
    "addressCountry": "BR"
  },
  "knowsAbout": [
    "Direito Criminal",
    "Tribunal do Júri",
    "Sustentação Oral em Tribunais"
  ]
}
```

Adicionar posteriormente:

`image`

e

`sameAs`

quando houver URLs oficiais confirmadas.

Não inventar Instagram, LinkedIn ou outras redes.

---

# ORGANIZAÇÃO

Criar objeto para o escritório.

Utilizar:

`LegalService`

ou estrutura Schema.org apropriada.

Nome:

**Patrícia Savela Advocacia e Consultoria Jurídica**

URL:

`https://patriciasavela.com.br`

Telefone:

`+55 51 99231-4000`

E-mail:

`patriciasavelaadv@gmail.com`

Área:

São Leopoldo — RS — Brasil.

Não inserir streetAddress enquanto não tivermos o endereço correto.

---

# BREADCRUMBS

Implementar `BreadcrumbList` em páginas internas.

Exemplo:

Home
→ Áreas de atuação
→ Tribunal do Júri

Não mostrar breadcrumb gigantesco visualmente.

---

# ARTIGOS

Cada conteúdo futuro deve gerar:

`BlogPosting`

com:

* headline;
* description;
* datePublished;
* dateModified;
* author;
* image;
* mainEntityOfPage.

Author deve apontar para Patrícia Savela.

---

# SEO LOCAL

São Leopoldo deve ser considerado o núcleo principal da presença local.

Utilizar naturalmente no conteúdo:

**São Leopoldo**

**São Leopoldo/RS**

**Rio Grande do Sul**

Não fazer keyword stuffing.

Não repetir “advogada criminalista São Leopoldo” dezenas de vezes.

Criar conteúdo natural.

Preparar o site para futura associação ao Perfil da Empresa no Google.

---

# GOOGLE BUSINESS PROFILE

Ainda não existe Perfil da Empresa no Google.

Não criar links falsos.

Preparar campo:

`GOOGLE_BUSINESS_URL`

Quando existir, permitir adicioná-lo em:

* footer;
* contato;
* dados estruturados;
* links externos relevantes.

---

# GOOGLE SEARCH CONSOLE

Após publicação, o proprietário deverá conseguir facilmente validar o domínio no Google Search Console.

Preparar componente/configuração para receber:

`GOOGLE_SITE_VERIFICATION`

Adicionar a meta somente quando o valor existir.

---

# BING WEBMASTER TOOLS

Preparar:

`BING_SITE_VERIFICATION`

Não inserir códigos fictícios.

---

# INDEXNOW

Preparar arquitetura para futura implementação de IndexNow caso a stack utilizada suporte.

Não implementar chaves fictícias.

---

# ANALYTICS

Preparar constantes:

`GA_MEASUREMENT_ID`

`GTM_ID`

Não enviar dados para Google Analytics antes que exista configuração real.

O site deve funcionar normalmente sem Analytics.

---

# OPEN GRAPH

Cada página deve criar automaticamente:

`og:title`

`og:description`

`og:url`

`og:type`

`og:image`

Criar imagem padrão da marca para compartilhamento:

1200 × 630 px.

Até a imagem definitiva existir, criar placeholder visual baseado em:

* verde;
* dourado;
* logotipo;
* nome Patrícia Savela.

---

# FAVICON

Preparar:

favicon.ico

favicon SVG

apple-touch-icon

Utilizar o símbolo PS da marca.

---

# CANONICAL

Cada página deve apontar para sua URL oficial.

Exemplo:

`https://patriciasavela.com.br/tribunal-do-juri`

Não criar canonicals apontando todas as páginas para a Home.

---

# IA E MECANISMOS DE RESPOSTA

Organizar conteúdos para facilitar interpretação por sistemas de busca e IA.

Utilizar:

* respostas claras;
* headings descritivos;
* definições objetivas;
* autoria;
* datas;
* informação profissional verificável;
* links internos;
* contexto geográfico;
* Schema;
* páginas específicas por tema.

Não escrever conteúdo artificialmente “para IA”.

O conteúdo deve ser prioritariamente útil a pessoas.

---

# NÃO CRIAR LLMS.TXT COMO REQUISITO

Não considerar `llms.txt` necessário para SEO.

Se for criado futuramente, tratá-lo apenas como recurso complementar experimental.

Não depender dele.

---

# HTML SEMÂNTICO

Utilizar:

`header`

`nav`

`main`

`section`

`article`

`aside`

`footer`

Evitar `

` para absolutamente tudo.

Utilizar links reais `` para navegação.

---

# ACESSIBILIDADE

Atender boas práticas WCAG.

Garantir:

* contraste;
* navegação via teclado;
* foco visível;
* aria labels;
* labels nos formulários;
* alt;
* heading hierarchy;
* suporte a `prefers-reduced-motion`.

---

# PERFORMANCE

Prioridade alta.

O projeto deve visar bons Core Web Vitals.

Principalmente:

LCP
CLS
INP

---

# IMAGENS

Quando as fotos forem adicionadas:

gerar versões:

* AVIF;
* WebP;
* fallback.

Utilizar `srcset`.

Não carregar imagens gigantes em smartphone.

Definir `width` e `height` para evitar CLS.

Lazy load abaixo da dobra.

A imagem principal do Hero NÃO deve utilizar lazy loading.

Adicionar prioridade adequada.

---

# FONTES

Não carregar cinco ou seis pesos de Lato desnecessariamente.

Carregar somente os pesos efetivamente usados.

Preferencialmente:

300
400
700

e um peso fino somente onde necessário.

A Flatline Sans deverá ser otimizada e carregada localmente quando o arquivo estiver disponível.

Utilizar `font-display: swap`.

---

# JAVASCRIPT

Evitar JavaScript desnecessário.

Não importar biblioteca pesada apenas para:

* fade;
* hover;
* underline;
* animação de linha.

Sempre que possível:

CSS.

---

# ANIMAÇÕES

Elegantes e discretas.

Permitido:

* opacity;
* translateY pequeno;
* clipping;
* reveal;
* crescimento de linhas;
* zoom de imagem máximo 1.03.

Não utilizar:

* bounce;
* animações frenéticas;
* efeito 3D exagerado;
* partículas;
* textos voando;
* cursor customizado inconveniente.

---

# RESPONSIVIDADE

Mobile-first.

Testar:

320px
375px
390px
430px
768px
1024px
1440px
1920px

Não criar textos minúsculos em mobile.

Evitar headlines gigantes que quebrem de forma ruim.

---

# SEGURANÇA

Não expor chaves, secrets ou tokens no frontend.

Nunca inserir credenciais diretamente no código.

Sanitizar formulários.

Adicionar proteção básica contra spam quando houver backend.

---

# LGPD

Criar Política de Privacidade básica e estrutural.

Explicar de maneira clara:

* quais informações são coletadas;
* finalidade;
* formulário;
* analytics caso futuramente ativado;
* contato para solicitações.

Não criar banner de cookies invasivo se nenhum cookie não essencial estiver sendo utilizado.

Caso Analytics/Marketing seja ativado futuramente, implementar consentimento adequado antes de utilizar cookies que exijam consentimento.

---

# ÉTICA DA ADVOCACIA

Todo o projeto deve preservar comunicação institucional e informativa.

Nunca utilizar:

* garantia de resultado;
* “causa ganha”;
* “melhor advogada”;
* “número 1”;
* comparação com outros advogados;
* preços promocionais;
* descontos;
* chamadas apelativas;
* contagem de clientes;
* contagem de absolvições;
* sensacionalismo criminal;
* urgência artificial;
* frases como “não perca tempo ou você será preso”.

Não criar avaliações ou depoimentos fictícios.

---

# CONFIGURAÇÃO CENTRAL

Criar arquivo único de configuração:

`siteConfig`

ou equivalente.

Estrutura conceitual:

```ts
export const siteConfig = {
  professional: {
    name: "Patrícia Savela",
    displayName: "Dra. Patrícia Savela",
    oab: "OAB/RS 119.240"
  },

  business: {
    name: "Patrícia Savela Advocacia e Consultoria Jurídica"
  },

  contact: {
    phone: "+55 51 99231-4000",
    whatsapp: "5551992314000",
    email: "patriciasavelaadv@gmail.com"
  },

  location: {
    city: "São Leopoldo",
    state: "RS",
    country: "Brasil",
    streetAddress: null
  },

  domain: "https://patriciasavela.com.br",

  social: {
    instagram: null,
    linkedin: null
  },

  verification: {
    google: null,
    bing: null
  },

  analytics: {
    ga4: null,
    gtm: null
  }
}
```

Todos os componentes devem consumir essa configuração.

Não duplicar telefone, e-mail e OAB manualmente por dezenas de arquivos.

---

# COMPONENTES

Criar:

Header

MobileMenu

Logo

Hero

ExpertiseStrip

AboutPreview

PracticeAreas

JuryFeature

OralArgumentFeature

Principles

CriminalDefenseInfo

LocationSection

ContentPreview

ContactCTA

WhatsAppButton

Footer

Breadcrumbs

SEOHead

StructuredData

ArticleCard

ContactForm

---

# DESIGN SYSTEM

Criar tokens.

## Spacing

Utilizar sistema consistente.

## Containers

Largura máxima:

aproximadamente 1280–1380px.

Textos longos:

máximo 700–780px.

## Border

1px e extremamente discreto.

## Radius

0–6px predominantemente.

Não utilizar estética excessivamente arredondada.

---

# BOTÕES

CTA principal:

fundo dourado.

Texto verde escuro.

Hover:

fundo off-white.

CTA secundário:

transparente.

Borda fina dourada.

Não utilizar pill buttons exageradamente arredondados.

---

# RESULTADO FINAL

O site deve parecer construído sob medida para Patrícia Savela.

Não deve parecer um template comprado.

Não deve parecer um site genérico gerado por IA.

O design deve ser:

**sóbrio
elegante
editorial
minimalista
premium
jurídico
contemporâneo**

A técnica por baixo deve ser tão cuidadosa quanto o design.

---

# IMPORTANTE AO FINAL DO DESENVOLVIMENTO

Antes de considerar o projeto concluído:

1. verificar todas as rotas;

2. verificar versão mobile;

3. verificar links de WhatsApp;

4. verificar OAB;

5. verificar telefone;

6. verificar e-mail;

7. verificar canonical;

8. verificar titles;

9. verificar meta descriptions;

10. verificar sitemap;

11. verificar robots.txt;

12. verificar Schema JSON-LD;

13. verificar 404;

14. verificar Open Graph;

15. verificar imagens sem alt;

16. verificar headings;

17. verificar acessibilidade;

18. verificar CLS;

19. verificar imagens excessivamente grandes;

20. verificar se não existem dados fictícios;

21. verificar se nenhum endereço de São Leopoldo foi inventado;

22. verificar se nenhuma rede social inexistente foi criada;

23. verificar se páginas sem conteúdo estão `noindex`;

24. verificar que OAI-SearchBot não esteja bloqueado;

25. verificar que Googlebot e Bingbot não estejam bloqueados.

Depois dessa auditoria, apresentar um breve relatório do que foi implementado e listar somente os itens que ainda dependerem de informações futuras do cliente.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/040454f4-57ad-44b2-b825-7a5f4a2c6dad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
