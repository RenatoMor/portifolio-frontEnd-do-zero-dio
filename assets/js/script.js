
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.body;

        themeToggleBtn.addEventListener('click', function() {
            // Alterna o tema do corpo da página
            body.classList.toggle('dark-theme');
            body.classList.toggle('light-theme');
            
            // Verifica o tema atual e altera o ícone
            if (body.classList.contains('dark-theme')) {
                themeIcon.classList.remove('bi-moon-stars');
                themeIcon.classList.add('bi-brightness-high');
            } else {
                themeIcon.classList.remove('bi-brightness-high');
                themeIcon.classList.add('bi-moon-stars');
            }
        });
    });



//accordion

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        
        // Fecha todas as outras seções do acordeão
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion-body').style.display = 'none';
            }
        });

        // Alterna a seção clicada
        accordionItem.classList.toggle('active');
        const accordionBody = accordionItem.querySelector('.accordion-body');
        
        if (accordionItem.classList.contains('active')) {
            accordionBody.style.display = 'block';
        } else {
            accordionBody.style.display = 'none';
        }
    });
});
