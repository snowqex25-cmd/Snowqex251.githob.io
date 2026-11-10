// แก้ชื่อ คำอวยพร และรูปถ่ายตรงนี้ เพื่อทำให้เป็นเรื่องราวของคุณสองคน
const birthdaySettings = {
  partnerName: "คนเก่ง",
  senderName: "คนที่รักเธอ",
  memoryDate: "วันที่มีเธออยู่ข้าง ๆ",
  cakeWish: "ขอให้ปีนี้เป็นปีที่เธอยิ้มได้เยอะที่สุดเลยนะ ♡",
  memorySecret: "เซอร์ไพรส์เล็ก ๆ: ไม่ว่าจะผ่านไปกี่วัน เค้าก็ยังเลือกเธอเป็นคนพิเศษที่สุดเสมอ ♡",
  giftMessages: [
    "ขอให้ปีนี้มีแต่เรื่องที่ทำให้เธอยิ้มได้นะ 💗",
    "เธอสมควรได้รับความรักดี ๆ ในทุกวันเลยนะ",
    "วันที่เหนื่อยยังมีเค้าอยู่ข้าง ๆ เสมอนะ",
    "ขอให้ความฝันทุกอย่างของเธอค่อย ๆ เป็นจริงนะ ✨",
    "ของขวัญชิ้นใหญ่ที่สุดของเค้าก็คือการมีเธอ 💞",
  ],
  letter: [
    "สุขสันต์วันเกิดนะคนเก่งของเค้า 💗",
    "ขอบคุณที่เข้ามาทำให้วันธรรมดา ๆ มีความหมาย และทำให้เค้ามีเรื่องให้ยิ้มได้เสมอ",
    "ขอให้ปีใหม่นี้ของเธอเต็มไปด้วยความสุข ความสบายใจ และสิ่งดี ๆ ที่เธอสมควรได้รับ ถ้าวันไหนเหนื่อยก็พักก่อนได้นะ เค้าจะอยู่ตรงนี้คอยเชียร์เธอเสมอเลย",
    "รักเธอที่สุดเลยนะ — จากคนที่อยากเห็นเธอยิ้มทุกวัน ♡",
  ].join("\n\n"),
  // เพิ่มรูปไว้ในโฟลเดอร์ images แล้วใส่ path เช่น "images/us-1.jpg"
  memoryPhotos: [
    "images/memory-01.png",
    "images/memory-02.png",
    "images/memory-03.jpg",
    "images/memory-04.png",
  ],
  memoryCaptions: [
    "รอยยิ้มนี้เป็นรูปโปรดของเค้าเลย ♡",
    "วันนั้นมีความสุขมาก อยากไปด้วยกันอีก",
    "เห็นรูปนี้ทีไรก็คิดถึงเธอ",
    "จะเก็บความทรงจำนี้ไว้เสมอนะ",
  ],
};

document.querySelectorAll("[data-partner-name]").forEach((element) => {
  element.textContent = birthdaySettings.partnerName;
});
document.querySelectorAll("[data-sender-name]").forEach((element) => {
  element.textContent = birthdaySettings.senderName;
});
document.querySelectorAll("[data-memory-date]").forEach((element) => {
  element.textContent = birthdaySettings.memoryDate;
});
document.title = `สุขสันต์วันเกิดนะ ${birthdaySettings.partnerName} ♡`;

const cakeButton = document.querySelector("#cake-button");
const cakeMessage = document.querySelector("#cake-message");
cakeButton?.addEventListener("click", () => {
  if (cakeButton.getAttribute("aria-pressed") === "true") return;
  cakeButton.setAttribute("aria-pressed", "true");
  cakeButton.setAttribute("aria-label", "เป่าเทียนแล้ว ขอให้พรเป็นจริงนะ");
  cakeButton.classList.add("is-blown");
  cakeMessage.textContent = birthdaySettings.cakeWish;
  cakeMessage.classList.add("is-revealed");
});

