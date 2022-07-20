import React from "react";

function CreateNewItem(props) {

    const [packName, setPackName] = React.useState('Pack name');

    const [blockChainSelect, setBlockChainSelect] = React.useState('Ethereum')
    return (
        <div id="CreateNewItem" className="my-5">
            <section>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section_title mb-3 mb-md-5">Create New Item</h2>
                            <form action="" method="post">

                                <div className="form-group mt-3 mb-5">
                                    <p className="text-success small">
                                        The pack rules apply to the token you add to the pack.
                                    </p>

                                    <strong className="d-block mb-2">
                                        Image, Video, Audio, or 3D Model
                                    </strong>

                                    <p>
                                        <small>
                                            File types supported: JPG, PNG, GIF, SVG, Mp4, WEBM, MP3, WAV, OGG, GLB,
                                            GLTF, Max size: 100MB
                                        </small>
                                        <br />
                                    </p>

                                    <input
                                        type="file"
                                        name=""
                                        id="img_logo_circle"
                                        className="form_img_upload d-none"
                                    />
                                    <label htmlFor="img_logo_circle">
                                        <div className="img_upload_control_radius">
                                            <svg
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                                                focusable="false"
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                data-testid="ImageIcon"
                                                fill="var(--text-white)"
                                                style={{ height: "60%" }}
                                            >
                                                <path
                                                    d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9  
                    2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                                                />
                                            </svg>
                                        </div>
                                    </label>
                                </div>

                                <div className="form-group mt-3 mb-5 text-success">
                                    <strong className="d-block mb-2">Preview Images</strong>
                                    <p>
                                        <small>
                                            Because you've included multimedia, you'll need to provide
                                            an image (PNG, JPG, or GIF) for the card display of your item.
                                        </small>
                                    </p>
                                    <input
                                        type="file"
                                        name=""
                                        id="img_logo_circle"
                                        className="form_img_upload d-none"
                                    />
                                    <label htmlFor="img_logo_circle">
                                        <div className="img_upload_control_radius" style={{ width: '160px', height: '160px' }}>
                                            <svg
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                                                focusable="false"
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                data-testid="ImageIcon"
                                                fill="var(--text-white)"
                                                style={{ height: "60%" }}
                                            >
                                                <path
                                                    d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9  
                    2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                                                />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-group mt-3 text-success mb-4">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form_wrapper mb-4 mb-sm-5">
                                                <strong className="d-block mb-2">Name</strong>
                                                <p className="mb-0">
                                                    <small>
                                                        Enter token name.
                                                    </small>
                                                </p>
                                                <p>
                                                    <small>
                                                        Note the use of numbering in the pack.
                                                    </small>
                                                </p>
                                                <input
                                                    type="text"
                                                    className="form-control form_custom_control px-3 py-2"
                                                    placeholder="Item name"
                                                />
                                            </div>

                                            <div className="form_wrapper">
                                                <strong className="d-block mb-2">Tokens price</strong>
                                                <p className="mb-0">
                                                    <small>
                                                        For Options, token price is determined by the pack rules.
                                                    </small>
                                                </p>
                                                <p>
                                                    <small>In others you can enter a price.</small>
                                                </p>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <div className="form_input_wrapper">
                                                        <input
                                                            type="number"
                                                            style={{ width: "100px" }}
                                                            className="form-control form_custom_control px-3 py-2"
                                                            placeholder="0.01"
                                                        />
                                                    </div>
                                                    <div className="dropdown">
                                                        <button
                                                            type="button"
                                                            data-mdb-toggle="dropdown"
                                                            data-mdb-ripple-duration="0"
                                                            style={{ fontSize: "16px" }}
                                                            className="btn form_custom_control d-flex justify-content-between align-items-center  form-control ms-3"
                                                        >
                                                            ETH
                                                            <i className="fas fa-angle-down    "></i>
                                                        </button>
                                                        <ul className="dropdown-menu form_custom_control w-100 py-0">
                                                            <li className=" mb-2">
                                                                <button
                                                                    type="button"
                                                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                    data-mdb-ripple-duration="0"
                                                                    data-mdb-toggle="dropdown"
                                                                >
                                                                    <span className="flex-grow-1">Ethereum</span>
                                                                </button>
                                                            </li>
                                                            <li className=" mb-2">
                                                                <button
                                                                    type="button"
                                                                    className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                    data-mdb-ripple-duration="0"
                                                                    data-mdb-toggle="dropdown"
                                                                >
                                                                    <span className="flex-grow-1">Ethereum</span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <strong className="d-block mb-2">Numbering</strong>
                                                    <p>
                                                        <small>
                                                            It available for the pack you add the token uses numbering. The numbers in the
                                                            pack cannot be repeated.
                                                        </small>
                                                    </p>
                                                    <input
                                                        type="number"
                                                        className="form-control form_custom_control px-3 py-2"
                                                        defaultValue={1}
                                                    />
                                                </div>

                                                <div className="form_wrapper mt-4 mt-md-5">
                                                    <strong className="d-block mb-2">Duration</strong>
                                                    <p className="mb-0">
                                                        <small>
                                                            The period during which the sale of the token takes
                                                            place.</small>
                                                    </p>
                                                    <p>
                                                        <small>
                                                            At the end of the period, the sale is automatically
                                                            extended for the some period.
                                                        </small>
                                                    </p>
                                                    <div className="d-flex flex-wrap align-items-center">
                                                        <div className="form_input_wrapper">
                                                            <input
                                                                type="number"
                                                                style={{ width: "100px" }}
                                                                className="form-control form_custom_control px-3 py-2"
                                                                defaultValue={3}
                                                            />
                                                        </div>
                                                        <div className="dropdown">
                                                            <button
                                                                style={{ fontSize: "16px" }}
                                                                type="button"
                                                                data-mdb-toggle="dropdown"
                                                                data-mdb-ripple-duration="0"
                                                                className="btn form_custom_control d-flex  justify-content-between align-items-center  form-control ms-3"
                                                            >
                                                                Days
                                                            </button>
                                                            <ul className="dropdown-menu form_custom_control w-100 py-0">
                                                                <li className=" mb-2">
                                                                    <button
                                                                        type="button"
                                                                        className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                        data-mdb-ripple-duration="0"
                                                                        data-mdb-toggle="dropdown"
                                                                    >
                                                                        <span className="flex-grow-1">Days</span>
                                                                    </button>
                                                                </li>
                                                                <li className=" mb-2">
                                                                    <button
                                                                        type="button"
                                                                        className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                        data-mdb-ripple-duration="0"
                                                                        data-mdb-toggle="dropdown"
                                                                    >
                                                                        <span className="flex-grow-1">Weeks</span>
                                                                    </button>
                                                                </li>
                                                                <li className=" mb-2">
                                                                    <button
                                                                        type="button"
                                                                        className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                        data-mdb-ripple-duration="0"
                                                                        data-mdb-toggle="dropdown"
                                                                    >
                                                                        <span className="flex-grow-1">Months</span>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3 mb-4">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <strong className="d-block  mb-2">External Link</strong>
                                            <p className="small">
                                                OpenSea will include a link to this URL on this item's
                                                detail page, so that users can click to learn more about
                                                it. You are welcome to link to your own webpage with
                                                more details.
                                            </p>
                                            <input
                                                type="text"
                                                className="form-control form_custom_control px-3 py-2"
                                                placeholder="https://yoursite.io/item/123"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3 mb-4">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <strong className="d-block  mb-2">Description</strong>
                                            <p className="small">
                                                The description will be included on the item's detail
                                                page underneath its image.
                                            </p>
                                            <textarea placeholder="Provide a detailed description of your item." rows="4"
                                                className="form-control form_custom_control px-3 py-2"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3 mb-4">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <strong className="d-block text-success mb-2">Pack</strong>
                                            <p className="small text-success">
                                                This is the Pack where your item will appear.
                                            </p>
                                            {/* control */}
                                            <div className="dropdown">
                                                <button
                                                    className="btn form_custom_control w-100 py-2 p-3 text-start d-flex align-items-center "
                                                    data-mdb-ripple-duration="0"
                                                    data-mdb-toggle="dropdown"
                                                >
                                                    <span className="flex-grow-1 d-flex align-items-center">
                                                        <span className="circle_box me-2"></span>

                                                        {packName}</span>
                                                    <i className="fas fa-angle-down    "></i>
                                                </button>
                                                <div className="dropdown-menu form_custom_control w-100 py-0">
                                                    <ul className="list-unstyled bg_transparent w-100 py-0">
                                                        <li className=" mb-2">
                                                            <button
                                                                onClick={() => setPackName("Pack name")}
                                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                data-mdb-ripple-duration="0"
                                                                data-mdb-toggle="dropdown"
                                                            >
                                                                <span className="circle_box me-2"></span>

                                                                <span className="flex-grow-1">Pack name</span>
                                                            </button>
                                                        </li>
                                                        <li className=" mb-2">
                                                            <button
                                                                onClick={() => setPackName("Pack Name 2")}
                                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                data-mdb-ripple-duration="0"
                                                                data-mdb-toggle="dropdown"
                                                            >
                                                                <span className="circle_box me-2"></span>

                                                                <span className="flex-grow-1">Pack Name 2</span>
                                                            </button>
                                                        </li>

                                                        <li className="mb-2">
                                                            <button
                                                                onClick={() => setPackName("Pack Name 3")}
                                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                data-mdb-ripple-duration="0"
                                                                data-mdb-toggle="dropdown"
                                                            >
                                                                <span className="circle_box me-2"></span>

                                                                <span className="flex-grow-1">Pack Name 3</span>
                                                            </button>
                                                        </li>


                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3 mb-4">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <ul className="mb-2 list-unstyled ps-3 ps-md-5">
                                                <li className="mb-4">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="box">
                                                            <strong>Properties</strong>
                                                            <p className="d-block">
                                                                Textual traits that show up as rectangles
                                                            </p>
                                                        </div>
                                                        <div className="box">
                                                            <button type="button" className="btn_plus text-white p-2 px-3 rounded-3">
                                                                <i className="fas fa-plus    "></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="box">
                                                            <strong>Levels</strong>
                                                            <p className="d-block">
                                                                Numerical traits that show as a progress bar
                                                            </p>
                                                        </div>
                                                        <div className="box">
                                                            <button type="button" className="btn_plus text-white p-2 px-3 rounded-3">
                                                                <i className="fas fa-plus    "></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="box">
                                                            <strong>Stats</strong>
                                                            <p className="d-block">
                                                                Numerical traits that just show as numbers
                                                            </p>
                                                        </div>
                                                        <div className="box">
                                                            <button type="button" className="btn_plus text-white p-2 px-3 rounded-3">
                                                                <i className="fas fa-plus    "></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="box">
                                                            <strong>Unlockable Content</strong>
                                                            <p className="d-block">
                                                                Include unlockable content that can only be revealed by the owner of the item.
                                                            </p>
                                                        </div>
                                                        <div className="box">
                                                            <div className="form-check form-switch">
                                                                <input
                                                                    className="form-check-input bg-white"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="flexSwitchCheckDefault"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexSwitchCheckDefault"
                                                                ></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mb-4">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="box">
                                                            <strong>Explicit & Sensitive Content</strong>
                                                            <p className="d-block">
                                                                Set this item as explicit and sensitive content
                                                            </p>
                                                        </div>
                                                        <div className="box">
                                                            <div className="form-check form-switch">
                                                                <input
                                                                    className="form-check-input bg-white"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="flexSwitchCheckDefault"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="flexSwitchCheckDefault"
                                                                ></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group mt-3 mb-4">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <strong className="d-block  mb-2">Supply</strong>
                                            <p className="small">
                                                The number of items that can be minted. No gas cost to you!
                                            </p>
                                            <input
                                                type="number"
                                                defaultChecked={1}
                                                className="form-control form_custom_control px-3 py-2"
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group mt-3 mb-4">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <strong className="d-block  mb-2">BlockChain</strong>
                                            {/* control */}
                                            <div className="dropdown">
                                                <button
                                                    className="btn form_custom_control w-100 py-2 text-start d-flex align-items-center "
                                                    data-mdb-ripple-duration="0"
                                                    data-mdb-toggle="dropdown"
                                                >
                                                    <span className="flex-grow-1 d-flex align-items-center">
                                                        <span className="circle_box me-2"></span>

                                                        {blockChainSelect}</span>
                                                    <i className="fas fa-angle-down    "></i>
                                                </button>
                                                <div className="dropdown-menu form_custom_control w-100 py-0">
                                                    <ul className="list-unstyled bg_transparent w-100 py-0">
                                                        <li className=" mb-2">
                                                            <button
                                                                onClick={() => setBlockChainSelect("Ethereum")}
                                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                data-mdb-ripple-duration="0"
                                                                data-mdb-toggle="dropdown"
                                                            >
                                                                <span className="circle_box me-2"></span>

                                                                <span className="flex-grow-1">Ethereum</span>
                                                            </button>
                                                        </li>
                                                        <li className=" mb-2">
                                                            <button
                                                                onClick={() => setBlockChainSelect("Ethereum 2")}
                                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                data-mdb-ripple-duration="0"
                                                                data-mdb-toggle="dropdown"
                                                            >
                                                                <span className="circle_box me-2"></span>

                                                                <span className="flex-grow-1">Ethereum 2</span>
                                                            </button>
                                                        </li>

                                                        <li className="mb-2">
                                                            <button
                                                                onClick={() => setBlockChainSelect("Ethereum 3")}
                                                                className="btn form_custom_control w-100  text-start d-flex align-items-center"
                                                                data-mdb-ripple-duration="0"
                                                                data-mdb-toggle="dropdown"
                                                            >
                                                                <span className="circle_box me-2"></span>
                                                                <span className="flex-grow-1">Ethereum 3</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mt-3 mb-4">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <strong className="d-block  mb-2">Freeze metadata</strong>
                                            <p className="small">
                                                Freeze your metadata will allow you to permanently lock and store all of this item's
                                                content in decentralized file storage.
                                            </p>
                                            <input
                                                type="number"
                                                placeholder="You can freeze data immediately after uploading tokens to a smart contract."
                                                className="form-control form_custom_control px-3 py-2 text-success" disabled
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group mt-3 mt-md-5">
                                    <button className="btn btn-light form_custom_control btn-lg">
                                        Upload
                                    </button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CreateNewItem;
