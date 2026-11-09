/**
 * VALKA ESTUDIO - Application Controller & Router
 * Arquitectura que transforma. Espacios que cuidan.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Application
  ValkaApp.init();
});

const ValkaApp = {
  currentView: 'home',
  activeServiceId: 'comercial',
  activeProjectFilter: 'all',

  init() {
    this.cacheDOM();
    this.bindEvents();
    this.initRouter();
    this.renderProjectsGrid();
    this.renderBlogGrid();
    this.initHeroVideoSlider();
  },

  cacheDOM() {
    // Hero Video Background 2-Layer Crossfade System
    this.heroVidA = document.getElementById('hero-vid-a');
    this.heroVidB = document.getElementById('hero-vid-b');
    this.heroVideoSources = [
      'https://5xny1a6zhnuiyth5.public.blob.vercel-storage.com/V01.mp4',
      'https://5xny1a6zhnuiyth5.public.blob.vercel-storage.com/V02.mp4',
      'https://5xny1a6zhnuiyth5.public.blob.vercel-storage.com/V03.mp4',
      'https://5xny1a6zhnuiyth5.public.blob.vercel-storage.com/V04.mp4'
    ];
    this.currentHeroVideoIndex = 0;
    this.activeHeroLayer = 'A';
    this.heroVideoInterval = null;

    // Nav & Menu
    this.subpageHeader = document.getElementById('subpage-header');
    this.menuToggleBtns = document.querySelectorAll('.menu-toggle-btn');
    this.menuOverlay = document.getElementById('menu-overlay');
    this.menuCloseBtn = document.getElementById('menu-close-btn');
    this.menuLinks = document.querySelectorAll('.menu-link-item a');
    
    // Views
    this.views = {
      home: document.getElementById('view-home'),
      servicios: document.getElementById('view-servicios'),
      proyectos: document.getElementById('view-proyectos'),
      enfoque: document.getElementById('view-enfoque'),
      'sobre-nosotros': document.getElementById('view-sobre-nosotros'),
      contacto: document.getElementById('view-contacto'),
      blog: document.getElementById('view-blog')
    };

    // Services Subpage
    this.serviceTabs = document.querySelectorAll('.service-tab-btn');
    this.serviceTitle = document.getElementById('service-detail-title');
    this.serviceDesc = document.getElementById('service-detail-desc');
    this.serviceBenefits = document.getElementById('service-detail-benefits');
    this.serviceImage = document.getElementById('service-detail-image');
    this.serviceBreadcrumb = document.getElementById('service-breadcrumb-current');
    this.serviceFeaturedProjectsGrid = document.getElementById('service-featured-projects');

    // Projects Subpage
    this.filterBtns = document.querySelectorAll('.filter-tab-btn');
    this.projectsGrid = document.getElementById('projects-main-grid');

    // Modal
    this.projectModal = document.getElementById('project-modal');
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.modalContent = document.getElementById('modal-dynamic-content');

    // Contact Form
    this.contactForm = document.getElementById('contact-main-form');
    this.toastContainer = document.getElementById('toast-container');
  },

  bindEvents() {
    // Menu Overlay Toggle (funciona con cualquier botón .menu-toggle-btn)
    if (this.menuToggleBtns) {
      this.menuToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => this.openMenu());
      });
    }
    if (this.menuCloseBtn) {
      this.menuCloseBtn.addEventListener('click', () => this.closeMenu());
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMenu();
        this.closeModal();
      }
    });

    // Menu Links Navigation
    this.menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          this.closeMenu();
        }
      });
    });

    // Hash change routing
    window.addEventListener('hashchange', () => this.handleRouting());

    // Project Filters
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        this.setProjectFilter(filter);
      });
    });

    // Service Switcher Tabs
    this.serviceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const srvId = tab.getAttribute('data-service');
        this.loadServiceDetail(srvId);
      });
    });

    // Modal Close
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    }
    if (this.projectModal) {
      this.projectModal.addEventListener('click', (e) => {
        if (e.target === this.projectModal) this.closeModal();
      });
    }

    // Contact Form Submit
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
    }
  },

  // ------------------------------------------------------------------------
  // ROUTER
  // ------------------------------------------------------------------------
  initRouter() {
    const hash = window.location.hash.replace('#', '') || 'home';
    this.navigate(hash);
  },

  handleRouting() {
    const rawHash = window.location.hash.replace('#', '') || 'home';
    const [route, params] = rawHash.split('?');
    this.navigate(route, params);
  },

  navigate(viewName, params = '') {
    const validViews = ['home', 'servicios', 'proyectos', 'enfoque', 'sobre-nosotros', 'contacto', 'blog'];
    const target = validViews.includes(viewName) ? viewName : 'home';
    this.currentView = target;

    // Switch visible view
    Object.keys(this.views).forEach(key => {
      if (this.views[key]) {
        if (key === target) {
          this.views[key].classList.add('active-view');
        } else {
          this.views[key].classList.remove('active-view');
        }
      }
    });

    // Update active nav links
    document.querySelectorAll('.header-nav-link, .menu-link-item a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${target}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Handle deep params
    if (params) {
      const urlParams = new URLSearchParams(params);
      if (target === 'servicios' && urlParams.has('id')) {
        this.loadServiceDetail(urlParams.get('id'));
      }
      if (target === 'proyectos' && urlParams.has('id')) {
        const proj = VALKA_DATA.projects.find(p => p.id === urlParams.get('id'));
        if (proj) this.openProjectModal(proj);
      }
    } else if (target === 'servicios') {
      this.loadServiceDetail(this.activeServiceId);
    }

    // Subpage Header handling (hidden on home hero, visible on subpages)
    if (this.subpageHeader) {
      this.subpageHeader.style.display = (target === 'home') ? 'none' : 'block';
    }

    // Hero video playback handling on view change
    if (target === 'home') {
      this.startHeroVideoTimer();
      const activeVid = this.activeHeroLayer === 'A' ? this.heroVidA : this.heroVidB;
      if (activeVid) activeVid.play().catch(() => {});
    } else {
      this.stopHeroVideoTimer();
      if (this.heroVidA) this.heroVidA.pause();
      if (this.heroVidB) this.heroVidB.pause();
    }

    // Scroll instant to top
    window.scrollTo(0, 0);
  },

  // ------------------------------------------------------------------------
  // HERO VIDEO SLIDER (2-Layer Seamless Crossfade, 1 by 1)
  // ------------------------------------------------------------------------
  initHeroVideoSlider() {
    if (!this.heroVidA || !this.heroVidB) return;

    this.heroVidA.muted = true;
    this.heroVidB.muted = true;
    this.heroVidA.src = this.heroVideoSources[0];
    this.heroVidA.play().catch(() => {});

    // Preload next video in background buffer
    this.heroVidB.src = this.heroVideoSources[1];

    this.startHeroVideoTimer();

    // Pause playback when tab is in background to save resources
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopHeroVideoTimer();
        if (this.heroVidA) this.heroVidA.pause();
        if (this.heroVidB) this.heroVidB.pause();
      } else {
        if (this.currentView === 'home') {
          const activeVid = this.activeHeroLayer === 'A' ? this.heroVidA : this.heroVidB;
          if (activeVid) activeVid.play().catch(() => {});
          this.startHeroVideoTimer();
        }
      }
    });
  },

  startHeroVideoTimer() {
    this.stopHeroVideoTimer();
    this.heroVideoInterval = setInterval(() => {
      if (this.currentView === 'home') {
        this.nextHeroVideo();
      }
    }, 5000); // 5 segundos exactos por video
  },

  stopHeroVideoTimer() {
    if (this.heroVideoInterval) {
      clearInterval(this.heroVideoInterval);
      this.heroVideoInterval = null;
    }
  },

  nextHeroVideo() {
    if (!this.heroVidA || !this.heroVidB) return;

    const nextIndex = (this.currentHeroVideoIndex + 1) % this.heroVideoSources.length;
    const nextSrc = this.heroVideoSources[nextIndex];

    if (this.activeHeroLayer === 'A') {
      // Transition from Layer A to Layer B
      this.heroVidB.src = nextSrc;
      this.heroVidB.currentTime = 0;
      this.heroVidB.play().catch(() => {});
      this.heroVidB.classList.add('is-visible');
      this.heroVidA.classList.remove('is-visible');
      this.activeHeroLayer = 'B';
      setTimeout(() => {
        if (this.activeHeroLayer === 'B' && this.heroVidA) {
          this.heroVidA.pause();
        }
      }, 1600);
    } else {
      // Transition from Layer B to Layer A
      this.heroVidA.src = nextSrc;
      this.heroVidA.currentTime = 0;
      this.heroVidA.play().catch(() => {});
      this.heroVidA.classList.add('is-visible');
      this.heroVidB.classList.remove('is-visible');
      this.activeHeroLayer = 'A';
      setTimeout(() => {
        if (this.activeHeroLayer === 'A' && this.heroVidB) {
          this.heroVidB.pause();
        }
      }, 1600);
    }

    this.currentHeroVideoIndex = nextIndex;
  },

  // ------------------------------------------------------------------------
  // MENU OVERLAY
  // ------------------------------------------------------------------------
  openMenu() {
    if (this.menuOverlay) {
      this.menuOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  },

  closeMenu() {
    if (this.menuOverlay) {
      this.menuOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  },

  // ------------------------------------------------------------------------
  // SERVICES DETAIL LOADER
  // ------------------------------------------------------------------------
  loadServiceDetail(serviceId) {
    const service = VALKA_DATA.services.find(s => s.id === serviceId) || VALKA_DATA.services[0];
    this.activeServiceId = service.id;

    // Update Tabs
    this.serviceTabs.forEach(btn => {
      if (btn.getAttribute('data-service') === service.id) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Hero Split Content
    if (this.serviceTitle) this.serviceTitle.textContent = `${service.title} ${service.subtitle}`;
    if (this.serviceDesc) this.serviceDesc.textContent = service.fullDescription;
    if (this.serviceBreadcrumb) this.serviceBreadcrumb.textContent = service.title;
    if (this.serviceImage) {
      this.serviceImage.src = service.heroImage || service.image;
      this.serviceImage.alt = service.title;
    }

    // Update Benefits
    if (this.serviceBenefits) {
      this.serviceBenefits.innerHTML = service.benefits
        .map(b => `<li class="service-benefit-item">${b}</li>`)
        .join('');
    }

    // Update Featured Projects in Services
    if (this.serviceFeaturedProjectsGrid) {
      const featProjects = VALKA_DATA.projects.filter(p => service.featuredProjects.includes(p.id));
      this.serviceFeaturedProjectsGrid.innerHTML = featProjects
        .map(p => `
          <div class="featured-project-card" onclick="ValkaApp.openProjectModalById('${p.id}')">
            <div class="featured-project-thumb">
              <img src="${p.image}" alt="${p.title}" loading="lazy" />
            </div>
            <div class="featured-project-name">${p.title}</div>
            <div class="featured-project-location">${p.location}</div>
          </div>
        `).join('');
    }
  },

  // ------------------------------------------------------------------------
  // PROJECTS GRID & FILTERING
  // ------------------------------------------------------------------------
  setProjectFilter(filter) {
    this.activeProjectFilter = filter;
    this.filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    this.renderProjectsGrid();
  },

  renderProjectsGrid() {
    if (!this.projectsGrid) return;

    let filtered = VALKA_DATA.projects;
    if (this.activeProjectFilter !== 'all') {
      filtered = VALKA_DATA.projects.filter(p => p.category === this.activeProjectFilter);
    }

    this.projectsGrid.innerHTML = filtered.map(p => `
      <div class="project-card-main" onclick="ValkaApp.openProjectModalById('${p.id}')">
        <div class="project-card-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="project-card-info">
          <h4 class="project-card-title">${p.title}</h4>
          <div class="project-card-meta">
            <span>${p.location}</span>
            <span>•</span>
            <span class="badge">${p.categoryName}</span>
          </div>
        </div>
      </div>
    `).join('');
  },

  // ------------------------------------------------------------------------
  // BLOG GRID
  // ------------------------------------------------------------------------
  renderBlogGrid() {
    const blogContainer = document.getElementById('blog-main-grid');
    if (!blogContainer) return;

    blogContainer.innerHTML = VALKA_DATA.blogPosts.map(post => `
      <article class="blog-card" onclick="ValkaApp.openArticleModal('${post.id}')">
        <div class="blog-card-thumb">
          <img src="${post.image}" alt="${post.title}" loading="lazy" />
        </div>
        <div class="blog-card-body">
          <div class="blog-meta-tag">${post.category} • ${post.readTime}</div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <div class="link-arrow" style="margin-top: auto;">Leer artículo →</div>
        </div>
      </article>
    `).join('');
  },

  // ------------------------------------------------------------------------
  // MODAL CONTROLLER
  // ------------------------------------------------------------------------
  openProjectModalById(id) {
    const project = VALKA_DATA.projects.find(p => p.id === id);
    if (project) this.openProjectModal(project);
  },

  openProjectModal(project) {
    if (!this.projectModal || !this.modalContent) return;

    const galleryHtml = project.gallery && project.gallery.length > 1
      ? `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
          ${project.gallery.map(img => `
            <img src="${img}" alt="${project.title}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 2px;" />
          `).join('')}
        </div>`
      : `<div class="modal-gallery-main"><img src="${project.image}" alt="${project.title}" /></div>`;

    this.modalContent.innerHTML = `
      <div class="modal-body">
        ${galleryHtml}
        
        <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-gold); font-weight: 600; margin-bottom: 0.5rem;">
          ${project.categoryName}
        </div>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 0.5rem;">${project.title}</h2>
        <div style="color: var(--text-muted); font-size: 0.9rem;">${project.location}</div>

        <div class="modal-specs-strip">
          <div><strong>Ubicación:</strong> ${project.location}</div>
          ${project.categoryLabel ? `<div><strong>Categoría:</strong> ${project.categoryLabel}</div>` : (project.area ? `<div><strong>Superficie:</strong> ${project.area}</div>` : '')}
          <div><strong>Año:</strong> ${project.year}</div>
        </div>

        <p style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 1.5rem;">
          ${project.fullStory || project.description}
        </p>

        ${project.clientQuote ? `
          <div class="modal-quote-box">
            "${project.clientQuote}"
          </div>
        ` : ''}

        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="https://wa.me/56953420995?text=Hola%20Valka%20Estudio,%20quisiera%20consultar%20sobre%20un%20proyecto%20similar%20a%20${encodeURIComponent(project.title)}" target="_blank" class="btn btn-primary">
            Cotizar proyecto similar →
          </a>
          <button onclick="ValkaApp.closeModal(); ValkaApp.navigate('contacto');" class="btn btn-outline">
            Ir a Contacto
          </button>
        </div>
      </div>
    `;

    this.projectModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  },

  openArticleModal(postId) {
    const post = VALKA_DATA.blogPosts.find(p => p.id === postId);
    if (!post || !this.projectModal || !this.modalContent) return;

    this.modalContent.innerHTML = `
      <div class="modal-body">
        <div class="modal-gallery-main">
          <img src="${post.image}" alt="${post.title}" />
        </div>
        <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-gold); font-weight: 600; margin-bottom: 0.5rem;">
          ${post.category} • ${post.date}
        </div>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1.5rem; line-height: 1.25;">
          ${post.title}
        </h2>
        <div style="font-size: 1.05rem; line-height: 1.85; color: var(--text-secondary); margin-bottom: 2rem;">
          <p style="margin-bottom: 1.2rem;">${post.excerpt}</p>
          <p style="margin-bottom: 1.2rem;">${post.content}</p>
          <p style="font-family: var(--font-serif); font-style: italic; color: var(--text-primary); margin-top: 2rem; border-left: 2px solid var(--accent-gold); padding-left: 1rem;">
            "En Valka entendemos la arquitectura como una herramienta para mejorar la calidad de vida."
          </p>
        </div>
        <div style="margin-top: 2.5rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 0.85rem; color: var(--text-muted);">VALKA ESTUDIO — Arquitectura y Diseño</div>
          <button onclick="ValkaApp.closeModal()" class="btn btn-outline">Cerrar</button>
        </div>
      </div>
    `;

    this.projectModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    if (this.projectModal) {
      this.projectModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  },

  // ------------------------------------------------------------------------
  // CONTACT FORM
  // ------------------------------------------------------------------------
  handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email) {
      this.showToast('Por favor completa tu nombre y correo electrónico.');
      return;
    }

    // Generate WhatsApp direct text option
    const waText = encodeURIComponent(`Hola Valka Estudio, mi nombre es ${name}. Correo: ${email}. Teléfono: ${phone}. Mensaje: ${message}`);
    const waUrl = `https://wa.me/56912345678?text=${waText}`;

    // Visual Toast
    this.showToast(`¡Gracias ${name}! Hemos recibido tu mensaje. También puedes escribirnos directamente por WhatsApp.`);

    // Reset Form
    this.contactForm.reset();

    // Offer instant WhatsApp opening in background/new tab if user desires
    setTimeout(() => {
      const openWa = confirm('¿Deseas enviar también tu consulta de inmediato por WhatsApp?');
      if (openWa) {
        window.open(waUrl, '_blank');
      }
    }, 600);
  },

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.textContent = message;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
};
