/**
 * 模块 和 命名空间
 * - 模块是TS中外部模块的简称 侧重于代码复用
 * - 模块在其自身作用域里执行 而不是全局作用域里
 * - 一个模块里的变量、函数、类等在外部是不可见的 除非把他导入
 * - 如果想要使用一个模块里导入的变量
 */
export let a = 10
export let b = 20
export default 30