const birthdayMusic = document.querySelector("#birthday-music");
const musicToggle = document.querySelector("#music-toggle");
const musicToggleLabel = document.querySelector("#music-toggle-label");
musicToggle?.addEventListener("click", async () => {
  if (birthdayMusic.paused) {
    try {
      await birthdayMusic.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicToggle.setAttribute("aria-label", "ปิดเพลงประกอบ");
      musicToggleLabel.textContent = "ปิดเพลง";
    } catch {
      musicToggleLabel.textContent = "เล่นเพลงไม่ได้";
    }
    return;
  }

  birthdayMusic.pause();
  musicToggle.setAttribute("aria-pressed", "false");
  musicToggle.setAttribute("aria-label", "เปิดเพลงประกอบ");
  musicToggleLabel.textContent = "เปิดเพลง";
});

const screens = [...document.querySelectorAll(".story-screen")];
function showScreen(id) {
  screens.forEach((screen) => {
    const active = screen.id === id;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
  });
  if (id === "finale") startCosmos();
}

document.querySelector("#begin-button")?.addEventListener("click", () => showScreen("gifts"));

const giftCards = [...document.querySelectorAll("[data-gift]")];
const giftMessage = document.querySelector("#gift-message");
const memoryButton = document.querySelector("#memory-button");
giftCards.forEach((card) => {
  card.addEventListener("click", () => {
    giftCards.forEach((item) => item.setAttribute("aria-pressed", String(item === card)));
    const giftIndex = Number(card.dataset.gift);
    giftMessage.textContent = birthdaySettings.giftMessages[giftIndex] || "ขอให้วันนี้เป็นวันที่น่ารักสำหรับเธอนะ ♡";
    memoryButton.disabled = false;
  });
});
memoryButton?.addEventListener("click", () => showScreen("memory"));
document.querySelector("#finale-button")?.addEventListener("click", () => showScreen("finale"));
document.querySelector("#replay-button")?.addEventListener("click", () => showScreen("intro"));

const birthdayLetter = document.querySelector("#birthday-letter");
const letterToggle = document.querySelector("#letter-toggle");
if (birthdayLetter) birthdayLetter.textContent = birthdaySettings.letter;
letterToggle?.addEventListener("click", () => {
  const isOpen = letterToggle.getAttribute("aria-expanded") === "true";
  letterToggle.setAttribute("aria-expanded", String(!isOpen));
  birthdayLetter.hidden = isOpen;
  letterToggle.textContent = isOpen ? "อ่านข้อความจากใจ" : "ซ่อนข้อความ ♡";
});

document.querySelectorAll(".memory-photo").forEach((frame, index) => {
  const source = birthdaySettings.memoryPhotos[index];
  if (!source) return;
  const image = document.createElement("img");
  image.src = source;
  image.alt = `ภาพความทรงจำที่ ${index + 1}`;
  const caption = document.createElement("span");
  caption.className = "memory-reveal";
  caption.textContent = birthdaySettings.memoryCaptions[index] || "ขอบคุณที่มีเธออยู่ในความทรงจำนี้นะ ♡";
  caption.setAttribute("aria-hidden", "true");
  frame.classList.add("has-photo");
  frame.setAttribute("aria-label", `แตะเพื่ออ่านข้อความความทรงจำภาพที่ ${index + 1}`);
  frame.replaceChildren(image, caption);
  frame.addEventListener("click", () => {
    const expanded = frame.getAttribute("aria-expanded") === "true";
    frame.setAttribute("aria-expanded", String(!expanded));
    frame.setAttribute("aria-label", `${expanded ? "แตะเพื่ออ่านข้อความ" : "ซ่อนข้อความ"} ความทรงจำภาพที่ ${index + 1}`);
    caption.setAttribute("aria-hidden", String(expanded));
  });
});

