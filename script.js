// Typing animation (simple)
const lines = [
  "Learning Web Development (HTML, CSS, JS)",
  "Practicing Python for AI/ML",
  "Building projects & getting internship-ready"
];

let curLine = 0;
let curChar = 0;
const typedEl = document.getElementById('typed');
const cursor = document.querySelector('.cursor');

function typeStep() {
  if (!typedEl) return;
  if (curChar <= lines[curLine].length) {
    typedEl.textContent = lines[curLine].slice(0, curChar);
    curChar++;
    setTimeout(typeStep, 40);
  } else {
    // pause, then delete
    setTimeout(() => {
      deleteStep();
    }, 1000);
  }
}
function deleteStep() {
  if (!typedEl) return;
  if (curChar >= 0) {
    typedEl.textContent = lines[curLine].slice(0, curChar);
    curChar--;
    setTimeout(deleteStep, 25);
  } else {
    curLine = (curLine + 1) % lines.length;
    setTimeout(typeStep, 200);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  typeStep();
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Contact form handling
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const mailtoBtn = document.getElementById('mailtoBtn');

if (form) {
  form.addEventListener('submit', async (e) => {
    // Prevent default if no formspree endpoint is set
    const action = form.getAttribute('action') || '';
    if (!action || action.includes('YOUR_FORMSPREE_ENDPOINT')) {
      e.preventDefault();
      formStatus.textContent = 'Please set your Formspree endpoint in index.html or use "Open Mail Client".';
      return;
    }
    formStatus.textContent = 'Sending…';
    // simple fetch post to Formspree
    try {
      const formData = new FormData(form);
      const res = await fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        formStatus.textContent = 'Message sent — I will reply soon. Thank you!';
        form.reset();
      } else {
        const data = await res.json();
        formStatus.textContent = data?.error || 'Something went wrong. Try using "Open Mail Client".';
      }
    } catch (err) {
      formStatus.textContent = 'Network error. Use the "Open Mail Client" button.';
    }
  });
}

// mailto fallback
if (mailtoBtn) {
  mailtoBtn.addEventListener('click', () => {
    const name = form.querySelector('input[name="name"]').value || 'No name';
    const email = form.querySelector('input[name="email"]').value || 'noemail@example.com';
    const message = form.querySelector('textarea[name="message"]').value || '';
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:YOUR_EMAIL_HERE?subject=${subject}&body=${body}`;
  });
}
