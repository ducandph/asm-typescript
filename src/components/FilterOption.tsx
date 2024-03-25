import React from "react";

const FilterOption = () => {
  return (
    <div className="filter-option">
      <label htmlFor="sort-by">Sắp xếp theo:</label>
      <div className="radio-group ">
        <label className="ant-radio-wrapper">
          <span className="radio-checked">
            <input
              type="radio"
              name="radio-group-name"
              className="ant-radio-input"
              defaultChecked
            />
            <span className="ant-radio-inner" />
          </span>
          <span>
            <p className="color--darkness option-label">Mặc định</p>
          </span>
        </label>
        <label className="ant-radio-wrapper">
          <span className="radio-checked">
            <input
              type="radio"
              name="radio-group-name"
              className="ant-radio-input"
            />
            <span className="ant-radio-inner" />
          </span>
          <span>
            <p className="color--darkness option-label">Giờ đi sớm nhất</p>
          </span>
        </label>
        <label className="ant-radio-wrapper">
          <span className="radio-checked">
            <input
              type="radio"
              name="radio-group-name"
              className="ant-radio-input"
            />
            <span className="ant-radio-inner" />
          </span>
          <span>
            <p className="color--darkness option-label">Giờ đi muộn nhất</p>
          </span>
        </label>
        <label className="ant-radio-wrapper">
          <span className="radio-checked">
            <input
              type="radio"
              name="radio-group-name"
              className="ant-radio-input"
            />
            <span className="ant-radio-inner" />
          </span>
          <span>
            <p className="color--darkness option-label">Đánh giá cao nhất</p>
          </span>
        </label>
        <label className="ant-radio-wrapper">
          <span className="radio-checked">
            <input
              type="radio"
              name="radio-group-name"
              className="ant-radio-input"
            />
            <span className="ant-radio-inner" />
          </span>
          <span>
            <p className="color--darkness option-label">Giá tăng dần</p>
          </span>
        </label>
        <label className="ant-radio-wrapper">
          <span className="radio-checked">
            <input
              type="radio"
              name="radio-group-name"
              className="ant-radio-input"
            />
            <span className="ant-radio-inner" />
          </span>
          <span>
            <p className="color--darkness option-label">Giá giảm dần</p>
          </span>
        </label>
      </div>
    </div>
  );
};

export default FilterOption;
