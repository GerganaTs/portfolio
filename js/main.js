(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktop = window.matchMedia("(min-width: 1024px)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const i18n = window.PortfolioI18n;

  // Apply stored/default language before measuring layout & running intro animations
  if (i18n) i18n.applyLanguage(i18n.getLang(), { persist: false });

  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const copyBtn = document.querySelector("[data-copy-email]");

  const closeMenu = () => {
    if (!toggle || !mobileMenu) return;
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", i18n ? i18n.t("nav.open") : "Open menu");
    mobileMenu.hidden = true;
    document.body.style.overflow = "";
  };

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.classList.toggle("is-open", !open);
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute(
      "aria-label",
      open
        ? i18n
          ? i18n.t("nav.open")
          : "Open menu"
        : i18n
          ? i18n.t("nav.close")
          : "Close menu"
    );
    mobileMenu.hidden = open;
    document.body.style.overflow = open ? "" : "hidden";
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!i18n) return;
      i18n.toggleLanguage();
    });
  });

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("gergana.tsirkova@gmail.com");
      const label = copyBtn.querySelector("span");
      const prev = i18n ? i18n.t("contact.copy") : label.textContent;
      copyBtn.classList.add("is-copied");
      label.textContent = i18n ? i18n.t("contact.copied") : "Copied";
      setTimeout(() => {
        copyBtn.classList.remove("is-copied");
        label.textContent = i18n ? i18n.t("contact.copy") : prev;
      }, 1800);
    } catch {
      window.location.href = "mailto:gergana.tsirkova@gmail.com";
    }
  });

  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  let lenis;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const scrollToId = (id) => {
    const target = document.querySelector(id);
    if (!target) return;
    const offset = -72;
    if (lenis) lenis.scrollTo(target, { offset, duration: 1.05 });
    else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      scrollToId(id);
      history.pushState(null, "", id);
    });
  });

  const setupCursor = () => {
    const cursor = document.querySelector(".cursor");
    if (!cursor || !finePointer.matches || reduce) return;
    document.body.classList.add("has-cursor");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { ...pos };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      gsap.set(cursor, { x: pos.x, y: pos.y });
    });

    document.querySelectorAll("a, button, [role='button'], [data-art-tile]").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
  };

  const setupMagnetic = () => {
    if (!finePointer.matches || reduce) return;
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      const strength = 18;
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          "--mx": `${(x / rect.width) * strength}px`,
          "--my": `${(y / rect.height) * strength}px`,
          duration: 0.35,
          overwrite: "auto",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { "--mx": "0px", "--my": "0px", duration: 0.55, ease: "power3.out" });
      });
    });
  };

  const heroIntro = () => {
    const lines = gsap.utils.toArray(".hero-title .line-inner");
    const extras = gsap.utils.toArray(".hero .reveal");
    const badges = gsap.utils.toArray("[data-hero-badge]");
    const canvasGroup = document.querySelector("[data-hc-group]");

    if (reduce) {
      gsap.set([...lines, ...extras, ...badges], { clearProps: "all", opacity: 1 });
      if (canvasGroup) gsap.set(canvasGroup, { autoAlpha: 1 });
      return;
    }

    gsap.set(lines, { yPercent: 110, opacity: 0 });
    gsap.set(extras, { y: 28, opacity: 0 });
    gsap.set(badges, { y: 30, opacity: 0 });
    if (canvasGroup) gsap.set(canvasGroup, { autoAlpha: 0, scale: 0.86, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (canvasGroup) {
      tl.to(canvasGroup, {
        autoAlpha: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
      }, 0);
    }
    tl.to(
      lines,
      { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.14 },
      0.15
    )
      .to(extras, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 }, "-=0.55")
      .to(badges, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, "-=0.7");
  };

  let heroMouseCleanup = null;

  const heroSvgMotion = () => {
    const group = document.querySelector("[data-hc-group]");
    if (!group) return;
    if (reduce) return;

    // Continuous orbit rotations at different speeds/directions
    const orbits = gsap.utils.toArray("[data-hc-orbit]");
    const spins = [
      { rotation: 360, duration: 72 },
      { rotation: -360, duration: 55 },
      { rotation: 360, duration: 40 },
      { rotation: -360, duration: 30 },
    ];
    orbits.forEach((orbit, i) => {
      const spin = spins[i] || spins[0];
      gsap.to(orbit, {
        rotation: spin.rotation,
        duration: spin.duration,
        repeat: -1,
        ease: "none",
        transformOrigin: "400px 400px",
      });
    });

    // Morphing blobs — cross-fading scale/rotate/skew gives an organic morph
    const blobA = document.querySelector('[data-hc-blob="a"]');
    const blobB = document.querySelector('[data-hc-blob="b"]');
    if (blobA) {
      gsap.set(blobA, { transformOrigin: "50% 50%" });
      gsap.to(blobA, {
        keyframes: [
          { scale: 1.05, rotation: 6, skewX: 2, skewY: -1, duration: 8 },
          { scale: 0.94, rotation: -4, skewX: -1.5, skewY: 2, duration: 8 },
          { scale: 1.02, rotation: 3, skewX: 1, skewY: -2, duration: 8 },
          { scale: 1, rotation: 0, skewX: 0, skewY: 0, duration: 8 },
        ],
        repeat: -1,
        ease: "sine.inOut",
      });
    }
    if (blobB) {
      gsap.set(blobB, { transformOrigin: "50% 50%" });
      gsap.to(blobB, {
        keyframes: [
          { scale: 0.92, rotation: -8, skewX: -2, skewY: 1, duration: 9 },
          { scale: 1.06, rotation: 5, skewX: 2, skewY: -2, duration: 9 },
          { scale: 0.98, rotation: -3, skewX: -1, skewY: 2, duration: 9 },
          { scale: 1, rotation: 0, skewX: 0, skewY: 0, duration: 9 },
        ],
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    // Core pulse
    const core = document.querySelector("[data-hc-core]");
    if (core) {
      gsap.set(core, { transformOrigin: "50% 50%" });
      gsap.to(core, {
        scale: 1.06,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Scroll parallax — canvas drifts up as hero exits
    gsap.to(group, {
      yPercent: -18,
      rotation: 8,
      ease: "none",
      transformOrigin: "50% 50%",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  };

  const setupHeroMouseParallax = () => {
    heroMouseCleanup?.();
    heroMouseCleanup = null;

    const canvasWrap = document.querySelector("[data-hero-canvas]");
    const badgesArr = gsap.utils.toArray("[data-hero-badge]");
    const hero = document.querySelector(".hero");
    if (!canvasWrap || !hero) return;

    // Always reset any prior mouse offset so layout is consistent after resize
    gsap.set(canvasWrap, { clearProps: "x,y" });
    badgesArr.forEach((b) => gsap.set(b, { clearProps: "x,y" }));

    if (!finePointer.matches || !desktop.matches || reduce) return;

    let raf;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let running = true;

    const loop = () => {
      if (!running) return;
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      gsap.set(canvasWrap, { x: current.x * 22, y: current.y * 16 });
      badgesArr.forEach((b, i) => {
        const depth = (i + 1) * 8;
        gsap.set(b, { x: current.x * depth, y: current.y * depth * 0.7 });
      });
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width - 0.5;
      target.y = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) loop();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    heroMouseCleanup = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      gsap.set(canvasWrap, { clearProps: "x,y" });
      badgesArr.forEach((b) => gsap.set(b, { clearProps: "x,y" }));
    };
  };

  const artGallery = () => {
    const tiles = gsap.utils.toArray("[data-art-tile]");
    if (!tiles.length) return;

    const lightbox = document.querySelector("[data-art-lightbox]");
    const backdrop = document.querySelector("[data-art-lightbox-backdrop]");
    const panel = document.querySelector("[data-art-lightbox-panel]");
    const closeBtn = document.querySelector("[data-art-lightbox-close]");
    const lbImg = document.querySelector("[data-art-lightbox-img]");
    const lbIndex = document.querySelector("[data-art-lightbox-index]");
    const lbTitle = document.querySelector("[data-art-lightbox-title]");
    const lbBody = document.querySelector("[data-art-lightbox-body]");

    let isOpen = false;
    let isAnimating = false;
    let lastFocus = null;
    let activeTimeline = null;

    const lockScroll = (lock) => {
      document.body.classList.toggle("is-lightbox-open", lock);
      if (lenis) {
        if (lock && typeof lenis.stop === "function") lenis.stop();
        if (!lock && typeof lenis.start === "function") lenis.start();
      }
    };

    const fillLightbox = (tile) => {
      const img = tile.querySelector("img");
      const title = tile.querySelector("h3");
      const body = tile.querySelector("figcaption p");
      const index = tile.querySelector(".art-index");

      if (lbImg && img) {
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
      }
      if (lbIndex) lbIndex.textContent = index ? index.textContent.trim() : "";
      if (lbTitle) lbTitle.textContent = title ? title.textContent.trim() : "";
      if (lbBody) lbBody.textContent = body ? body.textContent.trim() : "";
    };

    const openLightbox = (tile) => {
      if (!lightbox || !panel || !backdrop || isOpen || isAnimating) return;

      lastFocus = document.activeElement;
      fillLightbox(tile);
      isOpen = true;
      isAnimating = true;
      lightbox.hidden = false;
      lightbox.classList.add("is-open");
      lockScroll(true);

      if (activeTimeline) activeTimeline.kill();

      if (reduce) {
        gsap.set([backdrop, panel], { clearProps: "all" });
        gsap.set(backdrop, { autoAlpha: 1 });
        gsap.set(panel, { autoAlpha: 1, scale: 1, y: 0 });
        isAnimating = false;
        closeBtn?.focus({ preventScroll: true });
        return;
      }

      gsap.set(backdrop, { autoAlpha: 0 });
      gsap.set(panel, { autoAlpha: 0, scale: 0.82, y: 36 });

      activeTimeline = gsap
        .timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            isAnimating = false;
            closeBtn?.focus({ preventScroll: true });
          },
        })
        .to(backdrop, { autoAlpha: 1, duration: 0.45 }, 0)
        .to(panel, { autoAlpha: 1, scale: 1, y: 0, duration: 0.7, ease: "power4.out" }, 0.08);
    };

    const closeLightbox = () => {
      if (!lightbox || !panel || !backdrop || !isOpen) return;

      isAnimating = true;
      if (activeTimeline) activeTimeline.kill();

      const finish = () => {
        lightbox.classList.remove("is-open");
        lightbox.hidden = true;
        if (lbImg) {
          lbImg.removeAttribute("src");
          lbImg.alt = "";
        }
        lockScroll(false);
        isOpen = false;
        isAnimating = false;
        if (lastFocus && typeof lastFocus.focus === "function") {
          lastFocus.focus({ preventScroll: true });
        }
      };

      if (reduce) {
        finish();
        return;
      }

      activeTimeline = gsap
        .timeline({
          defaults: { ease: "power3.in" },
          onComplete: finish,
        })
        .to(panel, { autoAlpha: 0, scale: 0.88, y: 24, duration: 0.35 }, 0)
        .to(backdrop, { autoAlpha: 0, duration: 0.4 }, 0.05);
    };

    tiles.forEach((tile, i) => {
      gsap.fromTo(
        tile,
        { y: reduce ? 0 : 60, autoAlpha: 0, scale: reduce ? 1 : 0.94 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
          immediateRender: false,
          delay: (i % 3) * 0.08,
          scrollTrigger: {
            trigger: tile,
            start: "top 92%",
            once: true,
          },
        }
      );

      if (!reduce) {
        const img = tile.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -4 },
            {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: tile,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      }

      if (finePointer.matches && !reduce) {
        tile.addEventListener("mousemove", (e) => {
          if (isOpen) return;
          const r = tile.getBoundingClientRect();
          const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
          const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
          gsap.to(tile, { rotateX: rx, rotateY: ry, transformPerspective: 900, duration: 0.4 });
        });
        tile.addEventListener("mouseleave", () => {
          gsap.to(tile, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
        });
      }

      tile.addEventListener("click", () => openLightbox(tile));
      tile.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(tile);
        }
      });
    });

    closeBtn?.addEventListener("click", closeLightbox);
    backdrop?.addEventListener("click", closeLightbox);

    panel?.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        closeLightbox();
      }
    });
  };

  const revealOnScroll = () => {
    gsap.utils.toArray(".section .reveal, .timeline .reveal, .stat.reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { y: reduce ? 0 : 36, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  };

  const parallaxCards = () => {
    gsap.utils.toArray("[data-parallax-card]").forEach((card) => {
      const depth = card.querySelector("[data-depth]");
      gsap.fromTo(
        card,
        { y: reduce ? 0 : 50, scale: reduce ? 1 : 0.96, autoAlpha: 0.2 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
        }
      );
      if (depth && !reduce) {
        gsap.to(depth, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    gsap.utils.toArray("[data-work-card]").forEach((card) => {
      gsap.fromTo(
        card,
        { y: reduce ? 0 : 42, scale: reduce ? 1 : 0.97, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true,
          },
        }
      );

      if (finePointer.matches && !reduce) {
        const visual = card.querySelector(".work-visual");
        card.addEventListener("mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
          const ry = ((e.clientX - r.left) / r.width - 0.5) * 8;
          gsap.to(card, { rotateX: rx, rotateY: ry, transformPerspective: 800, duration: 0.4 });
          if (visual) gsap.to(visual, { scale: 1.06, duration: 0.45 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
          if (visual) gsap.to(visual, { scale: 1, duration: 0.6 });
        });
      }
    });
  };

  let skillsTrigger;

  const flushHorizontalOverflow = () => {
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
    if (lenis && typeof lenis.resize === "function") lenis.resize();
  };

  const skillsHorizontal = () => {
    const pin = document.querySelector(".skills-pin");
    const track = document.querySelector("[data-skills-track]");
    if (!pin || !track) return;

    // Kill with revert so pin-spacer + pinned inline styles are removed
    if (skillsTrigger) {
      if (skillsTrigger.scrollTrigger) {
        skillsTrigger.scrollTrigger.kill(true);
      }
      skillsTrigger.kill();
      skillsTrigger = null;
    }

    // Safety: unwrap any orphaned pin-spacers left from prior incomplete kills
    document.querySelectorAll(".pin-spacer").forEach((spacer) => {
      const child = spacer.querySelector(".skills-pin") || spacer.firstElementChild;
      if (child && spacer.parentNode) {
        spacer.parentNode.insertBefore(child, spacer);
        spacer.remove();
      }
    });

    gsap.set(track, { clearProps: "all" });
    gsap.set(pin, { clearProps: "all" });

    if (!desktop.matches || reduce) return;

    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
    skillsTrigger = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: pin,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.7,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  };

  setupCursor();
  setupMagnetic();
  heroIntro();
  heroSvgMotion();
  setupHeroMouseParallax();
  revealOnScroll();
  parallaxCards();
  artGallery();
  skillsHorizontal();

  let resizeTimer;
  let lastVw = window.innerWidth;
  let lastVh = window.innerHeight;
  let lastDesktop = desktop.matches;
  const onResize = (source = "resize") => {
    closeMenu();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (vw < 100 || vh < 100) return; // ignore transient 1x1 during device switches
      const widthDelta = Math.abs(vw - lastVw);
      const heightDelta = Math.abs(vh - lastVh);
      const desktopChanged = desktop.matches !== lastDesktop;
      const meaningful =
        source === "orientationchange" ||
        desktopChanged ||
        widthDelta > 4 ||
        heightDelta > 40;

      if (meaningful) {
        lastVw = vw;
        lastVh = vh;
        lastDesktop = desktop.matches;
        setupHeroMouseParallax();
        skillsHorizontal();
        flushHorizontalOverflow();
        ScrollTrigger.refresh();
        // Second refresh after layout paint — pin distances catch up without needing a user scroll
        requestAnimationFrame(() => {
          flushHorizontalOverflow();
          ScrollTrigger.refresh();
        });
      } else {
        ScrollTrigger.refresh();
      }
    }, 220);
  };

  window.addEventListener("resize", () => onResize("resize"));
  window.addEventListener("orientationchange", () => {
    // Wait for visual viewport to settle after rotate
    setTimeout(() => onResize("orientationchange"), 120);
  });

  document.addEventListener("portfolio:langchange", () => {
    closeMenu();
    // Text length changes pin distances — rebuild skills track & refresh triggers
    requestAnimationFrame(() => {
      skillsHorizontal();
      flushHorizontalOverflow();
      ScrollTrigger.refresh();
    });
  });

  // Refresh once assets (fonts, images) are loaded so trigger positions are correct
  window.addEventListener("load", () => {
    setupHeroMouseParallax();
    ScrollTrigger.refresh();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }
})();
