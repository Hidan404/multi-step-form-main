let currentStep = 1;
const totalSteps = 5; // Total de passos que você possui

// Função para mostrar o passo atual
function showStep(step) {
    for (let i = 1; i <= totalSteps; i++) {
        const stepDiv = document.getElementById(`step-${i}`);
        stepDiv.style.display = (i === step) ? 'd-flex' : 'none';
    }
}

// Salvar dados e avançar para o próximo passo
function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

// Voltar ao passo anterior
function goBack() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Inicializa a exibição do primeiro passo
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);

    // Event listeners para botões
    document.getElementById('button-sub').addEventListener('click', (event) => {
        event.preventDefault(); // Impede o envio do formulário
        nextStep();
    });

    document.getElementById('btn-back').addEventListener('click', (event) => {
        event.preventDefault();
        goBack();
    });
});