const memoryPhotoFrames = [...document.querySelectorAll(".memory-photo")];
const openedMemoryPhotos = new Set();
const memorySecret = document.querySelector("#memory-secret");
if (memorySecret) memorySecret.textContent = birthdaySettings.memorySecret;
memoryPhotoFrames.forEach((frame) => {
  frame.addEventListener("click", () => {
    if (frame.getAttribute("aria-expanded") !== "true") return;
    openedMemoryPhotos.add(frame);
    if (openedMemoryPhotos.size === memoryPhotoFrames.length && memorySecret?.hidden) {
      memorySecret.hidden = false;
      requestAnimationFrame(() => memorySecret.classList.add("is-revealed"));
    }
  });
});

function startCosmos() {
  const canvas = document.querySelector("#cosmos");
  const ctx = canvas?.getContext("2d", { alpha: true });
  if (!canvas || !ctx) return;
  if (canvas.dataset.started === "true") {
    canvas.resumeAnimation?.();
    return;
  }
  canvas.dataset.started = "true";

  const motionScale = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? .42 : 1;
  const colors = ["255,157,224", "255,211,249", "199,144,255", "255,236,255", "192,162,255"];
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let time = 0;
  let lastFrameTime = 0;
  let stars = [];
  let galaxy = [];
  let heart = [];
  let stream = [];
  let shootingStar = null;
  let nextShootingStarAt = 7 + Math.random() * 6;

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    if (!width || !height) return;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    stars = Array.from({ length: Math.min(240, Math.floor(width * height / 3200)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + .2,
      alpha: Math.random() * .7 + .12,
      phase: Math.random() * Math.PI * 2,
    }));
    const particleCount = Math.min(1800, Math.floor(width * height / 420));
    galaxy = Array.from({ length: particleCount }, (_, index) => ({
      arm: index % 4,
      radius: Math.sqrt(Math.random()),
      size: Math.random() * 1.4 + .4,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * .22 + .08,
      color: colors[index % colors.length],
    }));
    const heartCount = Math.min(720, Math.max(320, Math.floor(width * .48)));
    heart = Array.from({ length: heartCount }, (_, index) => {
      const outlineCount = Math.floor(heartCount * .72);
      return {
        angle: Math.random() * Math.PI * 2,
        radius: index < outlineCount ? .98 + (Math.random() - .5) * .09 : Math.sqrt(Math.random()) * .96,
        size: Math.random() * 1.4 + .35,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * .8 + .3,
        color: colors[index % colors.length],
      };
    });
    stream = Array.from({ length: Math.min(150, Math.floor(width * .16)) }, (_, index) => ({
      progress: Math.random(),
      sway: Math.random() * Math.PI * 2,
      size: Math.random() * 1.7 + .35,
      color: colors[index % colors.length],
    }));
    draw();
  }

  function heartPoint(angle) {
    const x = 16 * Math.sin(angle) ** 3 / 16;
    const y = (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)) / 17;
    return [x, -y];
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const centerX = width * .5;
    const galaxyY = height * .745;
    const galaxyRadiusX = width * .465;
    const galaxyRadiusY = Math.min(height * .255, width * .25);
    const heartSize = Math.min(width * .0095, height * .0145, 15);
    const heartCenterY = height * .465;
    const pulse = 1 + Math.sin(time * 1.5) * .045;

    const skyGlow = ctx.createRadialGradient(centerX, galaxyY, 1, centerX, galaxyY, Math.min(width, height) * .56);
    skyGlow.addColorStop(0, "rgba(108,36,134,.15)");
    skyGlow.addColorStop(1, "rgba(5,4,11,0)");
    ctx.fillStyle = skyGlow;
    ctx.fillRect(0, 0, width, height);

    for (const star of stars) {
      const alpha = star.alpha * (.58 + .42 * Math.sin(time * .7 + star.phase));
      ctx.fillStyle = `rgba(241,220,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!shootingStar && time >= nextShootingStarAt) {
      const angle = .38 + Math.random() * .2;
      const distance = Math.min(190, Math.max(115, width * .17));
      shootingStar = {
        startAt: time,
        x: width * (.12 + Math.random() * .52),
        y: height * (.08 + Math.random() * .22),
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        angle,
        duration: .8 + Math.random() * .25,
        length: 46 + Math.random() * 30,
      };
      nextShootingStarAt = time + 17 + Math.random() * 13;
    }
    if (shootingStar) {
      const progress = (time - shootingStar.startAt) / shootingStar.duration;
      if (progress <= 1) {
        const x = shootingStar.x + shootingStar.dx * progress;
        const y = shootingStar.y + shootingStar.dy * progress;
        const tailX = x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = y - Math.sin(shootingStar.angle) * shootingStar.length;
        const glow = Math.sin(progress * Math.PI);
        const trail = ctx.createLinearGradient(tailX, tailY, x, y);
        trail.addColorStop(0, "rgba(223,174,255,0)");
        trail.addColorStop(.72, `rgba(255,190,240,${glow * .8})`);
        trail.addColorStop(1, `rgba(255,255,255,${glow})`);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillStyle = `rgba(255,245,255,${glow})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.35, 0, Math.PI * 2);
        ctx.fill();
      } else {
        shootingStar = null;
      }
    }

    ctx.save();
    const ringPulse = 1 + Math.sin(time * 1.1) * .13;
    const ringRotation = -.035;
    const ringSizes = [.36, .57, .78, .97];
    ctx.lineWidth = Math.max(1, width * .0013 * ringPulse);
    for (const ring of ringSizes) {
      const breathe = 1 + Math.sin(time * .65 + ring * 7) * .012;
      const stroke = ctx.createLinearGradient(centerX - galaxyRadiusX * ring, galaxyY, centerX + galaxyRadiusX * ring, galaxyY);
      stroke.addColorStop(0, "rgba(177,118,255,.05)");
      stroke.addColorStop(.28, "rgba(240,131,255,.27)");
      stroke.addColorStop(.5, "rgba(255,214,255,.34)");
      stroke.addColorStop(.72, "rgba(255,104,212,.22)");
      stroke.addColorStop(1, "rgba(177,118,255,.04)");
      ctx.strokeStyle = stroke;
      ctx.shadowColor = "rgba(238,104,255,.62)";
      ctx.shadowBlur = 10 + ringPulse * 4;
      ctx.beginPath();
      ctx.ellipse(centerX, galaxyY, galaxyRadiusX * ring * breathe, galaxyRadiusY * ring * breathe, ringRotation, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.lineWidth = Math.max(1.2, width * .0018);
    ctx.shadowColor = "rgba(255,183,245,.9)";
    ctx.shadowBlur = 9;
    ringSizes.forEach((ring, index) => {
      const breathe = 1 + Math.sin(time * .65 + ring * 7) * .012;
      const angle = time * (.56 - index * .055) + index * 1.8;
      ctx.strokeStyle = "rgba(255,220,255,.82)";
      ctx.beginPath();
      ctx.ellipse(centerX, galaxyY, galaxyRadiusX * ring * breathe, galaxyRadiusY * ring * breathe, ringRotation, angle, angle + .32);
      ctx.stroke();
    });
    ctx.restore();

    ctx.globalCompositeOperation = "lighter";
    ctx.shadowBlur = 0;
    for (const particle of galaxy) {
      const radius = particle.radius;
      const angle = particle.arm * Math.PI * .5 + radius * 15.5 + time * particle.speed;
      const spread = .94 + .06 * Math.sin(particle.phase);
      const x = centerX + Math.cos(angle) * radius * galaxyRadiusX * spread;
      const y = galaxyY + Math.sin(angle) * radius * galaxyRadiusY * spread;
      const shimmer = .34 + .66 * Math.abs(Math.sin(time * 1.7 + particle.phase));
      ctx.fillStyle = `rgba(${particle.color},${shimmer * (1 - radius * .28)})`;
      ctx.beginPath();
      ctx.arc(x, y, particle.size * (1.1 - radius * .35), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";

    const coreGlow = ctx.createRadialGradient(centerX, galaxyY, 1, centerX, galaxyY, Math.min(width, height) * .19);
    coreGlow.addColorStop(0, "rgba(255,241,255,.96)");
    coreGlow.addColorStop(.045, "rgba(255,185,244,.84)");
    coreGlow.addColorStop(.15, "rgba(255,64,197,.38)");
    coreGlow.addColorStop(1, "rgba(176,60,255,0)");
    ctx.shadowBlur = 0;
    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.ellipse(centerX, galaxyY, galaxyRadiusX * .31, galaxyRadiusY * .5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(14,7,21,.9)";
    ctx.beginPath();
    ctx.ellipse(centerX, galaxyY, 8, 3.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff5ff";
    ctx.shadowColor = "#ffb1ed";
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.ellipse(centerX, galaxyY, 2.4, 1.3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    const heartGlow = ctx.createRadialGradient(centerX, heartCenterY, 1, centerX, heartCenterY, heartSize * 2.1);
    heartGlow.addColorStop(0, "rgba(255,118,218,.2)");
    heartGlow.addColorStop(.42, "rgba(230,94,255,.09)");
    heartGlow.addColorStop(1, "rgba(170,72,255,0)");
    ctx.fillStyle = heartGlow;
    ctx.beginPath();
    ctx.ellipse(centerX, heartCenterY, heartSize * 1.8, heartSize * 1.7, 0, 0, Math.PI * 2);
    ctx.fill();

    const heartRotation = Math.sin(time * .42) * .045;
    const heartCos = Math.cos(heartRotation);
    const heartSin = Math.sin(heartRotation);
    ctx.globalCompositeOperation = "lighter";
    for (const particle of heart) {
      const [baseX, baseY] = heartPoint(particle.angle);
      const flicker = .48 + .52 * Math.sin(time * particle.speed + particle.phase);
      const wobble = 1 + .012 * Math.sin(time + particle.phase);
      const pointX = baseX * heartSize * pulse * wobble * particle.radius;
      const pointY = baseY * heartSize * 1.02 * pulse * particle.radius;
      const x = centerX + pointX * heartCos - pointY * heartSin;
      const y = heartCenterY + pointX * heartSin + pointY * heartCos;
      ctx.fillStyle = `rgba(${particle.color},${.22 + .75 * flicker})`;
      ctx.beginPath();
      ctx.arc(x, y, particle.size * (.58 + flicker * .44), 0, Math.PI * 2);
      ctx.fill();
    }

    const heartTipY = heartCenterY + heartSize * 1.03;
    for (const particle of stream) {
      const progress = (particle.progress + time * .05) % 1;
      const y = heartTipY + (galaxyY - heartTipY) * progress;
      const sway = Math.sin(time * 1.2 + particle.sway) * (3 + progress * 18);
      const alpha = Math.sin(progress * Math.PI) * .9;
      ctx.fillStyle = `rgba(${particle.color},${alpha})`;
      ctx.beginPath();
      ctx.arc(centerX + sway, y, particle.size * (.55 + progress * .5), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
  }

  let animationFrame = 0;
  function animate(timestamp) {
    animationFrame = 0;
    if (document.hidden) {
      canvas.dataset.animating = "false";
      return;
    }
    if (!lastFrameTime || timestamp - lastFrameTime >= 1000 / 30) {
      const elapsed = lastFrameTime ? Math.min((timestamp - lastFrameTime) / 1000, .1) : 1 / 30;
      time += elapsed * motionScale;
      draw();
      lastFrameTime = timestamp;
    }
    animationFrame = window.requestAnimationFrame(animate);
  }

  canvas.resumeAnimation = () => {
    if (!document.hidden && canvas.dataset.animating !== "true") {
      canvas.dataset.animating = "true";
      animationFrame = window.requestAnimationFrame(animate);
    }
  };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastFrameTime = 0;
      canvas.dataset.animating = "false";
    } else {
      canvas.resumeAnimation();
    }
  });
  window.addEventListener("resize", resize, { passive: true });
  resize();
  canvas.resumeAnimation();
}

startCosmos();
