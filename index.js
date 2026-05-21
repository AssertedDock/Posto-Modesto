        document.addEventListener('DOMContentLoaded', () => {
            // Atualização de ano no rodapé institucional
            const yearDisplay = document.getElementById('current-year');
            if (yearDisplay) {
                yearDisplay.textContent = new Date().getFullYear();
            }

            // Sistema de Menu Responsivo
            const menuTrigger = document.getElementById('menu-trigger');
            const menuList = document.getElementById('menu-list');

            if (menuTrigger && menuList) {
                menuTrigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    menuList.classList.toggle('open');
                    menuTrigger.textContent = menuList.classList.contains('open') ? '✕' : '☰';
                });

                // Fecha o menu clicando fora ou nos links
                document.addEventListener('click', () => {
                    menuList.classList.remove('open');
                    menuTrigger.textContent = '☰';
                });

                menuList.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        menuList.classList.remove('open');
                        menuTrigger.textContent = '☰';
                    });
                });
            }

            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const nome = document.getElementById('nome').value.trim();
                    const contato = document.getElementById('email').value.trim();
                    const mensagem = document.getElementById('mensagem').value.trim();

                    if (!nome || !contato || !mensagem) {
                        alert('Preencha todos os campos antes de enviar.');
                        return;
                    }

                    alert(`Pergunta enviada! Obrigado, ${nome}. Em breve responderemos pelo WhatsApp.`);
                    contactForm.reset();
                });
            }
        });