document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 2. Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active link switching on scroll
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Service Modal Logic
    const serviceData = {
        design: {
            title: "تصميم الإضاءة",
            image: "media/lighting_design.png",
            description: `
                <p>في أديم لايت، ننظر إلى تصميم الإضاءة باعتباره عنصراً أساسياً في جودة المشروع وهويته، وليس مجرد توزيع لمصادر الضوء.</p>
                <p>نقدّم خدمة تصميم إضاءة متكاملة للمشاريع السكنية والتجارية، تبدأ بدراسة طبيعة المساحات واحتياجاتها الوظيفية والجمالية، وصولاً إلى اختيار الحلول والمنتجات المناسبة لكل فراغ بما يحقق التوازن بين كفاءة الإضاءة، الراحة البصرية، وجمال التصميم.</p>
                <p>تشمل الخدمة دراسة وتوزيع نقاط الإضاءة، تحديد القدرات والمقاسات المناسبة، اختيار درجات حرارة اللون وزوايا الإضاءة، وتقديم التوصيات الفنية التي تتوافق مع طبيعة الاستخدام والتصميم المعماري والداخلي للمشروع.</p>
                <p>كما نولي اهتماماً كبيراً بالجانب التنفيذي، من خلال تقديم حلول عملية وقابلة للتطبيق في الموقع، بما يساهم في الحد من التعديلات أثناء مراحل التنفيذ وتحقيق النتيجة المستهدفة بأعلى قدر من الكفاءة.</p>
            `
        },
        supply: {
            title: "خدمة توريد مواد الإضاءة",
            image: "media/lighting_supply.png",
            description: `
                <p>في أديم لايت، نؤمن بأن جودة المشروع تبدأ من جودة المواد التي تُبنى عليها تفاصيله، ولذلك نقدم خدمة توريد متكاملة لمواد وحلول الإضاءة للمشاريع السكنية والتجارية والتطويرية، وفق معايير تجمع بين الجودة، الاعتمادية، والكفاءة الفنية.</p>
                <p>نعمل على توفير حلول إضاءة مدروسة تتناسب مع طبيعة كل مشروع ومتطلباته، ابتداءً من اختيار المنتجات والمواصفات الفنية المناسبة، مروراً بتجهيز الكميات وجدولة التوريد، وصولاً إلى دعم المشروع خلال مراحل التنفيذ.</p>
                <p>وتشمل خدماتنا توريد حلول الإضاءة الداخلية والخارجية، والإضاءة المعمارية والديكورية، والمسارات المغناطيسية، وحلول الإضاءة المخفية، إلى جانب مجموعة متكاملة من المنتجات والملحقات التي تخدم مختلف احتياجات المشروع.</p>
                <p>كما نحرص على أن تتوافق المواد الموردة مع متطلبات الأداء والجودة والاستدامة، مع الاهتمام بالتفاصيل الفنية مثل كفاءة الإضاءة، جودة مكونات المنتج، درجات حرارة اللون، زوايا التوزيع، ومستويات الحماية المناسبة لكل استخدام.</p>
                <p>هدفنا في أديم لايت لا يقتصر على توريد المنتجات، بل يتمثل في بناء شراكة موثوقة مع المطور والمقاول والاستشاري، وتقديم حلول توريد تساهم في رفع جودة المشروع، تعزيز كفاءة التنفيذ، وتحقيق قيمة مستدامة على المدى الطويل.</p>
            `
        },
        installation: {
            title: "خدمة تركيب مواد الإضاءة",
            image: "media/lighting_installation.png",
            description: `
                <p>نقدم في أديم لايت خدمة تركيب متخصصة لمختلف حلول ومواد الإضاءة، وفق معايير فنية تضمن دقة التنفيذ وسلامة التركيب.</p>
                <p>تشمل الخدمة الإضاءة الداخلية والخارجية، المسارات المغناطيسية، الإضاءة المخفية، والوحدات الديكورية.</p>
                <p>نحرص على توافق التنفيذ مع المخططات ومتطلبات الموقع، مع الاهتمام بأدق التفاصيل الفنية والجمالية.</p>
                <p>هدفنا هو تسليم المشروع بصورة متكاملة تجمع بين جودة المنتج، احترافية التنفيذ، وموثوقية الأداء.</p>
            `
        }
    };

    const modal = document.getElementById('serviceModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close-modal');
    const learnMoreButtons = document.querySelectorAll('.btn-learn-more');

    if (modal) {
        learnMoreButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const serviceKey = btn.getAttribute('data-service');
                if (serviceData[serviceKey]) {
                    modalImage.src = serviceData[serviceKey].image;
                    modalTitle.textContent = serviceData[serviceKey].title;
                    modalDescription.innerHTML = serviceData[serviceKey].description;
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 5. CTA Slider Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    const nextSlide = () => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    const startSlider = () => {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };

    if (slides.length > 0) {
        startSlider();
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                slides[currentSlide].classList.remove('active');
                dots[currentSlide].classList.remove('active');
                currentSlide = index;
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
                startSlider();
            });
        });
    }
});
