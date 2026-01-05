**Tổng hợp kiến thức lesson 2**
**1. Version control system**
Has 3 type : Local , Centralize, Distributed
**2. Git**
2.1  state
Working Directory ( Các file mới hoặc có thay đổi) -> Staging Area ( đưa vào vùng chuẩn bị commit ) -> Repository ( commit versions)
2.2 Git cấu hình
git config --global user.name ""
git config --global user.email ""
có thể đổi tên riêng từng repo
2.3 : một số lệnh
git status
git log
2.4 : git -commit convention
<type><short_des>
2.5 : git work follow
init -> add -> commit -> push
**3. Js**
**3.1 : Biến**
Khai báo biến 
<từ khóa><tên biến> = <giá trị>
Ví dụ : var bien ="test' //khai bao
console.log (bien); // in ra biến
note : var/let khác nhau khi khai báo
_var : cho phép khai báo lại còn let thì không_
**3.2 : hằng**
const <tên hằng> =<giá trị> : hằng là giá trị không thể thay đổi được
const myName  = "thaoTest"
console.log(myName) 
**3.2 : Data type**
Sử dụng hàm để biết kiểu dữ liệu
**typeof <variable>** 
chạy lệnh ở terminal để xác định kiểu dữ liệu của biến
**3.3 : toán tử **
So sánh : luôn sử dụng so sánh 3 bằng ( ===) : so sánh giá trị và kiểu dữ liệu
So sánh != 
ví dụ : 5 !== 5       // false
**3.4 : toán tử 1 ngôi**
-prefix : tăng trước trả về sau
-postfix : trả về trước, tăng sau
Ví dụ 
1. a++
let a = 6;
let b = a++ + 2;
console.log(a);
console.log(b);
1️⃣ let a = 6

➡️ a = 6

2️⃣ let b = a++ + 2

a++ là tăng SAU
Lấy giá trị hiện tại của a → 6
Tính b = 6 + 2 → b = 8
Sau đó mới tăng a lên 1 → a = 7
=> a =7, b =8
2. ++a
let a = 6;
let b = a++ + 2;
console.log(a);
console.log(b);
a =7
b =9
=> tóm lại 
**a++ dùng trước – tăng sau
++a tăng trước – dùng sau**
**3.5 : điều kiện**
if (điều_kiện) {
  // code sẽ chạy nếu điều_kiện === true
}
Ví dụ : 
let hour = 8;

if (hour <= 11) {
  console.log("Good morning");
}
3.6 : Vòng lặp 
- For (i)
for (<điều kiên>; điều kiện lặp ;<cập nhật>)
dùng để tính tổng 




