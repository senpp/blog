---
title: 'Code sao cho lười nhất có thể'
category: 'coding'
tags: ['coding']
publish: true
---

Trước giờ phương châm sống của mình là **Thích cái đẹp**, nên mình thường google các đoạn mình đã từng code để tìm ra một giải pháp code làm sao cho gọn gàng, đỡ khiến khi lâu ngày nhìn lại quá nhiều chữ và khiến mình bỏ cuộc khi refactor nó. Trong bài mình có mượn một số các nguyên tắc từ các nguyên tắc coding như [KISS](https://en.wikipedia.org/wiki/KISS_principle), [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [12Factor](https://12factor.net/).

Bài viết chỉ trình bày trên quan điểm cá nhân của mình nên nếu mình hiểu vấn đề nào sai thì các bạn contact tới mình để mình sửa nhé. Do mình chỉ thạo 2 ngôn ngữ chính là PHP và JavaScript nên trong bài phần lớn mình sẽ sử dụng 2 ngôn ngữ này nhé.

## Tư duy trong quá trình code

Điều quan trọng nhất với bản thân mình khi code đó là tư duy code sao cho "**sạch sẽ**" nhất có thể. **Sạch sẽ** ở đây có nghĩa là: **dễ bảo trì**, **dễ sử dụng**, **dễ đọc**. Mình luôn có một cái suy nghĩ là "**Đoạn logic/function hay giá trị này mình đã dùng ở đâu chưa nhỉ?**", nếu một cái gì được dùng tới **ít nhất 2 lần**, mình sẽ tuỳ vào loại của nó để đưa nó về dùng chung. Để chi tiết hơn thì trong bài này mình sẽ trình bày chi tiết từng phần.

## Series bài viết theo chủ đề

- [If-else sao cho sành điệu](/coding/if-else-sanh-dieu)
