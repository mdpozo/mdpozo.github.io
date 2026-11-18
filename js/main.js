/**
 * ============================================================================
 * PORTFOLIO PERSONAL - MANU (devManuD)
 * JavaScript Vanilla (ES6+) - Rápido, modular y sin dependencias
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectFilters();
  initProjectModal();
  initEmailCopy();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
 * 1. NAVBAR MÓVIL Y NAVEGACIÓN SUAVE
 * -------------------------------------------------------------------------- */
function initNavbar() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Cerrar menú al pulsar cualquier enlace
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
 * 2. FILTRADO DE PROYECTOS POR CATEGORÍA
 * -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Manejar estado activo de los botones
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filtrar tarjetas
      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category')?.split(' ') || [];
        
        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
 * 3. MODAL DE DETALLE DE PROYECTO
 * -------------------------------------------------------------------------- */
const projectsData = {
  gremio: {
    title: 'Gremio / QuestFit',
    category: 'TypeScript · UI/UX · Frontend · Capacitor Android',
    image: 'assets/img/proyecto-gremio.svg',
    summary: 'Aplicación híbrida orientada al fitness que gamifica el esfuerzo físico transformando rutinas deportivas en misiones de rol (RPG), con Puntos de Experiencia (EXP), oro virtual y subidas de nivel.',
    uiDecisions: 'Diseño Dark Fantasy optimizado para paneles OLED, contraste alto, sistema de tokens en Obsidian y Parchment, componentes atómicos construidos sobre primitivas accesibles de Radix UI y retroalimentación háptica nativa.',
    architecture: 'Arquitectura desacoplada en React 19 + TypeScript con Vite. Context API para la centralización del estado de progresión, persistencia reactiva en almacenamiento local y empaquetado nativo para Android mediante Capacitor 8.',
    github: 'https://github.com/mdpozo/Gremio',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Capacitor 8', 'Radix UI', 'Dark Mode']
  },
  patinetes: {
    title: 'EcoScoot / Alquiler de Patinetes',
    category: 'Java · JavaFX · Arquitectura Modular (MVC + DAO)',
    image: 'assets/img/proyecto-patinetes.svg',
    summary: 'Plataforma desktop integral para la monitorización, telemetría y facturación de una flota urbana de patinetes eléctricos.',
    uiDecisions: 'Interfaz desktop profesional inspirada en dashboards de logística moderna. Tipografía técnica legible (JetBrains Mono), indicadores cromáticos de nivel de batería y tablas interactivas con estados de fila dinámicos.',
    architecture: 'Patrón Modelo-Vista-Controlador (MVC) estricto junto al patrón DAO (Data Access Object) para independizar el acceso a datos. Interfaz desacoplada con archivos FXML y hojas de estilo CSS modulares.',
    github: 'https://github.com/mdpozo/alquiler-patinetes-javafx',
    tags: ['Java 21', 'JavaFX', 'Patrón MVC', 'Patrón DAO', 'CSS para JavaFX', 'Desktop UI']
  },
  mercatoweb: {
    title: 'MercatoWeb',
    category: 'HTML5 · CSS3 · Diseño Responsive · WPO',
    image: 'assets/img/proyecto-mercatoweb.svg',
    summary: 'Catálogo de comercio electrónico moderno y adaptable a cualquier resolución, desarrollado con foco prioritario en rendimiento (WPO) y maquetación avanzada sin frameworks externos pesados.',
    uiDecisions: 'Maquetación basada en CSS Grid bidimensional y Flexbox para componentes atómicos. Microinteracciones de hover con elevaciones sutiles, estados de compra claros y jerarquía visual orientada a la tasa de conversión.',
    architecture: 'HTML5 100% semántico para un posicionamiento SEO técnico impecable. Variables CSS nativas para el sistema de diseño y JavaScript Vanilla para interactividad ágil sin tiempos de carga innecesarios.',
    github: 'https://github.com/mdpozo/MercatoWeb',
    tags: ['HTML5 Semántico', 'CSS Grid & Flexbox', 'Responsive Design', 'WPO & SEO', 'JS Vanilla']
  }
};

function initProjectModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.modal-close');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  if (!modalBackdrop || !closeBtn) return;

  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalImg = document.getElementById('modalImg');
  const modalSummary = document.getElementById('modalSummary');
  const modalUi = document.getElementById('modalUi');
  const modalArch = document.getElementById('modalArch');
  const modalGithub = document.getElementById('modalGithub');
  const modalTagsContainer = document.getElementById('modalTags');

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalSummary.textContent = data.summary;
    modalUi.textContent = data.uiDecisions;
    modalArch.textContent = data.architecture;
    modalGithub.href = data.github;

    // Renderizar tags
    modalTagsContainer.innerHTML = '';
    data.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag tag-accent';
      span.textContent = t;
      modalTagsContainer.appendChild(span);
    });

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic en el backdrop
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
 * 4. COPIAR EMAIL AL PORTAPAPELES CON TOAST
 * -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toast');
  const emailText = 'mdpozo04@gmail.com';

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailText);
      } else {
        // Fallback para navegadores antiguos
        const input = document.createElement('input');
        input.value = emailText;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }

      showToast('¡Email copiado al portapapeles!');
    } catch (err) {
      showToast('mdpozo04@gmail.com');
    }
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* --------------------------------------------------------------------------
 * 5. SCROLL SPY (INDICADOR DE SECCIÓN ACTIVA EN NAVBAR)
 * -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}
