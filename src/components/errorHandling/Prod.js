import React from 'react'
import ErrorBoundry from '../ErrorBoundry'
import { Landing } from './Landing'

export const Prod = () => {
    return (
        <div>

            <ErrorBoundry>
                <Landing productName="car" />
            </ErrorBoundry>
            <ErrorBoundry>
                <Landing productName="bike" />
            </ErrorBoundry>
            <ErrorBoundry>
                <Landing productName="gun" />
            </ErrorBoundry>


        </div>
    )
}
