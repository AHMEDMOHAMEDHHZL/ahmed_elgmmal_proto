import './style.css';

// -------------------------------------------------------------
// 1. Language Dictionary & State System
// -------------------------------------------------------------
type Language = 'EN' | 'AR';
let currentLang: Language = 'EN';

const translations: Record<Language, Record<string, string>> = {
  EN: {
    nav_about: "About",
    nav_tech: "Tech Stack",
    nav_projects: "Projects",
    nav_arch: "Architecture",
    nav_exp: "Experience",
    nav_cert: "Certifications",
    nav_contact: "Let's Talk",
    
    hero_available: "Available for Hire & Engineering Projects",
    hero_hi: "Hi, I'm",
    hero_desc: "Backend Architect & Software Engineer studying at <strong style='color: var(--text-main)'>HTI Beni Suef</strong>. I specialize in designing scalable server-side systems, high-throughput <strong style='color: var(--primary)'>REST APIs</strong>, and database optimization with <strong style='color: var(--primary)'>Laravel & MySQL</strong>.",
    btn_projects: "Explore Featured Works",
    btn_cv: "Download Resume",
    
    stat_uptime: "System Reliability",
    stat_apis: "API Endpoints Built",
    stat_latency: "Query Latency",

    about_tag: "BACKGROUND & PHILOSOPHY",
    about_title: "Engineering Scalable Systems With <span class='gradient-text'>Precision</span>",
    about_desc1: "I am <strong>Ahmed Mohamed Ragab El-Gammal</strong>, a passionate Backend Engineer studying at the <strong>Higher Technological Institute (HTI) in Beni Suef</strong>. My mission is building maintainable, high-throughput server backends that easily scale under heavy load.",
    about_desc2: "Beyond writing code, I focus on system resilience, optimal database schema normalized for speed, OAuth2/JWT security protocols, and clean modular codebases using SOLID principles.",
    about_feat1: "Backend Architecture & API Design",
    about_feat2: "HTI Beni Suef Engineering Student",
    about_feat3: "Laravel Ecosystem Mastery",
    about_feat4: "Database Optimization & Indexing",
    about_feat5: "RESTful Services & Integrations",
    about_feat6: "Clean Code & Refactoring Advocate",

    services_tag: "CORE COMPETENCIES",
    services_title: "Architectural <span class='gradient-text'>Capabilities</span>",
    service_1_title: "Backend System Architecture",
    service_1_desc: "Designing modular, maintainable, and enterprise-grade backend infrastructure using modern Laravel, PHP 8.3+, and service pattern principles.",
    service_2_title: "RESTful API Engineering",
    service_2_desc: "Building secure, rate-limited, and well-structured APIs (Swagger/Postman documented) ready for web, mobile apps, and multi-platform clients.",
    service_3_title: "Database Engineering & SQL",
    service_3_desc: "Expert relational schema design, query profiling, index strategies, transaction handling, and sub-millisecond data fetching performance.",
    matrix_title: "Interactive Technology Stack",

    projects_tag: "PORTFOLIO PRODUCTIONS",
    projects_title: "Featured <span class='gradient-text'>Architectures</span>",
    proj_1_desc: "An enterprise-scale service directory platform bridging customers with certified technical specialists. Built with multi-role access control, dynamic booking queues, real-time status tracking, and geolocation indexing.",
    proj_2_desc: "A full-featured digital storefront engineered for fast product inventory searching, category filtering, shopping cart persistence, dynamic order status management, and admin inventory control.",
    proj_3_desc: "An advanced Laravel architecture foundation featuring automated JWT authentication, Redis query caching, rate-limiting, standardized JSON API responses, and comprehensive Swagger documentation.",
    btn_details: "View Details",
    btn_visit: "Visit Live Website",

    arch_tag: "INSIDE THE CODE",
    arch_title: "Architecture & <span class='gradient-text'>Code Quality</span>",

    exp_tag: "CAREER ROADMAP",
    exp_title: "Professional <span class='gradient-text'>Journey</span>",
    role_1_title: "Freelance Backend Engineer & Consultant",
    role_1_comp: "Client Projects & Web Platforms",
    role_1_desc: "Designing, deploying, and maintaining high-throughput server backends for client businesses. Implementing RESTful APIs, securing databases, and setting up automated hosting integrations.",
    role_2_title: "Software Engineering Student",
    role_2_comp: "Higher Technological Institute (HTI) - Beni Suef",
    role_2_desc: "Specializing in Computer Science & System Engineering. Deepening theoretical and practical foundations in Data Structures, Algorithms, Relational Database Theory, and System Design.",

    cert_tag: "VERIFIED CREDENTIALS",
    cert_title: "Professional <span class='gradient-text'>Certifications</span>",
    cert_1_desc: "Verified expertise in Laravel framework lifecycle, Eloquent ORM, Service Providers, and API design.",
    cert_2_desc: "Validation of advanced database relational modeling, microservice patterns, and server performance optimization.",

    bento_tag: "GALLERY & VISUAL HIGHLIGHTS",
    bento_title: "Engineering <span class='gradient-text'>Mindset</span>",
    bento_1_title: "Visionary Backend Architect",
    bento_1_sub: "Crafting high-load, reliable server solutions.",
    bento_2_title: "Deep Engineering Focus",
    bento_2_sub: "Optimizing relational database schemas & indexes.",
    bento_3_title: "Team Collaboration",
    bento_3_sub: "Building high-impact digital applications together.",
    bento_4_title: "Clean Code Standard",
    bento_4_sub: "SOLID principles & clean abstractions.",
    bento_5_title: "Continuous Innovation",
    bento_5_sub: "Staying updated with modern web standards.",
    bento_6_title: "Scalable Infrastructure",
    bento_6_sub: "Preparing backend systems for massive scale.",

    contact_tag: "START A CONVERSATION",
    contact_title: "Let's Build Something <span class='gradient-text'>Extraordinary</span>",
    contact_desc: "Currently available for freelance projects, backend consulting, API development, and full-time software engineering roles.",
    lbl_name: "Your Name",
    lbl_email: "Your Email",
    lbl_msg: "Project Details / Message",
    btn_send: "Send Message Now"
  },

  AR: {
    nav_about: "نبذة عني",
    nav_tech: "المهارات والتكنيكات",
    nav_projects: "المشاريع",
    nav_arch: "معمارية الكود",
    nav_exp: "الخبرة والمسار",
    nav_cert: "الشهادات",
    nav_contact: "تواصل معي",
    
    hero_available: "متاح للعمل الحر والمشاريع الهندسيّة",
    hero_hi: "أهلاً بك، أنا",
    hero_desc: "مهندس برمجيات ومطور خلفية الموقع (Backend Architect) أدرس بـ <strong style='color: var(--text-main)'>المعهد العالي للتكنولوجيا بني سويف (HTI)</strong>. متخصص في بناء الأنظمة السحابية القابلة للتوسع، وتصميم <strong style='color: var(--primary)'>واجهات البرمجة REST APIs</strong> عالية السرعة وإدارة قواعد البيانات باستخدام <strong style='color: var(--primary)'>Laravel & MySQL</strong>.",
    btn_projects: "استكشف أبرز الأعمال",
    btn_cv: "تحميل السيرة الذاتية",

    stat_uptime: "معدل استقرار النظام",
    stat_apis: "نقطة API مطورة",
    stat_latency: "سرعة الاستجابة",

    about_tag: "الخلفية والفلسفة",
    about_title: "هندسة أنظمة مرنة ومحكمة بـ <span class='gradient-text'>دقة عالية</span>",
    about_desc1: "أنا <strong>أحمد محمد رجب الجمال</strong>، مهندس برمجيات شغوف في <strong>المعهد العالي للتكنولوجيا ببني سويف (HTI)</strong>. هدفي هو بناء قواعد برمجية صلبة ومستقرة تتحمل الضغط العالي مع سهولة الصيانة والتوسع.",
    about_desc2: "أركز على تصميم قواعد البيانات المحسنة، وتطبيق بروتوكولات الأمان والحماية OAuth2/JWT، وكتابة كود نظيف وفق مبادئ SOLID Standards.",
    about_feat1: "معمارية Backend وتصميم واجهات APIs",
    about_feat2: "طالب هندسة بالمعهد العالي للتكنولوجيا بني سويف",
    about_feat3: "إتقان بيئة عمل Laravel و PHP",
    about_feat4: "تحسين وتسريع استعلامات MySQL",
    about_feat5: "تطوير خدمات ومعمارية RESTful",
    about_feat6: "الالتزام بأعلى معايير Clean Code",

    services_tag: "الخدمات والقدرات",
    services_title: "القدرات <span class='gradient-text'>الهندسية</span>",
    service_1_title: "معمارية أنظمة الـ Backend",
    service_1_desc: "بناء بنية تحتية برمجية متماسكة وقابلة للتوسع باستخدام أحدث إصدارات Laravel و PHP 8.3 وتطبيقات نمط Service Pattern.",
    service_2_title: "تطوير واجهات برمجة التطبيقات REST APIs",
    service_2_desc: "بناء APIs مؤمنة وسريعة وموثقة بدقة (Postman/Swagger) جاهزة للربط مع تطبيقات الجوال والمواقع.",
    service_3_title: "هندسة قواعد البيانات و SQL",
    service_3_desc: "تصميم جداول قواعد البيانات المحسنة، وتسريع الاستعلامات المعقدة مع استخدام ذاكرة التخزين المؤقت Redis.",
    matrix_title: "مصفوفة المهارات التقنية والتفاعلية",

    projects_tag: "المشاريع المنفذة",
    projects_title: "معمارية <span class='gradient-text'>المشاريع</span>",
    proj_1_desc: "منصة خدمية متكاملة لربط العملاء بالفنيين المحترفين. تم بناؤها بنظام صلاحيات متعدد، طوابير حجز ديناميكية، تتبع مباشر للطلبات وتحديد الموقع الجغرافي.",
    proj_2_desc: "متجر إلكتروني متكامل مصمم للبحث السريع في المنتجات، تصفية الفئات، سلة تسوق مستمرة، وإدارة فورية للمخزون والطلبات.",
    proj_3_desc: "قالب معماري متقدم لبناء برمجيات الخوادم بلغة Laravel، يتضمن المصادقة التلقائية بـ JWT، التخزين المؤقت عبر Redis، وتوثيق Swagger متكامل.",
    btn_details: "عرض التفاصيل",
    btn_visit: "زيارة الموقع الحي",

    arch_tag: "نظرة داخل الكود",
    arch_title: "جودة ومعمارية <span class='gradient-text'>الكود البرمجي</span>",

    exp_tag: "مسار الخبرة",
    exp_title: "الرحلة <span class='gradient-text'>المهنية</span>",
    role_1_title: "مطور Backend حر ومستشار برمجي",
    role_1_comp: "مشاريع العملاء والمنصات الرقمية",
    role_1_desc: "تطوير وإدارة الخوادم البرمجية للشركات والعملاء، بناء APIs سريعة، تأمين قواعد البيانات، وإعداد الاستضافات السحابية.",
    role_2_title: "طالب هندسة برمجيات",
    role_2_comp: "المعهد العالي للتكنولوجيا (HTI) - بني سويف",
    role_2_desc: "التخصص في علوم الحاسب وهندسة الأنظمة. تعميق الفهم النظري والعملي في هيكلة البيانات، الخوارزميات، وهندسة قواعد البيانات.",

    cert_tag: "الشهادات المعتمدة",
    cert_title: "الشهادات <span class='gradient-text'>الاحترافية</span>",
    cert_1_desc: "شهادة معتمدة في إتقان إطار عمل Laravel، Eloquent ORM، وإدارة خدمات APIs.",
    cert_2_desc: "شهادة التخصص في معمارية الأنظمة السحابية وتحسين أداء قواعد البيانات الضخمة.",

    bento_tag: "معرض الرؤية والعمل",
    bento_title: "العقلية <span class='gradient-text'>الهندسية</span>",
    bento_1_title: "مهندس معمارية Backend",
    bento_1_sub: "بناء حلول برمجية مستقرة وعالية الأداء.",
    bento_2_title: "تركيز تقني عميق",
    bento_2_sub: "تحسين استعلامات وجداول قواعد البيانات.",
    bento_3_title: "العمل الجماعي",
    bento_3_sub: "تطوير تطبيقات رقمية ذات أثر ملموس.",
    bento_4_title: "معايير Clean Code",
    bento_4_sub: "الالتزام بمبادئ SOLID والتجريد النظيف.",
    bento_5_title: "التطوير المستمر",
    bento_5_sub: "مواكبة أحدث المعايير البرمجية العالمية.",
    bento_6_title: "بنية قابلة للتوسع",
    bento_6_sub: "تجهيز الخوادم لاستقبال آلاف الاستعلامات.",

    contact_tag: "ابدأ التواصل الان",
    contact_title: "لنمتلك حلولاً برمجية <span class='gradient-text'>استثنائية</span>",
    contact_desc: "متاح حالياً للمشاريع الحرة، الاستشارات البرمجية، تطوير واجهات APIs، والوظائف الدائمة.",
    lbl_name: "الاسم الكريم",
    lbl_email: "البريد الإلكتروني",
    lbl_msg: "تفاصيل المشروع / الرسالة",
    btn_send: "إرسال الرسالة الآن"
  }
};

