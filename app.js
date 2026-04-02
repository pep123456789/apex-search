/* ============================================================
   APEX SEARCH — JavaScript Application
   ============================================================ */

'use strict';

/* ─── Data ─── */
const POSITIONS = [
  {
    id: 1,
    title: '首席技术官 CTO',
    company: '某头部 AI 独角兽企业',
    industry: '科技',
    level: 'C-Suite',
    city: '上海',
    comp: '薪酬区间：200-400万/年',
    desc: '负责公司技术战略规划与执行，领导超500人工程团队，推动AI核心产品的持续创新与技术平台升级。要求在大规模AI/ML系统架构及商业化落地方面具备成功经验。',
    requirements: ['15年以上技术领导经验', '主导过大规模工程团队（200人以上）', '具备AI/ML领域深度技术背景', '有成功推动IPO或大型融资经验者优先'],
    tags: ['AI / 机器学习', '技术战略', '组织管理']
  },
  {
    id: 2,
    title: '中国区总裁',
    company: '某全球顶级跨国消费品集团',
    industry: '消费',
    level: 'C-Suite',
    city: '上海',
    comp: '薪酬区间：300-600万/年',
    desc: '全面负责中国市场的战略制定与P&L管控，管理10,000+员工规模的本土化组织，驱动品牌在中国市场的数字化转型与渠道重构。',
    requirements: ['在跨国集团中国区核心管理岗位10年以上经验', '成功带领团队实现超两位数增长', '深刻理解中国消费市场与数字生态', '流利双语（中英）沟通能力'],
    tags: ['P&L管控', '数字化转型', '消费市场']
  },
  {
    id: 3,
    title: '首席财务官 CFO',
    company: '某Pre-IPO金融科技企业',
    industry: '金融',
    level: 'C-Suite',
    city: '北京',
    comp: '薪酬区间：300-500万/年',
    desc: '主导公司IPO前财务体系搭建，统筹资本市场运作、融资对接与投资者关系，协同CEO推进境外上市进程，并建立符合上市标准的内控体系。',
    requirements: ['具备在A股、港股或美股上市的亲历经验', '熟悉金融科技行业监管环境', '有跨境资本运作成功案例', '拥有CPA/CFA等专业资质优先'],
    tags: ['资本运作', 'IPO', '金融科技']
  },
  {
    id: 4,
    title: '投资合伙人',
    company: '某顶级美元基金',
    industry: '私募',
    level: 'VP',
    city: '上海',
    comp: '薪酬面议 + Carry',
    desc: '主导消费与品牌赛道的项目源头开发与投资决策，管理已投项目，深度参与投后赋能，驱动组合公司的价值创造。',
    requirements: ['顶级PE/VC机构8年以上投资经验', '在消费、品牌或新零售赛道有成功退出案例', '具备强大的本土资源网络', '顶尖高校MBA或相关学历背景'],
    tags: ['私募投资', '消费赛道', '投后管理']
  },
  {
    id: 5,
    title: '医疗事业部总经理',
    company: '某全球领先医疗器械企业',
    industry: '医疗',
    level: 'VP',
    city: '上海',
    comp: '薪酬区间：150-280万/年',
    desc: '全面负责心血管产品线的中国区业务，包括销售策略制定、KOL资源管理与团队建设，实现既定收入增长目标，推动创新产品的市场准入与推广。',
    requirements: ['在三级甲等医院及心血管领域拥有深厚资源', '带领100人以上大区销售团队经验', '熟悉医疗器械NMPA注册与定价政策', '医学、药学或相关专业背景优先'],
    tags: ['医疗器械', '心血管', '大区管理']
  },
  {
    id: 6,
    title: '人力资源总监 CHRO',
    company: '某快速扩张的新能源企业',
    industry: '科技',
    level: 'C-Suite',
    city: '深圳',
    comp: '薪酬区间：120-220万/年',
    desc: '在公司快速扩张阶段，构建并主导人才战略，覆盖人才获取、组织发展、绩效体系与企业文化建设，支撑公司从3,000人向10,000人规模的跨越式增长。',
    requirements: ['主导过高速增长型企业的人才体系建设', '具备制造业或新能源行业背景优先', '在组织设计与变革管理方面有实战经验', '出色的跨部门协作与高层影响力'],
    tags: ['组织发展', '人才战略', '新能源']
  }
];

