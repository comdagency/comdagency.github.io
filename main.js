$(document).ready(() => {
    $(window).on('scroll', () => {
        const sectionHeight = $(window).height() * 0.1;
        const canvasHeight = $('#home').height() + sectionHeight;
        const eventsHeight = $('#canvas').height() + canvasHeight + sectionHeight;
        const agencyHeight = $('#agencyVisits').height() + eventsHeight + sectionHeight + sectionHeight;
        const aboutHeight = $('#about').height() + agencyHeight + sectionHeight + sectionHeight;
        
        
        //defining hide and show for each scroll section
        
        if ($(window).scrollTop() > canvasHeight && $(window).scrollTop() < agencyHeight - 100) {
            $('#bottomCanvas').addClass('fixed');
        }
        else {
            $('#bottomCanvas').removeClass('fixed');
        }
        
        if ($(window).scrollTop() > eventsHeight && $(window).scrollTop() < agencyHeight) {
            $('#bottomEvents').fadeIn(100);
            $('#bottomEvents').addClass('fixed');
        }
        else {
            $('#bottomEvents').fadeOut(100);
            $('#bottomEvents').removeClass('fixed');
        }
        
        if ($(window).scrollTop() > agencyHeight && $(window).scrollTop() < aboutHeight) {
            $('#bottomAgency').fadeIn(100);
            $('#bottomAgency').addClass('fixed');
        }
        else {
            $('#bottomAgency').fadeOut(100);
            $('#bottomAgency').removeClass('fixed');
        }
        
        if ($(window).scrollTop() > aboutHeight) {
            $('#bottomAbout').fadeIn(100);
            $('#bottomAbout').addClass('fixed');
        }
        else {
            $('#bottomAbout').fadeOut(100);
            $('#bottomAbout').removeClass('fixed');
        }
        
    });
})