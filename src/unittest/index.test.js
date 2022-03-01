import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from "../pages/Common/NavBar";
import ErrorBoundary from './errorBoundary'

test('loads and displays greeting', async () => {
    render(<ErrorBoundary><NavBar /></ErrorBoundary>)

})

