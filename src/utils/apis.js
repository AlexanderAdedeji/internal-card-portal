import axios from "axios";

export const batchRegistration = async (data) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/batch/batch_register`,
    data
  );
};

export const fetchCollectionCenters = async (localGovt) => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/locations/get_collection_centers?local_govt=${localGovt}`
  );
};
export const fetchLGAs = async () => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/locations/get_LGAs`
  );
};

export const fetchFromRelocationRequests = async () => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/relocation-request/get_relocation_requests`
  );
};
export const fetchToRelocationRequests = async (data) => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/relocation-request/get_relocation_to_requests?lga=${data.lgaCode}&location=${data.locationCode}`
  );
};
export const fetchToRelocationRequestsList = async (data) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/relocation-request/get_relocation_requests_list`,
    
    data
  );
};

