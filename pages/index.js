import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

// IMPORTING CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        console.log("Fetched NFTs:", items);
        setNfts(items?.reverse());
        setNftsCopy(items);
      });
    }
  }, [currentAccount]);

  const onFilterSelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredNFTs = nfts.filter((el) => {
    return selectedCategory === "Tất cả" || selectedCategory === "all" || el.category === selectedCategory;
  });

  const categories = ["Tất cả", ...new Set(nfts.map((item) => item.category))];

  const creators = getTopCreators(nfts);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      {/* <Service /> */}
      {/* <BigNFTSilder /> */}
      {/* <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      /> */}
      {/* <AudioLive />
      {creators.length == 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )} */}

      {/* <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      /> */}
      <Filter categories={categories} onFilterSelect={onFilterSelect} />
      {nfts?.length == 0 ? <Loader /> : <NFTCard NFTData={filteredNFTs} />}

      {/* <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      /> */}
      {/* <Category /> */}
      {/* <Subscribe /> */}
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
