import React from 'react';
import {connect} from 'react-redux';
import {Route, Routes, useParams} from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection, ItemPage}) => {
    const {path} = useParams()
    const {title, items} = collection;

    return (<div className={"flex flex-col"}>
            <h2 className="text-[38px] mt-0 mx-auto mb-[30px]">{title}</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] mb-[30px]"}>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>))}
            </div>
            <Routes>
                <Route
                    path={`${path}/:collectionId/:${items.item.id}`} element={<CollectionPage/>}/>
            </Routes>
        </div>);
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
