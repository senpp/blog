---
title: 'Xử lý mảng trong Laravel giống như JavaScript'
category: 'laravel'
tags: ['laravel', 'php', 'array', 'cheatsheet']
publish: true
---

Nếu anh em nào đã dùng JavaScript quen thuộc thì chắc hẳn không còn xa lạ với những hàm xử lý mảng built-in xịn xò như `Array.prototype.map()`, `Array.prototype.filter()`, `Array.prototype.reduce()`,... Nhưng có thể một số anh em chưa biết thì trong Laravel cũng có một số các hàm như vậy. Tất nhiên là bản thân PHP cũng có nhưng trong bài này mình muốn tập trung vào sử dụng những hàm của Laravel.

### Array Map

Như các anh em cũng biết, Array Map trong JavaScript sẽ tạo ra một mảng mới có cùng độ dài của mảng ban đầu và các phần tử của mảng đó sẽ được biến đổi theo cách ta xử lý nó. Ví dụ, mình muốn nhân hai lần các phần tử trong mảng thì trong JavaScript thì chúng ta sẽ có cú pháp như sau:

```javascript
const arr = [1, 2, 3]
const doubleArr = arr.map((x) => x * 2) // [2, 4, 6]
```

Còn với Laravel, chúng ta cũng thể làm với cú pháp y chang luôn:

```php
$arr = [1, 2, 3];
$double = collect($arr)
  ->map(function ($x) {
    return $x * 2;
  })->all();
```

### Array Filter

Array Filter trong JavaScript sẽ tạo ra một mảng mới bằng cách sử dụng một hàm lọc nhằm giữ lại các phần tử mà khiến hàm lọc đó trả về `true`. Kết quả trả về có độ dài bằng hoặc ít hơn mảng ban đầu chứa tập con của các phần tử giống như mảng ban đầu.

#### JavaScript

```javascript
const arr = [1, 2, 3]
const lessThan3 = arr.filter((x) => x < 3) // [1, 2]
```

#### Laravel

```php
$arr = [1, 2, 3];
$lessThan3 = collect($arr)
  ->filter(function ($x) {
    return $x < 3;
  })->all();
```

Trên đây là 03 hàm xử lý mảng mà hay được dùng, anh em có thể tham khảo thêm ở đây nha:

- [Collections - Laravel](https://laravel.com/docs/master/collections#available-methods)
