<<<<<<< HEAD
/**
 * 继承
 */
class Father {
  static staticFatherName = 'FatherName';
  static staticGetFatherName = function () {
    console.log(Father.staticFatherName);
  }
  constructor(public name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

class Child extends Father {
  static staticChildName = 'ChildName';
  static staticGetChildName = function () {
    console.log(Child.staticChildName);
  }
  constructor(public name, public age) {
    super(name);
    this.age = age;
  }
  getAge() {
    console.log(this.age);
  }
}

let child = new Child('zhangsan', 20);
child.getName();
child.getAge();
Child.staticGetChildName();
Child.staticGetFatherName();
=======
/**
 * 继承
 */
class Father {
  static staticFatherName = 'FatherName';
  static staticGetFatherName = function () {
    console.log(Father.staticFatherName);
  }
  constructor(public name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

class Child extends Father {
  static staticChildName = 'ChildName';
  static staticGetChildName = function () {
    console.log(Child.staticChildName);
  }
  constructor(public name, public age) {
    super(name);
    this.age = age;
  }
  getAge() {
    console.log(this.age);
  }
}

let child = new Child('zhangsan', 20);
child.getName();
child.getAge();
Child.staticGetChildName();
Child.staticGetFatherName();
>>>>>>> 338665cc724177ca023dbcfee2c83d4ac5918384
export { };