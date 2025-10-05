# Week 5 workshop

## 5.1 Counter Component
1. สร้าง state ของ component ด้วย function useState
2. สร้าง tag html สำหรับ แสดงข้อมูล ตัวเลข counter และ button สำหรับ trigger event เพิ่ม, ลด, และ reset
3. ใน onClick ของ button ทั้งหมดจะเรียกใช้ setter จาก state ของ ตัวแปร count ตามเงื่อนไข เช่น เพิ่ม จะเรียกใช้ด้วย updater ที่เรียกใช้ผ่าน setter ของ count เพื่อ reference ถึง state ปัจจุบันก่อนที่ setter จะทำงาน เช่น case เพิ่ม จะใช้ previousState + 1 และ case ลด จะใช้ previousState - 1 แต่สำหรับ case reset สามารถ fix value เป็น 0 ได้

## 5.2 Form Component
1. สร้าง interface FormData สำหรับกำหนด type ของ object ที่ใช้งานร่วมกับ form 
2. สร้าง state ของ component ด้วย function useState และกำหนด type = interface FormData
3. สร้าง tag html สำหรับแสดงและเปลี่ยนแปลงข้อมูล form
4. กำหนด value ของ tag input ใน form ให้ใช้งาน state ของ component
5. กำหนดให้ button submit เรียกใช้ function alert ผ่าน callback ของ event onClick เพื่อแสดงข้อมูลที่กรอก
6. กำหนดให้ button submit clear ข้อมูล form ผ่าน callback ของ event onClick 