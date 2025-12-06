document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        'es': {
            'page_title': 'LessEnergy - Ahorra Energía',
            // HEADER
            'logo': 'LessEnergy',
            'nav_inicio': 'Inicio',
            'nav_funciona': 'Como Funciona',
            'nav_planes': 'Planes',
            'nav_nosotros': 'Nosotros',
            'nav_unete': 'Únete!',
            // ... (Resto de las traducciones) ...
            'hero_title_p1': 'Ahorra',
            'hero_title_p2': 'Energía',
            'hero_title_p3': 'Dinero',
            'hero_title_p4': 'Inteligencia Artificial',
            'hero_desc': 'Cuida tu consumo energético, detecta y corrige fallos en las facturas con nosotros.',
            'hero_btn': 'Quiero intentar',
            'stat_ahorro': 'Ahorro Promedio',
            'stat_monitoreo': 'Monitoreo',
            'stat_recs': 'Recomendaciones',
            'card_ahorro': 'Ahorro: S/120/mes',
            'chart_title': 'Consumo semanal',
            'card_consumo': 'Consumo: -25%',
            'feat1_title': 'Ahorra más',
            'feat1_desc': 'Te ayudamos a estabilizar tu consumo de energía para que puedas encontrar errores en tu factura de luz',
            'feat2_title': 'Inteligencia artificial',
            'feat2_desc': 'Brindamos recomendaciones personalizadas generadas por IA para que puedas reducir eficientemente tu gasto energético',
            'feat3_title': 'Fácil de usar',
            'feat3_desc': 'Usamos interfaces intuitivas, que se adaptan a todo tipo de edades y niveles tecnológicos.',
            'how_title': '¿Cómo Funciona LessEnergy?',
            'how_subtitle': 'En solo 3 pasos simples, estarás ahorrando energía y dinero en tu hogar',
            'step1_box': 'Entra a nuestra web y Regístrate',
            'step1_h3': 'Registro',
            'step1_p': 'Regístrate en LessEnergy creando tu cuenta y así podrás iniciar sesión y guardar tu progreso.',
            'step2_box': 'Conecta los Sensores IoT',
            'step2_h3': 'Configuración',
            'step2_p': 'Instala nuestros sensores IoT en tus electrodomésticos principales. Son fáciles de conectar y no requieren conocimientos técnicos.',
            'step3_box': 'Monitorea y Ahorra',
            'step3_h3': 'Optmización',
            'step3_p': 'Recibe recomendaciones personalizadas de nuestra IA y comienza a ver el ahorro en tu próxima factura eléctrica.',
            'plans_title': 'Planes Diseñados Para Ti',
            'plans_subtitle': 'Elige el plan que mejor se adapte a tu hogar y comienza a ahorrar desde el primer día',
            'plan_badge': 'Más Popular',
            'plan1_title': 'Básico',
            'plan1_desc': 'Perfecto para apartamentos pequeños',
            'plan1_price': 'Gratis',
            'plan1_feat1': 'Hasta 5 sensores IoT',
            'plan1_feat2': 'Monitoreo básico 24/7',
            'plan1_feat3': 'Alertas por email',
            'plan1_feat4': 'Reportes mensuales',
            'plan1_feat5': 'Soporte por chat',
            'plan_btn': 'Comenzar Ahora',
            'plan2_title': 'Profesional',
            'plan2_desc': 'Ideal para casas familiares',
            'plan2_unit': 'mensual',
            'plan2_feat1': 'Hasta 15 sensores IoT',
            'plan2_feat2': 'Monitoreo avanzado 24/7',
            'plan2_feat3': 'IA con recomendaciones personalizadas',
            'plan2_feat4': 'Alertas push y email',
            'plan2_feat5': 'Reportes semanales y mensuales',
            'plan2_feat6': 'Análisis de facturas',
            'plan2_feat7': 'Soporte prioritario',
            'plan3_title': 'Empresarial',
            'plan3_desc': 'Para oficinas y comercios',
            'plan3_unit': 'mensual',
            'plan3_feat1': 'Sensores IoT ilimitados',
            'plan3_feat2': 'Dashboard empresarial',
            'plan3_feat3': 'IA avanzada con ML',
            'plan3_feat4': 'API personalizada',
            'plan3_feat5': 'Reportes personalizados',
            'plan3_feat6': 'Gestión multi-ubicación',
            'plan3_feat7': 'Soporte 24/7 dedicado',
            'legal1': 'Garantía de 30 días',
            'legal2': 'Sin tarjeta de crédito',
            'legal3': 'Cancela cuando quieras',
            'join_title': 'Únete a nosotros',
            'join_subtitle_p1': 'Crea una cuenta y comienza a',
            'join_subtitle_p2': 'ahorrar',
            'form_nombre': 'Nombre:',
            'form_apellido': 'Apellido:',
            'form_email': 'E-mail:',
            'form_tel': 'Teléfono:',
            'form_pass': 'Contraseña:',
            'form_conf_pass': 'Confirmar contraseña:',
            'form_btn': 'Unirme',
            'form_privacy_legal': 'Acepto la Política de Privacidad y los Términos de Servicio.',
            'form_privacy_note': 'Nota Importante: Tus datos de consumo solo se usarán para ofrecerte recomendaciones personalizadas y con fines de análisis educativo.',
            'nav_unete': 'Únete!',
            'nav_login': 'Iniciar Sesión',
            'nav_register': 'Crear Cuenta',
            'login_title': 'Iniciar Sesión',
            'login_btn': 'Ingresar',
        },
        'en': {
            'page_title': 'LessEnergy - Save Energy',
            'logo': 'LessEnergy',
            'nav_inicio': 'Home',
            'nav_funciona': 'How It Works',
            'nav_planes': 'Plans',
            'nav_nosotros': 'About Us',
            'nav_unete': 'Join!',
            'hero_title_p1': 'Save',
            'hero_title_p2': 'Energy',
            'hero_title_p3': 'Money',
            'hero_title_p4': 'Artificial Intelligence',
            'hero_desc': 'Monitor your energy usage, detect and correct billing errors with us.',
            'hero_btn': 'I want to try',
            'stat_ahorro': 'Average Savings',
            'stat_monitoreo': 'Monitoring',
            'stat_recs': 'Recommendations',
            'card_ahorro': 'Savings: S/120/month',
            'chart_title': 'Weekly Consumption',
            'card_consumo': 'Consumption: -25%',
            'feat1_title': 'Save More',
            'feat1_desc': 'We help stabilize your energy consumption so you can find errors in your electricity bill',
            'feat2_title': 'Artificial Intelligence',
            'feat2_desc': 'We provide personalized recommendations generated by AI to efficiently reduce your energy expenditure',
            'feat3_title': 'Easy to Use',
            'feat3_desc': 'We use intuitive interfaces that adapt to all ages and tech levels.',
            'how_title': 'How Does LessEnergy Work?',
            'how_subtitle': 'In just 3 simple steps, you will be saving energy and money at home',
            'step1_box': 'Visit our site and Register',
            'step1_h3': 'Registration',
            'step1_p': 'Register with LessEnergy by creating your account to log in and save your progress.',
            'step2_box': 'Connect IoT Sensors',
            'step2_h3': 'Configuration',
            'step2_p': 'Install our IoT sensors on your main appliances. They are easy to connect and require no technical knowledge.',
            'step3_box': 'Monitor and Save',
            'step3_h3': 'Optimization',
            'step3_p': 'Receive personalized recommendations from our AI and start seeing savings on your next electricity bill.',
            'plans_title': 'Plans Designed For You',
            'plans_subtitle': 'Choose the plan that best suits your home and start saving from day one',
            'plan_badge': 'Most Popular',
            'plan1_title': 'Basic',
            'plan1_desc': 'Perfect for small apartments',
            'plan1_price': 'Free',
            'plan1_feat1': 'Up to 5 IoT sensors',
            'plan1_feat2': 'Basic 24/7 monitoring',
            'plan1_feat3': 'Email alerts',
            'plan1_feat4': 'Monthly reports',
            'plan1_feat5': 'Chat support',
            'plan_btn': 'Start Now',
            'plan2_title': 'Professional',
            'plan2_desc': 'Ideal for family homes',
            'plan2_unit': 'monthly',
            'plan2_feat1': 'Up to 15 IoT sensors',
            'plan2_feat2': 'Advanced 24/7 monitoring',
            'plan2_feat3': 'AI with personalized recommendations',
            'plan2_feat4': 'Push and email alerts',
            'plan2_feat5': 'Weekly and monthly reports',
            'plan2_feat6': 'Bill analysis',
            'plan2_feat7': 'Priority support',
            'plan3_title': 'Business',
            'plan3_desc': 'For offices and commerce',
            'plan3_unit': 'monthly',
            'plan3_feat1': 'Unlimited IoT sensors',
            'plan3_feat2': 'Business dashboard',
            'plan3_feat3': 'Advanced AI with ML',
            'plan3_feat4': 'Custom API',
            'plan3_feat5': 'Custom reports',
            'plan3_feat6': 'Multi-location management',
            'plan3_feat7': 'Dedicated 24/7 support',
            'legal1': '30-day Guarantee',
            'legal2': 'No Credit Card Required',
            'legal3': 'Cancel Anytime',
            'join_title': 'Join Us',
            'join_subtitle_p1': 'Create an account and start',
            'join_subtitle_p2': 'saving',
            'form_nombre': 'First Name:',
            'form_apellido': 'Last Name:',
            'form_email': 'E-mail:',
            'form_tel': 'Phone:',
            'form_pass': 'Password:',
            'form_conf_pass': 'Confirm Password:',
            'form_btn': 'Join',
            'form_privacy_legal': 'I accept the Privacy Policy and Terms of Service.',
            'form_privacy_note': 'Important Note: Your consumption data will only be used to offer personalized recommendations and for educational analysis purposes.',
            'nav_unete': 'Join!',
            'nav_login': 'Log In',
            'nav_register': 'Create Account',
            'login_title': 'Log In',
            'login_btn': 'Enter',
        }
    };

    // Función principal para cambiar el idioma
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        const dictionary = translations[lang];

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[key]) {
                el.textContent = dictionary[key];
            }
        });
        
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            pageTitle.textContent = translations[lang].page_title;
        }

        const langToggle = document.getElementById('langToggle');
        if(langToggle) {
            langToggle.innerHTML = lang.toUpperCase() + ' ' + '<i class="fa-solid fa-chevron-down"></i>';
        }

        localStorage.setItem('lang', lang); 
    }

    // Inicializar idioma al cargar (o usa la preferencia guardada)
    const initialLang = localStorage.getItem('lang') || 'es';
    setLanguage(initialLang);


    const chartData = [
        { day: 'L', value: 13.2 },
        { day: 'M', value: 5.5 },
        { day: 'M', value: 2.1 }, 
        { day: 'J', value: 9.3 },
        { day: 'V', value: 4.9 },
        { day: 'S', value: 10.5 },
        { day: 'D', value: 15.6 }
    ];

    const chartContainer = document.querySelector('.bar-chart');
    const maxValue = Math.max(...chartData.map(item => item.value));
    const maxBarHeight = 180; 

    if (chartContainer) {
        chartContainer.innerHTML = '';

        chartData.forEach(item => {
            const barHeight = (item.value / maxValue) * maxBarHeight;
            const chartItem = document.createElement('div');
            chartItem.className = 'chart-item';

            chartItem.innerHTML = `
                <span class="day">${item.day}</span>
                <div class="bar" style="height: ${barHeight}px;"></div>
                <span class="value">${item.value}</span>
            `;

            chartContainer.appendChild(chartItem);
        });
    }

    // Función que maneja el toggle (reutilizable)
    function setupPasswordToggle(inputId, toggleId) {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(toggleId);

        if (passwordInput && toggleIcon) {
            toggleIcon.addEventListener('click', function () {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                this.classList.toggle('fa-eye-slash');
                this.classList.toggle('fa-eye');
            });
        }
    }

    // Aplica la función a ambos campos de contraseña
    setupPasswordToggle('confirm-password', 'togglePassword');
    setupPasswordToggle('password', 'togglePasswordMain');


    const langToggle = document.getElementById('langToggle');
    const langOptions = document.getElementById('langOptions');

    if (langToggle && langOptions) {
        langToggle.addEventListener('click', function (e) {
            e.preventDefault(); 
            langOptions.classList.toggle('show');
            e.stopPropagation();
        });

        // Cerrar el menú si se hace clic fuera
        document.addEventListener('click', function (e) {
            if (!langToggle.contains(e.target) && !langOptions.contains(e.target)) {
                langOptions.classList.remove('show');
            }
        });
        
        // Manejar la selección de idioma (ENG/ESP)
        langOptions.querySelectorAll('a').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const newLang = this.getAttribute('data-lang'); 
                
                setLanguage(newLang);
                
                langOptions.classList.remove('show');
            });
        });
    }

    // --- LÓGICA DE LOGIN/REGISTRO POP-UP (US07, US42) ---
    const joinSection = document.getElementById('nosotros'); 
    const mainContent = document.querySelector('main');     
    const appPanel = document.getElementById('app-panel');   
    
    const accountToggle = document.getElementById('accountToggle');
    const accountOptions = document.getElementById('accountOptions');
    const loginModal = document.getElementById('login-modal');
    const closeLoginBtn = loginModal ? loginModal.querySelector('.close-btn') : null;
    const loginForm = loginModal ? loginModal.querySelector('.login-form') : null;

    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');

    function scrollToRegister() {
        if(appPanel && mainContent.style.display === 'none') {
            mainContent.style.display = 'block';
            appPanel.style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (joinSection) {
            joinSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (accountToggle && accountOptions) {
        accountToggle.addEventListener('click', function(e) {
            e.preventDefault(); 
            accountOptions.classList.toggle('show'); 
            e.stopPropagation(); 
        });
        
        if (registerLink) {
            registerLink.addEventListener('click', function(e) {
                e.preventDefault();
                accountOptions.classList.remove('show');
                scrollToRegister(); 
            });
        }

        if (loginLink) {
            loginLink.addEventListener('click', function(e) {
                e.preventDefault();
                accountOptions.classList.remove('show');
                
                if (loginModal) {
                    loginModal.style.display = 'flex';
                }
            });
        }
        
        document.addEventListener('click', function(e) {
            if (!accountToggle.contains(e.target) && !accountOptions.contains(e.target)) {
                accountOptions.classList.remove('show');
            }
        });
    }

    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        loginModal.style.display = 'none';
        alert("¡Inicio de Sesión Exitoso! Redirigiendo a la aplicación.");

        window.location.href = 'app_panel.html';
    });
    }

    const joinForm = document.querySelector('.join-form'); 

    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const privacyChecked = document.getElementById('privacy').checked;
            
            if (!privacyChecked) {
                alert("Debe aceptar la Política de Privacidad y Términos de Servicio para continuar.");
                return;
            }

            alert("¡Registro Exitoso! Redirigiendo a la aplicación.");

            window.location.href = 'app_panel.html';
        });
    }

    function scrollToRegister() {
        const joinSection = document.getElementById('nosotros'); 
        if (joinSection) {
            joinSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // ====================================
    // NAVEGACIÓN DEL DASHBOARD (SOLUCIÓN FINAL)
    // ====================================

    // 1. Seleccionar todos los enlaces de navegación con la clase 'nav-link'
    const navLinks = document.querySelectorAll('.sidebar .main-nav .nav-link');

    // 2. Seleccionar TODOS los contenedores de contenido principales por ID
    const contentPages = document.querySelectorAll(
    '#page-dashboard, #page-dispositivos, #page-consumo, #page-alertas, #page-automatizacion, #page-reportes, #page-recomendaciones, #page-asistente, #page-parental, #page-privacidad, #page-configuracion'
    ); 

    function showPage(targetId) {
        // 1. Ocultar todas las páginas
        contentPages.forEach(page => {
            page.classList.add('hidden-page');
        });

        // 2. Mostrar la página objetivo
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.remove('hidden-page');
        }
    }

    function handleNavigation(e) {
        const clickedLink = e.currentTarget; 
        const targetId = clickedLink.getAttribute('data-page');

        if (targetId) {
            e.preventDefault(); 
            
            // 1. Actualizar el estado activo en el menú (CSS)
            navLinks.forEach(link => link.classList.remove('active'));
            clickedLink.classList.add('active');

            // 2. Mostrar la página (JS)
            showPage(targetId);
        }
    }

    // 3. Asignar el Event Listener a cada enlace de la barra lateral
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // 4. Inicialización: Muestra el Dashboard al cargar.
    showPage('page-dashboard');

    // ====================================
    // LÓGICA DE INTERACCIÓN DEL CHAT ASISTENTE IA
    // ====================================

    // Variables del Chat
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatArea = document.getElementById('chat-area');
    const suggestionTags = document.querySelectorAll('.suggestion-tag');

    // Función para enviar y simular respuesta
    function sendMessage(message) {
        if (message.trim() === "") return;

        // 1. Añadir el mensaje del usuario
        const userMessageHtml = `
            <div class="chat-message user-message">
                <div class="message-bubble">${message}</div>
            </div>
        `;
        chatArea.insertAdjacentHTML('beforeend', userMessageHtml);
        
        // Limpiar el input
        chatInput.value = '';
        
        // Hacer scroll al final
        chatArea.scrollTop = chatArea.scrollHeight;

        // 2. Simular respuesta del Asistente IA (después de un pequeño retraso)
        setTimeout(() => {
            const aiResponseHtml = getAiResponseHtml(message);
            
            chatArea.insertAdjacentHTML('beforeend', aiResponseHtml);
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 800); // Retraso de 0.8 segundos
    }

    // Función para generar la respuesta simulada
    function getAiResponseHtml(userMessage) {
        // Normaliza el mensaje para la búsqueda
        const lowerMessage = userMessage.toLowerCase();
        let responseText = "Gracias por tu pregunta. En este momento, estoy aprendiendo sobre ese tema. ¡Pero siempre puedo ayudarte con tu consumo y dispositivos!";
        
        // Respuestas predefinidas
        if (lowerMessage.includes("apagado automático") || lowerMessage.includes("automatización")) {
            responseText = "El apagado automático se programa en la sección **Automatización**. Haz clic en 'Nueva Programación', selecciona el dispositivo y establece la hora de apagado, como las 23:00 hrs.";
        } else if (lowerMessage.includes("lavar ropa") || lowerMessage.includes("horarios")) {
            responseText = "Para ahorrar, te recomiendo usar la lavadora después de las **22:00 hrs** o durante la mañana temprano (antes de las 8:00 hrs), cuando la demanda energética es menor y las tarifas son más bajas.";
        } else if (lowerMessage.includes("consume más") || lowerMessage.includes("dispositivo")) {
            responseText = "Según tus reportes recientes, el dispositivo que más consume es el **Aire Acondicionado** (2.8 kW en uso), seguido del **Horno Eléctrico** (2.2 kW). ¡Revisa las recomendaciones para ellos!";
        } else if (lowerMessage.includes("temperatura") || lowerMessage.includes("aire")) {
            responseText = "La temperatura óptima recomendada para tu hogar es de 24°C a 25°C. Ajustar el termostato a esta franja maximizará tu confort sin disparar el consumo.";
        }
        
        return `
            <div class="chat-message ai-message">
                <div class="ai-avatar-icon"><i class="fas fa-robot"></i></div>
                <div class="message-bubble">
                    ${responseText}
                </div>
            </div>
        `;
    }

    // Eventos para enviar (Botón y Enter)
    if (sendBtn) {
        sendBtn.addEventListener('click', () => sendMessage(chatInput.value));
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage(chatInput.value);
            }
        });
    }

    // Eventos para las sugerencias (Quick Questions)
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            sendMessage(question);
        });
    });
    
    // Inicialización del scroll (Asegurar que el chat esté abajo al inicio)
    if (chatArea) {
        chatArea.scrollTop = chatArea.scrollHeight;
    }
});