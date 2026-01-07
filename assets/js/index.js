


  const header = document.querySelector('header');
  if(header){
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      header.classList.add('muved');
    } else {
      header.classList.remove('muved');
    }

    lastScroll = currentScroll;
  });
  }



document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  });
});

$(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this);
    let $item = $this.closest(".Offer-info-item");
    let id = $item.data("id"); 
    let $next = $this.next(".submenu");

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
      $el.find(".Offer-info-item").not($item).removeClass("active");
    }

    $item.toggleClass("active");

    $(".Offers-media-item").removeClass("active").hide();
    $(`.Offers-media-item[data-id="${id}"]`)
      .addClass("active")
      .fadeIn(200);
  };

  new Accordion($("#accordion"), false);

  let firstInfo = $(".Offer-info-item").first();
  let firstId = firstInfo.data("id");

  firstInfo.addClass("active");
  firstInfo.find(".submenu").show();

  $(".Offers-media-item").hide();
  $(`.Offers-media-item[data-id="${firstId}"]`)
    .addClass("active")
    .show();
});



document.addEventListener('DOMContentLoaded', () => {
  const languagesBlock = document.querySelector('.languages-block');
  const languageMain = document.querySelector('.language-main');
  const closeBtn = document.querySelector('.language-sub-header .icon-close');

  if (!languagesBlock || !languageMain) return;

  languageMain.addEventListener('click', (e) => {
    e.stopPropagation();
    languagesBlock.classList.toggle('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languagesBlock.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (!languagesBlock.contains(e.target)) {
      languagesBlock.classList.remove('active');
    }
  });

  languagesBlock.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});


const headerFlagImg = document.querySelector('.header-language-flag img');
const languageItems = document.querySelectorAll('.language-item');

if(headerFlagImg && languageItems){
languageItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();

    const itemImg = item.querySelector('.language-item-flag img');
    if (!itemImg || !headerFlagImg) return;

    headerFlagImg.src = itemImg.src;
    headerFlagImg.alt = itemImg.alt || 'flag';

    languageItems.forEach(el => el.classList.remove('active'));

    item.classList.add('active');

    document.querySelector('.languages-block').classList.remove('active');
  });
});
}


document.addEventListener('DOMContentLoaded', () => {
  const mobileBlock = document.querySelector('.languages-block-mobile');
  if (!mobileBlock) return;

  const languageMain = mobileBlock.querySelector('.language-main');
  const closeBtn = mobileBlock.querySelector('.language-sub-header .icon-close');
  const headerFlagImg = mobileBlock.querySelector('.header-language-flag img');
  const headerText = mobileBlock.querySelector('.language-text');
  const languageItems = mobileBlock.querySelectorAll('.language-item');

  languageMain.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileBlock.classList.toggle('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileBlock.classList.remove('active');
    });
  }

  document.addEventListener('click', (e) => {
    if (!mobileBlock.contains(e.target)) {
      mobileBlock.classList.remove('active');
    }
  });

  mobileBlock.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  languageItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();

      const itemImg = item.querySelector('.language-item-flag img');
      const itemText = item.querySelector('.language-item-info p');

      if (!itemImg || !headerFlagImg || !headerText || !itemText) return;

      headerFlagImg.src = itemImg.src;
      headerFlagImg.alt = itemImg.alt || 'flag';
      headerText.textContent = itemText.textContent;

      languageItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      mobileBlock.classList.remove('active');
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const headerNav = document.querySelector('.header-nav');
  const menuBg = document.querySelector('.menu-bg');
  const body = document.body;

  if (!burger || !headerNav || !menuBg) return;

  const openMenu = () => {
    burger.classList.add('active');
    headerNav.classList.add('active');
    menuBg.classList.add('active');
    body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    burger.classList.remove('active');
    headerNav.classList.remove('active');
    menuBg.classList.remove('active');
    body.classList.remove('overflow-hidden');
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    burger.classList.contains('active') ? closeMenu() : openMenu();
  };

  burger.addEventListener('click', toggleMenu);

  menuBg.addEventListener('click', closeMenu);

  headerNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (
      !headerNav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  headerNav.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.header-menu-list a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  const header = document.querySelector('header');

  const headerOffset = header ? header.offsetHeight + 30 : 80; 

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(id);
      if (!targetSection) return;

      e.preventDefault();

      const offsetTop =
        targetSection.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      setActiveLink(id);
    });
  });

  const setActiveLink = (id) => {
    menuLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(
      `.header-menu-list a[href="#${id}"]`
    );
    if (activeLink) activeLink.classList.add('active');
  };

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + headerOffset + 5;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveLink(sectionId);
      }
    });
  });
});
