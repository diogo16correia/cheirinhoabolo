---
name: Cheirinho a Bolo
description: Pastelaria caseira por encomenda; cada secção é uma folha de papel de festa.
colors:
  pink: "#f7c6d0"
  pink-dark: "#e79aac"
  cream: "#fff8f0"
  brown: "#5a3420"
  brown-soft: "#7a4c33"
  brown-deep: "#3b2216"
  chiclete: "#f7c6d0"
  baunilha: "#fff1df"
  framboesa: "#c2185b"
  framboesa-soft: "#ffe1ec"
  chocolate: "#4a2a1a"
  chocolate-ink-soft: "#f1d6c4"
  menta: "#cfeee0"
  menta-ink: "#22473a"
  menta-ink-soft: "#2f5a4a"
  algodao: "#fde3ea"
  papel-bilhete: "#fffaf3"
  amarelo: "#f2b134"
  verde-menta: "#9ed9c4"
  bandeira-rosa: "#d6336c"
  tema-pascoa: "#fbe7a1"
  tema-pascoa-ink: "#4a3510"
  tema-natal: "#1f5a3d"
  tema-natal-ink-soft: "#d9ead9"
  tema-mae: "#f9d3de"
  tema-pai: "#cfe0f5"
  tema-pai-ink: "#1d3557"
  tema-crianca: "#ffd166"
  tema-namorados: "#b3122e"
  tema-namorados-ink-soft: "#ffe1e6"
  tema-cha: "#e6dcf7"
  tema-cha-ink: "#3d2a5c"
  whatsapp: "#147a3f"
  whatsapp-dark: "#0f6232"
typography:
  display:
    fontFamily: "Shrikhand, Quicksand, cursive"
    fontSize: "clamp(2.5rem, 6.4vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Shrikhand, Quicksand, cursive"
    fontSize: "clamp(2.1rem, 4.6vw, 3.3rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.005em"
  numeral:
    fontFamily: "Shrikhand, Quicksand, cursive"
    fontSize: "2.3rem"
    fontWeight: 400
    lineHeight: 1
  title-display:
    fontFamily: "Shrikhand, Quicksand, cursive"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "Quicksand, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
  body:
    fontFamily: "Quicksand, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Quicksand, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Quicksand, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
rounded:
  focus: "6px"
  photo-mobile: "12px"
  card: "18px"
  pill: "999px"
spacing:
  festao: "22px"
  festao-mobile: "14px"
  gutter: "24px"
  gutter-mobile: "16px"
  grid-sm: "22px"
  grid-md: "26px"
  grid-lg: "32px"
  section: "88px"
  section-mobile: "64px"
components:
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-whatsapp-hover:
    backgroundColor: "{colors.whatsapp-dark}"
  button-whatsapp-small:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
  chip-instagram:
    backgroundColor: "{colors.baunilha}"
    textColor: "{colors.brown}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  chip-pessoas:
    backgroundColor: "{colors.chiclete}"
    textColor: "{colors.brown}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "3px 12px"
  chip-ver-todas:
    backgroundColor: "{colors.chiclete}"
    textColor: "{colors.brown}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  menu-bilhete:
    backgroundColor: "{colors.papel-bilhete}"
    textColor: "{colors.brown}"
    rounded: "{rounded.card}"
    padding: "26px 24px 24px"
  produto-foto:
    rounded: "{rounded.card}"
  nav-link:
    textColor: "{colors.brown}"
    padding: "4px 0"
---

# Design System: Cheirinho a Bolo

## Overview

**Creative North Star: "Dia de Festa"**

A página é uma festa a ser montada. Cada secção é uma folha inteira de papel de festa com cor própria, inundada de margem a margem, e a borda inferior de cada folha é recortada em festão e cai sobre a seguinte. Um fio de bandeirolas atravessa o topo do hero e volta a aparecer em "Como encomendar"; confettis caem devagar no hero. Nada flutua em caixas brancas sobre um fundo creme: a cor da secção é o chão, e só os bilhetes dos menus e as fotos assentam sobre ela.

