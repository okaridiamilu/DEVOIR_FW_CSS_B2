
// Met à jour automatiquement l'année dans le copyright (pour le fun)
document.getElementById('currentYear').textContent = new Date().getFullYear();

// J'aurais pu utiliser Bootstrap JS pour gérer le menu burger
// Gère l'ouverture/fermeture du menu burger sur mobile
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
    // Toggle la classe 'show' pour afficher/masquer le menu
    navbarCollapse.classList.toggle('show');
});

// Quand on clique sur un lien d'ancre (#), défile en douceur vers la section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        
        // Récupère l'élément cible à partir du href (#about, #projects, etc.)
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Défile vers l'élément avec animation fluide
            target.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'       // Aligne le haut de l'élément avec le haut de la fenêtre
            });
            
            // ===== FERMETURE AUTOMATIQUE DU MENU MOBILE =====
            // Si le menu hamburger est ouvert (sur mobile), le ferme après le clic
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Intercepte la soumission du formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // Récupère les valeurs des champs du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Affiche pour debug
    console.log('Formulaire soumis:', formData);
    
    // Message de confirmation
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    
    // Réinitialise le formulaire (vide les champs)
    this.reset();
});