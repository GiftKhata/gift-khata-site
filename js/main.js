// GiftKhata — client-side enhancements
// Core JS (theme, nav, GA) lives in src/_includes/scripts.njk
// Add any additional page-specific JS modules here

// Scroll reveal — used on landing page
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

// Mail compose modal (Reach Us section)
function openMailModal() {
  document.getElementById('mailBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMailModal() {
  document.getElementById('mailBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}
function sendEmail() {
  const name    = document.getElementById('mailName').value.trim();
  const subject = document.getElementById('mailSubject').value.trim() || 'Support Request – GiftKhata';
  const message = document.getElementById('mailMessage').value.trim();
  const body    = (name ? 'Hi GiftKhata Team,\n\nThis is ' + name + '.\n\n' : '') + message;
  window.location.href = 'mailto:support@giftkhata.com'
    + '?subject=' + encodeURIComponent(subject)
    + '&body='    + encodeURIComponent(body);
}
function copyEmail() {
  navigator.clipboard.writeText('support@giftkhata.com').then(() => {
    const btn = document.getElementById('copyEmailBtn');
    btn.innerHTML = '<i class="fa fa-check"></i>';
    btn.style.color = '#10B981';
    setTimeout(() => {
      btn.innerHTML = '<i class="fa fa-copy"></i>';
      btn.style.color = '';
    }, 2000);
  });
}