// -------------------------------------------------------------
// 2. DOM Ready Initializations
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initPreloader();
  initTypewriter();
  initMobileMenu();
  initSkillsMatrix();
  initContactForm();
});

// -------------------------------------------------------------
// 3. Animated Background Node Canvas
// -------------------------------------------------------------
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }

  const particlesCount = Math.min(Math.floor(width / 25), 45);
  const particles: Particle[] = [];

  for (let i = 0; i < particlesCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 1
    });
  }

  function animate() {
    ctx!.clearRect(0, 0, width, height);

    // Draw Particles & Connecting Lines
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx!.beginPath();
      ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx!.fillStyle = 'rgba(16, 185, 129, 0.4)';
      ctx!.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(p2.x, p2.y);
          ctx!.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 140)})`;
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// -------------------------------------------------------------
// 4. Preloader Logic
// -------------------------------------------------------------
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderPercent = document.getElementById('loader-percent');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 25;
    if (progress > 100) progress = 100;
    if (loaderBar) loaderBar.style.width = `${progress}%`;
    if (loaderPercent) loaderPercent.textContent = `${Math.round(progress)}%`;

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (preloader) preloader.classList.add('fade-out');
      }, 300);
    }
  }, 60);
}

// -------------------------------------------------------------
// 5. Typewriter Effect
// -------------------------------------------------------------
function initTypewriter() {
  const textElement = document.getElementById('typewriter');
  if (!textElement) return;

  const phrases = [
    "Ahmed Elgmmal.",
    "Backend Architect.",
    "Laravel Specialist.",
    "Database Engineer."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    textElement!.textContent = current.substring(0, charIndex);

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      speed = 2500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

// -------------------------------------------------------------
// 6. Mobile Menu System
// -------------------------------------------------------------
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

// -------------------------------------------------------------
// 7. Interactive Skills Matrix Tabs
// -------------------------------------------------------------
function initSkillsMatrix() {
  const tabs = document.querySelectorAll('.matrix-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          (card as HTMLElement).style.display = 'block';
        } else {
          (card as HTMLElement).style.display = 'none';
        }
      });
    });
  });
}

// -------------------------------------------------------------
// 8. Code Terminal Interactive Snippets
// -------------------------------------------------------------
const codeSnippets: Record<string, string> = {
  controller: `// High-Performance Clean Laravel Controller Architecture
