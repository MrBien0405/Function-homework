// Bài 1: Viết chương trình cộng hai số (Sử dụng Return)
// let a =parseInt(prompt("nhập số a vào đây"));
// let b = parseInt(prompt("nhập số b vào đây"));
// function tong(){
//     let tong = a + b;
//     alert(`Tổng a + b là ${tong}`)
//     return;
// }tong();
// Bài 2: Tính tổng các số lẻ trong mảng. (Sử dụng Return)
// let array = [1,2,3,4,5,6];
// let tong = 0;
// function tongcacsoletrongmang(){
// for(let i = 0; i<array.length; i++){
//     if (array[i] % 2 !==0) {
//         tong = tong + array[i];       
//     }
// }
// alert(`Tổng các số lẻ trong mảng là ${tong}`)
// return;
// }tongcacsoletrongmang();
// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của
// tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
// let a = parseInt(prompt("nhập tham số thứ nhất vào đây"));
// let b = parseInt(prompt("nhập tham số thứ vào đây"));
// function sosanhgiatri() {
//     if (a > b) {
//         alert(`Tham số ${a} lớn hơn tham số ${b}`);
//     } else {
//         tong = a + b
//         alert(`Tổng a + b là ${a + b}`);
//         return;
//     }
// } sosanhgiatri()

// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để
// bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm. Đoạn mã
// có dạng như sau:
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     alert(`${result}`)
//     return result;
// }
// result = 0;
// alert(`${result}`)
// result = addNumbers();

//Bài 5: Chuyển đổi giữa feet và meters
// Xây dựng hai phương thức sau:
// Chuyển đổi từ feet sang meters:
// let feet = parseInt(prompt("nhập feet vào đây"));
// function giatrimeter() {
//     meter = 0.305 * feet.toFixed(3);
//     alert(`giá trị meter là ${meter}`);
//     return;
// } giatrimeter();

// function footToMeter(foot)
// Chuyển đổi từ meters sang feet:
// function meterToFoot(meter)
// let meter = parseInt(prompt("nhập meter vào đây"));
// function giatriMeter() {
//     feet = 3.279 * meter.toFixed(3);
//     alert(`giá trị feet là ${feet}`);
//     return;
// } giatrifeet();
// Bài 6: Tạo hàm để kiểm tra số nguyên tố
// Xây dựng phương thức:
// function isPrime(number)
// 1. Để kiểm tra xem một số nguyên bất kỳ có phải là số nguyên tố hay
// không.
// 2. Sau khi làm được mục 1, Sử dụng phương thức này để tìm tất cả các số
// nguyên tố nhỏ hơn 100 và in nó ra
// Ví dụ, các số sau đây là số nguyên tố:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83,
// 89, 97
//

function isPrime(number) {
    check = -1;
    number = Number(number)
    if (number === 2) {
        console.log(`${number} là số nguyên tố`)

    } else if (number < 2) {
        console.log(`${number} không là số nguyên tố`)
    } else if (number > 2 && Number.isInteger(number)) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                console.log(`${number} không phải là số nguyên tố`)
                check = i;
                break;
            }
        }
    } else if (check === -1) {
        console.log(`${number} là số nguyên tố`)
    }
} isPrime(2);


