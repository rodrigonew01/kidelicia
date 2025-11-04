Kidelicia — Instruções rápidas

Visão geral

Projeto simples de site estático com carrosséis Swiper e ondas SVG animadas.
Este README explica como rodar o site localmente no Windows PowerShell, por que usamos o bundle UMD do Swiper e como ajustar visualmente a onda do footer.

Como rodar localmente (PowerShell)

1) Via Python (se tiver instalado):

```powershell
python -m http.server 8000
Start-Process "http://localhost:8000"
```

2) Via Node (npx http-server) — funciona sem instalação global:

```powershell
npx http-server -p 8000
Start-Process "http://localhost:8000"
```

3) Alternativas:
- Extensão "Live Server" do VS Code — abra a pasta do projeto e clique em "Go Live".

Notas sobre por que usamos o bundle UMD do Swiper

- Ao abrir `index.html` diretamente via file://, importações ESM remotas podem falhar por CORS/compatibilidade no navegador.
- O bundle UMD (injetado via <script> que expõe `window.Swiper`) evita esses problemas e permite que o slider funcione localmente sem ferramentas adicionais.
- Se quiser usar ESM moderno em produção, hospede os arquivos via servidor HTTP e atualize para os imports ESM oficiais do Swiper.

Como testar o carrossel e as ondas

1. Inicie um servidor local (um dos comandos acima).
2. Abra o navegador em http://localhost:8000 e navegue até `index.html`.
3. Verifique:
	 - Hero Swiper e Carrossel de Produtos (setas e bolinhas de paginação funcionam).
	 - As imagens dos cards estão circulares e a caixa do produto foi reduzida conforme solicitado.
	 - Na seção "Sobre" e no rodapé, as ondas SVG aparecem e estão animadas (movimento vai-e-vem e bob).

Ajustes rápidos que você pode querer fazer

- Alterar a altura da onda do footer:
	- Edite `style.css`, localize a regra `.footer-onda` e ajuste `block-size` (ex.: `50vh`, `60vh`, `40vh`).

- Colocar a onda atrás do conteúdo (caso queira mudar):
	- Verifique `footer { z-index: 2; }` e `.footer-onda { z-index: 0; }` — ajuste conforme necessário.

- Alterar velocidade das animações das ondas:
	- Procure os `@keyframes` e troque a duração `25s` nas regras `.sobre-content .wave--*` e `.footer-onda .wave--*`.

- Inverter/rotacionar a onda do footer:
	- Adicione `transform: rotate(180deg);` em `.footer-onda svg` se desejar a forma invertida.

Dependências e CDN

- O projeto carrega o CSS/JS do Swiper via CDN (UMD). Se você quiser rodar 100% offline, baixe os arquivos do Swiper e referencie-os localmente em `index.html`.

Problemas comuns

- Slider não aparece ou scripts não funcionam: verifique se há conexão com a internet (CDN) ou rode via servidor local.
- CORS/ESM errors ao abrir via file://: sempre use um servidor local para evitar esses problemas.

Contato e próximos passos

Se quiser que eu faça mais alterações "1 por vez":
- Gerar builds locais (baixar dependências e referenciar localmente).
- Ajustar amplitude e duração das ondas individualmente.
- Reduzir/expandir ainda mais os cards do carrossel.


Arquivo alterado nesta sessão
- `style.css` (ajuste da `.footer-onda` para 50vh e z-index)

Obrigado — diga qual próximo passo você quer (1 por vez).