namespace App\\Http\\Controllers\\Api\\V1;

use App\\Http\\Requests\\UserRegistrationRequest;
use App\\Services\\UserService;
use App\\Http\\Resources\\UserResource;
use Illuminate\\Http\\JsonResponse;

class UserController extends Controller
{
    public function __construct(
        protected readonly UserService $userService
    ) {}

    public function register(UserRegistrationRequest $request): JsonResponse
    {
        $user = $this->userService->registerUser($request->validated());

        return response()->json([
            'status'  => 'success',
            'message' => 'Account created successfully',
            'data'    => new UserResource($user)
        ], 201);
    }
}`,

  sql: `-- High-Performance MySQL Indexing & Query Profiling
-- Creating composite indexes for high-throughput lookup
CREATE TABLE \`orders\` (
  \`id\` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  \`user_id\` BIGINT UNSIGNED NOT NULL,
  \`status\` VARCHAR(50) NOT NULL DEFAULT 'pending',
  \`total_amount\` DECIMAL(10,2) NOT NULL,
  \`created_at\` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX \`idx_user_status_created\` (\`user_id\`, \`status\`, \`created_at\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optimized Sub-millisecond Execution Query
SELECT id, total_amount, created_at 
FROM orders 
WHERE user_id = 1042 AND status = 'completed'
ORDER BY created_at DESC 
LIMIT 20;`,

  redis: `// Advanced Redis Caching Layer & Tagged Store Service
namespace App\\Services\\Cache;

use Illuminate\\Support\\Facades\\Cache;
use Closure;

class RedisCacheService
{
    public static function remember(string $key, int $ttlSeconds, Closure $callback): mixed
    {
        return Cache::tags(['api_responses'])->remember($key, $ttlSeconds, $callback);
    }

    public static function invalidateTag(string $tag): void
    {
        Cache::tags([$tag])->flush();
    }
}`
};

