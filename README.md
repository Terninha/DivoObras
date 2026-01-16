# 🏗️ Divo Obras - Landing Page

Landing page profissional para empresa de construção e reformas residenciais com mais de 30 anos de experiência no mercado.

## 📋 Sobre o Projeto

Site institucional desenvolvido com design minimalista e vibrante, focado em conversão e experiência do usuário. Totalmente responsivo e otimizado para dispositivos móveis.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework de estilização via CDN
- **JavaScript Vanilla** - Funcionalidades e interações
- **Font Awesome 6.4.0** - Ícones

## ✨ Características

- 🎨 Design minimalista com paleta azul profissional
- 📱 Totalmente responsivo (mobile-first)
- 💬 Integração direta com WhatsApp
- 📸 Galeria de projetos com modal
- 📝 Formulário de contato com validação
- ⚡ Animações suaves e efeitos glass morphism
- 🔗 Links para redes sociais (Instagram)
- ♿ Acessibilidade (WCAG AA)

## 📦 Estrutura do Projeto

```
landing-page/
├── index.html          # Página principal
├── css/
│   └── styles.css     # Estilos customizados
├── js/
│   ├── main.js        # Lógica principal
│   └── config.js      # Configurações
└── images/            # Assets (logo, projetos, processo)
```

## 🎯 Seções

- **Hero** - Apresentação com logo e call-to-action
- **Sobre** - Valores e diferenciais da empresa
- **Serviços** - Lista completa de serviços oferecidos
- **Portfólio** - Galeria de projetos realizados
- **Processo** - Fotos do trabalho em andamento
- **Contato** - Formulário e informações de contato

## 🌐 Como Usar

1. Clone o repositório:
```bash
git clone [seu-repositorio]
```

2. Abra o arquivo `index.html` diretamente no navegador ou utilize um servidor local:
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

3. Acesse `http://localhost:8000`

## ⚙️ Configuração

Edite o arquivo `js/config.js` para personalizar as informações de contato:

```javascript
const CONFIG = {
    whatsapp: {
        number: '5542988153287',
        link: 'https://wa.me/5542988153287'
    },
    contact: {
        phone: '(42) 98815-3287',
        email: 'divoobras@gmail.com',
        location: 'Ponta Grossa, PR'
    }
};
```

## 📱 Contato

- **WhatsApp:** (42) 98815-3287
- **Email:** divoobras@gmail.com
- **Instagram:** [@divo.obras](https://www.instagram.com/divo.obras/)

## 📄 Licença

Este projeto foi desenvolvido para uso comercial da empresa Divo Obras.

---

**Desenvolvido com ❤️ para transformar sonhos em realidade**