const TESTIMONIALS = [
  {
    text: 'Apex Search 对我们行业的理解之深令人信服。他们在不到两个月内就为我们找到了一位改变公司轨迹的 CTO——不仅仅是匹配简历，而是真正理解我们需要什么样的领导者。',
    name: '张伟明',
    title: '董事长 & CEO · 某科技集团',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&fm=jpg&fit=crop&crop=faces'
  },
  {
    text: '在我职业生涯最关键的一次转型中，Apex 的顾问不仅帮我找到了匹配的平台，更给予了极具价值的职业建议。这种超越交易的长期关系，是我选择他们的原因。',
    name: 'Jennifer Lee',
    title: 'CFO · 某医疗健康上市公司',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&q=80&fm=jpg&fit=crop&crop=faces'
  },
  {
    text: '我们在短短18个月内完成了整个管理团队的重建，这在我职业生涯中是前所未有的。Apex 展现出的执行力和专业度，让我们的董事会印象深刻。',
    name: 'Robert Wu',
    title: 'Managing Partner · 某知名私募基金',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&q=80&fm=jpg&fit=crop&crop=faces'
  }
];

/* ─── Navigation ─── */
const nav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ─── Smooth Anchor Scroll ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ─── Positions Rendering ─── */
let currentFilters = { query: '', industry: '', level: '', city: '' };

function renderPositions() {
  const list = document.getElementById('positionsList');
  const q = currentFilters.query.toLowerCase();
  const filtered = POSITIONS.filter(p => {
    const matchQ = !q || p.title.toLowerCase().includes(q) || p.industry.toLowerCase().includes(q) || p.city.toLowerCase().includes(q);
    const matchI = !currentFilters.industry || p.industry === currentFilters.industry;
    const matchL = !currentFilters.level || p.level === currentFilters.level;
    const matchC = !currentFilters.city || p.city === currentFilters.city;
    return matchQ && matchI && matchL && matchC;
  });

  if (filtered.length === 0) {
    list.innerHTML = `
      <div style="padding:3rem 2.5rem; text-align:center; background:#fff; color:#909090;">
        <p style="font-size:1rem;">暂无符合条件的职位，欢迎提交简历进入人才库。</p>
      </div>`;
    return;
  }

  list.innerHTML = filtered.map(p => `
    <div class="position-card reveal" data-id="${p.id}" role="button" tabindex="0" aria-label="查看 ${p.title} 职位详情">
      <div>
        <div class="position-card__meta">
          <span class="position-card__tag">${p.industry}</span>
          <span class="position-card__level">${p.level}</span>
        </div>
        <h3>${p.title}</h3>
        <div class="position-card__info">
          <span>📍 ${p.city}</span>
          <span>💼 ${p.company}</span>
          <span>💰 ${p.comp}</span>
        </div>
      </div>
      <div class="position-card__cta">查看详情 →</div>
    </div>
  `).join('');

  // Re-attach click listeners
  list.querySelectorAll('.position-card').forEach(card => {
    card.addEventListener('click', () => openJobModal(parseInt(card.dataset.id)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') openJobModal(parseInt(card.dataset.id));
    });
  });

  observeReveal();
}

// Search & filter listeners
document.getElementById('searchInput').addEventListener('input', e => {
  currentFilters.query = e.target.value;
  renderPositions();
});
document.getElementById('filterIndustry').addEventListener('change', e => {
  currentFilters.industry = e.target.value;
  renderPositions();
});
document.getElementById('filterLevel').addEventListener('change', e => {
  currentFilters.level = e.target.value;
  renderPositions();
});
document.getElementById('filterCity').addEventListener('change', e => {
  currentFilters.city = e.target.value;
  renderPositions();
});