(window as any).switchCodeTab = (tabName: string) => {
  const codeDisplay = document.getElementById('code-display');
  const tabs = document.querySelectorAll('.term-tab');

  tabs.forEach(t => t.classList.remove('active'));
  const clickedTab = Array.from(tabs).find(t => t.textContent?.toLowerCase().includes(tabName));
  if (clickedTab) clickedTab.classList.add('active');

  if (codeDisplay && codeSnippets[tabName]) {
    codeDisplay.querySelector('code')!.textContent = codeSnippets[tabName];
  }
};

(window as any).copyCodeSnippet = () => {
  const code = document.querySelector('#code-display code')?.textContent || '';
  navigator.clipboard.writeText(code).then(() => {
    showToast("Code snippet copied to clipboard!", "success");
  });
};

// -------------------------------------------------------------
// 9. Toast Notification Helper
// -------------------------------------------------------------
function showToast(message: string, type: 'success' | 'error' = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// -------------------------------------------------------------
// 10. Modals System (Certificates & Project Details)
// -------------------------------------------------------------
(window as any).openCertModal = (imgSrc: string, title: string) => {
  const modal = document.getElementById('cert-modal');
  const img = document.getElementById('modal-cert-img') as HTMLImageElement;
  const titleEl = document.getElementById('modal-cert-title');

  if (modal && img && titleEl) {
    img.src = imgSrc;
    titleEl.textContent = title;
    modal.classList.add('active');
  }
};

(window as any).closeCertModal = () => {
  document.getElementById('cert-modal')?.classList.remove('active');
};

const projectDetails: Record<string, { title: string; tags: string[]; content: string }> = {
  sanaiey: {
    title: "Sanaiey (صنايعي دوت كوم) - Architecture Breakdown",
    tags: ["Laravel 11", "MySQL", "Livewire", "REST API", "Role ACL"],
    content: `
      <p style="color: var(--text-dim); margin-bottom: 1rem; line-height: 1.7;">
        <strong>Sanaiey</strong> is an on-demand technical services marketplace. Built with Laravel 11, it manages multi-tier roles (Clients, Craftsmen/Technicians, Admin Staff).
      </p>
      <h4 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">Key Engineering Accomplishments:</h4>
      <ul style="color: var(--text-dim); padding-left: 1.2rem; line-height: 1.8;">
        <li>• Implemented indexed database queries reducing search latency for nearest technicians by 75%.</li>
        <li>• Role-based Access Control (RBAC) via middleware authorization gates.</li>
        <li>• Integrated real-time booking queue status update hooks.</li>
        <li>• Fully responsive RTL & Arabic localization interface.</li>
      </ul>
    `
  },
  fashion: {
    title: "Elgmmal Fashion Hub - Platform Mechanics",
    tags: ["PHP 8.2", "MySQL", "E-Commerce", "Order Pipeline"],
    content: `
      <p style="color: var(--text-dim); margin-bottom: 1rem; line-height: 1.7;">
        <strong>Elgmmal Fashion</strong> is a retail storefront designed to handle high inventory throughput and high-traffic shopping cycles.
      </p>
      <h4 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">Key Engineering Accomplishments:</h4>
      <ul style="color: var(--text-dim); padding-left: 1.2rem; line-height: 1.8;">
        <li>• Built persistent cart state machine with minimal database writes.</li>
        <li>• Category filtering engine utilizing composite database keys.</li>
        <li>• Admin dashboard for live inventory updates and order tracking.</li>
        <li>• Deployed on high-performance server environment with automated SSL.</li>
      </ul>
    `
  },
  'api-engine': {
    title: "Enterprise API Gateway Architecture",
    tags: ["Laravel", "Redis", "JWT Auth", "Swagger"],
    content: `
      <p style="color: var(--text-dim); margin-bottom: 1rem; line-height: 1.7;">
        A production-grade backend boilerplate created to accelerate new microservice development with zero architectural compromise.
      </p>
      <h4 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">Key Engineering Accomplishments:</h4>
      <ul style="color: var(--text-dim); padding-left: 1.2rem; line-height: 1.8;">
        <li>• Standardized JSON Envelope responses with status codes & validation formatters.</li>
        <li>• Automated OpenAPI / Swagger UI generation from code annotations.</li>
        <li>• Redis cache-aside caching pattern with automated tag invalidation.</li>
      </ul>
    `
  }
};

(window as any).showProjectDetails = (projectId: string) => {
  const modal = document.getElementById('project-modal');
  const container = document.getElementById('modal-project-content');

  const details = projectDetails[projectId];
  if (modal && container && details) {
    container.innerHTML = `
      <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem;">${details.title}</h3>
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
        ${details.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      ${details.content}
    `;
    modal.classList.add('active');
  }
};

(window as any).closeProjectModal = () => {
  document.getElementById('project-modal')?.classList.remove('active');
};

// -------------------------------------------------------------
// 11. Contact Form & EmailJS Integration
// -------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  if (!form) return;

  // @ts-ignore
  if (typeof emailjs !== 'undefined') {
    // @ts-ignore
    emailjs.init("8Js2j4egsN3a99kwg");
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;

    if (btn) {
      const origText = btn.innerHTML;
      btn.innerHTML = `<span>Sending...</span>`;
      btn.disabled = true;

      const timeInput = document.getElementById('form-time') as HTMLInputElement;
      if (timeInput) timeInput.value = new Date().toLocaleString();

      try {
        // @ts-ignore
        const response = await emailjs.sendForm('service_ckhmjdw', 'template_r3k4uib', form);

        if (response.status === 200) {
          showToast(currentLang === 'AR' ? "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً." : "Message sent successfully! I will reply shortly.", "success");
          form.reset();
        } else {
          throw new Error('Send failed');
        }
      } catch (err) {
        showToast(currentLang === 'AR' ? "حدث خطأ أثناء الإرسال، حاول مجدداً أو راسلني واتساب." : "Failed to send message. Please contact via WhatsApp.", "error");
      } finally {
        btn.innerHTML = origText;
        btn.disabled = false;
      }
    }
  });
}

