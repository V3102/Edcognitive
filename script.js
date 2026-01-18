const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{threshold:0.2});

reveals.forEach(r=>observer.observe(r));

document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const data = {
    username: form.querySelector('input[name="username"]').value.trim(),
    email: form.querySelector('input[name="email"]').value.trim(),
    message: form.querySelector('textarea[name="message"]').value.trim(),
  };

  try {
    const res = await fetch('/api/form/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const json = await res.json().catch(() => ({}));

    if (res.ok) {
      alert(json.message || 'Thanks for reaching out! I’ll reply soon.');
      form.reset();
    } else {
      alert(json.message || 'Failed to send message. Please try again later.');
    }
  } catch (err) {
    console.error('Contact form submit error:', err);
    alert('Network error: could not send message.');
  }
});