/* ─── Job Modal ─── */
const modal = document.getElementById('jobModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function openJobModal(id) {
  const p = POSITIONS.find(pos => pos.id === id);
  if (!p) return;
  modalContent.innerHTML = `
    <div style="margin-bottom:2rem;">
      <div style="display:flex;gap:.5rem;margin-bottom:1rem;flex-wrap:wrap;">
        <span class="position-card__tag">${p.industry}</span>
        <span class="position-card__level">${p.level}</span>
      </div>
      <h2 style="font-size:1.75rem;margin-bottom:.5rem;">${p.title}</h2>
      <p style="color:#5A5A5A;font-size:.9rem;">${p.company} · ${p.city}</p>
    </div>
    <div style="margin-bottom:2rem;padding:1.25rem;background:#F7F5F2;border-left:3px solid #B8922A;">
      <p style="font-size:.9rem;color:#5A5A5A;line-height:1.85;">${p.desc}</p>
    </div>
    <div style="margin-bottom:2rem;">
      <h4 style="font-size:.875rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1rem;color:#0A0A0A;">任职要求</h4>
      <ul style="display:flex;flex-direction:column;gap:.625rem;">
        ${p.requirements.map(r => `
          <li style="display:flex;gap:.75rem;font-size:.9rem;color:#5A5A5A;line-height:1.7;">
            <span style="color:#B8922A;flex-shrink:0;font-size:.75rem;margin-top:.35rem;">▸</span>
            ${r}
          </li>
        `).join('')}
      </ul>
    </div>
    <div style="margin-bottom:2rem;">
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
        ${p.tags.map(t => `<span style="font-size:.75rem;padding:.35rem .875rem;background:#F0EDE8;color:#5A5A5A;letter-spacing:.05em;">${t}</span>`).join('')}
      </div>
    </div>
    <div style="padding:1.5rem;background:#0A0A0A;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
      <div>
        <p style="color:rgba(255,255,255,.5);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.25rem;">薪酬参考</p>
        <p style="color:#fff;font-weight:600;">${p.comp}</p>
      </div>
      <a href="#contact" class="btn btn--primary" onclick="closeModal()">私下咨询此职位</a>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── Testimonial Carousel ─── */
let currentTestimonial = 0;

function setTestimonial(idx) {
  const t = TESTIMONIALS[idx];
  const textEl = document.getElementById('testimonialText');
  const nameEl = document.getElementById('testimonialName');
  const titleEl = document.getElementById('testimonialTitle');
  const avatarEl = document.querySelector('.testimonial__author img');

  // Fade out
  textEl.style.opacity = '0';
  setTimeout(() => {
    textEl.textContent = t.text;
    nameEl.textContent = t.name;
    titleEl.innerHTML = t.title;
    avatarEl.src = t.avatar;
    textEl.style.opacity = '1';
    textEl.style.transition = 'opacity .4s';
  }, 250);

  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });

  currentTestimonial = idx;
}

document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => setTestimonial(parseInt(dot.dataset.idx)));
});

// Auto-advance
setInterval(() => {
  setTestimonial((currentTestimonial + 1) % TESTIMONIALS.length);
}, 5000);

/* ─── Number Counter Animation ─── */
function animateCounter(el, target) {
  const sup = el.querySelector('sup');
  const suffix = sup ? sup.outerHTML : '';
  let start = 0;
  const duration = 1800;
  const step = (timestamp) => {
    if (!el._startTime) el._startTime = timestamp;
    const progress = Math.min((timestamp - el._startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    start = Math.round(eased * target);
    el.innerHTML = start.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ─── Intersection Observer (Reveal + Counter) ─── */
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function observeCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        const valEl = entry.target.querySelector('.number-item__val');
        if (valEl && !entry.target._animated) {
          entry.target._animated = true;
          animateCounter(valEl, target);
        }
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.number-item[data-target]').forEach(el => io.observe(el));
}

/* ─── Contact Form ─── */
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = '发送中...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '发送咨询请求';
    btn.disabled = false;
    contactForm.reset();
    showToast();
  }, 1200);
});

function showToast() {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
}

/* ─── Add Reveal Classes to Key Sections ─── */
function addRevealClasses() {
  const selectors = [
    '.service-card', '.position-card', '.case-card',
    '.step', '.team-member', '.number-item',
    '.section-header', '.approach__intro'
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 3 === 1) el.classList.add('reveal-delay-1');
      if (i % 3 === 2) el.classList.add('reveal-delay-2');
    });
  });
}

/* ─── Init ─── */
addRevealClasses();
renderPositions();
observeReveal();
observeCounters();