// -------------------------------------------------------------
// 12. WhatsApp Widget Actions
// -------------------------------------------------------------
(window as any).toggleWAWindow = () => {
  document.getElementById('wa-window')?.classList.toggle('active');
};

(window as any).sendWAMessage = () => {
  const name = (document.getElementById('wa-name-input') as HTMLInputElement)?.value.trim();
  const phone = (document.getElementById('wa-phone-input') as HTMLInputElement)?.value.trim();
  const msg = (document.getElementById('wa-msg-input') as HTMLTextAreaElement)?.value.trim();

  if (!name || !phone || !msg) {
    showToast(currentLang === 'AR' ? "يرجى ملء جميع الحقول أولاً" : "Please fill out all WhatsApp fields", "error");
    return;
  }

  const fullMsg = `*New Portfolio Lead* 🚀\n\n👤 *Name:* ${name}\n📱 *Phone:* ${phone}\n💬 *Message:* ${msg}`;
  const ownerPhone = "201275543298";
  const url = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(fullMsg)}`;

  window.open(url, '_blank');
  showToast(currentLang === 'AR' ? "جارٍ فتح واتساب..." : "Opening WhatsApp...", "success");
  document.getElementById('wa-window')?.classList.remove('active');
};

// -------------------------------------------------------------
// 13. Comprehensive Language Switcher (EN / AR)
// -------------------------------------------------------------
(window as any).toggleLanguage = () => {
  currentLang = currentLang === 'EN' ? 'AR' : 'EN';
  const langText = document.getElementById('lang-text');
  if (langText) langText.textContent = currentLang === 'EN' ? 'EN / AR' : 'AR / EN';

  document.documentElement.dir = currentLang === 'AR' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang.toLowerCase();

  // Translate all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  showToast(currentLang === 'AR' ? "تم تغيير اللغة إلى العربية" : "Language switched to English", "success");
};
