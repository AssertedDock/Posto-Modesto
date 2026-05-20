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
        });