import { Fragment } from "react";


const Price = ({price}: {price:'CHEAP'|'REGULAR'|'EXPENSIVE'}) => {

  const renderPrice = () => {
    if(price === 'CHEAP') {
      return (
        <Fragment>
          <span className="font-medium">$$</span>
          <span className="text-gray-400">$$</span>
        </Fragment>
      );
    } else if (price === 'REGULAR') {
      return (
        <Fragment>
          <span className="font-medium">$$$</span>
          <span className="text-gray-400">$</span>
        </Fragment>
      );
    } else {
           return (
             <Fragment>
               <span className="font-medium">$$$$</span>
             </Fragment>
           );
    }
  }

  return <p className="text-reg flex mr-3">{renderPrice()}</p>;
};
export default Price;