O registo é caloroso, caseiro e alegre, nunca frio ou sofisticado. A tipografia junta uma display gorda e redonda (Shrikhand) para títulos e números, e uma sans arredondada (Quicksand) para tudo o resto. As fotos reais dos produtos são a prova; o sistema emoldura-as à mesma escala e não lhes faz concorrência.

O movimento faz parte do mundo: cada folha chega com a cor e a tinta da anterior e assenta na sua ao entrar no ecrã, enquanto o festão de cima desce; as bandeirolas caem e baloiçam. Com movimento reduzido ou sem JS, tudo aparece logo no estado final.

**Key Characteristics:**
- Uma cor inteira por secção, sem cartões a alternar.
- Festão recortado como fronteira entre todas as secções.
- Bandeirolas SVG e confettis como os únicos ornamentos do mundo.
- Shrikhand para títulos e numerais, Quicksand para o resto.
- Cabeçalho e navegação sempre nas cores da marca (creme/castanho/rosa).
- WhatsApp verde como única ação primária, sempre a um toque.

## Colors

Papel de festa em cores lisas e saturadas por folha, ancoradas pelo castanho da marca como tinta.

### Primary
- **Framboesa** (framboesa): a cor de alarme reservada. Inunda a secção Menus, pinta os títulos dos bilhetes, os recortes do picotado, a seleção de texto e o anel de foco. Fora destes papéis não aparece como fundo.
- **Verde WhatsApp** (whatsapp / whatsapp-dark): exclusivo dos botões de encomenda; o tom escuro é o hover. Escurecido do verde oficial para passar contraste com texto branco.

### Secondary
- **Rosa-Chiclete** (chiclete): folha do hero; também o fundo dos chips "± N pessoas" e "Ver todas", e o aro em volta do logótipo redondo.
- **Chocolate** (chocolate): folha dos Produtos, com tinta baunilha (chocolate-ink-soft para texto secundário); também a cor dos numerais grandes em "Como encomendar".
- **Menta** (menta): folha das Ocasiões, com tinta verde-escura própria (menta-ink, menta-ink-soft) em vez do castanho.
- **Rosa Algodão** (algodao): folha de "Como encomendar".

### Tertiary
- **Amarelo Festa** (amarelo), **Verde-Menta** (verde-menta) e **Rosa Bandeira** (bandeira-rosa): só existem nas bandeirolas e nos confettis, ao lado de framboesa, baunilha e castanho. Não são cores de superfície nem de texto.

### Temas das datas (Ocasiões)
Dentro da folha menta das Ocasiões, cada data é uma faixa a toda a largura com o seu papel e a sua tinta, separada da anterior por festão: Páscoa amarelo pastel (tema-pascoa, tinta tema-pascoa-ink), Natal verde pinheiro (tema-natal, tinta baunilha), Dia da Mãe rosa-flor (tema-mae, tinta brown), Dia do Pai azul (tema-pai, tinta tema-pai-ink), Dia da Criança amarelo-sol (tema-crianca, tinta chocolate), Dia dos Namorados vermelho (tema-namorados, tinta branca), Chá Revelação lilás (tema-cha, tinta tema-cha-ink). Nas faixas escuras (Natal, Namorados) a sombra das fotos é castanha escura, nunca um brilho claro.

### Neutral
- **Creme Baunilha** (baunilha): folha "Sobre", fundo do body, tinta clara sobre chocolate e castanho, fundo do chip Instagram.
- **Creme da Marca** (cream): fundo translúcido do cabeçalho e do menu móvel.
- **Papel Bilhete** (papel-bilhete): o papel quente dos bilhetes de menu sobre framboesa.
- **Castanho da Marca** (brown): tinta por defeito de todo o site, fio das bandeirolas, nav. **Castanho Suave** (brown-soft) para subtítulos e parágrafos secundários.
- **Castanho Profundo** (brown-deep): o rodapé.
- **Rosa da Marca** (pink / pink-dark): sublinhado ativo da navegação (pink-dark) e hover de links no rodapé e lightbox (pink).

