/* ═══════════════════════════════════════════════
   SA Real Estate – Shared JavaScript
   ═══════════════════════════════════════════════ */

// WhatsApp numbers
const WA1 = '923155881733';
const WA2 = '923165662698';

// WhatsApp SVG icon (fill="white")
const waSvg = `<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// Build WhatsApp link
function waLink(number, msg) {
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}

// Floating WhatsApp popup toggle
function initFloatingWA() {
  const btn = document.getElementById('floatWaBtn');
  const opts = document.getElementById('waOptions');
  if (!btn || !opts) return;
  btn.addEventListener('click', () => {
    opts.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !opts.contains(e.target)) {
      opts.classList.remove('open');
    }
  });
}

// Mobile nav toggle
function initMobileNav() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!ham || !menu) return;
  ham.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// Sticky nav style
function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const update = () => {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(13,27,42,0.97)';
    } else {
      nav.style.background = 'rgba(13,27,42,0.90)';
    }
  };
  window.addEventListener('scroll', update);
  update();
}

// Create and append custom WA modal dynamically
function createWaModal() {
  if (document.getElementById('waModal')) return;
  const modalHtml = `
    <div class="wa-modal-content">
      <button class="wa-modal-close" id="waModalCloseBtn">&times;</button>
      <h3>Chat on WhatsApp</h3>
      <p id="waModalSubtitle">Select who you would like to contact:</p>
      <div class="wa-modal-founders">
        <!-- Saifullah -->
        <div class="wa-modal-founder-card">
          <div class="wa-modal-founder-photo">
            <img src="images/saif.enc" alt="Saifullah">
          </div>
          <div class="wa-modal-founder-info">
            <h4>Saifullah</h4>
            <span>Co-Founder & Director</span>
          </div>
          <a id="waModalLinkSaif" href="#" class="wa-modal-chat-btn" target="_blank">
            <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat with Saifullah
          </a>
        </div>
        <!-- Ayan -->
        <div class="wa-modal-founder-card">
          <div class="wa-modal-founder-photo">
            <img src="images/ayan khan.jpg" alt="Muhammad Ayan Khan">
          </div>
          <div class="wa-modal-founder-info">
            <h4>Muhammad Ayan Khan</h4>
            <span>Co-Founder & CEO</span>
          </div>
          <a id="waModalLinkAyan" href="#" class="wa-modal-chat-btn" target="_blank">
            <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat with Ayan
          </a>
        </div>
      </div>
    </div>
  `;
  const modal = document.createElement('div');
  modal.id = 'waModal';
  modal.className = 'wa-modal';
  modal.innerHTML = modalHtml;
  document.body.appendChild(modal);

  // Close event listeners
  const closeBtn = document.getElementById('waModalCloseBtn');
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
}

// Open WA modal with custom message
window.openWaModal = function(msg) {
  createWaModal();
  const modal = document.getElementById('waModal');
  if (!modal) return;
  const linkSaif = document.getElementById('waModalLinkSaif');
  const linkAyan = document.getElementById('waModalLinkAyan');
  if (linkSaif && linkAyan) {
    // WA2 is Saifullah (0316-5622698), WA1 is Ayan Khan (0315-5881733)
    linkSaif.href = waLink(WA2, msg || 'Hello Saifullah, I want to discuss a property.');
    linkAyan.href = waLink(WA1, msg || 'Hello Ayan, I want to discuss a property.');
  }
  modal.classList.add('open');
};

// Contact form → WhatsApp redirect
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('[name=name]')?.value || '';
    const phone = form.querySelector('[name=phone]')?.value || '';
    const interest = form.querySelector('[name=interest]')?.value || 'property';
    const area = form.querySelector('[name=area]')?.value || '';
    const msg = form.querySelector('[name=message]')?.value || '';
    const text = `Hello SA Real Estate,\n\nMy name is ${name}.\nPhone: ${phone}\nInterest: ${interest}\nArea: ${area}\n\nMessage: ${msg}`;
    window.openWaModal(text);
  });
}

// Property inquiry shortcut
function inquire(title, price) {
  const text = `Hello SA Real Estate,\n\nI am interested in:\n*${title}*\nPrice: ${price}\n\nPlease share more details.`;
  window.openWaModal(text);
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
  createWaModal();
  initFloatingWA();
  initMobileNav();
  initNavScroll();
  initContactForm();
});
