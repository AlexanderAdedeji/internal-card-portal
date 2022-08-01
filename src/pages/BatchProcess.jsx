import { useState, useEffect } from "react";
import Select from "react-select";
import { DatePicker, DateRangePicker } from "@mantine/dates";
import { toast } from "react-toastify";
import {
  batchRegistration,
  fetchCollectionCenters,
  fetchLGAs,
} from "../utils/apis";

const BatchProcess = () => {
  const [batchProcessState, setBatchProcessState] = useState({
    btnLoader: false,
    collectionCenters: [],
    localGovts: [],
  });

  const [batchRegForm, setBatchRegForm] = useState({
    batchStatus: "",
    batchDate: "",
    batchNo: "",
    location: "",
    lga: "",
  });

  const getCollectionCenters = async (LGACode) => {
    try {
      const { data } = await fetchCollectionCenters(LGACode);

      setBatchProcessState((prevState) => ({
        ...prevState,
        collectionCenters: data.map((center) => ({
          label: center.name,
          value: center.code,
        })),
      }));
    } catch (errors) {
      console.log(errors);
    }
  };
  const getLGAs = async () => {
    try {
      const { data } = await fetchLGAs();

      setBatchProcessState((prevState) => ({
        ...prevState,
        localGovts: data.map((center) => ({
          label: center.name,
          value: center.code,
        })),
      }));
    } catch (errors) {
      console.log(errors);
    }
  };
  useEffect(() => {
    if (batchRegForm.lga !== "") {
      getCollectionCenters(batchRegForm.lga);
    }

    return () => {};
  }, [batchRegForm.lga]);
  useEffect(() => {
    getLGAs();

    return () => {};
  }, []);

  const [batchStatuses, setBatchStatuses] = useState([
    { label: "Received", value: "Received" },
    { label: "Delivered", value: "Delivered" },
    { label: "PickedUp", value: "PickedUp" },
    { label: "Produced", value: "Produced" },
  ]);

  console.log(batchRegForm);
  const changeBatchStatus = async (batchStatus) => {
    let dataToSend = {};
    if (batchStatus.batchStatus === "Delivered") {
      dataToSend = {
        batchNo: "",
        batchDate: "",
        batchStatus: "",
        location: "",
        lga: "",
      };
    } else {
      dataToSend = {
        batchNo: "",
        batchDate: "",
        batchStatus: "",
      };
    }

    console.log(dataToSend);

    setBatchProcessState((prevState) => ({
      ...prevState,
      btnLoader: true,
    }));
    try {
      const { data } = await batchRegistration(dataToSend);
      console.log(data);
      setBatchProcessState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
      toast.success("Batch Created Successfully");
    } catch (errors) {
      console.log(errors);
      setBatchProcessState((prevState) => ({
        ...prevState,
        btnLoader: false,
      }));
    }
  };
  return (
    <div id="batch-process">
      <h4>Batch Status Change</h4>
      <form>
        <div class="mb-5">
          <label for="exampleInputEmail1" class="form-label"></label>
          <DatePicker
            placeholder="Pick date"
            label="Batch Date"
            dateParser={(dateString) =>
              console.log(new Date(Date.parse(dateString)))
            }
            required
            onChange={(dateString) => {
              console.log(new Date(Date.parse(dateString)));
            }}
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">
            Batch number
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setBatchRegForm((prevState) => ({
                ...prevState,
                batchNo: e.target.value,
              }));
            }}
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">
            Batch Status
          </label>
          <Select
            options={batchStatuses}
            onChange={(value) => {
              setBatchRegForm((prevState) => ({
                ...prevState,
                batchStatus: value.value,
              }));
            }}
          />
        </div>

        {batchRegForm.batchStatus === "Delivered" && (
          <div className="row">
            <div className="col">
              <div class="mb-5 ">
                <label for="exampleInputPassword1" class="form-label">
                  Local Government
                </label>
                <Select
                  options={batchProcessState.localGovts}
                  onChange={(value) => {
                    setBatchRegForm((prevState) => ({
                      ...prevState,
                      lga: value.value,
                      location:""
                    }));
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-5 ">
                <label for="exampleInputPassword1" className="form-label">
                  Location
                </label>
                <Select
                isDisabled={!batchRegForm.lga}
                  options={batchProcessState.collectionCenters}
                  defaultValue={"batchRegForm?.location?.label"}
                  onChange={(value) => {
                    setBatchRegForm((prevState) => ({
                      ...prevState,
                      location: value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="text-end">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => changeBatchStatus(batchRegForm)}
          >
            {batchProcessState.btnLoader ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BatchProcess;