### Named Rules
**The Uma Folha, Uma Cor Rule.** Cada secção tem exatamente uma cor de fundo de margem a margem, definida pelo par fundo/tinta da secção (fundo, tinta, tinta suave). Uma nova secção escolhe uma folha nova e a sua tinta; não coloca um cartão branco por cima de outra cor.

**The Framboesa Reservada Rule.** A framboesa como fundo pertence só aos Menus. É a cor de alarme da página; repeti-la noutra folha gasta-a.

**The Papel Estampado Rule.** Nenhuma folha é cor lisa: cada uma leva um estampado tom-sobre-tom do seu mundo (Sobre bolinhas, Menus riscas de embrulho, Produtos granulado, Ocasiões pintas brancas, Como encomendar xadrez de piquenique; nas datas: ovos, flocos, flores, laços, balões, corações, bolinhas rosa/azul), em images/padroes/*.svg ou gradientes repetidos. O estampado fica abaixo de ~15% de presença para nunca baixar o contraste do texto, e desenrola-se de cima para baixo quando a folha chega.

**The Uma Data, Um Papel Rule.** Uma nova ocasião ganha a sua própria faixa de tema (fundo + tinta com contraste AA) e declara a cor da faixa anterior para o festão; a última faixa entrega o seu festão a "Como encomendar".

**The Marca no Cabeçalho Rule.** O cabeçalho e a navegação mantêm sempre creme, castanho e rosa da marca, seja qual for a cor da secção por baixo.

## Typography

**Display Font:** Shrikhand (com Quicksand, cursive)
**Body Font:** Quicksand (com sans-serif), pesos 400/500/600/700

**Character:** Uma display de letreiro de confeitaria, gorda e inclinada, com uma sans de terminais redondos que fala baixo e de forma amigável.

### Hierarchy
- **Display** (Shrikhand 400, clamp(2.5rem, 6.4vw, 4.8rem), 1.05): só o título do hero, centrado, max 14ch.
- **Headline** (Shrikhand 400, clamp(2.1rem, 4.6vw, 3.3rem), 1.1): títulos de secção; em "Sobre" desce para clamp(1.9rem, 3.6vw, 2.7rem) por estar em coluna.
- **Numeral** (Shrikhand 400, 2.3rem, 1): preço no bilhete; os numerais dos passos usam a mesma face a 4.5rem.
- **Title Display** (Shrikhand 400, 1.7rem, 1): nome do menu no bilhete, em framboesa.
- **Title** (Quicksand 700, 1.3rem): categorias de produtos e títulos dos passos.
- **Body** (Quicksand 400, 1rem, 1.6): texto corrido, max 60ch; listas dos menus a 0.95rem/500 com quantidades em tabular-nums 700.
- **Lead** (Quicksand 500, 1.05rem a 1.15rem): subtítulo de secção (max 560px) e subtítulo do hero.
- **Label** (Quicksand 700, 0.85rem): chips, botão pequeno.

### Named Rules
**The Shrikhand Só Grita Rule.** Shrikhand é para títulos de secção, o título do hero, nomes de menu e numerais. Nunca para parágrafos, chips, navegação ou botões.

**The Números de Festa Rule.** Preços e números de passo são Shrikhand grande; quantidades em listas são Quicksand 700 com algarismos tabulares, alinhadas à direita.

## Layout

Página única em folhas empilhadas a toda a largura; o conteúdo vive num contentor centrado de 1140px com 24px de margem lateral (16px abaixo de 640px). Cada folha tem 88px de padding vertical (64px em móvel) mais a altura do festão no topo, para o recorte da folha anterior não tapar o conteúdo. O hero tem mais ar (150px em cima, 110px em baixo; 96/80 em móvel) para acomodar as bandeirolas.

Grelhas: bilhetes de menu em auto-fit com mínimo de 260px e 26px de intervalo; fotos de produto em 3 colunas (22px), 2 colunas abaixo de 860px e 2 colunas apertadas (12px) abaixo de 640px; passos em 3 colunas que empilham abaixo de 860px. "Sobre" é uma grelha 0.8fr/1.2fr que empilha abaixo de 860px. Títulos e subtítulos de secção centrados; subtítulo separa-se da grelha por 44px.

Pontos de quebra: 860px (grelhas) e 640px (navegação em gaveta, festão mais pequeno, bandeirolas de 7 em vez de 13 flâmulas).

## Elevation & Depth

A profundidade vem da sobreposição física do papel: o festão de cada folha cai literalmente sobre a seguinte. As sombras são suaves, difusas e tingidas com a cor do chão onde caem (vinho sobre framboesa, quase-preto sobre chocolate, verde sobre menta, castanho sobre claro), nunca cinzento neutro nem deslocadas e duras.

### Shadow Vocabulary
- **Bilhete** (`box-shadow: 0 14px 30px rgba(70, 8, 34, 0.28)`): bilhetes de menu sobre framboesa.
- **Foto em chocolate** (`box-shadow: 0 14px 30px rgba(20, 8, 2, 0.3)`) e **foto em menta** (`box-shadow: 0 14px 30px rgba(20, 70, 52, 0.22)`): molduras das fotos de produto.
- **Botão WhatsApp** (`box-shadow: 0 8px 20px rgba(20, 122, 63, 0.3)`, hover `0 12px 26px rgba(20, 122, 63, 0.35)`): halo verde da ação primária.
- **Chip claro** (`box-shadow: 0 8px 20px rgba(90, 52, 32, 0.14)`): chip Instagram e gaveta da navegação móvel.
- **Aro de logótipo** (`box-shadow: 0 0 0 10px #f7c6d0, 0 18px 40px rgba(90, 52, 32, 0.2)`): logótipo redondo com aro chiclete (6px no rodapé, sem sombra).
- **Bandeirola** (`filter: drop-shadow(0 4px 3px rgba(90, 52, 32, 0.18))`): cada flâmula.

### Named Rules
**The Sombra Tinge-se Rule.** Uma sombra leva o matiz da folha onde cai. Copiar uma sombra para outra secção obriga a retingi-la.

## Shapes

Formas de papelaria de festa: cantos redondos generosos (card, 18px) em bilhetes e fotos (12px nas fotos em móvel), pílulas totalmente redondas (pill) em todos os botões e chips, círculos para o logótipo. As fronteiras entre secções são festões de semicírculos (raio 22px, 14px em móvel) desenhados com a cor da folha de cima. As bandeirolas são triângulos invertidos pendurados de uma curva quadrática. O bilhete de menu tem uma linha picotada tracejada antes do preço com dois recortes circulares de 22px nas pontas, pintados na cor da secção. Separadores de categoria são linhas pontilhadas de 2px a 30% da tinta.

## Components

### Buttons
Redondos, sólidos, verdes; dizem sempre "WhatsApp".
- **Shape:** pílula (pill), borda transparente de 2px.
- **Primary:** button-whatsapp com ícone WhatsApp de 20px à esquerda, gap 8px, Quicksand 700.
- **Small:** button-whatsapp-small no cabeçalho e nos bilhetes, ícone de 16px.
- **Hover / Focus:** sobe 2px com curva cubic-bezier(0.2, 0.8, 0.2, 1) em 0.2s, escurece para whatsapp-dark e o halo cresce; ativo desce e encolhe para 0.98. Foco global: contorno framboesa de 3px com 3px de afastamento.

### Chips
- **Instagram:** pílula baunilha com avatar de 18px, ao lado do botão principal no hero; sobe 2px no hover.
- **± N pessoas:** pílula chiclete pequena no canto do bilhete.
- **Ver todas / Ver menos:** pílula chiclete com chevron SVG que roda 180° quando aberto; em hover passa a branco (na folha menta o par inverte-se: branco em repouso, chiclete em hover).

### Cards / Containers
- **Bilhete de menu:** papel-bilhete, canto card, sombra Bilhete, cabeçalho com nome em Shrikhand framboesa e chip de pessoas, listas com quantidades, separador fino antes dos doces, picotado com recortes antes do preço Shrikhand, botão pequeno alinhado à esquerda. Hover: sobe 4px e inclina 0.6° (alternando o sentido entre pares e ímpares).
- **Foto de produto:** moldura 4:3 com canto card, fundo de espera a 12% da tinta sobre a folha, sombra tingida; a imagem aproxima 1.05 em hover (0.6s) e abre lightbox.

### Navigation
Cabeçalho fixo em creme translúcido (94%) com desfoque de 8px e linha castanha a 10%; logótipo de 40px à esquerda, links Quicksand 600 castanho ao centro, botão WhatsApp pequeno à direita. O link ativo (seguindo a secção à vista) e o hover ganham um sublinhado rosa-escuro de 3px que cresce a partir do centro em 0.35s. Abaixo de 640px os links vão para uma gaveta creme por baixo do cabeçalho, aberta por um botão de três traços.

### Bandeirolas (signature)
SVG inline a toda a largura no topo da folha: fio castanho em curva e flâmulas triangulares nas cores do papel de festa, em ciclo fixo (rosa bandeira, baunilha, castanho, chiclete, verde-menta, amarelo). 13 flâmulas em ecrã largo, 7 em móvel. Ao entrar, cada flâmula desdobra de cima com 55ms de desfasamento e depois baloiça ±3° em ciclo de 5s.

### Confettis (signature)
Duas camadas de azulejos SVG gerados (260px e 380px) com serpentinas onduladas, retângulos e pontos nas cores do papel de festa, a cair em 26s e 44s com opacidades 0.8 e 0.6. Uma máscara radial abre uma clareira atrás do texto do hero para os confettis nunca passarem sobre as letras.

### Chegada de Folha (signature)
Cada folha chega com o fundo e a tinta da anterior e transita para os seus em 0.9s (cores animáveis registadas), enquanto o festão da folha de cima desce de altura zero. Repete ao voltar a descer. Desligado com movimento reduzido.

## Do's and Don'ts

### Do:
- **Do** dar a cada nova secção uma folha de cor inteira e a sua própria tinta e tinta suave, com festão na borda inferior.
- **Do** reservar a framboesa como fundo para os Menus e usá-la como acento de foco, seleção e títulos de bilhete.
- **Do** manter o cabeçalho e a navegação em creme, castanho e rosa da marca.
- **Do** usar o verde WhatsApp (whatsapp) e pílulas para toda a ação de encomenda, com ícone à esquerda.
- **Do** mostrar as fotos de produto à mesma escala, em molduras 4:3 com canto 18px.
- **Do** tingir cada sombra com o matiz da folha onde cai.
- **Do** usar a curva cubic-bezier(0.2, 0.8, 0.2, 1) para movimento e respeitar o movimento reduzido.

### Don't:
- **Don't** pousar cartões brancos a alternar sobre um fundo creme; o template creme com cartões é o que este mundo recusa.
- **Don't** usar Shrikhand em parágrafos, chips, navegação ou botões.
- **Don't** usar amarelo, verde-menta ou rosa bandeira como fundo de secção ou cor de texto; vivem só nas bandeirolas e confettis.
- **Don't** deixar confettis ou ornamentos passar por trás do texto sem clareira.
- **Don't** usar sombras cinzentas neutras ou sombras duras deslocadas.
