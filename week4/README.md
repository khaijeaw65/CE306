# Week 4 workshop

## 4.1 แสดงบัตรข้อมูลผู้ใช้
สร้าง component UserProfileCard ที่ ไฟล์ UserProfileCard.tsx และ กำหนด class user-profile-card ในไฟล์ UserProfileCard.module.css

ใน component UserProfileCard ประกอบไปด้วย component UserInfo และ UserSkillList โดยมีรายละเอียดดังนี้

UserInfo ใช้สำหรับแสดงข้อมูล ชื่อ, รูป profile, email, และ สถานะ online/offline ของ user

UserSkillList ใช้สำหรับแสดงข้อมูล skill ทั้งหมดของ user

โดยที่ component UserProfileCard จะรองรับการส่ง parameter สองอย่าง
1. user (ข้อมูล user)
2. onViewDetails (callback สำหรับให้ปุ่ม view details เรียกใช้ผ่าน event onClick)

สุดท้ายเรียกใช้ component UserProfileCard ที่ไฟล์ App.tsx เพื่อแสดงข้อมูล user ด้วยข้อมูล mockup ที่สร้างอยู่ในรูปแบบของ Array