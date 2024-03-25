import { Booking } from "./Booking";
import FilterOption from "./FilterOption";

import Listing from "./Listing";

const MainDetail = () => {
  return (
    <>
      <div className="container_detail">
        <Booking />
        <div className="filter">
          <div className="filter-bar">
            <FilterOption />
            <Listing />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDetail;
