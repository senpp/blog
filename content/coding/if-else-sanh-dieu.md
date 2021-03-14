---
title: 'If-else sao cho sành điệu'
category: 'coding'
tags: ['coding']
---

Bài viết này nằm trong series về [Code sao cho lười nhất](/coding/code-sao-cho-luoi-nhat).

### Trường hợp 1

Trước đây mình từng viết như thế này cho một câu điều kiện if-else trong một `function` mà cần return một giá trị nào đó.

```php
// Bad
function checkSomething(string $a) {
  if ($a === "foo") {
    return "foofoo";
  } elseif ($a === "bar") {
    return "foobar";
  } else {
    return "";
  }
}
```

Mình mới thấy "**Sao mình phải viết if else if else tới vài lần nhỉ?**" và mình quyết định thử viết lại như sau:

```php
// Good!
function checkSomething(string $a) {
  if ($a === "foo") {
    return "foofoo";
  }

  if ($a === "bar") {
    return "foobar";
  }

  return "";
}
```

Tới đây, mình chạy với tất cả trường hợp `$a` với tất cả giá trị và đương nhiên là giá trị nó không khác gì phía trên, bởi giá trị sau khi được kiểm tra qua từng câu điều kiện `if` đều đã được `return` ngay lập tức, nên thay vì phải viết `ifelse` như trên thì mình thấy có thể viết như bên dưới, vừa dễ nhìn lại dễ đọc.

### Trường hợp 2

Đôi khi mình viết ra một `function` kiểu dạng như thế này:

```php
// Bad
function isGood(int $b) {
  if ($b === "foo") {
    return true;
  } else {
    return false;
  }
}
```

Hm, giống trường hợp số 1 nhỉ. Nhưng mình lại thấy là, "**Function này chỉ trả ra 2 giá trị boolean là true/false, vậy nếu viết như này thì sao nhỉ?**"

```php
// Good!
function isGood(int $b) {
  return ($b === "foo");
}
```

Thử đi thử lại, vẫn đúng. Vậy là với những functions mà chỉ trả ra kiểu giá trị `boolean` mình quyết định dùng cách này.

À nhưng mà nếu mà mình vẫn muốn dùng cho những functions trả ra giá trị khác `boolean` hoặc nhiều giá trị trả về thì sao?

```php
// Good!
function isVeryGood(int $c) {
  return ($c === "bar") ? "Bar" : "Foo";
}


// Huh ?!? Wtf? 😕
function isVeryGud(int $d) {
  return ($d === "foo") ? ($d === "bar") ? true : false : false;
}
```
