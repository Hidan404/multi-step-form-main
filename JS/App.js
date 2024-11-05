$(document).ready(function() {
    let currentStep = 1;
    const totalSteps = 5;

    function showStep(step) {
        $('.step').removeClass('active');
        $(`#step-${step}`).addClass('active');
    }

    function updateReview() {
        $('#review').text(`Name: ${$('#name').val()}, Email: ${$('#email').val()}, Address: ${$('#address').val()}, City: ${$('#city').val()}, Preference: ${$('#preferences').val()}`);
    }

    // Next buttons
    $('.next-1').click(function() {
        showStep(++currentStep);
    });

    $('.next-2').click(function() {
        showStep(++currentStep);
    });

    $('.next-3').click(function() {
        updateReview();
        showStep(++currentStep);
    });

    // Back buttons
    $('.back-1').click(function() {
        showStep(--currentStep);
    });

    $('.back-2').click(function() {
        showStep(--currentStep);
    });

    $('.back-3').click(function() {
        showStep(--currentStep);
    });

    // Submit button
    $('#submit').click(function() {
        showStep(++currentStep);
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        alert('Form submitted!'); // Simulação de envio
    });
});