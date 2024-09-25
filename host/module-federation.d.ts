declare module 'remote/Add' {
    const Add: (x: number, y: number) => number;
    export default Add;
  }
  
  declare module 'remote/MultiplyByTwo' {
    const MultiplyByTwo: (num: number) => number;
    export default MultiplyByTwo;
  }
  declare module 'remote/pages/product' {
    const product: React.ComponentType;
  export default product;
  }