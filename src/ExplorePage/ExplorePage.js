import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import CollectionsCard from "../../Components/CollectionsCard/CollectionsCard";
function ExplorePage(props) {
  const tab_list_object = [
    {
      id: 1,
      name: "Top",
      link: "top",
      isActive: true,
    },
    {
      id: 2,
      name: "Collectibles",
      link: "collectibles",
      isActive: false,
    },
    {
      id: 3,
      name: "Brands",
      link: "brands",
      isActive: false,
    },
    {
      id: 4,
      name: "Persons",
      link: "persons",
      isActive: false,
    },
    {
      id: 5,
      name: "Options",
      link: "options",
      isActive: false,
    },
    {
      id: 6,
      name: "Bonds",
      link: "bonds",
      isActive: false,
    },
  ];
  const location = useLocation()

  const [tabName, setTabName] = React.useState(location.search);

  const handleTabActive = (url) => {
    //console.log(window.location.search)
    setTabName(url);
  };

  const explore_collection_object = {
    top_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 2,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 3,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 4,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 5,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 6,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 7,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 8,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 9,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 10,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 11,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
      {
        id: 12,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/yaku.png"),
        cardName: "YAKU X",
        isCardNameVerified: false,
        cardNameBy: "9292Zv",
        cardNameByLink: "#",
        description: "Explore the YAKU X collection",
      },
    ],

    collectibles_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 2,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
    ],

    brands_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 2,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
      {
        id: 3,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
    ],

    persons_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 2,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
      {
        id: 3,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
      {
        id: 4,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
      {
        id: 5,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchainsdfsdfdsf.",
      },
    ],

    options_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
    ],

    bonds_collection: [
      {
        id: 1,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 2,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 3,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 4,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
      {
        id: 5,
        link: "#",
        largeImg: require("../../Static/img/card_img/collection.png"),
        smImg: require("../../Static/img/card_img/tamaki_apes.png"),
        cardName: "Tamaki Apes",
        isCardNameVerified: false,
        cardNameBy: "TamakiApesOfficial",
        cardNameByLink: "#",
        description:
          "A collection of 2222 Apes vibing on the Solana Blockchain.",
      },
    ],
  };

  useEffect(() => {
    setTabName(location.search)
  }, [location])

  return (
    <div id="ExplorePage">
      <section className="mt-5">
        <div className="container-fluid">
          <div className="col-12">
            <h2 className="section_title text-center text-white">
              Explore Collections
            </h2>
          </div>
        </div>
        <div className="custom_tab my-5 pt-4 border_bottom table-responsive-md">
          <ul className="list-unstyled tab_list d-flex align-items-center justify-content-md-center  ">
            {tab_list_object.map((v) => {
              return (
                <li className="tab_list_item" key={v.id}>
                  <Link
                    to={`/explore?tab=${v.link}`}
                    onClick={() => handleTabActive(`?tab=${v.link}`)}
                    className={`tab_list_action p-3 text-white-50 h5 ${tabName === `?tab=${v.link}` ? "tab_active" : ""
                      }`}
                  >
                    {v.name}
                  </Link>
                </li>
              );

            })}
          </ul>
        </div>

        <div className="container-fluid">
          <div className="row gy-4">
            {/* .................for Top collections ......................*/}
            {tabName === "?tab=top" &&
              explore_collection_object.top_collection.map((v) => {
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
                    <div className="col_wrapper h-100">
                      <Link to={v.link} className="h-100">
                        <CollectionsCard
                          largeImg={v.largeImg}
                          smImg={v.smImg}
                          cardName={v.cardName}
                          isCardNameVerified={v.isCardNameVerified}
                          cardNameBy={v.cardNameBy}
                          cardNameByLink={v.cardNameByLink}
                          description={v.description}
                        ></CollectionsCard>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {/* .................for Top collections ......................End*/}

            {/* .................for Collectibles collections ......................*/}
            {tabName === "?tab=collectibles" &&
              explore_collection_object.collectibles_collection.map((v) => {
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
                    <div className="col_wrapper h-100">
                      <Link to={v.link} className="h-100">
                        <CollectionsCard
                          largeImg={v.largeImg}
                          smImg={v.smImg}
                          cardName={v.cardName}
                          isCardNameVerified={v.isCardNameVerified}
                          cardNameBy={v.cardNameBy}
                          cardNameByLink={v.cardNameByLink}
                          description={v.description}
                        ></CollectionsCard>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {/* .................for Collectibles collections ......................End*/}

            {/* .................for brands collections ......................*/}
            {tabName === "?tab=brands" &&
              explore_collection_object.brands_collection.map((v) => {
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
                    <div className="col_wrapper h-100">
                      <Link to={v.link} className="h-100">
                        <CollectionsCard
                          largeImg={v.largeImg}
                          smImg={v.smImg}
                          cardName={v.cardName}
                          isCardNameVerified={v.isCardNameVerified}
                          cardNameBy={v.cardNameBy}
                          cardNameByLink={v.cardNameByLink}
                          description={v.description}
                        ></CollectionsCard>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {/* .................for brands collections ......................End*/}

            {/* .................for persons collections ......................*/}
            {tabName === "?tab=persons" &&
              explore_collection_object.persons_collection.map((v) => {
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
                    <div className="col_wrapper h-100">
                      <Link to={v.link} className="h-100">
                        <CollectionsCard
                          largeImg={v.largeImg}
                          smImg={v.smImg}
                          cardName={v.cardName}
                          isCardNameVerified={v.isCardNameVerified}
                          cardNameBy={v.cardNameBy}
                          cardNameByLink={v.cardNameByLink}
                          description={v.description}
                        ></CollectionsCard>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {/* .................for persons collections ......................End*/}

            {/* .................for options collections ......................*/}
            {tabName === "?tab=options" &&
              explore_collection_object.options_collection.map((v) => {
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
                    <div className="col_wrapper h-100">
                      <Link to={v.link} className="h-100">
                        <CollectionsCard
                          largeImg={v.largeImg}
                          smImg={v.smImg}
                          cardName={v.cardName}
                          isCardNameVerified={v.isCardNameVerified}
                          cardNameBy={v.cardNameBy}
                          cardNameByLink={v.cardNameByLink}
                          description={v.description}
                        ></CollectionsCard>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {/* .................for options collections ......................End*/}

            {/* .................for bonds collections ......................*/}
            {tabName === "?tab=bonds" &&
              explore_collection_object.bonds_collection.map((v) => {
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 h-auto" key={v.id}>
                    <div className="col_wrapper h-100">
                      <Link to={v.link} className="h-100">
                        <CollectionsCard
                          largeImg={v.largeImg}
                          smImg={v.smImg}
                          cardName={v.cardName}
                          isCardNameVerified={v.isCardNameVerified}
                          cardNameBy={v.cardNameBy}
                          cardNameByLink={v.cardNameByLink}
                          description={v.description}
                        ></CollectionsCard>
                      </Link>
                    </div>
                  </div>
                );
              })}
            {/* .................for bonds collections ......................End*/}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExplorePage;
