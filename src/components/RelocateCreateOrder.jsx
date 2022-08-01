import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchToRelocationRequestsList } from "../utils/apis";

const RelocateCreateOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getRelocateRequestList();
  }, []);

  console.log(location);
  const [relocateOrder, setRelocateOrder] = useState({
    requestList: [],
    requestIds: [],
  });

  const getRelocateRequestList = async () => {
    const dataToSend = {
      fromLGAcode: location.state.from.FromLGACode,
      fromLocationCode: location.state.from.FromLocationCode,
      DestinationLgaCode: location.state.to.DestinationLGACode,
      DestinationLocationCode: location.state.to.DestinationLocationCode,
    };
    console.log(dataToSend);
    try {
      const { data } = await fetchToRelocationRequestsList(dataToSend);
      console.log(data);
      setRelocateOrder((prevState) => ({
        ...prevState,
        requestList: data,
      }));
    } catch (errors) {
      console.log(errors);
    }
  };

  const createOrderRequest = () => {
    Swal.fire({
      icon: "success",
      title: "Create ORder Successful",
      text: "You have Created A Successful Order",

    });
  };

  return (
    <div id="create-order">
      <div className="create-order-header">
        <div className="top">
          <h4>Create Order</h4>
          <div>
            <button className="btn btn-success" onClick={createOrderRequest}>
              Create Order
            </button>
          </div>
        </div>
        <div className="bottom">
          <p>
            From : <span>{location.state.from.locationName}</span>
          </p>
          <p>
            To : <span>{location.state.to.locationName}</span>
          </p>
        </div>
      </div>
      <div>
        <div className="">
          <div
            className=" table table-responsive table-view fixedHeight"
            id="logActivityScrollTarget"
          >
            <table className="table-view">
              <thead>
                <tr>
                  <th>Lasrra ID</th>
                  <th>From LGA</th>
                  <th>From Location</th>
                  <th>Destination LGA</th>
                  <th>Destination Location</th>
                </tr>
              </thead>
              <tbody>
                {relocateOrder.requestList.map((item, idx) => {
                  const { LasrraId } = item;
                  return (
                    <tr key={idx}>
                      <td className="d-flex justify-content">
                        <small>{LasrraId}</small>
                      </td>
                      <td>
                        <small>{location.state.from.LGName}</small>
                      </td>
                      <td>
                        <small>{location.state.from.locationName}</small>
                      </td>

                      <td className="">
                        <small>{location.state.to.LGName}</small>
                      </td>
                      <td className="">
                        <small>{location.state.to.locationName}</small>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelocateCreateOrder;
