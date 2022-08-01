import React, { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchFromRelocationRequests } from "../utils/apis";

const RelocateFrom = () => {
  const navigate = useNavigate();

  const [relocationState, setRelocationState] = useState({
    fromRequests: [],
    to: [],
  });

  const getFromRequest = async () => {
    try {
      const { data } = await fetchFromRelocationRequests();
      console.log(data);
      setRelocationState((prevState) => ({
        ...prevState,
        fromRequests: data,
      }));
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getFromRequest();
  }, []);
  return (
      <div id="relocation-request">
        <h3>Card Relocation Request</h3>
        <h5>Relocate Card From: </h5>
        <div className="relocation-request-body">
          {relocationState.fromRequests.map((singleRequest, idx) => {
            const {
              LGName,
              FromLGACode,
              locationName,
              requests,
              FromLocationCode,
            } = singleRequest;
            return (
              //   <Link to={`/home/relocation-request/${FromLGACode}-${FromLocationCode}`}>
              <div
                className="object"
                key={idx}
                onClick={() => {
                  navigate(
                    `/home/relocation-request/${FromLGACode}-${FromLocationCode}`,
                    { state: { ...singleRequest } }
                  );
                }}
              >
                <p className="lga">{LGName}</p>
                <p className="location">{locationName}</p>
                <p className="request">{requests}</p>
              </div>
              //   </Link>
            );
          })}
        </div>
      </div>

  );
};

export default RelocateFrom;
