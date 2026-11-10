# Birthday Surprise ♡

หน้าเซอร์ไพรส์วันเกิดภาษาไทยแบบเล่าเป็นฉาก: เปิดการ์ดแก้วและเป่าเทียน → เลือกคำอวยพรจากการ์ด 5 ใบ → ดูรูปความทรงจำและข้อความลับ → ปิดท้ายด้วยวงแหวนกาแล็กซี หัวใจละอองดาว และหัวใจแสงลอย ดีไซน์ใช้แสงนุ่มและสีแชมเปญให้เข้ากับธีมจักรวาล พร้อมเพลงเปียโนที่เลือกเปิดเอง ทำด้วย HTML, CSS, Canvas และ JavaScript ล้วน ไม่มี dependency หรือขั้นตอน build

## ปรับข้อความและใส่รูปของเรา

เปิด `script.js` แล้วแก้ `birthdaySettings` ด้านบนสุด ชื่อ วันที่ คำอวยพร รูป และข้อความสั้นที่จะเผยเมื่อแตะรูป แก้ได้ในบล็อกนี้:

```js
const birthdaySettings = {
  partnerName: "ชื่อแฟน",
  senderName: "ชื่อเรา",
  memoryDate: "วันที่ไปเที่ยวด้วยกัน",
  cakeWish: "คำอวยพรหลังเป่าเทียน",
  memorySecret: "ข้อความลับหลังเปิดรูปครบ 4 ใบ",
  giftMessages: ["คำอวยพร 1", "คำอวยพร 2", "คำอวยพร 3", "คำอวยพร 4", "คำอวยพร 5"],
  letter: "เขียนจดหมายถึงแฟนตรงนี้",
  memoryPhotos: ["images/us-1.jpg", "images/us-2.jpg", "images/us-3.jpg", "images/us-4.jpg"],
  memoryCaptions: ["ข้อความบนรูป 1", "ข้อความบนรูป 2", "ข้อความบนรูป 3", "ข้อความบนรูป 4"],
};
```

รูปทั้ง 4 รูปที่ส่งมาใส่ไว้ในโฟลเดอร์ `images` แล้ว หากต้องการเปลี่ยนรูป ให้วางไฟล์ใหม่ไว้ในโฟลเดอร์นี้แล้วแก้ path ใน `memoryPhotos` รูปจะปรากฏในกรอบความทรงจำ แตะรูปเพื่อค่อย ๆ เปิดอ่านข้อความสั้นจาก `memoryCaptions` และแตะซ้ำเพื่อซ่อน

## เพลงประกอบ

เว็บมีปุ่มเปิดเพลงอยู่มุมขวาบน และจะเริ่มเล่นเมื่อกดปุ่มเท่านั้น ไฟล์ `audio/mystical-piano.mp3` เป็นเพลง “Mystical Piano” โดย Indieteur เผยแพร่แบบ CC0; หน้าแหล่งที่มาระบุว่าให้เครดิตได้แต่ไม่บังคับ: [OpenGameArt — Mystical Piano](https://opengameart.org/content/mystical-piano). เก็บเครดิตนี้ไว้หากเผยแพร่เว็บต่อ

## เปิดดูบนเครื่อง

ดับเบิลคลิก `index.html` เพื่อเปิดในเบราว์เซอร์ หรือเปิดเซิร์ฟเวอร์ในโฟลเดอร์นี้ด้วย Python:

```bash
python -m http.server 8000
```

แล้วเข้า `http://localhost:8000`

## เผยแพร่ด้วย GitHub Pages

1. สร้าง repository ว่างบน GitHub แล้วอัปโหลดไฟล์และโฟลเดอร์ทั้งหมดนี้ไว้ที่ root ของ repository
2. เปิด **Settings → Pages** แล้วเลือก **GitHub Actions** ในส่วน **Build and deployment**
3. push ไปที่ branch `main` หรือกด **Run workflow** ในแท็บ **Actions**
4. รอ workflow ชื่อ **Deploy to GitHub Pages** ทำงานเสร็จ แล้วเปิด URL ที่แสดงในหน้า workflow

ถ้าใช้ Git จากเครื่อง ให้รันคำสั่งในโฟลเดอร์นี้ (แทน URL ด้วย repository ของคุณ):

```bash
git init -b main
git add .
git commit -m "Add birthday surprise page"
git remote add origin https://github.com/YOUR_NAME/birthday-surprise.git
git push -u origin main
```

เว็บนี้ไม่ต้องใช้ backend และไม่มีการเก็บข้อมูลผู้เข้าชม
