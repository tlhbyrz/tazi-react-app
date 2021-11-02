import ModelsList from 'components/ModelsList/ModelsList'
import PageHeader from 'components/PageHeader/PageHeader'
import React from 'react'

const ModelList = () => {
    return (
        <div>
            <PageHeader title="All models" lineWidth={60}/>
            <ModelsList />
        </div>
    )
}

export default ModelList
