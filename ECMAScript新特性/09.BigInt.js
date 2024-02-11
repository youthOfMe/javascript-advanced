// 前端Number极值
Number.MAX_SAFE_INTEGER // 最大安全数值
Number.MIN_VALUE // 最小数值

/*
    BigInt

    不是 Hadoop、spark 大数据处理
    前端的数据位数较大，并且不使用科学计数法

    大家如果处理过大数据的场景，想必知道 JavaScript Number 类型的限制——2^53 - 1。

    BigInt 是在 ES10 中引入的一种新类型，它可以用来表示任意大的整数，
    不受 JavaScript 中 Number 类型的 2^53 - 1 限制。

    在 JavaScript 中，Number 类型使用 IEEE 754 标准表示，且占据 64 位内存。
    其中 1 位是符号位，11 位是指数位，剩余 52 位是有效数字位。
    因此，在 Number 类型中最大的安全整数为 2^53 - 1，超过这个值就会丢失精度。
    而 BigInt 类型则可以表示任意大的精度整数，其内存使用量要大于 Number 类型，但是比字符串表示更节省空间。

    BigInt 类型的使用方法和 Number 类型相似，主要区别在于在数字后加 "n" 标志表示 Bigint 类型。
    BigInt 类型可以进行加、减、乘、除等基本数学运算，
    并且可以使用 BigInt() 构造方法将字符串或 Number 类型数据转换为 BigInt 类型。
*/

// TODO BigInt示例

// TODO BigInt兼容性