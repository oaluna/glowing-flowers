import { useEffect } 
from "react";

import { Routes, Route } 
from "react-router-dom";

import { connect } 
from "react-redux";

import { motion } 
from "framer-motion";

import CollectionsOverviewContainer 
from "../../components/collections-overview/collections-overview.container";

import CollectionPageContainer 
from "../collection/collection.container";

import { fetchCollectionsStart } 
from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <motion.div
         initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
      >
        <Routes>
          <Route
            index
            element={<CollectionsOverviewContainer />}
          />
          <Route
            path=":collectionId"
            element={<CollectionPageContainer />}
          />
        </Routes>
      </motion.div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
