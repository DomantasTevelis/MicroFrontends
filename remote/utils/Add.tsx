import { numberType } from "@/interface/interface";

interface moreNumber extends numberType {
  y:number
}

const Add = ({ x, y }:moreNumber) => {
  console.log('Add component received props:', { x, y });
  return x + y;
};

export default Add;
