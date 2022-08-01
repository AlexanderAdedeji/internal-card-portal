import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchToRelocationRequests } from "../utils/apis";

const RelocateTo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const [relocateToState, setRelocateTo] = useState({
    reocateTo: [],
    requestIds:[]
  });

  const getToRelocationRequest = async () => {
    const dataToSend = {
      lgaCode: location.state.FromLGACode,
      locationCode: location.state.FromLocationCode,
    };

    try {
      const { data } = await fetchToRelocationRequests(dataToSend);
      console.log(data)
      setRelocateTo((prevState)=>({
        ...prevState,
        reocateTo:data
          }))
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getToRelocationRequest()
  }, []);
  return (
    <div>
      {" "}
      <div id="relocation-request">
        <h3>Card Relocation Request</h3>
        <h5>Relocate Card From: {location.state.locationName}</h5>
        <h5>Relocate Card To: </h5>

        <div className="relocation-request-body">
          {relocateToState.reocateTo.map((singleRequest, idx) => {
            const {
              LGName,
              FromLGACode,
              locationName,
              requests,
              FromLocationCode,
            } = singleRequest;
            return (
              <div
                className="object"
                key={idx}
                onClick={() => {
                  navigate(
                    `/home/relocation-request/create-relocate-order`,
                    { state: { from:location.state, to:singleRequest } }
                  );
                }}
              >
                <p className="lga">{LGName}</p>
                <p className="location">{locationName}</p>
                <p className="request">{requests}</p>
              </div>
    
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelocateTo;
