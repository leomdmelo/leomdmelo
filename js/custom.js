(function ($) {

  "use strict";

    // COLOR MODE
    function updateLightText() {
        const isDarkMode = $('body').hasClass('dark-mode');
        const text = isDarkMode ? 'Luz: desligado' : 'Luz: ligado';
        console.log('Atualizando texto:', text, 'isDarkMode:', isDarkMode);
        $('#light-mode-text').text(text);
    }

    // Restaurar preferência de modo escuro
    if (localStorage.getItem('darkMode') === 'true') {
        $('.color-mode-icon').addClass('active');
        $('body').addClass('dark-mode');
    }
    
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
        
        // Salvar preferência no localStorage
        const isDarkMode = $('body').hasClass('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        
        // Atualizar texto
        updateLightText();
    });
    
    // Inicializar texto quando o DOM estiver pronto
    $(document).ready(function() {
        updateLightText();
    });

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true,
        autoplay: false,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            }
        }
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        const target = $anchor.attr('href');
        
        // Verifica se é um link interno
        if (target && target.startsWith('#')) {
            const targetElement = $(target);
            if (targetElement.length) {
                $('html, body').stop().animate({
                    scrollTop: targetElement.offset().top - 49
                }, 1000, 'swing');
                event.preventDefault();
                
                // Fechar menu mobile após click
                $('.navbar-collapse').collapse('hide');
            }
        }
      });
    });  

    // TOOLTIP - Bootstrap 5
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // LAZY LOADING para imagens
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    }

    // Botão voltar ao topo
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('#scrollToTop').addClass('show');
        } else {
            $('#scrollToTop').removeClass('show');
        }
    });

    $('#scrollToTop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });

})(jQuery);
