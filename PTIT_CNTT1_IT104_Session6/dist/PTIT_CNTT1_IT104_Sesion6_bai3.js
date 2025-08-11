"use strict";
/*
    SỰ KHÁC BIỆT GIỮA ABSTRACT METHOD VÀ METHOD THÔNG THƯỜNG

    1. Abstract method:
       - Không có thân hàm (body), chỉ khai báo tên hàm, tham số và kiểu trả về.
       - Chỉ được khai báo bên trong lớp abstract.
       - Mục đích: bắt buộc các lớp con phải override và tự viết logic cụ thể.
       - Không thể gọi trực tiếp từ lớp abstract, chỉ gọi được từ lớp con sau khi implement.

    2. Method thông thường:
       - Có thân hàm (body) với code thực thi.
       - Có thể khai báo trong lớp thường hoặc lớp abstract.
       - Mục đích: chứa logic sẵn, lớp con có thể dùng lại hoặc override.
       - Có thể gọi ngay từ đối tượng hoặc bên trong lớp.

    KHI NÀO SỬ DỤNG:
    - Dùng abstract method khi muốn ép buộc tất cả lớp con phải cài đặt phương thức đó theo ý riêng.
    - Dùng method thường khi muốn cung cấp sẵn một hành vi mặc định hoặc logic chung có thể tái sử dụng.
*/
