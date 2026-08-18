/**
 * 陈文明 | DevOps/SRE 个人简历
 * 交互脚本
 */

// ========================================
// 导航栏交互
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// 滚动时导航栏效果
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// 移动端菜单切换
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // 汉堡按钮动画
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // 点击链接后关闭菜单
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// ========================================
// 滚动动画观察器
// ========================================
const createObserver = (callback, threshold = 0.1) => {
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        entry.target.classList.add('visible');
      }
    });
  }, { threshold, rootMargin: '0px 0px -50px 0px' });
};

// 技能卡片动画
const skillObserver = createObserver((target) => {
  const skillBars = target.querySelectorAll('.skill-bar-fill');
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
}, 0.3);

document.querySelectorAll('.skill-card').forEach(card => {
  skillObserver.observe(card);
});

// 项目卡片动画
const projectObserver = createObserver((target) => {
  // 可以在这里添加项目特定的动画
}, 0.2);

document.querySelectorAll('.project-card').forEach(card => {
  projectObserver.observe(card);
});

// 时间线动画
const timelineObserver = createObserver((target) => {
  // 时间线项目进入视口
}, 0.2);

document.querySelectorAll('.timeline-item').forEach(item => {
  timelineObserver.observe(item);
});

// ========================================
// 高亮当前导航项
// ========================================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.style.color = 'var(--text-primary)';
      } else {
        navLink.style.color = '';
      }
    }
  });
};

window.addEventListener('scroll', highlightNav);

// ========================================
// 平滑滚动
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ========================================
// 终端打字机效果
// ========================================
const typeWriter = (element, text, speed = 50) => {
  let i = 0;
  element.textContent = '';

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  type();
};

// ========================================
// 鼠标悬停效果增强
// ========================================
document.querySelectorAll('.skill-card, .timeline-content, .contact-link-card').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ========================================
// 数字滚动动画
// ========================================
const animateValue = (element, start, end, duration = 2000) => {
  const range = end - start;
  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // 缓动函数
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const value = Math.floor(start + range * easeOutQuart);

    element.textContent = value + (element.dataset.suffix || '');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

// ========================================
// 背景 Canvas 粒子动画
// ========================================
const initBackground = () => {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const particles = [];
  const particleCount = 80;

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 2 + 1;
      this.color = `rgba(99, 102, 241, ${Math.random() * 0.3 + 0.1})`;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  // 初始化粒子
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // 连接粒子
  const connectParticles = () => {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  };

  // 动画循环
  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    connectParticles();
    requestAnimationFrame(animate);
  };

  animate();

  // 窗口大小改变时重置
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
};

// ========================================
// 页面加载完成
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('简历页面已加载 - DevOps/SRE 科技未来感设计');

  // 初始化背景动画
  initBackground();

  // 页面淡入效果
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';

  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  // 终端打字机效果（可选）
  const terminalCommands = document.querySelectorAll('.terminal-line .command');
  terminalCommands.forEach((cmd, index) => {
    const text = cmd.textContent;
    setTimeout(() => {
      typeWriter(cmd, text, 50);
    }, 1000 + index * 800);
  });
});

// ========================================
// 键盘导航支持
// ========================================
document.addEventListener('keydown', (e) => {
  // ESC 关闭移动菜单
  if (e.key === 'Escape') {
    navLinks?.classList.remove('active');
    if (navToggle) {
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  }
});
