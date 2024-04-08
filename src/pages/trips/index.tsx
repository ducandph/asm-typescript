import { useEffect, useState } from "react";
import { ITrip, IBusHouse } from "../../interfaces";
import { Link } from "react-router-dom";
import axios from "axios";
import { deleteTrip } from "../../api/trips.api";
import Swal from "sweetalert2";

interface TripProps {
  data: ITrip;
  refetchTrips: () => void;
}

const TripList: React.FC<TripProps> = ({ data, refetchTrips }) => {
  const [trips, setTrips] = useState<ITrip[]>([]);

  useEffect(() => {
    const getTrips = async () => {
      try {
        const response = await axios.get("http://localhost:3000/trips");
        const tripsData: ITrip[] = response.data;

        // Lấy thông tin từ busHouse cho từng chuyến xe
        const tripsWithBusHouse: ITrip[] = await Promise.all(
          tripsData.map(async (trip: ITrip) => {
            const busHouseResponse = await axios.get<IBusHouse>(
              `http://localhost:3000/busHouses/${trip.busHouseId}`
            );
            const busHouseData: IBusHouse = busHouseResponse.data;

            // Mở rộng thông tin từ busHouse vào chuyến xe
            return {
              ...trip,
              busHouse: busHouseData,
            };
          })
        );

        // Cập nhật state với danh sách chuyến xe đã mở rộng thông tin từ busHouse
        setTrips(tripsWithBusHouse);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu chuyến đi:", error);
        // Xử lý lỗi nếu cần
      }
    };

    getTrips();
  }, []); // Gọi hàm getTrips khi component được tạo

  const handleDelete = async (id: string | number) => {
    try {
      const confirmDelete = await Swal.fire({
        title: "Bạn có chắc muốn xóa chuyến đi này?",
        text: "Thao tác này sẽ không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      });

      if (confirmDelete.isConfirmed) {
        await deleteTrip(id); // Gọi API để xóa chuyến đi
        if (refetchTrips && typeof refetchTrips === "function") {
          await refetchTrips(); // Gọi hàm refetchTrips để cập nhật danh sách chuyến đi sau khi xóa
        }
        console.log("Xóa chuyến đi thành công");

        // Hiển thị thông báo sau khi xóa thành công
        await Swal.fire(
          "Đã xóa!",
          "Chuyến đi đã được xóa thành công.",
          "success"
        );
      }
    } catch (error) {
      console.error("Lỗi khi xóa chuyến đi:", error);
      // Hiển thị thông báo lỗi
      await Swal.fire(
        "Lỗi!",
        "Đã xảy ra lỗi khi xóa chuyến đi. Vui lòng thử lại sau.",
        "error"
      );
    }
  };

  return (
    <>
      <div className="mb-4 mt-4 ">
        <h2 className="text-2xl font-bold text-center">DANH SÁCH CHUYẾN XE</h2>
      </div>

      <div className="flex justify-between">
        <button
          className=" hover:bg-green-700 text-white font-bold py-2 px-4 rounded-3xl text-lg"
          style={{ width: "20%", background: "#007FFF" }}
        >
          <Link to="/admin/trips/add" className="text-white">
            Thêm mới chuyến xe
          </Link>
        </button>
        <select name="" id="" className="w-56  border px-3 py-2 rounded-xl">
          <option>3 ngày tiếp theo</option>
          <option value={1}>1 tuần tiếp theo</option>
          <option value={2}>1 tháng tiếp theo</option>
        </select>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg mt-5">
        <h2 className="text-xl font-bold mb-4">Danh sách chuyến xe</h2>
        {trips.map((trip) => (
          <Trip key={trip.id} data={trip} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

interface TripComponentProps {
  data: ITrip;
  handleDelete: (id: string | number) => void;
}

const Trip: React.FC<TripComponentProps> = ({ data, handleDelete }) => {
  const { id, seats, busHouse, startTime, station, fromStation, toStation } =
    data;

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-7">
      <div className="flex justify-between mb-2">
        <h3 className="text-2xl font-bold">Mã chuyến: {id}</h3>
        <span className="text-sm font-medium bg-blue-500 text-white px-2 py-1 rounded">
          Số ghế: {seats}
        </span>
      </div>
      <div className="flex mt-4">
        <p className="text-xl mb-1 font-semibold">Nhà xe: {busHouse?.name}</p>
        <p className="text-sm mb-1 ml-8 font-bold ">
          SĐT nhà xe: {busHouse?.phone}
        </p>
      </div>
      <div className="flex">
        <p className="text-base mb-2 mt-3 ">Khởi hành: {startTime}</p>
        <p className="text-lg mb-2 ml-20">Bến xe: {station}</p>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-base font-medium ">Điểm đi: {fromStation}</span>
        <span className="text-base font-medium">Điểm đến: {toStation}</span>
      </div>
      <div className="flex justify-start mt-4">
        <Link to={`/admin/trips/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Sửa
          </button>
        </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleDelete(id)}
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TripList;