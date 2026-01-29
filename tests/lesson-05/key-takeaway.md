1. Function Expression : định nghĩa function gắn cho nó 1 biến
- Khai báo hàm function name () {

}
- Biểu thức của hàm
- gọi hàm trả kết quả
vid :
1.function name () {
    return "hello"
}
console.log(name());
2. 
//khai báo hàm 
function sum (price,quantity, discount) {
    //biểu thức hàm
    let total = price * quantity - discount;
    return total;
}
console.log(sum(50, 3, 20));
2. Lambda function : hay dùng, sử dụng =>
 ví dụ :
    const sum = (price,quantity,discount) => {
    let total = price * quantity- discount;
    return total;
}
console.log (sum (100,2,10));
3. anonymous function
Hàm không có tên, được sử dụng khi function chỉ dùng 1 lần hoặc làm callback
- Gán cho biến 

