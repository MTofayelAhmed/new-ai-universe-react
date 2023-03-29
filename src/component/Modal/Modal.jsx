import React from "react";

const Modal = (props) => {
  const { image_link, integrations, tool_name, description, features } =
    props.modalData;
  // console.log(features );
  console.log;
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body">
              <h2 className="card-title">
                {description ? description : "not Found"}
              </h2>
              <div className="flex justify-between ">
                <div>
                  <h2 className="font-bold text-xl">Features</h2>
                  {Object.values(features || {}).map((value) => (
                    <p>{value.feature_name}</p>
                  ))}
                </div>
                <div>
                  <h2>Integration</h2>
                  {integrations && integrations.map((integration) => (
                    <p>{integration ? integration : "data not Found"}</p>
                  ))}
                </div>
              </div>
            </div>

            <figure className="h-64 w-full">
              <img src={image_link ? image_link[0] : null} />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
