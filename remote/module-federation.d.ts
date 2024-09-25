declare module "host/nav" {
  const Nav: React.ComponentType;
  export default Nav;
  }
declare module "host/footer" {
  const footer: React.ComponentType;
  export default footer;
  }
  
  declare module 'remote/MultiplyByTwo' {
    const MultiplyByTwo: (num: number) => number;
    export default MultiplyByTwo;
  }
  declare module 'remote/Add' {
    const Add: (num: number) => number;
    export default Add;
  }
  declare module 'remote/pages/product' {
    const product;
    export default product;
  }