import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkListFilters from './LinkListFilters';

export default () => {
    return (
        <div>
            <PrivateHeader title="Your Links"/>
            <div className="page-content">
                <LinkListFilters/>
                <AddLink/>
                <LinksList/>
            </div>
        </div>
    )
};